import { useFormik } from 'formik';
import React from 'react';
//import style from './FormUser.module.css'

const FormUser = () => {
  const submitForm = (values) => {};

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      nombre: '',
      usuario: '',
      email: '',
      password: '',
    },
    onSubmit: submitForm,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
          type='text'
          placeholder='Nombre'
          name='nombre'
          onChange={handleChange}
        />
         <input
          type='text'
          placeholder='Nombre de Usuario'
          name='usuario'
          onChange={handleChange}
        />
        <input
          type='email'
          placeholder='email'
          name='email'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='password'
          name='password'
          onChange={handleChange}
        />
        <button type='submit'>iniciar sesión</button>
      </form>
    </div>
  );
};

export default FormUser