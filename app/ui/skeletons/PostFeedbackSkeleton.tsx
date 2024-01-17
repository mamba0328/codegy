import React from 'react';
import CommentSkeleton from "./CommentSkeleton";
const PostFeedbackSkeleton = () => {
    return (
        <div className={'w-full'}>
            <div className={'flex justify-center bg-secondary-bg p-5 w-full mb-3 gap-5 min-h-[104px] skeleton-animation'}>

            </div>
            <div className={'flex gap-1 flex-col'}>
                <CommentSkeleton/>
                <CommentSkeleton/>
                <CommentSkeleton/>
                <CommentSkeleton/>
                <CommentSkeleton/>
            </div>
        </div>
    );
};

export default PostFeedbackSkeleton;