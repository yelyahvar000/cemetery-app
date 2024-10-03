// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { apiConfig } from '../config'

// Define a service using a base URL and expected endpoints
export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery(apiConfig),
  endpoints: (builder) => ({
    getProfile: builder.query({
      query: (name) => `/api/v1/user/sign-in`,
    }),
    postLogin: builder.mutation({
      query: (body) => ({
        url: `/api/v1/user/sign-in`,
        method: 'POST',
        headers: {
          type: "WEB"
        },
        body
      }),
    }),
    //add other query here
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, usePostLoginMutation } = loginApi;
