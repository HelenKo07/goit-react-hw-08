import { Box, Typography } from "@mui/material";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default function RegistrationPage() {
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
        Please register your account
      </Typography>
      <RegistrationForm />
    </Box>
  );
}
