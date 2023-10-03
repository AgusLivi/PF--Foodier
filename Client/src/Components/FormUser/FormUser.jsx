import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';

const FormLogin = () => {
  const submitForm = (values) => {

    console.log(values);
  };

  const validateForm = (values) => {
    const errors = {};

    // Validación para el campo nombre
    if (!values.nombre) {
      errors.nombre = 'El nombre es obligatorio';
    }

    // Validación para el campo usuario
    if (!values.usuario) {
      errors.usuario = 'El usuario es obligatorio';
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
      nombre: '',
      usuario: '',
      email: '',
      password: '',
    },
    onSubmit: submitForm,
    validate: validateForm, // Agregamos la función de validación aquí
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
        {formik.errors.nombre && <div className='error'>{formik.errors.nombre}</div>}

        <input
          type='text'
          placeholder='Usuario'
          name='usuario'
          onChange={formik.handleChange}
          value={formik.values.usuario}
        />
        {formik.errors.usuario && <div className='error'>{formik.errors.usuario}</div>}

        <input
          type='email'
          placeholder='Correo'
          name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email && <div className='error'>{formik.errors.email}</div>}

        <input
          type='password'
          placeholder='Contraseña'
          name='password'
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && <div className='error'>{formik.errors.password}</div>}

        <Link to={`/home`}>
          <button type='submit'>Registrarse</button>
        </Link>
      </form>
    </div>
  );
};

export default FormLogin;