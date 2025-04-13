import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import { Button, Stack } from "@mui/material";

const linkStyle = {
  color: "#fff",
  textTransform: "none",
  fontWeight: "bold",
  "&.active": {
    backgroundColor: "#1565c0",
  },
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Stack direction="row" spacing={2}>
      <Button component={NavLink} to="/" sx={linkStyle}>
        Home
      </Button>
      {isLoggedIn && (
        <Button component={NavLink} to="/contacts" sx={linkStyle}>
          Contacts
        </Button>
      )}
    </Stack>
  );
}
