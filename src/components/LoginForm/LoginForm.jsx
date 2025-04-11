import css from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/operations";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(loginUser(values));
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email!")
      .required("Required field!"),
    password: Yup.string()
      .min(8, "The password must contain at least 8 characters.")
      .matches(/[a-z]/, "There must be at least one lowercase letter")
      .matches(/[A-Z]/, "There must be at least one capital letter")
      .matches(/\d/, "There must be at least one digit")
      .required("Password is required"),
  });

  return (
    <Formik
      className={css.formikLogin}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.formLogin}>
        <label className={css.formLabelLogin} htmlFor="email">
          Email
        </label>
        <Field
          className={css.fieldLogin}
          id="email"
          autoComplete="on"
          type="email"
          name="email"
        />
        <ErrorMessage className={css.error} name="email" component="span" />
        <label className={css.formLabelLogin} htmlFor="password">
          Password
        </label>
        <Field
          className={css.fieldLogin}
          id="password"
          autoComplete="on"
          type="password"
          name="password"
        />
        <ErrorMessage className={css.error} name="password" component="span" />
        <button className={css.buttonFormikLogin} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
}
