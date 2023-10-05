import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import {createSeller } from '../../Redux/actions'

const FormComercio = () => {
  const navigate = useNavigate(); 

  const submitForm = async (values) => {
  try{ 

    const sellerData = {
      name: values.nombre,
      email: values.email,
      address: values.address
    }

  } catch(error) {
    console.error(error)
  }
  };

  const validateForm = (values) => {
    const errors = {};

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

    // Validación para el campo dirección
    if (!values.address) {
      errors.address = 'La dirección es obligatoria';
    }

    // Validación para el campo teléfono
    if (!values.phonenumber) {
      errors.phonenumber = 'El teléfono es obligatorio';
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
      address: '',
      phonenumber: '',
      password: '',
    },
    onSubmit: submitForm,
    validate: validateForm, 
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Usuario:
          <input
            type='text'
            name='usuario'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.usuario}
          />
          {formik.touched.usuario && formik.errors.usuario && (
            <div className='error'>{formik.errors.usuario}</div>
          )}
        </label>

        <label>
          Email:
          <input
            type='email'
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className='error'>{formik.errors.email}</div>
          )}
        </label>

        <label>
          Dirección:
          <input
            type='text'
            name='adress'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address && (
            <div className='error'>{formik.errors.address}</div>
          )}
        </label>

        <label>
          Teléfono:
          <input
            type='text'
            name='phonenumber'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phonenumber}
          />
          {formik.touched.phonenumber && formik.errors.phonenumber && (
            <div className='error'>{formik.errors.phonenumber}</div>
          )}
        </label>

        <label>
          Contraseña:
          <input
            type='password'
            name='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className='error'>{formik.errors.password}</div>
          )}
        </label>

        <button type='submit'>Registrarse</button>
      </form>
    </div>
  );
};

export default FormComercio;