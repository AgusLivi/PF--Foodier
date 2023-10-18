import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  createSeller,
  locationLocalidad,
  locationMunicipio,
  locationProvincia,
} from "../../Redux/actions";
import style from "./FormComercio.module.css";
import wave from "../../assets/wave.svg";
import uploadImage from "../../helperCloudinary/helperCloudinary";
import { FormGroup, Input } from "reactstrap";

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
    const selectedProvinciaId =
      event.target.options[event.target.selectedIndex].getAttribute("data-id");
    dispatch(locationMunicipio(selectedProvinciaId));
    formik.handleChange(event);
    formik.setFieldTouched("provincia", true);
  };

  const handleMuniChange = (event) => {
    const selectedMunicipioId =
      event.target.options[event.target.selectedIndex].getAttribute("data-id");
    dispatch(locationLocalidad(selectedMunicipioId));
    formik.handleChange(event);
    formik.setFieldTouched("municipio", true);
  };

  const handleLocalChange = (event) => {
    formik.handleChange(event);
    formik.setFieldTouched("address", true);
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

    formik.setFieldValue("payment", updatedPayments); // Actualizar el campo "payment"
  };

  const handlerCloudinary = async (event) => {
    setLoading(true);
    const imagenCargada = await uploadImage(event);
    formik.setFieldValue("image", imagenCargada);
    setLoading(false);
  };

  const [loading, setLoading] = useState(false);

  const submitForm = async (values) => {
    try {
      setLoading(true);
      const userData = {
        name: values.name,
        email: values.email,
        password: values.password,
        address: `${values.provincia}${values.municipio ? ', ' + values.municipio : ''}${values.localidad ? ', ' + values.localidad : ''}, ${values.shopaddress}`,
        image: values.image,
        contact: values.contact,
        time: values.time,
        payment: values.payment.split(',').map(item => item.trim()),
      };
      console.log( userData);
      await dispatch(createSeller(userData));

      setLoading(false);
      navigate("/userlogin");
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "El nombre es obligatorio";
    }

    if (!values.email) {
      errors.email = "El correo es obligatorio";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Formato de correo electrónico inválido";
    }

    if (!values.password) {
      errors.password = "La contraseña es obligatoria";
    } else if (!/(?=.*[A-Z])(?=.*\d)/.test(values.password)) {
      errors.password =
        "La contraseña debe contener al menos una mayúscula y un número";
    }

    if (!values.provincia) {
      errors.provincia = "La provincia es obligatoria";
    }

    if (!values.contact) {
      errors.contact = "El teléfono es obligatorio";
    }
    if (!values.time) {
      errors.time = "El horario es obligatorio";
    }
    if (!values.payment) {
      errors.payment = "Los métodos de pago son obligatorios";
    }
    if (!values.shopaddress) {
      errors.shopaddress = "La dirección es obligatoria";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      provincia: "",
      municipio: "",
      address: "",
      contact: "",
      image: "", // Campo para Cloudinary
      time: "",
      payment:"",
      shopaddress:"",
    },
    onSubmit: submitForm,
    validate: validateForm,
  });

  const handleInputChange = (field) => {
    formik.setFieldTouched(field, true);
  };

  return (
    <div>
      <img className={style.wave} src={wave} alt="Wave" />
      <div className={style.container}>
        <div className={style.img}></div>
        <div className={style["login-content"]}>
          <form
            onSubmit={formik.handleSubmit} action="index.html" className={style.form}
          >
             <div className={style.formTitle}>
              <h2 className={style.title}>Sign Up</h2>
              </div>
              <div  className={style.formOne}>
                <div className={style["input-div"] + " " + style.one}>
                <div className={style.i}></div>
                <div className={style.div}>
                  <h5 style={{ display: formik.touched.name ? "none" : "block" }}>
                    Nombre
                  </h5>
                  <input
                    type="text"
                    className={style.input}
                    name="name"
                    onChange={(e) => {
                      formik.handleChange(e);
                      handleInputChange("name");
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                </div>
                {formik.touched.name && formik.errors.name && (
                  <div className={style.error}>{formik.errors.name}</div>
                )}
              </div>

              <div className={style["input-div"] + " " + style.one}>
                <div className={style.i}></div>
                <div className={style.div}>
                  <h5
                    style={{ display: formik.touched.email ? "none" : "block" }}
                  >
                    Email
                  </h5>
                  <input
                    type="email"
                    className={style.input}
                    name="email"
                    onChange={(e) => {
                      formik.handleChange(e);
                      handleInputChange("email");
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                </div>
              </div>
              {formik.touched.email && formik.errors.email && (
                <div className={style.error}>{formik.errors.email}</div>
              )}
            
           
            <div className={style["input-div"] + " " + style.one}>
              <div className={style.i}></div>
              <div className={style.div}>
                <h5 style={{ display: formik.touched.time ? "none" : "block" }}>
                  Hora Apertura - Hora Cierre
                </h5>
                <input
                  type="text"
                  className={style.input}
                  name="time"
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleInputChange("time");
                  }}
                  onBlur={formik.handleBlur}
                  value={formik.values.time}
                />
              </div>
              {formik.touched.time && formik.errors.time && (
                <div className={style.error}>{formik.errors.time}</div>
              )}
            </div>

            <div className={style["input-div"] + " " + style.pass}>
              <div className={style.i}></div>
              <div className={style.div}>
                <h5
                  style={{
                    display: formik.touched.provincia ? "none" : "block",
                  }}
                >
                  Provincia
                </h5>
                <select
                  className={style.input}
                  name="provincia"
                  onChange={(e) => {
                    handleProvinciaChange(e);
                    handleInputChange("provincia");
                  }}
                  onBlur={formik.handleBlur}
                  value={formik.values.provincia}
                >
                  <option value="" disabled></option>
                  {provincias.length ? (
                    provincias.map((prov) => (
                      <option
                        key={prov.id}
                        value={prov.nombre}
                        data-id={prov.id}
                      >
                        {prov.nombre}
                      </option>
                    ))
                  ) : (
                    <option>Selecciona una provincia</option>
                  )}
                </select>
              </div>
              {formik.touched.provincia && formik.errors.provincia && (
                <div className={style.error}>{formik.errors.provincia}</div>
              )}
            </div>

            <div className={style["input-div"] + " " + style.pass}>
              <div className={style.i}></div>
              <div className={style.div}>
                <h5
                  style={{
                    display: formik.touched.municipio ? "none" : "block",
                  }}
                >
                  Municipio
                </h5>
                <select
                  className={style.input}
                  name="municipio"
                  onChange={(e) => {
                    handleMuniChange(e);
                    handleInputChange("municipio");
                  }}
                  onBlur={formik.handleBlur}
                  value={formik.values.municipio}
                >
                  <option value="" disabled></option>
                  {municipios.length ? (
                    municipios.map((muni) => (
                      <option
                        data-id={muni.id}
                        key={muni.id}
                        value={muni.nombre}
                      >
                        {muni.nombre}
                      </option>
                    ))
                  ) : (
                    <option>Selecciona un municipio</option>
                  )}
                </select>
              </div>
              {formik.touched.municipio && formik.errors.municipio && (
                <div className={style.error}>{formik.errors.municipio}</div>
              )}
            </div>
            </div>
            <div className={style.formTwo}>
            <div className={style["input-div"] + " " + style.pass}>
              <div className={style.i}></div>
              <div className={style.div}>
                <h5
                  style={{
                    display: formik.touched.address ? "none" : "block",
                  }}
                >
                  Localidad
                </h5>
                <select
                  className={style.input}
                  name="address"
                  onChange={(e) => {
                    handleLocalChange(e);
                    handleInputChange("address");
                  }}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                >
                  <option value="" disabled></option>
                  {localidades.length ? (
                    localidades.map((local) => (
                      <option
                        data-id={local.id}
                        key={local.id}
                        value={local.nombre}
                      >
                        {local.nombre}
                      </option>
                    ))
                  ) : (
                    <option>Selecciona una localidad</option>
                  )}
                </select>
              </div>
              {formik.touched.address && formik.errors.address && (
                <div className={style.error}>{formik.errors.address}</div>
              )}
            </div>

            <div className={style["input-div"] + " " + style.pass}>
              <div className={style.i}></div>
              <div className={style.div}>
                <h5
                  style={{ display: formik.touched.shopaddress ? "none" : "block" }}
                >
                  Calle y nro
                </h5>
                {/* <input
                    type="text"
                    className={style.input}
                    name="name"
                    onChange={(e) => {
                      formik.handleChange(e);
                      handleInputChange("name");
                    }}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  /> */}
                <input
                  type="text"
                  className={style.input}
                  name="shopaddress"
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleInputChange("shopaddress");
                  }}
                  onBlur={formik.handleBlur}
                  value={formik.values.shopaddress}
                />
              </div>
              {formik.touched.shopaddress && formik.errors.shopaddress && (
                <div className={style.error}>{formik.errors.shopaddress}</div>
              )}
            </div>

            <div className={style["input-div"] + " " + style.pass}>
              <div className={style.i}></div>
              <div className={style.div}>
                {formik.values.payment.length === 0 ? (
                  <h5
                    style={{
                      display:
                        formik.touched.payment ||
                        formik.values.payment.length > 0
                          ? "none"
                          : "block",
                    }}
                  >
                    Métodos de Pago
                  </h5>
                ) : null}
                <div>
                  <label>
                    <select
                      name="payment"
                      value={formik.values.payment}
                      onChange={(e) => {
                        formik.handleChange(e);
                        handleInputChange("payment");
                      }}
                    >
                      <option value=""></option>
                      <option value="Efectivo">Efectivo</option>
                      <option value="Pago Online/Tarjeta">
                        Pago Online/Tarjeta
                      </option>
                      <option value="Pago Online/Tarjeta, Efectivo">Ambas opciones</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>

            {formik.touched.payment && formik.errors.payment && (
              <div className={style.error}>{formik.errors.payment}</div>
            )}
           
           

            <div className={style["input-div"] + " " + style.pass}>
              <div className={style.i}></div>
              <div className={style.div}>
                
                <FormGroup>
                  <Input
                    type="file"
                    placeholder="Carga tu imagen"
                    onChange={handlerCloudinary}
                  />
                  {loading ? (
                    <h3>Cargando imagen...</h3>
                  ) : (
                    formik.values.image && (
                      <div>
                        <img src={formik.values.image} alt="Imagen" />
                      </div>
                    )
                  )}
                </FormGroup>
              </div>
              {formik.touched.image && formik.errors.image && (
                <div className={style.error}>{formik.errors.image}</div>
              )}
            </div>

            <div className={style["input-div"] + " " + style.pass}>
              <div className={style.i}></div>
              <div className={style.div}>
                <h5
                  style={{ display: formik.touched.contact ? "none" : "block" }}
                >
                  Teléfono
                </h5>
                <Input
                  type="tel"
                  className={style.input}
                  name="contact"
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleInputChange("contact");
                  }}
                  onBlur={formik.handleBlur}
                  value={formik.values.contact}
                />
              </div>
              {formik.touched.contact && formik.errors.contact && (
                <div className={style.error}>{formik.errors.contact}</div>
              )}
            </div>
           
            <div className={style["input-div"] + " " + style.pass}>
              <div className={style.i}></div>
              <div className={style.div}>
                <h5
                  style={{
                    display:
                      formik.touched.password || formik.values.password
                        ? "none"
                        : "block",
                  }}
                >
                  Contraseña
                </h5>
                <input
                  type="password"
                  className={style.input}
                  name="password"
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleInputChange("password");
                  }}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className={style.error}>{formik.errors.password}</div>
              )}
            </div>
            </div>
            <div className={style.containerBtn}>
            <input type="submit" className={style.btn} value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
