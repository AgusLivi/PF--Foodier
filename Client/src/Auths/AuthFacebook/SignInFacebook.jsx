import React, { useEffect, useState } from "react";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from "./configFace";
import Home from "../googleSingIn/Home";

const FacebookSignIn = () => {

    const [value, setValue] = useState('');

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        })
    };

    useEffect(() => {
        setValue(localStorage.getItem("email"))
    });

    return (
        <div>
            {value ? <Home /> :
                <button onClick={handleClick}>Signin With Facebook</button>
            }
        </div>
    );
}

export default FacebookSignIn;