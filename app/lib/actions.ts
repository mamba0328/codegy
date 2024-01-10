import axios                            from "axios";

import {
    POSTS,
    LOGIN,
    VERIFY_JWT,
    REFRESH_TOKEN,
    POSTS_COMMENTS
}                                       from "./api-consts";

type LoginPayload = {
    username: string;
    password: string;
    is_author: boolean;
};

const axiosApi = axios.create({
    baseURL: process.env.API_ENDPOINT,
});


axiosApi.interceptors.request.use((req):any => {
    if (typeof window !== 'undefined' && localStorage.getItem('token')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
    return req;
})

const { get, post, put, delete: del, } = axiosApi;
export const getAllPosts = () => {
    return get(POSTS);
}

export const getSinglePost = (id:string) => {
    return get(`${POSTS}/${id}`);
}

export const getAllComments = () => {
    return get(POSTS_COMMENTS);
}

export const getSinglePostsComments = (post_id:string) => {
    return get(`${POSTS_COMMENTS}/?post_id=${post_id}`);
}

export const sendLogin = (obj: LoginPayload) => {
    return post(LOGIN, obj);
}
export const verifyToken = () => {
    return get(VERIFY_JWT);
}
export const refreshToken = () => {
    return get(REFRESH_TOKEN);
}