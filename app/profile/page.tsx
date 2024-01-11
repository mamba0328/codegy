'use client'

import { useAuthenticated } from "../lib/hooks/useAutheticated";
import AuthComponent from "../ui/AuthComponent/AuthComponent";
function Page(props) {
    const userIsAuthenticated = useAuthenticated();

    return (
        <>
            {userIsAuthenticated ? <div>Profile</div> : <AuthComponent/>}
        </>
    );
}

export default Page;