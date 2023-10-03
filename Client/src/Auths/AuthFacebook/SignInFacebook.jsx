import React, { useEffect, useState } from "react";
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from "./configFace";
//import Home from '../../Views/Home/Home.jsx'

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
            <button onClick={handleClick}>Signin With Facebook</button>
        </div>
    );
}

export default FacebookSignIn;