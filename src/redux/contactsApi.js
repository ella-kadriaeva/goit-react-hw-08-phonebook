import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const { token = '' } = getState().user;

      headers.set('Authorization', token);

      return headers;
    },
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    getContactsItems: builder.query({
      query: () => `contacts`,
      providesTags: ['Contacts'],
    }),
    createContact: builder.mutation({
      query: ({ name, number }) => ({
        url: `contacts`,
        method: 'POST',
        body: { name, number },
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsItemsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
} = contactsApi;
