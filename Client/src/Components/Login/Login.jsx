import React from "react";
import { Link } from "react-router-dom";
import style from "./Login.module.css";
import SignInGoogle from "../../Auths/AuthGoogle/SignInGoogle";
import SignInFacebook from "../../Auths/AuthFacebook/SignInFacebook";

const Login = () => {
  return (
    <div className={style.body}>
      <p>Registrate o ingresa para continuar</p>
      <div>
        <SignInGoogle />
      </div>

      <div>
        <SignInFacebook />
      </div>

      <Link to={`/formcomercio`}>
        <input type="button" value="Soy Vendedor"></input>
      </Link>

      <Link to={`/formuser`}>
        <input type="button" value="Crea tu usuario"></input>
      </Link>

      <Link to={`/userlogin`}>
        <input type="button" value="Ya tengo cuenta"></input>
      </Link>
    </div>
  );
};

export default Login;
