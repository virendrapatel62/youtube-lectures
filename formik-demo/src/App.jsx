import { useState } from "react";
import "./App.css";

function App() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });

    if (formValues.firstName.length < 5) {
      return setErrors({
        ...errors,
        firstName: "First name should have at least 5 characters",
      });
    }
    if (formValues.lastName.length < 5) {
      return setErrors({
        ...errors,
        lastName: "Last name should have at least 5 characters",
      });
    }

    console.log("All Good!!!!");

    // add you form submission logic
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  return (
    <div className="App ">
      <div className="container">
        <form onSubmit={handleSubmit} action="">
          <div className="form-group mt-3">
            <input
              placeholder="First Name"
              type="text"
              className="form-control"
              onChange={handleOnChange}
              name="firstName"
            />

            <p className="text-danger">{errors.firstName}</p>
          </div>
          <div className="form-group mt-3">
            <input
              placeholder="Last Name"
              type="text"
              className="form-control"
              onChange={handleOnChange}
              name="lastName"
            />
            {errors.lastName && (
              <p className="text-danger">{errors.lastName}</p>
            )}
          </div>
          <div className="form-group mt-3">
            <input
              onChange={handleOnChange}
              name="email"
              placeholder="Email"
              type="email"
              className="form-control"
            />

            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>
          <div className="form-group mt-3">
            <input
              placeholder="Password"
              type="password"
              className="form-control"
              onChange={handleOnChange}
              name="password"
            />
          </div>
          <div className="form-group mt-3">
            <input type="submit" className="form-control btn btn-success" />
          </div>
        </form>
      </div>

      <pre>{JSON.stringify(formValues, null, 2)}</pre>
    </div>
  );
}

export default App;
