import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authentication",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://contact-app.mmsdev.site/api/v1",
  }),
  tagTypes: ["auth"],
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (user) => ({
        url: "/register",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["auth"],
    }),
    login: builder.mutation({
      query: (user) => ({
        url: "/login",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["auth"],
    }),
    logOut: builder.mutation({
      query: (token) => ({
        url: "/user-logout",
        method: "POST",
        headers: {authorization: `Bearer ${token}`},
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});
export const { useSignUpMutation, useLoginMutation,useLogOutMutation } = authApi;
