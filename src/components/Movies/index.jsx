import React, { useState, useEffect } from "react";

import {
  Box,
  CircularProgress,
  useMediaQuery,
  Typography,
} from "@mui/material";

import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList } from "..";

const Movies = () => {
  const { data, error, isFetching } = useGetMoviesQuery();

  return (
    <div>
      {isFetching && <h3>Loading..</h3>}
      {!isFetching && <MovieList data={data} />}
      {error && <h3>Error loading..</h3>}
    </div>
  );
};

export default Movies;
