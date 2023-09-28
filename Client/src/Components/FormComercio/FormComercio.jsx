import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
//import style from './FormComercio.module.css'


const FormLogin = () => {
  const submitForm = (values) => {
    // Aquí puedes realizar la lógica de envío del formulario, como enviar una solicitud a un servidor.
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      nombre: '',
      usuario: '',
      email: '',
      adress: '',
      phonenumber: '',
      password: ''
    },
    onSubmit: submitForm,
    // Puedes agregar validaciones aquí utilizando la propiedad "validate" si es necesario.
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>

      <input
          type='text'
          placeholder='Nombre'
          name='nombre'
          onChange={formik.handleChange}
          value={formik.values.nombre}
        />

        <input
          type='text'
          placeholder='Usuario'
          name='usuario'
          onChange={formik.handleChange}
          value={formik.values.usuario}
        />

        <input
          type='email'
          placeholder='Email'
          name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />

         <input
          type='text'
          placeholder='Dirección'
          name='adress'
          onChange={formik.handleChange}
          value={formik.values.email}
        />

         <input
          type='email'
          placeholder='Teléfono'
          name='phonenumber'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <input
          type='password'
          placeholder='Contraseña'
          name='password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
       
       <Link to={`/home`}>
        <button type='submit'>Registrarse</button>
        </Link>    
      </form>
    </div>
  );
};

export default FormLogin;