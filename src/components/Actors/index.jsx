import React, { useState } from "react";
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
import {
  useGetActorInformationQuery,
  useGetActorMoviesQuery,
} from "../../services/TMDB";

const Actors = () => {
  const { id } = useParams();
  const theme = useTheme();
  const { data, isFetching, error } = useGetActorInformationQuery(id);
  const {
    data: actorMoviesData,
    isFetching: isFetchingActorMoviesData,
    error: errroActorMoviesData,
  } = useGetActorMoviesQuery(id);

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {/* Actor Biodata */}
      {isFetching && (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      )}
      {!isFetching && (
        <Grid
          container
          sx={{
            margin: "10px 0 !important",
            display: "flex",
            justifyContent: "space-around",
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
                ...(mdDown && {
                  margin: "0, auto",
                  width: "50%",
                  height: "450px",
                }),
                ...(smDown && {
                  margin: "0, auto",
                  width: "100%",
                  height: "450px",
                  marginBottom: "30px",
                }),
              }}
              src={`https://image.tmdb.org/t/p/w500/${data?.profile_path}`}
              alt={data?.title}
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            lg={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h2">{data?.name}</Typography>
            <Typography variant="h5">Born: {data?.birthday}</Typography>
            <Typography variant="inherit" gutterBottom>
              {data?.biography}
            </Typography>
            <Button
              endIcon={<MovieIcon />}
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.imdb.com/name/${data?.imdb_id}/`}
            >
              imdb
            </Button>
          </Grid>
        </Grid>
      )}
      {/* Actor Movies */}
    </>
  );
};

export default Actors;
