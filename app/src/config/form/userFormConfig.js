export const userFormConfig = [
  {
    name: "first_name",
    type: "text",
    placeholder: "First Name",
    label: "First Name",
    required: true,
    min: 4,
  },
  {
    name: "age",
    type: "number",
    required: true,
    placeholder: "Enter Age",
    label: "Age",
    min: 18,
  },
  {
    name: "email",
    type: "email",
    required: true,
    label: "Email",
    placeholder: "Enter Email Address",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    required: true,
  },
  {
    label: "City",
    name: "city",
    type: "select",
    required: true,
    options: [
      {
        value: 2,
        label: "Jabalpur",
      },
      {
        value: 1,
        label: "Indore",
      },
      {
        value: 3,
        label: "Delhi",
      },
      {
        value: 4,
        label: "Mumbai",
      },
    ],
  },

  {
    label: "Gender",
    name: "gender",
    type: "radio",
    options: [
      { value: "m", label: "male" },
      { value: "f", label: "female" },
    ],
  },
];
export const loginForm = [
  {
    name: "email",
    type: "email",
    placeholder: "Enter Email",
    label: "Email",
    required: true,
  },
  {
    name: "password",
    type: "password",
    placeholder: "******",
    label: "Password",
    required: true,
  },
];

export const contactForm = [
  {
    name: "name",
    type: "text",
    placeholder: "Full Name",
    label: "Full Name",
    required: true,
    min: 4,
    max: 30,
  },
  {
    name: "mobile",
    type: "text",
    placeholder: "",
    label: "Enter Mobile Number",
    required: true,
    min: 10,
  },
];
