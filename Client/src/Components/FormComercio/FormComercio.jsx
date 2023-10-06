import React from 'react';
import { createRoutesFromChildren, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { createSeller } from '../../Redux/actions';
import { useDispatch } from 'react-redux';
import style from './FormComercio.module.css';
import wave from '../../assets/wave.svg';

const FormComercio = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitForm = async (values) => {
    try {
      const sellerData = {
        name: values.name,
        email: values.email,
        address: values.address,
        password: values.password,
        time: values.time,
        contact: values.contact,
        payment: values.payment,
        image: values.image,
      };

      await dispatch(createSeller(sellerData));
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

    if (!values.address) {
      errors.address = 'La dirección es obligatoria';
    }

    if (!values.contact) {
      errors.contact = 'El teléfono es obligatorio';
    }

    if (!values.password) {
      errors.password = 'La contraseña es obligatoria';
    } else if (!/(?=.*[A-Z])(?=.*\d)/.test(values.password)) {
      errors.password = 'La contraseña debe contener al menos una mayúscula y un número';
    }

    if (!values.time) {
      errors.time = 'El horario es obligatorio';
    }

    if (!values.payment) {
      errors.payment = 'Los métodos de pago son obligatorios';
    }

    if (!values.image) {
      errors.image = 'La imagen es obligatoria';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      address: '',
      contact: '',
      password: '',
      time: '',
      payment: '',
      image: '',
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
                  name="address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                />
              </div>
              {formik.touched.address && formik.errors.address && (
                <div className={style.error}>{formik.errors.address}</div>
              )}
            </div>

            <div className={style['input-div'] + ' ' + style.pass}>
              <div className={style.i}></div>
              <div className={style.div}>
                <h5>Teléfono</h5>
                <input
                  type="text"
                  className={style.input}
                  name="contact"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.contact}
                />
              </div>
              {formik.touched.contact && formik.errors.contact && (
                <div className={style.error}>{formik.errors.contact}</div>
              )}
            </div>

            <div className={style['input-div'] + ' ' + style.pass}>
              <div className={style.i}></div>
              <div className={style.div}>
                <h5>Horario</h5>
                <input
                  type="text"
                  className={style.input}
                  name="time"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.time}
                />
              </div>
              {formik.touched.time && formik.errors.time && (
                <div className={style.error}>{formik.errors.time}</div>
              )}
            </div>

            <div className={style['input-div'] + ' ' + style.pass}>
              <div className={style.i}></div>
              <div className={style.div}>
                <h5>Métodos de Pago</h5>
                <input
                  type="text"
                  className={style.input}
                  name="payment"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.payment}
                />
              </div>
              {formik.touched.payment && formik.errors.payment && (
                <div className={style.error}>{formik.errors.payment}</div>
              )}
            </div>

            <div className={style['input-div'] + ' ' + style.pass}>
              <div className={style.i}></div>
              <div className={style.div}>
                <h5>Imagen</h5>
                <input
                  type="text"
                  className={style.input}
                  name="image"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.image}
                />
              </div>
              {formik.touched.image && formik.errors.image && (
                <div className={style.error}>{formik.errors.image}</div>
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

export default FormComercio;
