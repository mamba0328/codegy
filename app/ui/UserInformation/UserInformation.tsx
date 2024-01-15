'use client'

import React, {useEffect, useState} from 'react';

import { getCurrentUser, sendLogout } from "../../lib/actions";
import { User } from "../../lib/definitions";

function UserInformation(props) {
    const [user, setUser] = useState({} as User);
    const { username, last_name, first_name, email,} = user;

    const getSetUser = async () => {
        const response =  await getCurrentUser();
        setUser(response.data);
    }

    useEffect(() => {
        getSetUser();
    }, [])

    const handleLogout = async () => {
        try {
            localStorage.removeItem('token');
            await sendLogout();
            window.location.reload();
        } catch (error){
            console.log(error);
        }
    }

    return (
        <div className={'flex items-center justify-between gap-5 bg-secondary-bg p-5 max-w-[400px] text-secondary-color mx-auto'}>
            <div className={'flex items-center gap-5'}>
                <div>
                    <img src={'/imgs/svg/person.svg'} className={'text-secondary-color fill-secondary-color min-w-10'} alt={'person img'}/>
                </div>
                <div>
                    <p className={'text-primary-color'}>{email}</p>
                    <h6 className={'font-bold text-xl'}>
                        {`${first_name} ${last_name}`}
                        <span className={'text-primary-color text-sm ml-2'}>{'@' + username}</span>
                    </h6>
                </div>
            </div>
            <div className={'cursor-pointer'} onClick={() => handleLogout()}>
                <img src={'/imgs/svg/logout.svg'} className={'text-secondary-color fill-secondary-color min-w-10 max-w-10'} alt={'logout'}/>
            </div>
        </div>
    );
}

export default UserInformation;