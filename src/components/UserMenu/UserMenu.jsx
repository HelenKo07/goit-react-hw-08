import { logoutUser } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";

export default function UserMenu() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.textUseremail}>Welcome, {user.email}</p>
      <button className={css.buttonUseremail} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
