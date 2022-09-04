import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users/',
    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().auth;
      headers.set('Autorization', token);
      return headers;
    },
  }),
  tagTypes: ['user'],
  endpoints: builder => ({
    login: builder.mutation({
      query: payload => ({
        url: 'login',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['user'],
    }),
    currentUser: builder.query({
      query: 'current',
    }),
    invalidatesTags: ['user'],
  }),
});

export const { useLoginMutation, useCurrentUserQuery } = authApi;
