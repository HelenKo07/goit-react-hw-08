// import { Box, Typography } from "@mui/material";

// export default function HomePage() {
//   return (
//     <Box sx={{ textAlign: "center", padding: 3 }}>
//       <Typography
//         variant="h1"
//         sx={{
//           fontSize: "4rem",
//           fontWeight: "bold",
//           color: "primary.main",
//           marginTop: 9,
//         }}
//       >
//         Welcome to your personal contact book
//       </Typography>
//       <Typography
//         variant="h2"
//         sx={{
//           fontSize: "1.5rem",
//           fontWeight: "bold",
//           color: "primary.main",
//           marginTop: 2,
//         }}
//       >
//         Keep your contacts safe and always at hand
//         <span role="img" aria-label="Telephone icon" style={{ marginLeft: 8 }}>
//           📱
//         </span>
//       </Typography>
//       <Typography variant="body1" sx={{ marginTop: 9 }}>
//         Register or log in to your account
//       </Typography>
//     </Box>
//   );
// }
import { Typography, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

export default function HomePage() {
  const user = useSelector(selectUser);
  const isLoggedIn = !!user?.email;

  return (
    <Stack spacing={2} alignItems="center" mt={6}>
      <Typography variant="h3" component="h1" sx={{
          fontSize: "4rem",
          textAlign: 'center',
          fontWeight: "bold",
          color: "primary.main",
          marginTop: 10,
        }}>
        Welcome to the Phonebook App 📱
      </Typography>

      {isLoggedIn ? (
        <Typography variant="h6" color="text.secondary">
          All set, <strong>{user.name}</strong>! Go to your contacts and start managing them easily!
        </Typography>
      ) : (
        <Typography variant="h6" color="text.secondary">
          Register or log in to your account to start using the app.
        </Typography>
      )}
    </Stack>
  );
}
