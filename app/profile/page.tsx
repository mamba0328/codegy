import React, {useEffect, useState} from "react";

import { useAuthenticated } from "../lib/hooks/useAutheticated";

import AuthComponent from "../ui/AuthComponent/AuthComponent";
import ProfileComponent from "../ui/ProfileComponent/ProfileComponent";

function Page(props) {
    //TODO: use redux and check on initiation if auth;
    const isAuth = useAuthenticated();

    if(isAuth === undefined){
        return <>Loading...</>
    }

    return (
        <>
            {isAuth ? <ProfileComponent/> : <AuthComponent/>}
        </>
    );
}

export default Page;