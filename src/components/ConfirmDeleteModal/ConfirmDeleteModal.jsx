import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

export default function ConfirmDeleteModal({ open, onClose, onDelete }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{
        p: 2,
        backgroundColor: "#fff",
      }}
    >
      <DialogTitle>Delete Contact</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this contact? This action cannot be
          undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={onDelete}
          color="error"
          variant="contained"
          sx={{
            borderRadius: "30px",
            textTransform: "none",
            boxShadow: "none",
            "&:hover": {
              boxShadow: "0 4px 12px rgba(211, 47, 47, 0.4)",
            },
          }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}
