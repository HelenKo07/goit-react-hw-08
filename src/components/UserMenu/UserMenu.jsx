import { Button, Typography, Stack, Avatar } from "@mui/material";
import { logoutUser } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      justifyContent="flex-end"
      sx={{ px: 2, py: 1 }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Avatar sx={{ bgcolor: "primary.main", width: 32, height: 32 }}>
          <PersonIcon fontSize="small" />
        </Avatar>
        <Typography variant="body1" fontWeight={500}>
          {user.email}
        </Typography>
      </Stack>
      <Button variant="outlined" color="inherit" onClick={handleLogout}>
        Logout
      </Button>
    </Stack>
  );
}
