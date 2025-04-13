import { Typography } from "@mui/material";

export default function PageTitle({ children }) {
  return (
    <Typography
      variant="h4"
      component="h1"
      sx={{
        mb: 3,
        fontWeight: "bold",
        textAlign: "center",
        color: "primary.main",
        textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </Typography>
  );
}
