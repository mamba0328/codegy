import React from 'react';
import PostsListItemSkeleton from "./PostsListItemSkeleton";
function PostsListSkeleton() {
    return (
        <div className={'flex flex-col items-center gap-5'}>
            <PostsListItemSkeleton/>
            <PostsListItemSkeleton/>
            <PostsListItemSkeleton/>
            <PostsListItemSkeleton/>
            <PostsListItemSkeleton/>
        </div>
    );
}

export default PostsListSkeleton;