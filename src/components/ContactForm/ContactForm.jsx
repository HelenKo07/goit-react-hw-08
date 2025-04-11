import { useDispatch, useSelector } from "react-redux";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { selectContacts } from "../../redux/contacts/selectors";
import toast from "react-hot-toast";

const initialValues = {
  name: "",
  number: "",
};

export default function ContactForm() {
  const dispatch = useDispatch();

  const form = useSelector(selectContacts);

  const handleSubmit = async (values, actions) => {
    try {
      const result = await dispatch(addContact(values)).unwrap();
      toast.success(`Contact ${result.name} added!`);
      actions.resetForm();
    } catch (error) {
      toast.error(`Error ${error}`);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required input field"),
    number: Yup.string()
      .matches(
        /^[+\d]?[0-9\s\-()]{3,50}$/,
        "Number must be between 3 and 50 digits"
      )
      .required("Required input field"),
  });

  return (
    <Formik
      className={css.formik}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <label className={css.formLabel} htmlFor="name">
          Name
        </label>
        <Field
          className={css.field}
          id="name"
          autoComplete="on"
          type="text"
          name="name"
        />
        <ErrorMessage className={css.error} name="name" component="span" />
        <label className={css.formLabel} htmlFor="number">
          Number
        </label>
        <Field
          className={css.field}
          id="number"
          autoComplete="on"
          type="tel"
          name="number"
        />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.buttonFormik} type="submit">
          Add contacts
        </button>
      </Form>
    </Formik>
  );
}
