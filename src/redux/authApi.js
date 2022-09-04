import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users/',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().user;
      headers.set('Autorization', token);
      return headers;
    },
  }),
  tagTypes: ['User'],
  endpoints: builder => ({
    signup: builder.mutation({
      query: payload => ({
        url: '/signup',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['User'],
    }),
    login: builder.mutation({
      query: payload => ({
        url: 'login',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['user'],
    }),
    logout: builder.mutation({
      query: payload => ({
        url: '/logout',
        method: 'POST',
        body: payload,
      }),
    }),
    currentUser: builder.query({
      query: 'current',
    }),
    invalidatesTags: ['user'],
  }),
});

export const {
  useCurrentUserQuery,
  useLoginMutation,
  useSignupMutation,
  useLogoutMutation,
} = userApi;
