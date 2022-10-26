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
  const [page, setPage] = useState(1);
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, error, isFetching } = useGetMoviesQuery({
    genreIdOrCategoryName,
    page,
    searchQuery,
  });

  return (
    <div>
      {isFetching && (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}
      {!isFetching && <MovieList data={data} />}
      {error && <h3>Error loading..</h3>}
    </div>
  );
};

export default Movies;
