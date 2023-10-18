import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './config';
import style from './SignInGoogle.module.css'
import { login } from "../../Redux/actions";
import axios from "axios";

const SignInGoogle = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate(); // Obtiene la función de navegación
    const dispatch = useDispatch()

    const handleClick = () => {
        signInWithPopup(auth, provider).then((result) => {
            const user = result.user;

            setValue(user.accessToken);
            localStorage.setItem("token", user.accessToken)
            localStorage.setItem('rol', "user");
            axios.defaults.headers = { "token": user.accessToken }
  
            // Redirige a /home después de la autenticación exitosa
            navigate("/home");
            
        }).catch((error) => {
            console.error(error);
        });
    };

    useEffect(() => {

    }, []);

    return (
        <div className={style.socialsignin}>
            <button className={style.inputgoogle} onClick={handleClick}>
                <p>Sign In with Google</p>
            </button>
        </div>
    );
}

export default SignInGoogle;
