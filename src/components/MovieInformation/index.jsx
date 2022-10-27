import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Modal,
  CircularProgress,
  useMediaQuery,
  Rating,
  Box,
  useTheme,
} from "@mui/material";
import {
  Movie as MovieIcon,
  Favorite,
  FavoriteBorderOutlined,
  Theaters,
  Language,
  PlusOne,
  Remove,
  ArrowBack,
} from "@mui/icons-material";
// import { styled } from "@mui/material/styles";

import { useGetMovieInfoQuery, useGetGenresQuery } from "../../services/TMDB";

const MovieInformation = () => {
  const { id } = useParams();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const { data, isFetching, error } = useGetMovieInfoQuery(id);
  //   const StyledGrid = styled(Grid)`
  //   display: "flex",
  //             justifyContent: "space-around",
  //             margin: "10px 0 !important",
  //             [theme.breakpoints.down("sm")]: {
  //               flexDirection: "column",
  //               flexWrap: "wrap",
  //             },
  // `;
  return (
    <>
      {isFetching && (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}
      {error && <h3>Error loading..</h3>}
      {!isFetching && (
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-around",
            margin: "10px 0 !important",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
              flexWrap: "wrap",
            },
          }}
        >
          <Grid item sm={12} lg={4}>
            <img
              style={{
                borderRadius: "20px",
                boxShadow: "0.5em 1em 1em rgb(64,64,70)",
                width: "80%",
                ...(smDown && {
                  margin: "0, auto",
                  width: "100%",
                  height: "350px",
                  marginBottom: "30px",
                }),
                ...(mdDown && {
                  margin: "0, auto",
                  width: "50%",
                  height: "350px",
                }),
              }}
              src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
              alt={data?.title}
            />
          </Grid>
          <Grid item container direction="column" lg={7}>
            <Typography variant="h4" aliign="center" gutterBottom>
              {data?.title} ({data?.release_date.split("-")[0]})
            </Typography>
            <Typography variant="h5" aliign="center" gutterBottom>
              {data?.tagline}
            </Typography>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "space-around",
                margin: "10px 0 !important",
                [theme.breakpoints.down("sm")]: {
                  flexDirection: "column",
                  flexWrap: "wrap",
                },
              }}
            >
              <Rating readOnly value={data.vote_average / 2} precision={0.1} />
              <Typography variant="subtitle" gutterBottom sx={{ ml: 1 }}>
                {data.vote_average}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default MovieInformation;
