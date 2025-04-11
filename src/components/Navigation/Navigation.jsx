import { useSelector } from "react-redux";
import css from "./Navigation.module.css";
import { NavLink } from "react-router";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <nav className={css.headerNav}>
        <ul>
          <li>
            <NavLink className={css.navLinkNavigation} to="/">
              Home
            </NavLink>
          </li>
          <li>
            {isLoggedIn && (
              <NavLink className={css.navLinkNavigation} to="/contacts">
                Contacts
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
