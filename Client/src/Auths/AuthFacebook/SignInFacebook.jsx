import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from "./configFace";
import style from './SignInFacebook.module.css'

const SignInFacebook = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate(); // Obtiene la función de navegación

    const handleClick = () => {
        signInWithPopup(auth, provider).then((result) => {
            const user = result.user;
            setValue(user.email);
            localStorage.setItem("email", user.email);
            // Redirige a /home después de la autenticación exitosa
            navigate("/home");
        }).catch((error) => {
            console.error(error);
        });
    };

    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        if (storedEmail) {
            setValue(storedEmail);
        }
    }, []);

    return (
        <div className={style.socialsignin}>
            <button className={style.inputfacebook} onClick={handleClick}>
                <p>Sign In with Facebook</p>
            </button>
        </div>
    );
}

export default SignInFacebook;
