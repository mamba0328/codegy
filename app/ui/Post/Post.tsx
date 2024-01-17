import parse from 'html-react-parser';
import DOMPurify from "isomorphic-dompurify";
import { unstable_noStore as noStore }  from 'next/cache';

import { Post, } from "../../lib/definitions";
import { getSinglePost  } from "../../lib/actions";

import PostFeedback from "../PostFeedback/PostFeedback";
async function Post({postId, ...props}) {
    noStore();

    const postResponse = await getSinglePost(postId);
    const post = postResponse.data as Post;


    const { body, tags, title, author_id, created_at } = post;
    const authorName = post?.author_id?.username;
    const sanitizedHTML = DOMPurify.sanitize(body); //to prevent XSS attacks

    return (
        <section className={'flex justify-between flex-wrap gap-2 relative w-[762px] mx-auto'}>
            <article className={'post min-desktop:max-w-[700px] w-full'}>
                <div className={'bg-secondary-bg py-2 mb-2'}>
                    <div className={'relative mb-5'}>
                        <h2 after-dynamic-value={`by ${authorName}`} className={`font-bold text-2xl text-center text-primary-color mb-1 underline after:content-[attr(after-dynamic-value)] after:text-secondary-color after:text-sm after:inline-block after:no-underline after:absolute after:-bottom-5 after:italic after:right-1/2  after:translate-x-1/2 after:transform`}>
                            {title}
                        </h2>
                    </div>
                    <div className={'flex w-full gap-2 flex-wrap text-center pt-2'}>
                        <span className={'font-bold text-sm text-center w-full text-primary-color'}>{`[${tags.join(', ')}]`}</span>
                    </div>
                </div>
                <div className={'bg-secondary-bg p-5  text-white'}>
                    {parse(sanitizedHTML)}
                </div>
            </article>
            <PostFeedback postId={postId} />
        </section>
    );
}

export default Post;