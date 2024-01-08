export type Post = {
    _id: string,
    body: string,
    title:string,
    status:number,
    author_id: Author,
    created_at: string,
    tags: string[],
}

export type Comment = {
    _id: string,
    body: string,
    post_id: string,
    user_id: User,
    created_at: string,
}

export type Author = {
    username: string,
    _id: string,
}

export type User = {
    username: string,
    _id: string,
}