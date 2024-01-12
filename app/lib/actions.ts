import axios                            from "axios";

import {
    POSTS,
    LOGIN,
    VERIFY_JWT,
    REFRESH_TOKEN,
    USERS,
    GET_CURRENT_USER,
    POSTS_COMMENTS
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

export const getSinglePostsComments = (post_id:string) => {
    return get(`${POSTS_COMMENTS}/?post_id=${post_id}`);
}

export const sendLogin = (obj: LoginPayload) => {
    return post(LOGIN, obj);
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