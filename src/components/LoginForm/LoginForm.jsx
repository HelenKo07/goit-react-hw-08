import { Button, TextField, Box, Container, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/operations";
import { ErrorMessage, Form, Formik } from "formik";
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
              <Box display="flex" flexDirection="column" gap={3}>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  fullWidth
                  value={values.email}
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={<ErrorMessage name="email" />}
                />
                <TextField
                  label="Password"
                  name="password"
                  type="password"
                  fullWidth
                  value={values.password}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={<ErrorMessage name="password" />}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ borderRadius: 2, py: 1.5, fontWeight: "bold" }}
                >
                  Log In
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
}
