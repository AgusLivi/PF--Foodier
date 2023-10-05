import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux'
import { createUser } from '../../Redux/actions'
import style from './FormUser.module.css'
import wave from '../../assets/wave.svg'


const FormLogin = () => {
  const navigate = useNavigate(); // Obtiene la función navigate
  const dispatch = useDispatch();

  const submitForm = async (values) => {

    try {
      const userData = {
        name: values.name,
        email: values.email,
        password: values.password,
        location: values.location
      }

      await dispatch(createUser(userData))

      if (Object.keys(formik.errors).length === 0) {
      }
      navigate('/home')

    } catch(error) {
      console.error(error)
    }
    }


  const validateForm = (values) => {
    const errors = {};

    // Validación para el campo nombre
    if (!values.name) {
      errors.name = 'El nombre es obligatorio';
    }

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
      name: '',
      email: '',
      password: '',
    },
    onSubmit: submitForm,
    validate: validateForm, // Agregamos la función de validación aquí
  });

  return (
    <div>
    <img className={style.wave} src={wave} alt="Wave" />
    <div className={style.container}>
      <div className={style.img}></div>
      <div className={style['login-content']}>

        <form onSubmit={formik.handleSubmit} action="index.html">
          <h2 className={style.title}>Sign Up</h2>
          <div className={style['input-div'] + ' ' + style.one}>

            <div className={style.i}></div>
            <div className={style.div}>
              <h5>Nombre</h5>
              <input type="text" className={style.input}
              name='name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name} />
            </div>
          </div>
          {formik.touched.nombre && formik.errors.nombre && (
          <div className='error'>{formik.errors.nombre}</div>
           )}

          <div className={style['input-div'] + ' ' + style.one}>
            <div className={style.i}></div>
            <div className={style.div}>
              <h5>Email</h5>
              <input type="email" className={style.input}
              name='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
               />
            </div>
          </div>

          {formik.touched.email && formik.errors.email && (
          <div className='error'>{formik.errors.email}</div>
        )}

          <div className={style['input-div'] + ' ' + style.pass}>
            <div className={style.i}></div>
            <div className={style.div}>
              <h5>Dirección</h5>
              <input type="text" className={style.input}
              name='location'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.location}
               />
            </div>
          </div>


          <div className={style['input-div'] + ' ' + style.pass}>
            <div className={style.i}></div>
            <div className={style.div}>
              <h5>Contraseña</h5>
              <input type="password" className={style.input}
              name='password'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
               />
            </div>
          </div>

          {formik.touched.password && formik.errors.password && (
          <div className='error'>{formik.errors.password}</div>
        )}
          
          <input type="submit" className={style.btn} value="Register" />
        </form>
      </div>
    </div>
  </div>
  );
};

export default FormLogin;