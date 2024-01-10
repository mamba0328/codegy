import React from 'react';

function PostSkeleton(props) {
    return (
        <section className={'flex justify-between flex-wrap gap-3 relative w-[762px] mx-auto skeleton-animation'}>
            <article className={'post w-full'}>
                <div className={'bg-secondary-bg py-2 mb-2 min-h-[96px] w-full'}>
                </div>
                <div className={'bg-secondary-bg p-5  min-h-[600px] text-white'}>
                </div>
            </article>
        </section>
    );
}

export default PostSkeleton;