import { Box, Typography } from "@mui/material";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function LoginPage() {
  return (
    <Box
      sx={{
        mt: 4,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        textTransform="uppercase"
        gutterBottom
      >
        Please log in to your account
      </Typography>
      <LoginForm />
    </Box>
  );
}
