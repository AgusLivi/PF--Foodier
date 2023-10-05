    import React, { useState, useEffect } from "react";
    import { Link, useRouteLoaderData } from "react-router-dom";
    import { useDispatch, useSelector } from "react-redux";
    import styles from "./SignUp.module.css"
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
        <img className={styles.wave} src="img/wave.png" alt="Wave" />
        <div className={styles.container}>
          <div className={styles.img}>
            <img src="img/bg.svg" alt="Background" />
          </div>
          <div className={styles['login-content']}>
            <form action="index.html">
              <img src="img/avatar.svg" alt="Avatar" />
              <h2 className={styles.title}>Welcome</h2>
              <div className={styles['input-div'] + ' ' + styles.one}>
                <div className={styles.i}>
                  <i className="fas fa-user"></i>
                </div>
                <div className={styles.div}>
                  <h5>Username</h5>
                  <input type="text" className={styles.input} />
                </div>
              </div>
              <div className={styles['input-div'] + ' ' + styles.pass}>
                <div className={styles.i}>
                  <i className="fas fa-lock"></i>
                </div>
                <div className={styles.div}>
                  <h5>Password</h5>
                  <input type="password" className={styles.input} />
                </div>
              </div>
              <a href="#">Forgot Password?</a>
              <input type="submit" className={styles.btn} value="Login" />
            </form>
          </div>
        </div>
      </div>
    )
}

export default SignUp