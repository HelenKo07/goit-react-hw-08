import { Box } from "@mui/material";
import ClipLoader from "react-spinners/ClipLoader";

export default function Loader({ loading = true }) {
  if (!loading) return null;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="200px"
    >
      <ClipLoader color="#36d7b7" size={80} />
    </Box>
  );
}
