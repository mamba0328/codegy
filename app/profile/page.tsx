import React, {Suspense} from "react";

import ProfileComponent from "../ui/ProfileComponent/ProfileComponent";
import UserInformation from "../ui/UserInformation/UserInformation";

function Page(props) {

    return (
        <>
            <ProfileComponent>
                <Suspense fallback={<p>Loading shit...</p>}>
                    <UserInformation/>
                </Suspense>
            </ProfileComponent>
        </>
    );
}

export default Page;