import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  createUser,
  locationLocalidad,
  locationMunicipio,
  locationProvincia,
} from "../../Redux/actions";
import style from "./FormUser.module.css";
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
    formik.setFieldTouched("localidad", true);
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
        location: `${values.provincia}, ${values.municipio}, ${values.localidad}`,
        image: values.image,
        phone: values.phone,
      };

      await dispatch(createUser(userData));

      setLoading(false);
      navigate("/home");
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
    if (!values.municipio) {
      errors.municipio = "El municipio es obligatorio";
    }
    if (!values.localidad) {
      errors.localidad = "La localidad es obligatoria";
    }

    if (!values.phone) {
      errors.phone = "El teléfono es obligatorio";
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
      localidad: "",
      phone: "",
      image: "", // Campo para Cloudinary
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
            onSubmit={formik.handleSubmit}
            action="index.html"
            className={style.form}
          >
            <h2 className={style.title}>Sign Up</h2>
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
              {formik.touched.email && formik.errors.email && (
                <div className={style.error}>{formik.errors.email}</div>
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

            <div className={style["input-div"] + " " + style.pass}>
              <div className={style.i}></div>
              <div className={style.div}>
                <h5
                  style={{
                    display: formik.touched.localidad ? "none" : "block",
                  }}
                >
                  Localidad
                </h5>
                <select
                  className={style.input}
                  name="localidad"
                  onChange={(e) => {
                    handleLocalChange(e);
                    handleInputChange("localidad");
                  }}
                  onBlur={formik.handleBlur}
                  value={formik.values.localidad}
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
              {formik.touched.localidad && formik.errors.localidad && (
                <div className={style.error}>{formik.errors.localidad}</div>
              )}
            </div>

            <div className={style["input-div"] + " " + style.pass}>
              <div className={style.i}></div>
              <div className={style.div}>
                <h5
                  style={{ display: formik.touched.phone ? "none" : "block" }}
                >
                  Teléfono
                </h5>
                <Input
                  type="tel"
                  className={style.input}
                  name="phone"
                  onChange={(e) => {
                    formik.handleChange(e);
                    handleInputChange("phone");
                  }}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
              </div>
              {formik.touched.phone && formik.errors.phone && (
                <div className={style.error}>{formik.errors.phone}</div>
              )}
            </div>

            <div className={style["input-div"] + " " + style.pass}>
              <div className={style.i}></div>
              <div className={style.div}>
                <h5>Imagen</h5>
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

            <input type="submit" className={style.btn} value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
