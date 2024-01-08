import {Suspense} from "react";

import PostList from "./ui/PostsList/PostList";
import PostsListSkeleton from "./ui/skeletons/PostsListSkeleton";
export default function Page() {
    return(
        <section>
            <Suspense fallback={<PostsListSkeleton/>}>
                <PostList/>
            </Suspense>
        </section>
    )
}