import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { createUser } from '../../Redux/actions';
import style from './FormUser.module.css';
import wave from '../../assets/wave.svg';

const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitForm = async (values) => {
    try {
      const userData = {
        name: values.name,
        email: values.email,
        password: values.password,
        location: values.location,
      };

      await dispatch(createUser(userData));

      if (Object.keys(formik.errors).length === 0) {
      }
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'El nombre es obligatorio';
    }

    if (!values.email) {
      errors.email = 'El correo es obligatorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Formato de correo electrónico inválido';
    }

    if (!values.password) {
      errors.password = 'La contraseña es obligatoria';
    } else if (!/(?=.*[A-Z])(?=.*\d)/.test(values.password)) {
      errors.password =
        'La contraseña debe contener al menos una mayúscula y un número';
    }

    if (!values.location) {
      errors.location = 'La dirección es obligatoria';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      location: '',
    },
    onSubmit: submitForm,
    validate: validateForm,
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
                <input
                  type="text"
                  className={style.input}
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
              </div>
              {formik.touched.name && formik.errors.name && (
                <div className={style.error}>{formik.errors.name}</div>
              )}
            </div>

            <div className={style['input-div'] + ' ' + style.one}>
              <div className={style.i}></div>
              <div className={style.div}>
                <h5>Email</h5>
                <input
                  type="email"
                  className={style.input}
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </div>
              {formik.touched.email && formik.errors.email && (
                <div className={style.error}>{formik.errors.email}</div>
              )}
            </div>

            <div className={style['input-div'] + ' ' + style.pass}>
              <div className={style.i}></div>
              <div className={style.div}>
                <h5>Dirección</h5>
                <input
                  type="text"
                  className={style.input}
                  name="location"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.location}
                />
              </div>
              {formik.touched.location && formik.errors.location && (
                <div className={style.error}>{formik.errors.location}</div>
              )}
            </div>

            <div className={style['input-div'] + ' ' + style.pass}>
              <div className={style.i}></div>
              <div className={style.div}>
                <h5>Contraseña</h5>
                <input
                  type="password"
                  className={style.input}
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className={style.error}>{formik.errors.password}</div>
              )}
            </div>

            <input type="submit" className={style.btn} value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
