import React from "react";
import style from "./Login.module.css";
import SignInGoogle from "../../Auths/AuthGoogle/SignInGoogle";
import SignInFacebook from "../../Auths/AuthFacebook/SignInFacebook";
import Logo from '../../assets/Logo.png'
import { BiArrowBack } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc"
import { RiFacebookCircleFill } from "react-icons/ri"
import { BiUser } from "react-icons/bi"
import { BsShop } from "react-icons/bs"
import { FiUserCheck } from "react-icons/fi"
import { Link } from "react-router-dom"

const Login = () => {

  return (
    <>
    <header>
    <nav className={style.nav}> 
    <Link className={style.links} to={`/`}>
      <a className={style.navtext}><BiArrowBack/> Volver </a>
    </Link>

    <img src={Logo}alt="logo"></img>
   </nav>
    </header>
    
    <div className={style.body}>
      <div className={style.containerform}>

        <div className={style.forminformation}>
          <div className={style.forminformationchilds}>
            <h2>Registrate o ingresá para continuar</h2>
          
            <div className={style.form}>
              <label>
                <FcGoogle/> 
                <SignInGoogle />
              </label>
              <label>
              <RiFacebookCircleFill/> 
                <SignInFacebook />
              </label>

              <label>
              <BsShop/> 
              <Link to={`/formcomercio`}>
               <input className={style.input} type="button" value="Soy Vendedor"></input>
              </Link>
              </label>

              <label>
             <BiUser/> 
             <Link to={`/formuser`}>
              <input className={style.input} type="button" value="Crea tu usuario"></input>
             </Link>
              </label>
              
              <label>
              <FiUserCheck/>
              <Link to={`/userlogin`}>
              <input className={style.input} type="button" value="Ya tengo cuenta"></input>
              </Link>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;


