import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";

const initialValues = {
  email: "",
  password: "",
  rol: "admin",
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
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor="email">Email: </label>
          <Field type="text" name="email" />

          <label htmlFor="password">Password: </label>
          <Field type="text" name="password" />

          <button type="submit">Send</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginAdmin;
