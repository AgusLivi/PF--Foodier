
import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import style from './FormComercio.module.css';
import logo from '../../assets/logoFoodier.png';

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
  });

  return (
    <div className={style.body}>
      <div className={style.containerform}>
        <div className={style.information}>
          <div className={style.infochilds}>
         <div>
           <img src={logo} ></img>
         
           
            <h2>Registrate</h2>
            <p>Unete a nuestra comunidad</p>
           </div>
           <div className={style.iconContant}>
           <i className="fa-brands fa-github"></i>
           <i className="fa-brands fa-meta"></i>
           <i className="fa-brands fa-instagram"></i>
           </div>
          </div>
        </div>
        <div className={style.forminformation}>
          <div className={style.forminformationchilds}>
          
          
            <form className={style.form}>
              <label>
                <i className='bx bx-user'></i>
                <input
                  type='text'
                  placeholder='Usuario'
                  name='usuario'
                  onChange={formik.handleChange}
                  value={formik.values.usuario}
                />
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