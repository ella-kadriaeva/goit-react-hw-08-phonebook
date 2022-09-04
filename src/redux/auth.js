import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './authApi';

const initialState = {
  name: '',
  email: '',
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // loginSuccess: (state, { payload }) => {
    //   const { user, token } = payload;
    //   state.email = user.email;
    //   state.name = user.name;
    //   state.token = token;
    // },
    getData: (state, { payload }) => {
      state.email = payload.email;
      state.name = payload.name;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        const { user, token } = payload;
        state.email = user.email;
        state.name = user.name;
        state.token = token;
      }
    );
  },
});

export const { getData } = authSlice.actions;

export default authSlice.reducer;
