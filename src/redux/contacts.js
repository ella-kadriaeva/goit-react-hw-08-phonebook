import { createSlice } from '@reduxjs/toolkit';
import { contactsApi } from './contactsApi';

const initialState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addMatcher(
        contactsApi.endpoints.getContactsItems.matchFulfilled,
        (state, action) => {
          state.items = action.payload;
        }
      )
      .addMatcher(
        contactsApi.endpoints.deleteContact.matchFulfilled,
        (state, { payload }) => {
          state.items = state.items.filter(item => item.id !== payload);
        }
      )
      .addMatcher(
        contactsApi.endpoints.createContact.matchFulfilled,
        (state, { payload: item }) => {
          state.items = [item, ...state.items];
        }
      );
  },
});

export default contactsSlice.reducer;
