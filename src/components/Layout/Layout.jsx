import { Box, Container } from "@mui/material";
import AppBar from "../AppBar/AppBar";

export default function Layout({ children }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <AppBar />
      <Box
        component="main"
        sx={{
          flex: 1,
          py: 4,
          px: 2,
          backgroundColor: "#f5f7fa",
        }}
      >
        <Container maxWidth="md">{children}</Container>
      </Box>
    </Box>
  );
}
