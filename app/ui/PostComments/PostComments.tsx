import React from 'react';

import { Comment } from "../../lib/definitions";
import { getFormattedDate } from "../../lib/utils";

type Props = {
    comments: Comment[],
    style: string,
}
function PostComments({comments, style, ...props}: Props) {
    return (
        <ul className={`${style} min-desktop:max-w-[700px] w-full flex flex-col gap-1`}>
            {comments.map(((item:Comment) => {
                return <li className={'flex bg-secondary-bg p-5 gap-5'} key={item._id}>
                    <img src={'/imgs/svg/person.svg'} className={'text-secondary-color fill-secondary-color min-w-10 max-w-10'} alt={'person img'}/>
                    <div>
                        <div className={'flex gap-2 items-baseline'}>
                            <h4 className={'font-bold text-lg text-primary-color'}>{item.user_id.username}</h4>
                            <span className={'font-bold text-sm text-secondary-color'}>{getFormattedDate(item.created_at)}</span>
                        </div>
                        <p className={'text-white'}>{item.body}</p>
                    </div>
                </li>
            }))}

        </ul>
    );
}

export default PostComments;