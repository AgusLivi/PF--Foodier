import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux'
import { createUser } from '../../Redux/actions'


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
      <form onSubmit={formik.handleSubmit}>
        {/* Campos de entrada y mensajes de error */}
        <input
          type='text'
          placeholder='Nombre'
          name='name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.nombre && formik.errors.nombre && (
          <div className='error'>{formik.errors.nombre}</div>
        )}

        {formik.touched.usuario && formik.errors.usuario && (
          <div className='error'>{formik.errors.usuario}</div>
        )}

        <input
          type='email'
          placeholder='Correo'
          name='email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className='error'>{formik.errors.email}</div>
        )}

        <input
          type='password'
          placeholder='Contraseña'
          name='password'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='error'>{formik.errors.password}</div>
        )}

        <input
          type='text'
          placeholder='Localidad'
          name='location'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.location}
        />

        <button type='submit'>Registrarse</button>
      </form>
    </div>
  );
};

export default FormLogin;