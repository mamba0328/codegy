import React from 'react';

import {chivo, poppins} from "../fonts";

import { Post } from "../../lib/definitions";
import { removeHTMLTags, getFormattedDate } from "../../lib/utils";
import Link from "next/link";


type Props = {
    post: Post,
    props?: any,
}
function PostsListsItem({post, ...props}:Props) {
    const {_id, title, author_id, body, created_at, tags} = post;
    const htmlTextLimited = body.slice(0, 300);
    const textFromHtml = removeHTMLTags(htmlTextLimited);
    const formattedDate = getFormattedDate(created_at);
    return (
        <li className={` bg-secondary-bg text-secondary-color max-w-[800px] w-full p-5 cursor-pointer`} key={`${title}_${created_at}`}>
            <Link href={`/post/${_id}`}>
                <h4 className={`${chivo.className} text-primary-color font-bold text-xl leading-tight`}>{title}</h4>
                <div className={'flex justify-between mb-3  flex-wrap'}>
                    <span className={`${poppins.className} text-sm`}>{author_id.username}</span>
                    <span className={`${poppins.className} text-sm text-primary-color`}>{formattedDate}</span>
                </div>
                <p className={`${poppins.className} mb-3 text-white`}>{textFromHtml}</p>
                <ul className={'flex text-primary-color gap-3 flex-wrap'}>
                    {tags.map((tag, index) => {
                        return (<li key={`${tag}_${index}`} className={'py-1 px-2 border border-primary-color rounded-xl min-w-[50px] text-center'} >{tag}</li>)
                    })}
                </ul>
            </Link>
        </li>
    );
}

export default PostsListsItem;