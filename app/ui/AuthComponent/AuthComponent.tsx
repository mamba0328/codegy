import React from 'react';

import SignInForm from "../SignInForm/SignInForm";
import SignUpForm from "../SignUpForm/SignUpForm";

function AuthComponent(props) {
    return (
        <section className={'flex flex-wrap items-start gap-2 max-w-[1040px] mx-auto'}>
            <SignInForm/>
            <SignUpForm/>
        </section>
    );
}

export default AuthComponent;