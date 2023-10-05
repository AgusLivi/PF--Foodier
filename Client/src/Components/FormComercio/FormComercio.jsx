import React from 'react';
import { createRoutesFromChildren, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import {createSeller } from '../../Redux/actions'
import { useDispatch } from 'react-redux'

const FormComercio = () => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();

  const submitForm = async (values) => {

  try{ 

    const sellerData = {
      name: values.nombre,
      email: values.email,
      address: values.address,
      password: values.password,
      time: values.time,
      contact: values.contact, 
      payment: values.payment, 
      image: values.image, 
    } 
    
    await dispatch(createSeller(sellerData)); 
    navigate('/home'); 

  } catch(error) {
    console.error(error)
  }
  };

  const validateForm = (values) => {
    const errors = {};

    // Validación para el campo usuario
    if (!values.name) {
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
    if (!values.contact) {
      errors.contact = 'El teléfono es obligatorio';
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
      usuario: '',
      email: '',
      address: '',
      contact: '',
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
            name='name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div className='error'>{formik.errors.name}</div>
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
            name='address'
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
            name='contact'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.contact}
          />
          {formik.touched.phonenumber && formik.errors.phonenumber && (
            <div className='error'>{formik.errors.phonenumber}</div>
          )}
        </label>

        <label>
          Horario:
          <input
            type='text'
            name='time'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.time}
          />
        </label>


        <label>
          Métodos de pago:
          <input
          type='texr'
          name='payment'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.payment}
          />
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

        <label>
          Imagen:
          <input
            type='text'
            name='image'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.image}
          />
        </label>

        <button type='submit'>Registrarse</button>
      </form>
    </div>
  );
};

export default FormComercio;