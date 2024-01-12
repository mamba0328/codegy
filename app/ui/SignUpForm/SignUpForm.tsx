import React, { SyntheticEvent, useReducer } from 'react';
import { createUser } from "../../lib/actions";

function reducer(state, event){
    const {name, value} = event.target as HTMLButtonElement;
    return {...state, [name]:value};
}
function SignInForm(props) {
    const [formData, dispatch] = useReducer(reducer, {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        })
    const {firstname, lastname, username, email, password, confirmPassword} = formData;
    const onInputChange = (event) => dispatch(event);
    const setToken = (token:string) => {
        localStorage.setItem('token', token)
    }

    const onSubmit = async (event: SyntheticEvent) => {
        try{
            event.preventDefault();

            const response = await createUser(formData);
            const {token} = response.data;
            setToken(token);

            window.location.reload();
        } catch (error){
            console.log(error)
        }
    }

    return (
        <form className="flex flex-col gap-4 flex-grow mx-auto bg-secondary-bg px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
            <h4 className={'text-primary-color font-bold text-xl'}>Sign-up</h4>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 text-secondary-color" htmlFor="firstname">
                    Firstname
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text" placeholder="Jessy" name={'firstname'} value={firstname} onChange={onInputChange}/>
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 text-secondary-color" htmlFor="lastname">
                    Lastname
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text" placeholder="Pinkman" name={'lastname'} value={lastname} onChange={onInputChange}/>
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 text-secondary-color" htmlFor="username">
                    Username
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" name={'username'} value={username} onChange={onInputChange}/>
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 text-secondary-color" htmlFor="username">
                    Email
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="example@codegy.com" name={'email'} value={email} onChange={onInputChange}/>
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 text-secondary-color" htmlFor="password ">
                    Password
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" name={'password'} value={password} onChange={onInputChange}/>
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2 text-secondary-color" htmlFor="password ">
                    Confirm Password
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirmPassword" type="password" placeholder="********" name={'confirmPassword'} value={confirmPassword} onChange={onInputChange}/>
            </div>
            <div className="flex items-center justify-between mt-3">
                <button className="bg-primary-color hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                    Sign-up
                </button>
            </div>
        </form>
    );
}

export default SignInForm;
