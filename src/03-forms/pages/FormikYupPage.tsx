import { useFormik } from "formik";
import * as Yup from "yup";
//
import "../styles/styles.css";

// ----------------------------------------------------------------------

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First Name is required")
        .max(15, "First Name must be 15 characters or less"),
      lastName: Yup.string()
        .required("Last Name is required")
        .max(10, "Last Name must be 10 characters or less"),
      email: Yup.string()
        .required("Email is required")
        .email("Invalid email address"),
    }),
  });

  return (
    <div>
      <h1>Formik Yup</h1>

      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps("firstName")} />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input type="text" {...getFieldProps("lastName")} />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input type="email" {...getFieldProps("email")} />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
