import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectVisibleContacts } from "../../redux/contacts/selectors";
import { List, ListItem, Paper, Typography, Box } from "@mui/material";

export default function ContactList({ onDeleteContact }) {
  const contacts = useSelector(selectVisibleContacts);

  if (!contacts.length) {
    return (
      <Box mt={4} textAlign="center">
        <Typography variant="body1" color="text.secondary">
          No contacts found.
        </Typography>
      </Box>
    );
  }

  return (
    <List sx={{ mt: 2 }}>
      {contacts.map((contact) => (
        <ListItem
          key={contact.id}
          sx={{
            mb: 2,
            p: 0,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 2,
              width: "100%",
              borderRadius: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Contact user={contact} onDeleteContact={onDeleteContact} />
          </Paper>
        </ListItem>
      ))}
    </List>
  );
}
