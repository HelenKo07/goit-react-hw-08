import { Button, Typography, Box, Paper } from "@mui/material";

export default function Contact({ user, onDeleteContact }) {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        mb: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "16px",
        width: "100%", 
        maxWidth: 600, 
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "scale(1.01)",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.number}
        </Typography>
      </Box>
      <Button
        variant="contained"
        color="error"
        sx={{
          borderRadius: "20px",
          textTransform: "none",
          fontWeight: 500,
          boxShadow: "none",
          marginLeft: 2,
          minWidth: 90,
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#d32f2f",
            boxShadow: "0 2px 10px rgba(244, 67, 54, 0.4)",
          },
        }}
        onClick={() => onDeleteContact(user.id)}
      >
        Delete
      </Button>
    </Paper>
  );
}
