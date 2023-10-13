import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";

const initialValues = {
  email: "",
  password: "",
  rol: "admin",
};

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Campo obligatorio";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Dirección de correo electrónico no válida";
  }

  if (!values.password) {
    errors.password = "Campo obligatorio";
  }

  return errors;
};

const LoginAdmin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    dispatch(login(values));
    navigate("/dashboard-admin");
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={validate}>
        {({ errors, touched }) => (
          <Form>
            <label htmlFor="email">Email: </label>
            <input type="text" id="email" name="email" />
            {errors.email && touched.email && <div>{errors.email}</div>}

            <label htmlFor="password">Password: </label>
            <input type="text" id="password" name="password" />
            {errors.password && touched.password && <div>{errors.password}</div>}

            <button type="submit">Send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginAdmin;
