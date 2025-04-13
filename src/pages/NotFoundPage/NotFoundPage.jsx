import { useEffect } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

export default function NotFoundPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        gap: 2,
      }}
    >
      <Typography variant="h3" color="error">
        404 Not Found
      </Typography>
      <Typography variant="body1">
        Page does not exist. Redirecting to home...
      </Typography>
      <Button component={RouterLink} to="/" variant="outlined" color="primary">
        Go Home Now
      </Button>
    </Box>
  );
}
