    import React, { useState, useEffect } from "react";
    import { Link, useRouteLoaderData } from "react-router-dom";
    import { useDispatch, useSelector } from "react-redux";
    import styles from "./SignUp.module.css"
    import wave from "../../assets/wave.svg"

   const SignUp = () => {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password:"",
        location:"",
      })

    const handleInputChange = (event) => {  
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
        };

    const handleSumbit = (event) =>{
        event.preventDefault();
        const formDataToSend ={
            name: userData.name,
            email: userData.email,
            password: userData.password,
            location: userData.location
        }
        dispatch(createUser(formDataToSend))
    }
    return(
        <div>
        <img className={styles.wave} src={wave} alt="Wave" />
        <div className={styles.container}>
          <div className={styles.img}></div>
          <div className={styles['login-content']}>
            <form action="index.html">
              <h2 className={styles.title}>Sign In</h2>
              <div className={styles['input-div'] + ' ' + styles.one}>
                <div className={styles.i}>
                </div>
                <div className={styles.div}>
                  <h5>Correo</h5>
                  <input name="email" type="text" className={styles.input} value={userData.email} 
                   onChange={handleInputChange} />
                </div>
              </div>
              <div className={styles['input-div'] + ' ' + styles.pass}>
                <div className={styles.i}>
                </div>
                <div className={styles.div}>
                  <h5>Contraseña</h5>
                  <input name="password" type="password" className={styles.input} value={userData.password}  onChange={handleInputChange} />
                </div>
              </div>
              <a href="#">Olvidaste tu contraseña?</a>
              <Link className={styles.link} to={`/home`}>
              <input type="submit" className={styles.btn} value="Login" />
              </Link>
            </form>
          </div>
        </div>
      </div>
    )
}

export default SignUp