import React from 'react';

import { getCurrentUser } from "../../lib/actions";
async function ProfileComponent(props) {
    const currentUser = await getCurrentUser();
    console.log(currentUser)
    return (
        <div></div>
    );
}

export default ProfileComponent;