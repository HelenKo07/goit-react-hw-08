import css from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import { createNewUser } from "../../redux/auth/operations";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(createNewUser(values));
    actions.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required input field"),
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
      className={css.formikRegistration}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.formRegistration}>
        <label className={css.formLabelRegistration} htmlFor="name">
          Name
        </label>
        <Field
          className={css.fieldRegistration}
          id="name"
          autoComplete="on"
          type="text"
          name="name"
        />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label className={css.formLabelRegistration} htmlFor="email">
          Email
        </label>
        <Field
          className={css.fieldRegistration}
          id="email"
          autoComplete="on"
          type="email"
          name="email"
        />
        <ErrorMessage className={css.error} name="email" component="span" />
        <label className={css.formLabelRegistration} htmlFor="password">
          Password
        </label>
        <Field
          className={css.fieldRegistration}
          id="password"
          autoComplete="on"
          type="password"
          name="password"
        />
        <ErrorMessage className={css.error} name="password" component="span" />
        <button className={css.buttonFormikRegistration} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
