'use client'

import React, { useState, useEffect } from 'react';

import { useAuthenticated } from "../../lib/hooks/useAutheticated";
import {createComment, createLike, deleteLike, getSinglePostsComments, postLikedByUser} from "../../lib/actions";
import PostComments from "../PostComments/PostComments";
import PostFeedbackSkeleton from "../skeletons/PostFeedbackSkeleton";
import {Comment} from "../../lib/definitions";
import Link from "next/link";

type Props = {
    postId: string
}
function PostFeedback({postId, ...props}) {
    const [loaded, setLoaded] = useState(false)
    const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);
    const [likeIsActive, setLikeIsActive] = useState(false);
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([] as Comment[]);

    useEffect(() => {
        checkIsAuth();
        checkSetLike();
        getSetComments();
        setLoaded(true);
    }, [postId])

    async function checkIsAuth(){
        const isAuth = await useAuthenticated();
        setUserIsAuthenticated(isAuth)
    }
    const checkSetLike = async () => {
        try {
            const postIsLiked = await postLikedByUser(postId);
            setLikeIsActive(postIsLiked.data)
        } catch (error){
            console.log(error)
        }
    }

    const getSetComments = async () => {
        try {
            const postComments = await getSinglePostsComments(postId)
            setComments(postComments.data);
        } catch (error){
            console.log(error);
        }
    }
    const handleLikeClick = async () => {
        try{
            const response = likeIsActive ? await deleteLike(postId) : await createLike({post_id: postId});
            response && setLikeIsActive(!likeIsActive);
        } catch (error){
            console.log(error)
        }
    }

    const handleCommentChange = (event) => setComment(event.target.value);

    const handleSendComment = async () => {
        try{
            const response = await createComment({post_id: postId, body: comment})
            setComments([response.data, ...comments]);
        } catch (error){
            console.log(error)
        }
    }

    if(!loaded){
        return <PostFeedbackSkeleton/>
    }

    return (
        <>
            <div className={'flex justify-center bg-secondary-bg p-5 w-full mb-3 gap-5'}>
                {userIsAuthenticated ?
                    <>
                        <div className={`heart cursor-pointer mt-2.5 ${ likeIsActive ? 'active' : '' }`} onClick={handleLikeClick}></div>
                        <form className={'flex flex-grow flex-col items-end gap-2'}>
                            <textarea placeholder={'Write your comment'} className={'w-full border border-2 border-secondary-color p-1 rounded bg-primary-bg text-white'} onChange={handleCommentChange} value={comment}/>
                            <button type={"button"} className={'border border-2 border-secondary-color text-secondary-color font-bold p-1 rounded hover:border-primary-color hover:text-primary-color'} onClick={handleSendComment}>
                                Send Comment
                            </button>
                        </form>
                    </>
                    :
                    <Link href={'/profile'} className={'text-primary-color underline'}>{'To leave like and comments, you need to sign-in first -->'}</Link>
                }
            </div>
            <PostComments style={''} comments={comments}/>
        </>
    );
}

export default PostFeedback;