import React, { useEffect, useState } from 'react';
import { createRoutesFromChildren, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { createSeller, locationLocalidad, locationMunicipio, locationProvincia } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import style from './FormComercio.module.css';
import wave from '../../assets/wave.svg';
import uploadImage from '../../helperCloudinary/helperCloudinary';
import { FormGroup, Input } from 'reactstrap';

const FormComercio = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const provincias = useSelector((state) => state.provincias);
  const municipios = useSelector((state) => state.municipios);
  const localidades = useSelector((state) => state.localidades);

  //Estados de Cloudinary
  const [loading, setLoading] = useState(false);

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

  const handlePaymentChange = (event) => {
    const selectedValue = event.target.value;
    const updatedPayments = [...formik.values.payment];

    if (updatedPayments.includes(selectedValue)) {
      // Si ya está seleccionado, quitarlo
      const index = updatedPayments.indexOf(selectedValue);
      if (index > -1) {
        updatedPayments.splice(index, 1);
      }
    } else {
      // Si no está seleccionado, agregarlo
      updatedPayments.push(selectedValue);
    }

    formik.setFieldValue('payment', updatedPayments); // Actualizar el campo "payment"
  };


  const submitForm = async (values) => {
    try {
      const sellerData = {
        name: values.name,
        email: values.email,
        address: `${values.provincia}, ${values.municipio}, ${values.localidad}, ${values.calle}, ${values.numero}`,
        password: values.password,
        time: values.time,
        contact: values.contact,
        payment: values.payment,
        image: values.image,
      };
      console.log(sellerData.address);
      await dispatch(createSeller(sellerData));
      navigate('/home');
    } catch (error) {
      console.error(error);
    }
  };

  const validateForm = (values) => {
    const errors = {};
    console.log(values);
    if (!values.name) {
      errors.name = 'El nombre es obligatorio';
    }

    if (!values.email) {
      errors.email = 'El correo es obligatorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Formato de correo electrónico inválido';
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
    if (!values.calle) {
      errors.calle = 'La calle es obligatoria';
    }
    if (!values.numero) {
      errors.numero = 'El numero es obligatoria';
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
      provincia: '',
      municipio: '',
      localidad: '',
      calle: '',
      numero: '',
      contact: '',
      password: '',
      time: '',
      payment: [],
      image: '',
    },
    onSubmit: submitForm,
    validate: validateForm,
  });

  const handlerCloudinary = async (event) => {
    setLoading(true);
    const imagenCargada = await uploadImage(event);
    formik.setFieldValue('image', imagenCargada);
    setLoading(false);
  };
  console.log('formik: ', formik);
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
                      <option key={prov.id} value={prov.nombre} data-id={prov.id} >
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


                <input
                  type="text"
                  className={style.input}
                  name="calle"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.calle}
                />
                <input
                  type="text"
                  className={style.input}
                  name="numero"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.numero}
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
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="payment"
                      value="Efectivo"
                      checked={formik.values.payment === 'Efectivo'}
                      onChange={formik.handleChange}
                    /> Efectivo
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="payment"
                      value="Pago Online/Tarjeta"
                      checked={formik.values.payment === 'Pago Online/Tarjeta'}
                      onChange={formik.handleChange}
                    /> Pago Online/Tarjeta
                  </label>
                </div>
                {/* <input
                  type="text"
                  className={style.input}
                  name="payment"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.payment}
                /> */}
              </div>
              {formik.touched.payment && formik.errors.payment && (
                <div className={style.error}>{formik.errors.payment}</div>
              )}
            </div>

            <div className={style['input-div'] + ' ' + style.pass}>
              <div className={style.i}></div>
              <div className={style.div}>
                <h5>Imagen</h5>
                <FormGroup >
                  <Input type="file" placeholder="carga tu imagen" onChange={handlerCloudinary} />
                  {loading ? (
                    <h3>Cargando imagen...</h3>
                  ) : (
                    formik.values.image &&
                    <div >
                      <img src={formik.values.image} />
                    </div>
                  )}
                </FormGroup>
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
