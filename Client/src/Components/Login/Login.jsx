import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Login.module.css";
import FacebookLogin from 'react-facebook-login';

const Login = () => {


  const onFailure = (error) => {
    console.error("Inicio de sesión fallido:", error);
  };

  return (
    <div className={style.body}>
      <div className={style.containerform}>
        <div className={style.information}>
          <div className={style.infochilds}>
            <h2>Bienvenido</h2>
            <p>Para registrarte como empresa haz click debajo</p>
            <Link to={`/formcomercio`}>
              <input type="button" value="Registrarme"></input>
            </Link>
          </div>
        </div>
        <div className={style.forminformation}>
          <div className={style.forminformationchilds}>
            <h2>Crear una Cuenta</h2>
            <div className={style.icons}>
            </div>
            <p>O usa tu email para registrarte como usuario</p>
            <form className={style.form}>
              <label>
                <i class='bx bx-user'></i>
                <input type="text" placeholder="Nombre Completo"></input>
              </label>
              <label>
                <i class='bx bx-envelope'></i>
                <input type="email" placeholder="Correo Electrónico"></input>
              </label>
              <label>
                <i class='bx bx-lock-alt'></i>
                <input type="password" placeholder="Contraseña"></input>
              </label>
              <Link to={`/home`}>
                <input type="submit" value="Registrarme"></input>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
