import { useDispatch } from "react-redux";
import { createNewUser } from "../../redux/auth/operations";
import * as Yup from "yup";
import { TextField, Button, Box, Container, Paper } from "@mui/material";
import { ErrorMessage, Form, Formik } from "formik";

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
      .min(3, "Too short!")
      .max(50, "Too long!")
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
    <Container maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: "#ffffff",
          mt: 1,
        }}
      >
        <Formik
          enableReinitialize={true}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, touched, handleChange, values }) => (
            <Form>
              <Box display="flex" flexDirection="column" gap={2}>
                <TextField
                  label="Name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  error={touched.name && Boolean(errors.name)}
                  helperText={<ErrorMessage name="name" />}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={<ErrorMessage name="email" />}
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={<ErrorMessage name="password" />}
                />
                <Button type="submit" variant="contained" fullWidth>
                  Register
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
}
