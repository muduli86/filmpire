import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import { MovieList } from "..";
import { useGetRecomendationsQuery } from "../../services/TMDB";

const RecomendedMovies = ({ id }) => {
  const { data, error, isFetching } = useGetRecomendationsQuery({
    movie_id: id,
    list: "recommendations",
  });
  return (
    <>
      {isFetching && (
        <Box display='flex' justifyContent='center'>
          <CircularProgress />
        </Box>
      )}
      {!isFetching && (
        <>
          <Typography variant='h3' gutterBottom align='center'>
            You might also like
          </Typography>
          <MovieList data={data} numberofMovies={12} />
        </>
      )}
    </>
  );
};

export default RecomendedMovies;
