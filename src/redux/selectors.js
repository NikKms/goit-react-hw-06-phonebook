import { createSelector } from '@reduxjs/toolkit';

export const selectFilteredContacts = createSelector(
  state => state.contacts,
  state => state.filter,
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
