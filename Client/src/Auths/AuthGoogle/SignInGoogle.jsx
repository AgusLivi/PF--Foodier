import React, { useEffect, useState } from "react";
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth';
import Home from '../../Views/Home/Home.jsx'
import style from './SignInGoogle.module.css'

const SignInGoogle = () => {

    const [value, setValue] = useState('');

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            console.log('data: ',data);
            localStorage.setItem("email", data.user.email)
        })
    };

    useEffect(() => {
        setValue(localStorage.getItem("email"))
        console.log('value: ', value);
    })

    return (
        <div class={style.socialsignin}>
        <button class={style.inputgoogle}>
             <p>Sign In with Google</p>
        </button>
        </div>
    );
}

export default SignInGoogle;