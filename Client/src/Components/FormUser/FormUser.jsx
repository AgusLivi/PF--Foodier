import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { createUser, locationLocalidad, locationMunicipio, locationProvincia } from '../../Redux/actions';
import style from './FormUser.module.css';
import wave from '../../assets/wave.svg';

const FormLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const provincias = useSelector((state) => state.provincias);
  const municipios = useSelector((state) => state.municipios);
  const localidades = useSelector((state) => state.localidades);

  useEffect(() => {
    dispatch(locationProvincia());
   }, []);

   const handleProvinciaChange = (event) => {
    const selectedProvinciaId = event.target.options[event.target.selectedIndex].getAttribute("data-id");
    dispatch(locationMunicipio(selectedProvinciaId));

    formik.handleChange(event)
  }; 

  const handleMuniChange = (event) => {
    const selectedMunicipioId = event.target.options[event.target.selectedIndex].getAttribute("data-id");
    dispatch(locationLocalidad(selectedMunicipioId));

    formik.handleChange(event)
  };

  const handleLocalChange = (event) => {
      formik.handleChange(event)
  };

  const submitForm = async (values) => {
    try {
      const userData = {
        name: values.name,
        email: values.email,
        password: values.password,
        location: `${values.provincia}, ${values.municipio}, ${values.localidad}`,
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

    if (!values.provincia) {
      errors.provincia = 'La provincia es obligatoria';
    }
    if (!values.municipio) {
      errors.municipio = 'El municipio es obligatoria';
    }
    if (!values.localidad) {
      errors.localidad = 'La localidad es obligatoria';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      provincia: '',
      municipio: '',
      localidad: '',
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
          <form onSubmit={formik.handleSubmit} action="index.html" className={style.form}>
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
                
                <select
                  className={style.input}
                  name="provincia"
                  onChange={handleProvinciaChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.provincia}
                  >
                  <option value="" disabled selected>
                    Selecciona una provincia
                  </option>
                  {provincias.length ? (
                    provincias.map((prov) => (
                      <option key={prov.id} value={prov.nombre}  data-id={prov.id} >
                        {prov.nombre}
                      </option>
                    ))
                  ) : (
                    <option>Selecciona una provincia</option>
                  )}
                </select>

                {municipios.length > 0 && (
                  <select className={style.input}
                  name="municipio"
                  onChange={handleMuniChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.municipio}>
                    <option value="" disabled selected>
                      Selecciona un municipio
                    </option>
                    {municipios.length ? (
                      municipios.map((muni) => (
                        <option data-id={muni.id} key={muni.id} value={muni.nombre}>
                          {muni.nombre}
                        </option>
                      ))
                    ) : (
                      <option>Selecciona un municipio</option>
                    )}
                  </select>
                )}

                {localidades.length > 0 && (
                  <select 
                  className={style.input}
                  name="localidad"
                  onChange={handleLocalChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.localidad}
                  >
                    <option value="" disabled selected>
                      Selecciona una localidad
                    </option>
                    {localidades.length ? (
                      localidades.map((local) => (
                        <option data-id={local.id} key={local.id} value={local.nombre}>
                          {local.nombre}
                        </option>
                      ))
                    ) : (
                      <option>Selecciona una localidad</option>
                    )}
                  </select>
                )}

                
                {/* <input
                  type="text"
                  className={style.input}
                  name="location"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.location}
                /> */}
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
