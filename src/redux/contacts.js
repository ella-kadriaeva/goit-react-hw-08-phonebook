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
    extraReducers: builder => {
      builder.addMatcher(
        contactsApi.endpoints.getContactsItems.matchFulfilled,
        (state, { payload }) => {
          const { user, token } = payload;
          state.email = user.email;
          state.name = user.name;
          state.token = token;
        }
      );
    },
  },
});

export const { addContacts, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
