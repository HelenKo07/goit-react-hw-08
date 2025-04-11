import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

export default function Contact({ user }) {
  const dispatch = useDispatch();

  const handleDeleted = async () => {
    try {
      await dispatch(deleteContact(user.id).unwrap());
      toast.success(`Contact ${user.name} deleted!`);
    } catch (error) {
      toast.error(`Error ${error}`);
    }
  };

  return (
    <div className={css.contactContainer}>
      <span className={css.contactNewUser}>{user.name}</span>
      <span className={css.contactNewUser}>{user.number}</span>
      <button className={css.contactBtn} onClick={handleDeleted}>
        Delete
      </button>
    </div>
  );
}
