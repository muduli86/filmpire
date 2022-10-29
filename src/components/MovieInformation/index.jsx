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

import genreIcons from "../../assets/genres";

import { useGetMovieInfoQuery, useGetGenresQuery } from "../../services/TMDB";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

//images
import dummyImage from "../../assets/images/gender0.png";

const MovieInformation = () => {
  const { id } = useParams();
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const { data, isFetching, error } = useGetMovieInfoQuery(id);
  const dispatch = useDispatch();

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
                  width: "60%",
                  height: "350px",
                }),
                ...(smDown && {
                  margin: "0, auto",
                  width: "100%",
                  height: "350px",
                  marginBottom: "30px",
                }),
              }}
              src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
              alt={data?.title}
            />
          </Grid>
          <Grid item container direction="column" lg={7}>
            <Typography variant="h3" align="center" gutterBottom>
              {data?.title} ({data?.release_date.split("-")[0]})
            </Typography>
            <Typography variant="h5" align="center" gutterBottom>
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
              <Box display="flex" aliign="center">
                <Rating
                  readOnly
                  value={data.vote_average / 2}
                  precision={0.1}
                />
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  sx={{ ml: 1, mr: 1 }}
                >
                  {data.vote_average}/10
                </Typography>
              </Box>

              <Typography variant="h6" gutterBottom>
                {data.runtime}min
                {data.spoken_languages.length > 0 &&
                  data.spoken_languages.map((language) => `/ ${language.name}`)}
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                margin: "10px 0 !important",
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              {data.genres.length > 0 &&
                data.genres.map((genre, index) => (
                  <Link
                    key={genre.id}
                    to="/"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      textDecoration: "none",
                      ...(smDown && {
                        padding: "0.5rem 1rem",
                      }),
                    }}
                    onClick={() => dispatch(selectGenreOrCategory(genre.id))}
                  >
                    <img
                      src={genreIcons[genre?.name?.toLowerCase()]}
                      style={{
                        marginRight: "10px",
                      }}
                      height={30}
                    />
                    <Typography color="textPrimary" variant="subtitle">
                      {genre.name}
                    </Typography>
                  </Link>
                ))}
            </Grid>

            <Typography variant="h5" gutterBottom sx={{ mt: "10px" }}>
              Overview
            </Typography>
            <Typography variant="inherit" sx={{ mb: "2rem" }}>
              {data.overview}
            </Typography>
            <Typography variant="h5" gutterBottom>
              Top Cast
            </Typography>
            <Grid container spacing={2}>
              {data.credits?.cast?.map((char, i) => (
                <Grid
                  key={i}
                  item
                  xs={4}
                  md={2}
                  component={Link}
                  to={`/actors/${char.id}`}
                  sx={{ textDecoration: "none" }}
                >
                  <img
                    src={
                      char.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${char.profile_path}`
                        : dummyImage
                    }
                    style={{
                      width: "100%",
                      height: "8em",
                      maxWidth: "7em",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                  <Typography>{char.name}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default MovieInformation;
