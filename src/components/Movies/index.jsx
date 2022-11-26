import React, { useState, useEffect } from "react";

import { Box, CircularProgress, useMediaQuery, useTheme } from "@mui/material";

import { useSelector } from "react-redux";
import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList } from "..";
import Pagination from "../Pagination";

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
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.only("lg"));
  const numberofMovies = lg ? 16 : 18;

  return (
    <div>
      {isFetching && (
        <Box display='flex' justifyContent='center'>
          <CircularProgress />
        </Box>
      )}
      {!isFetching && (
        <div>
          <MovieList data={data} numberofMovies={numberofMovies} />
          <Pagination page={page} setPage={setPage} pages={data.total_pages} />
        </div>
      )}
      {error && <h3>Error loading..</h3>}
    </div>
  );
};

export default Movies;
