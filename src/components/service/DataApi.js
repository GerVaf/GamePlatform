import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const DataApi = createApi({
  reducerPath: "DataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.rawg.io/api",
  }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    get2013_2014: builder.query({
      query: () => ({
        url: "/games?key=64d7c2e284ce406abb26e55182fdf488&dates=2013-09-01,2014-09-30&platforms=18,1,7",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    get2014_2015: builder.query({
      query: () => ({
        url: "/games?key=64d7c2e284ce406abb26e55182fdf488&dates=2014-09-01,2015-09-30&platforms=18,1,7",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    get2015_2016: builder.query({
      query: () => ({
        url: "/games?key=64d7c2e284ce406abb26e55182fdf488&dates=2015-09-01,2016-09-30&platforms=18,1,7",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    get2016_2017: builder.query({
      query: () => ({
        url: "/games?key=64d7c2e284ce406abb26e55182fdf488&dates=2016-09-01,2017-09-30&platforms=18,1,7",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    get2018_2019: builder.query({
      query: () => ({
        url: "/games?key=64d7c2e284ce406abb26e55182fdf488&dates=2018-09-01,2019-09-30&platforms=18,1,7",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    get2020_2021: builder.query({
      query: () => ({
        url: "/games?key=64d7c2e284ce406abb26e55182fdf488&dates=2020-09-01,2021-09-30&platforms=18,1,7",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    get2022_2023: builder.query({
      query: () => ({
        url: "/games?key=64d7c2e284ce406abb26e55182fdf488&dates=2022-09-01,2023-09-30&platforms=18,1,7",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
  }),
});

export const {
  useGet2013_2014Query,
  useGet2014_2015Query,
  useGet2015_2016Query,
  useGet2016_2017Query,
  useGet2018_2019Query,
  useGet2020_2021Query,
  useGet2022_2023Query,
} = DataApi;
