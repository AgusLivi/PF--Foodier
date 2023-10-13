//Login.jsx
import React from "react";
import style from "./Login.module.css";
import SignInGoogle from "../../Auths/AuthGoogle/SignInGoogle";
import SignInFacebook from "../../Auths/AuthFacebook/SignInFacebook";
import Logo from '../../assets/imgLogin.svg'
import { BiArrowBack } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc"
import { BiUser } from "react-icons/bi"
import { BsShop } from "react-icons/bs"
import { FiUserCheck } from "react-icons/fi"
import { Link } from "react-router-dom"
import { LiaFacebookSquare } from "react-icons/lia"
import { TbUserSearch } from "react-icons/tb"

const Login = () => {

  return (
    <>
 
    
    <div className={style.body}>
      <div className={style.containerform}>
        
        <div className={style.forminformation}>
        <div className={style.containerChild}>
          <img src={Logo} alt="img" className={style.imgLogin}></img>
       </div>
          <div className={style.forminformationchilds}>
            <h2>Registrate o ingresá para continuar</h2>
          
            <div className={style.form}>
              <label className={style.labelone}>
                <FcGoogle size={'2rem'} /> 
                <SignInGoogle />
              </label>
              <label className={style.labeltwo}>
              <LiaFacebookSquare size={'2rem'}/>
                <SignInFacebook />
              </label>

              <label className={style.labelthree}>
              <BsShop/> 
              <Link to={`/formcomercio`}>
               <input className={style.input} type="button" value="Soy Vendedor"></input>
              </Link>
              </label>

              <label className={style.labelfour}>
             <BiUser/> 
             <Link to={`/formuser`}>
              <input className={style.input} type="button" value="Crea tu usuario"></input>
             </Link>
              </label>
              
              <label className={style.labelfive}>
              <FiUserCheck/>
              <Link to={`/userlogin`}>
              <input className={style.input} type="button" value="Ya tengo cuenta"></input>
              </Link>
              </label> <div className=""></div>

              <label className={style.labelfive}>
                <TbUserSearch/>
              <Link to={`/home`}>
              <input className={style.input} type="button" value="Entrar como invitado"></input>
              </Link>
              </label> <div className=""></div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;


