import React from "react";

import { useFormik } from "formik";
import { getInitialFormValue } from "../../utils/form";
import { Field } from "../../components/form/Field";
import { object, string, number } from "yup";

export function DynamicForm(props) {
  const userForm = useFormik({
    initialValues: getInitialFormValue(props.config),
    validationSchema: object(
      props.config.reduce((validation, field) => {
        let schema = null;

        if (field.type === "number") {
          schema = number();
        } else {
          schema = string();
        }
        if (field.required) {
          schema = schema.required();
        }

        if (field.min) {
          schema = schema.min(field.min);
        }
        if (field.max) {
          schema = schema.max(field.max);
        }
        validation[field.name] = schema;

        return validation;
      }, {})
    ),
    onSubmit: (values) => {
      console.log({ values });
      props.onSubmit(values);
    },
  });

  return (
    <div className="container">
      <form onSubmit={userForm.handleSubmit}>
        {props.config.map((field) => (
          <Field
            onChange={userForm.handleChange}
            onBlur={userForm.handleBlur}
            field={field}
            error={
              userForm.touched[field.name] ? userForm.errors[field.name] : null
            }
          />
        ))}

        <div className="mt-3">
          <input type="submit" className="btn btn-dark" />
        </div>
      </form>
    </div>
  );
}
