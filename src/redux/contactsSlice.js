import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      const { name, number } = action.payload;
      const extContact = state.find(contact => contact.name === name);
      if (extContact) {
        alert(`${name} is already in contacts`);
      } else {
        return [...state, { id: shortid.generate(), name, number }];
      }
    },

    deleteContact(state, action) {
      const idToDelete = action.payload;
      return state.filter(contact => contact.id !== idToDelete);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
