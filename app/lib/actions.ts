import axios                            from "axios";

import {
    POSTS,
    LOGIN,
    VERIFY_JWT,
    REFRESH_TOKEN,
    USERS,
    GET_CURRENT_USER,
    LOGOUT,
    POSTS_COMMENTS,
    POSTS_LIKES,
    POSTS_LIKES_BY_USER,
}                                       from "./api-consts";

type LoginPayload = {
    email: string;
    password: string;
};

type SignupPayload = {
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    confirmPassword: string;
};

const axiosApi = axios.create({
    baseURL: process.env.API_ENDPOINT,
    withCredentials: true,
});


axiosApi.interceptors.request.use((req):any => {
    if (typeof window !== 'undefined' && localStorage.getItem('token')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
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
export const createComment = (postPayload) => {
    return post(POSTS_COMMENTS, postPayload);
}

export const createLike = (postPayload) => {
    return post(POSTS_LIKES, postPayload);
}
export const deleteLike = (postId: string) => {
    return del(`${POSTS_LIKES}/?post_id=${postId}`);
}
export const postLikedByUser = (postId: string) => {
    return get(`${POSTS_LIKES_BY_USER}/?post_id=${postId}`);
}

export const getSinglePostsComments = (post_id:string) => {
    return get(`${POSTS_COMMENTS}/?post_id=${post_id}`);
}

export const sendLogin = (obj: LoginPayload) => {
    return post(LOGIN, obj);
}

export const sendLogout = () => {
    return get(LOGOUT);
}

export const createUser = (obj: SignupPayload) => {
    return post(USERS, obj);
}

export const getCurrentUser = () => {
    return get(GET_CURRENT_USER);
}
export const verifyToken = () => {
    return get(VERIFY_JWT);
}
export const refreshToken = () => {
    return get(REFRESH_TOKEN);
}