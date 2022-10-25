import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
//https://api.themoviedb.org/3

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),
  endpoints: (builder) => ({
    // Get movies by [Type]
    getMovies: builder.query({
      query: () => `/movie/popular?api_key=${tmdbApiKey}&page=1`,
    }),
  }),
});

export const { useGetMoviesQuery } = tmdbApi;
