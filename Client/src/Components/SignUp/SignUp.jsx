    import React, { useState, useEffect } from "react";
    import { Link } from "react-router-dom";
    import { useDispatch } from "react-redux";
    import styles from "./SignUp.module.css"
    import wave from "../../assets/wave.svg"
    import { login } from "../../Redux/actions";
    import { useFormik } from 'formik';
    import { useNavigate } from 'react-router-dom';

   const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitForm = async (values) => {
      try {
        const userData = {
          email: values.email,
          password: values.password,
          userOrSeller: values.userOrSeller
        }
        await dispatch(login(userData))
        if (Object.keys(formik.errors).length === 0) {
        }
        navigate('/home')

      }catch(error) {
        console.error(error)
      }
    }
    const validateForm = (values) => {
      const errors = {};
  
      // Validación para el campo email
      if (!values.email) {
        errors.email = 'El correo es obligatorio';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Formato de correo electrónico inválido';
      }
  
      // Validación para el campo contraseña
      if (!values.password) {
        errors.password = 'La contraseña es obligatoria';
      } else if (!/(?=.*[A-Z])(?=.*\d)/.test(values.password)) {
        errors.password = 'La contraseña debe contener al menos una mayúscula y un número';
      }
      return errors;
    };

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
        userOrSeller: ''
      },
      onSubmit: submitForm,
      validate: validateForm
    })
  
    return(
        <div>
        <img className={styles.wave} src={wave} alt="Wave" />
        <div className={styles.container}>
          <div className={styles.img}></div>
          <div className={styles['login-content']}>
            <form onSubmit={formik.handleSubmit} action="index.html">
              <h2 className={styles.title}>Sign In</h2>
              <div className={styles['input-div'] + ' ' + styles.one}>
                <div className={styles.i}>
                </div>
                <div className={styles.div}>
                  <h5>Correo</h5>
                  <input
                    name="email"
                    type="email" 
                    className={styles.input} 
                    value={formik.values.email} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    />
                </div>
              </div>
              {formik.touched.email && formik.errors.email && (
              <div >{formik.errors.email}</div>
              )}

              <div className={styles['input-div'] + ' ' + styles.pass}>
                <div className={styles.i}>
                </div>
                <div className={styles.div}>
                  <h5>Contraseña</h5>
                  <input 
                  name="password" 
                  type="password" 
                  className={styles.input} 
                  value={formik.values.password}  
                  onChange={formik.handleChange} 
                  onBlur={formik.handleBlur}
                  />
                </div>
              </div>
              {formik.touched.password && formik.errors.password && (
              <div >{formik.errors.password}</div>
               )}
               <div className={styles['input-div'] + ' ' + styles.one}>
                <div className={styles.i}>
                </div>
                <div className={styles.div}>
                  <h5>Usuario o vendedor</h5>
                  <input
                    name="userOrSeller"
                    type="text" 
                    className={styles.input} 
                    value={formik.values.userOrSeller} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}
                    />
                </div>
              </div>
              <a href="#">Olvidaste tu contraseña?</a>
              <Link className={styles.link}
              //  to={`/home`}
               >
              <input type="submit" className={styles.btn} value="Login" />
              </Link>
            </form>
          </div>
        </div>
      </div>
    )
}

export default SignUp