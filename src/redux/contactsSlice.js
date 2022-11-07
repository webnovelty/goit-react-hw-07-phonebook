
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const contactsApi = createApi({
	reducerPath: 'contacts',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://6367e18eedc85dbc84ddc883.mockapi.io',
	}),
	tagTypes: ['Contacts'],
	endpoints: builder => ({
		fetchContacts: builder.query({
			query: () => '/contacts',
			providesTags: ['Contacts'],
		}),
		addContact: builder.mutation({
			query: values => ({
				url: '/contacts',
				method: 'POST',
				body: values,
			}),
			invalidatesTags: ['Contacts'],
		}),
		deleteContact: builder.mutation({
			query: id => ({
				url: `/contacts/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Contacts'],
		}),
	}),
});

export const {
	useFetchContactsQuery,
	useAddContactMutation,
	useDeleteContactMutation,
} = contactsApi;
