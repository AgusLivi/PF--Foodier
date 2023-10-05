import React, { useEffect, useState } from "react";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from "./configFace";
//import Home from '../../Views/Home/Home.jsx'
import style from './SignInFacebook.module.css'

const FacebookSignIn = () => {

    const [value, setValue] = useState('');

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            console.log('data:',data);
            localStorage.setItem("email", data.user.email)
        })
    };

    useEffect(() => {
        setValue(localStorage.getItem("email"))
        console.log('value: ', value);
    });

    return (
        <div className={style.socialsignin}>
        <button onClick={handleClick} className={style.inputfacebook}>
             <p>Sign In with Facebook</p>
        </button>
        </div>
    );
}

export default FacebookSignIn;