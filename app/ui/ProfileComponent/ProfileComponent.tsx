'use client'
import React, { useState, useEffect } from 'react';

import { getCurrentUser } from "../../lib/actions";
import { User } from "../../lib/definitions";

function ProfileComponent(props) {
    const [currentUser, setCurrentUser] = useState({} as User)
    useEffect(() => {
        (async () => {
            const user = await getCurrentUser();
            setCurrentUser(user.data)
        })()
    }, [])
    return (
        <div>{currentUser.username}</div>
    );
}

export default ProfileComponent;