  import React, { useState, useEffect } from "react";
  import { Link } from "react-router-dom";
  import style from "./Login.module.css";
  import SignInGoogle from "../../Auths/AuthGoogle/SignInGoogle";
  import SignInFacebook from "../../Auths/AuthFacebook/SignInFacebook";
  import { createUser } from "../../Redux/actions";
  import { useDispatch, useSelector } from "react-redux";  
  
  const Login = () => {
  const dispatch = useDispatch();
  const [userDate, setUserData] = useState({
    name: "",
    email: "",
    password:"",
    location:"",
  })/*Creo el estado local y le paso los parametros que va a recibir */
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userDate, [name]: value });
  };
  
  const handleSumbit = (event) =>{
    event.preventDefault();
    const formDataToSend ={
      name: userDate.name,
      email: userDate.email,
      password: userDate.password,
      location: userDate.location
    }
    dispatch(createUser(formDataToSend))
  }

  const user = useSelector((state)=>{
    state.createdUser
  })
  
  return (
    <>
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
                <i className='bx bx-user'></i>
                <input type="text" placeholder="Nombre Completo" name="name"  value={userDate.name} onChange={handleInputChange}></input>
              </label>
              <label>
                <i className='bx bx-envelope'></i>
                <input type="email" placeholder="Correo Electrónico" name="email" value={userDate.email} onChange={handleInputChange}></input>
              </label>
              <label>
                <i className='bx bx-lock-alt'></i>
                <input type="password" placeholder="Contraseña" name="password" value={userDate.password} onChange={handleInputChange}></input>
              </label>
              <Link to={`/home`}>
                <input type="submit" value="Registrarme" onClick={handleSumbit} ></input>
              </Link>
            </form>
            <div >
              <div>
                <SignInFacebook />
              </div>
              <div>
                <SignInGoogle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;

