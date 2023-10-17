import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./LoginAdmin.module.css";
import wave from "../../assets/wave.svg";
import { login } from "../../Redux/actions";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const LoginAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [touchedEmail, setTouchedEmail] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);

  const submitForm = async (values) => {
    try {
      const userData = {
        email: values.email,
        password: values.password,
        rol: 'admin',
      };

      console.log(userData);
      await dispatch(login(userData));
      if (Object.keys(formik.errors).length === 0) {
        navigate("/dashboard-admin");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const validateForm = (values) => {
    const errors = {};

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

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rol: "",
    },
    onSubmit: submitForm,
    validate: validateForm,
  });

  return (
    <div>
      <img className={styles.wave} src={wave} alt="Wave" />
      <div className={styles.container}>
        <div className={styles.img}></div>
        <div className={styles["login-content"]}>
          <form
            onSubmit={formik.handleSubmit}
            action="index.html"
            className={styles.form}
          >
            <h2 className={styles.title}>Sign In</h2>
            <div className={styles["input-div"] + " " + styles.one}>
              <div className={styles.i}></div>
              <div className={styles.div}>
                <h5 style={{ display: touchedEmail ? "none" : "block" }}>Correo</h5>
                <input
                  name="email"
                  type="email"
                  className={styles.input}
                  {...formik.getFieldProps("email")}
                  onFocus={() => setTouchedEmail(true)}
                />
              </div>
            </div>
            {touchedEmail && formik.errors.email && (
              <div className={styles.error}>{formik.errors.email}</div>
            )}

            {/* <div className={styles["input-div"] + " " + styles.one}>
              <div className={styles.i}></div>
              <div className={styles["input-div"] + " " + styles.pass}>
                <div className={styles.i}></div>
                <div className={styles.div}>
                  <h5 style={{ display: touchedRol ? "none" : "block" }}>Usuario o vendedor</h5>
                  <select
                    name="rol"
                    className={styles.input}
                    {...formik.getFieldProps("rol")}
                    onFocus={() => setTouchedRol(true)}
                  >
                    <option value=""></option>
                    <option value="user">Usuario</option>
                    <option value="seller">Vendedor</option>
                  </select>
                </div>
              </div>
            </div> */}

            <div className={styles["input-div"] + " " + styles.pass}>
              <div className={styles.i}></div>
              <div className={styles.div}>
                <h5 style={{ display: touchedPassword ? "none" : "block" }}>Contraseña</h5>
                <input
                  name="password"
                  type="password"
                  className={styles.input}
                  {...formik.getFieldProps("password")}
                  onFocus={() => setTouchedPassword(true)}
                />
              </div>
            </div>
            {touchedPassword && formik.errors.password && (
              <div className={styles.error}>{formik.errors.password}</div>
            )}
            <a href="#">Olvidaste tu contraseña?</a>
            <input type="submit" className={styles.btn} value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin;
