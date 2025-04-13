import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Divider,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectLoading } from "../../redux/contacts/selectors";
import { fetchContacts, deleteContact } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal/ConfirmDeleteModal";
import toast from "react-hot-toast";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactIdToDelete, setContactIdToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = (contactId) => {
    document.activeElement.blur();
    setContactIdToDelete(contactId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setContactIdToDelete(null);
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteContact(contactIdToDelete)).unwrap();
      toast.success("Contact deleted!");
    } catch (error) {
      toast.error(`Error: ${error.message || error}`);
    } finally {
      setIsModalOpen(false);
    }
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Your contacts
      </Typography>
      <ContactForm />
      <Divider sx={{ my: 3 }} />
      <SearchBox />
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <ContactList onDeleteContact={handleDeleteContact} />
      )}
      <ConfirmDeleteModal
        contactId={contactIdToDelete}
        open={isModalOpen}
        onClose={handleCloseModal}
        onDelete={handleDelete}
      />
    </Container>
  );
}
