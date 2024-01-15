'use client'

import React, { useState } from 'react';

import {createComment, createLike } from "../../lib/actions";

type Props = {
    postId: string
}
function PostFeedback({postId, ...props}) {
    const [likeIsActive, setLikeIsActive] = useState(false);
    const [comment, setComment] = useState('');

    const handleLikeClick = async () => {
        try{
            const response = await createLike({post_id: postId});
            setLikeIsActive(!likeIsActive);
        } catch (error){
            console.log(error)
        }
    }

    const handleCommentChange = (event) => setComment(event.target.value);

    const handleSendComment = async () => {
        try{
            const response = await createComment({post_id: postId, body: comment})
            setComment('')
        } catch (error){
            console.log(error)
        }
    }

    return (
        <div className={'flex justify-center bg-secondary-bg p-5 w-full mb-3 gap-5'}>
            <div className={`heart cursor-pointer mt-2.5 ${ likeIsActive ? 'active' : '' }`} onClick={handleLikeClick}></div>
            <form className={'flex flex-grow flex-col items-end gap-2'}>
                <textarea placeholder={'Write your comment'} className={'w-full border border-2 border-secondary-color p-1 rounded bg-primary-bg text-white'} onChange={handleCommentChange} value={comment}/>
                <button type={"button"} className={'border border-2 border-secondary-color text-secondary-color font-bold p-1 rounded hover:border-primary-color hover:text-primary-color'} onClick={handleSendComment}>
                    Send Comment
                </button>
            </form>
        </div>
    );
}

export default PostFeedback;