import {Suspense} from "react";

import PostSkeleton from "../../ui/skeletons/PostSkeleton";
import Post from '../../ui/Post/Post';
export default function Page({ params }: { params: { id: string } }) {
    return (
        <Suspense fallback={<PostSkeleton/>}>
            <Post postId={params.id}/>
        </Suspense>
    )
}

