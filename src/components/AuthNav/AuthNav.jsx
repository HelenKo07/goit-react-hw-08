import { Button, Stack } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";

export default function AuthNav() {
  const location = useLocation();

  const isRegister = location.pathname === "/register";
  const isLogin = location.pathname === "/login";

  const buttonStyle = {
    borderRadius: "20px",
    textTransform: "none",
    fontWeight: 500,
    transition: "all 0.3s ease",
  };

  return (
    <Stack direction="row" spacing={2}>
      <Button
        component={NavLink}
        to="/register"
        variant={isRegister ? "contained" : "outlined"}
        sx={{
          ...buttonStyle,
          backgroundColor: isRegister ? "#1976d2" : "#fff",
          color: isRegister ? "#fff" : "#1976d2",
          "&:hover": {
            backgroundColor: isRegister ? "#1565c0" : "#e3f2fd",
          },
        }}
      >
        Register
      </Button>
      <Button
        component={NavLink}
        to="/login"
        variant={isLogin ? "contained" : "outlined"}
        sx={{
          ...buttonStyle,
          backgroundColor: isLogin ? "#1976d2" : "#fff",
          color: isLogin ? "#fff" : "#1976d2",
          "&:hover": {
            backgroundColor: isLogin ? "#1565c0" : "#e3f2fd",
          },
        }}
      >
        Log In
      </Button>
    </Stack>
  );
}
