import { Grid, useTheme } from "@mui/material";
import React from "react";

import Movie from "../Movie";

const MovieList = ({ data, numberofMovies }) => {
  const theme = useTheme();
  return (
    <>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginBottom: "30px",
          // overflow: "auto",
          [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
          },
        }}
      >
        {data.results.slice(0, numberofMovies).map((movie, i) => (
          <Movie key={i} movie={movie} i={i} />
        ))}
      </Grid>
    </>
  );
};

export default MovieList;
