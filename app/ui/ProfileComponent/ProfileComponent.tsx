'use client'

import React, {Suspense, useEffect, useState} from 'react';

import AuthComponent from "../AuthComponent/AuthComponent";
import {useAuthenticated} from "../../lib/hooks/useAutheticated";
import Loader from "../Loader/Loader";

function ProfileComponent({children}) {
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
        return <Loader/>
    }

    return (
        <>
            {isAuth ? children : <AuthComponent/>}
        </>
    );
}

export default ProfileComponent;