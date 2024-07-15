import reactLogo from "../assets/react.svg";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
// components
import {
  RegisterPage,
  FormikBasicPage,
  FormikYupPage,
  FormikComponents,
  FormikAbstraction,
  RegisterFormikPage,
  DynamicForm,
} from "../03-forms/pages";

// ----------------------------------------------------------------------

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={reactLogo} alt="react logo" />

          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstractation"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Abstractation
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Formik
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dynamic-form"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Dynamic form
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="register" element={<RegisterPage />} />
          <Route path="formik-basic" element={<FormikBasicPage />} />
          <Route path="formik-yup" element={<FormikYupPage />} />
          <Route path="formik-components" element={<FormikComponents />} />
          <Route path="formik-abstractation" element={<FormikAbstraction />} />
          <Route path="formik-register" element={<RegisterFormikPage />} />
          <Route path="dynamic-form" element={<DynamicForm />} />

          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
