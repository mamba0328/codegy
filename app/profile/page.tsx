'use client'

import React, {useState, useEffect} from "react";

import { useAuthenticated } from "../lib/hooks/useAutheticated";

import AuthComponent from "../ui/AuthComponent/AuthComponent";
import ProfileComponent from "../ui/ProfileComponent/ProfileComponent";

function Page(props) {
    const [loaded, setLoaded] = useState(false)
    const [isAuth, setIsAuth] = useState(false);

    async function checkIsAuth(){
        const userIsAuth = await useAuthenticated();
        setIsAuth(userIsAuth)
        setLoaded(true)
    }

    useEffect(()=> {
        checkIsAuth();
    }, [])

    if(!loaded){
        return <p>Loading...</p>
    }

    return (
        <>
            {isAuth ? <ProfileComponent/> : <AuthComponent/>}
        </>
    );
}

export default Page;