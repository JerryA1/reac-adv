import { Form, Formik } from "formik";
import * as Yup from "yup";
// components
import { MyTextInput } from "../components";
//
import "../styles/styles.css";

// ----------------------------------------------------------------------

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, "Name must be at least 2 characters")
            .max(15, "Name must be 15 characters or less")
            .required("Name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          password1: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
          password2: Yup.string()
            .oneOf([Yup.ref("password1")], "Passwords must match")
            .required("Password is required"),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label="Name" name="name" placeholder="Gerardo" />

            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="john@google.com"
            />

            <MyTextInput
              label="Password"
              name="password1"
              type="password"
              placeholder="***********"
            />

            <MyTextInput
              label="Password"
              name="password2"
              type="password"
              placeholder="***********"
            />

            <button type="submit">Create</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
