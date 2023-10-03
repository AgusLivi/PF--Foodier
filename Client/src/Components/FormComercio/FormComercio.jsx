import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import style from './FormComercio.module.css';
import Logo from '../../assets/logodos.png';

const FormComercio = () => {
  // Función para manejar el envío del formulario
  const submitForm = (values) => {
    // Aquí puedes realizar la lógica de envío del formulario, como enviar una solicitud a un servidor.
    console.log(values);
  };

  // Configuración de Formik
  const formik = useFormik({
    initialValues: {
      nombre: '',
      usuario: '',
      email: '',
      adress: '',
      phonenumber: '',
      password: '',
    },
    onSubmit: submitForm,
    // Puedes agregar validaciones aquí utilizando la propiedad "validate" si es necesario.
    validate: (values) => {
      const errors = {};

      if (!values.usuario) {
        errors.usuario = 'El usuario es obligatorio';
      }

      if (!values.email) {
        errors.email = 'El correo es obligatorio';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Formato de correo electrónico inválido';
      }

      if (!values.adress) {
        errors.adress = 'La dirección es obligatoria';
      }

      if (!values.phonenumber) {
        errors.phonenumber = 'El teléfono es obligatorio';
      }

      if (!values.password) {
        errors.password = 'La contraseña es obligatoria';
      } else if (!/(?=.*[A-Z])(?=.*\d)/.test(values.password)) {
        errors.password = 'La contraseña debe contener al menos una mayúscula y un número';
      }

      return errors;
    },
  });

  return (
    <div className={style.body}>
      <div className={style.containerform}>
        <div className={style.information}>
          <div className={style.infochilds}>
            <div>
              <img src={Logo} alt="Logo" />
              <h2>Regístrate</h2>
              <p>Únete a nuestra comunidad</p>
            </div>
            <div className={style.iconContant}>
              <box-icon name='meta' type='logo'></box-icon>
              <box-icon name='github' type='logo'></box-icon>
              <box-icon type='logo' name='instagram'></box-icon>
            </div>
          </div>
        </div>
        <div className={style.forminformation}>
          <div className={style.forminformationchilds}>
            <form className={style.form} onSubmit={formik.handleSubmit}>
              <label>
                <i className='bx bx-user'></i>
                <input
                  type='text'
                  placeholder='Usuario'
                  name='usuario'
                  onChange={formik.handleChange}
                  value={formik.values.usuario}
                />
                {formik.errors.usuario && <div className='error'>{formik.errors.usuario}</div>}
              </label>
              <label>
                <i className='bx bx-envelope'></i>
                <input
                  type='email'
                  placeholder='Email'
                  name='email'
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.errors.email && <div className='error'>{formik.errors.email}</div>}
              </label>
              <label>
                <i className='bx bx-lock-alt'></i>
                <input
                  type='text'
                  placeholder='Dirección'
                  name='adress'
                  onChange={formik.handleChange}
                  value={formik.values.adress}
                />
                {formik.errors.adress && <div className='error'>{formik.errors.adress}</div>}
              </label>
              <label>
                <i className='bx bx-lock-alt'></i>
                <input
                  type='text'
                  placeholder='Teléfono'
                  name='phonenumber'
                  onChange={formik.handleChange}
                  value={formik.values.phonenumber}
                />
                {formik.errors.phonenumber && <div className='error'>{formik.errors.phonenumber}</div>}
              </label>
              <label>
                <i className='bx bx-lock-alt'></i>
                <input
                  type='password'
                  placeholder='Contraseña'
                  name='password'
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
                {formik.errors.password && <div className='error'>{formik.errors.password}</div>}
              </label>
              <Link to={`/home`}>
                <input type='submit' value='Registrarme' />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComercio;