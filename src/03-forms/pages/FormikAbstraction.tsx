import { Formik, Form } from "formik";
import * as Yup from "yup";
// components
import { MyTextInput, MySelect, MyCheckbox } from "../components";
//
import "../styles/styles.css";

// ----------------------------------------------------------------------

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstractation</h1>

      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required("First Name is required")
            .max(15, "First Name must be 15 characters or less"),
          lastName: Yup.string()
            .required("Last Name is required")
            .max(10, "Last Name must be 10 characters or less"),
          email: Yup.string()
            .required("Email is required")
            .email("Invalid email address"),
          terms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          jobType: Yup.string()
            .required("Job Type is required")
            .notOneOf(["it-jr"], "You can't be a junior"),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput label="First Name" name="firstName" />

            <MyTextInput label="Last Name" name="lastName" />

            <MyTextInput label="Email" name="email" type="email" />

            <MySelect label="Job Type" name="jobType">
              <option value="">Pick Something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT senior</option>
              <option value="it-jr">IT jr.</option>
            </MySelect>

            <MyCheckbox label="Terms & conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
