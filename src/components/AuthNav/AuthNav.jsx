import css from "./AuthNav.module.css";
import { NavLink } from "react-router";

export default function AuthNav() {
  return (
    <div>
      <NavLink className={css.authLink} to={"/register"}>
        Register
      </NavLink>
      <NavLink className={css.authLink} to={"/login"}>
        Log In
      </NavLink>
    </div>
  );
}
