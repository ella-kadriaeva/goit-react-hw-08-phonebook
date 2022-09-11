import { createSlice } from '@reduxjs/toolkit';
import { userApi } from './authApi';

const initialState = {
  name: '',
  email: '',
  token: null,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  extraReducers: builder => {
    builder.addMatcher(
      userApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;
        state.email = user.email;
        state.name = user.name;
        state.token = token;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(userApi.endpoints.logout.matchFulfilled, state => {
      state.name = '';
      state.email = '';
      state.token = null;
    });
    builder.addMatcher(
      userApi.endpoints.signup.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;
        state.email = user.email;
        state.name = user.name;
        state.token = token;
        state.isLoggedIn = true;
      }
    );
    builder.addMatcher(
      userApi.endpoints.currentUser.matchFulfilled,
      (state, { payload }) => {
        const { user } = payload;
        state.name = user.name;
        state.email = user.email;
        state.isLoggedIn = true;
      }
    );
  },
});

export default userSlice.reducer;
