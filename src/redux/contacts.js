import { createSlice } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';

const initialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContacts: (state, { payload: item }) => {
      state.items = [item, ...state.items];
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(item => item.id !== payload);
    },
    setContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      contactsApi.endpoints.getContactsItems.matchFulfilled,
      (state, action) => {
        state.items = action.payload;
      }
    );
  },
});

export const { addContacts, setContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
