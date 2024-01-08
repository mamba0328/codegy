import React from 'react';

import PostsListsItem from "./PostsListsItem";
import { getAllPosts } from "../../lib/actions";

export async function PostsLists(){
    const response = await getAllPosts();
    const posts = (response as any).data;
    return (
        <ul className={'flex flex-col items-center gap-5'}>
            {posts.map(post => {
                return <PostsListsItem post={post}/>
            })}
        </ul>
    );
}

export default PostsLists;