import React, { SyntheticEvent, useState } from 'react';
import { sendLogin } from "../../lib/actions";
function SignInForm(props) {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const setToken = (token:string) => {
        localStorage.setItem('token', token)
    }

    const onInputChange = (event: SyntheticEvent) => {
        const {name, value} = event.target as HTMLButtonElement;

        return name === 'email' ? setUsername(value) : setPassword(value);
    }
    const onSubmit = async (event: SyntheticEvent) => {
        try{
            event.preventDefault();

            const payload = {
                password, email,
            }

            const response = await sendLogin(payload);
            const {token} = response.data;
            setToken(token);

            window.location.reload();
        } catch (error){
            console.log(error)
        }
    }

    return (
            <form className="flex flex-col gap-4 flex-grow mx-auto bg-secondary-bg px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
                <h4 className={'text-primary-color font-bold text-xl'}>Sign-in</h4>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-secondary-color" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="example@codegy.com" name={'email'} value={email} onChange={onInputChange}/>
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-secondary-color" htmlFor="password ">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" name={'password'} value={password} onChange={onInputChange}/>
                </div>
                <div className="flex items-center justify-between mt-3">
                    <button className="bg-primary-color hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                        Sign-in
                    </button>
                </div>
            </form>
    );
}

export default SignInForm;
