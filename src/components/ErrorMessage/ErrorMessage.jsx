import { Box, Typography } from "@mui/material";

export default function ErrorMessage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="200px"
    >
      <Typography variant="body1" color="error" align="center">
        Connection problem, reload the page or try again later...
      </Typography>
    </Box>
  );
}
