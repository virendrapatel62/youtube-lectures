import { useState } from "react";
import "./App.css";

import { useFormik } from "formik";
import * as yup from "yup";

function App() {
  const form = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      email: yup.string().required(),
      password: yup
        .string()
        .matches(/[0-9A-Za-z]/)
        .required(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const errors = form.errors;
  const touched = form.touched;

  return (
    <div className="App ">
      <div className="container">
        <form onSubmit={form.handleSubmit} action="">
          <div className="form-group mt-3">
            <input
              placeholder="First Name"
              type="text"
              className="form-control"
              name="firstName"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />

            {errors.firstName && touched.firstName && (
              <p className="text-danger">
                <small>{errors.firstName}</small>
              </p>
            )}
          </div>
          <div className="form-group mt-3">
            <input
              placeholder="Last Name"
              type="text"
              className="form-control"
              name="lastName"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />

            {errors.lastName && touched.lastName && (
              <p className="text-danger">
                <small>{errors.lastName}</small>
              </p>
            )}
          </div>
          <div className="form-group mt-3">
            <input
              name="email"
              placeholder="Email"
              type="email"
              className="form-control"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />

            {errors.email && touched.email && (
              <p className="text-danger">
                <small>{errors.email}</small>
              </p>
            )}
          </div>
          <div className="form-group mt-3">
            <input
              placeholder="Password"
              type="password"
              name="password"
              className="form-control"
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />

            {errors.password && touched.password && (
              <p className="text-danger">
                <small>{errors.password}</small>
              </p>
            )}
          </div>
          <div className="form-group mt-3">
            <input type="submit" className="form-control btn btn-success" />
          </div>
        </form>
      </div>

      <pre>{JSON.stringify(form.values, null, 2)}</pre>
      <pre>{JSON.stringify(form.errors, null, 2)}</pre>
      <pre>{JSON.stringify(form.touched, null, 2)}</pre>
    </div>
  );
}

export default App;
