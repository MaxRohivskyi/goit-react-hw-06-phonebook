import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid';

const ContactsInitialState = {
  value: [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: ContactsInitialState,
  reducers: {
    addContact: (state, action) => {
      state.value.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.value = state.value.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage: storage,
  blacklist: ['filter'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
