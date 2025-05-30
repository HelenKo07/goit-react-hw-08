import { selectNameFilters } from "../filters/selectors";
import { createSelector} from "@reduxjs/toolkit";


export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilters],
  (contacts, nameFilters) => {
    const filterName = nameFilters?.toLowerCase() || "";
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterName)
    );
  }
);