import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Grid,
  CircularProgress,
  useMediaQuery,
  Box,
  useTheme,
} from "@mui/material";
import { Movie as MovieIcon, ArrowBack } from "@mui/icons-material";
import {
  useGetActorInformationQuery,
  useGetActorMoviesQuery,
} from "../../services/TMDB";
import MovieList from "../MovieList";
import Pagination from "../Pagination";

const Actors = () => {
  const { id } = useParams();
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const { data, isFetching, error } = useGetActorInformationQuery(id);
  const {
    data: actorMoviesData,
    isFetching: isFetchingActorMoviesData,
    error: errroActorMoviesData,
  } = useGetActorMoviesQuery({ id: id, page: page });

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  return (
    <>
      {/* Actor Biodata */}
      {isFetching && (
        <Box display='flex' justifyContent='center'>
          <CircularProgress />
        </Box>
      )}
      {error && (
        <Box display='flex' justifyContent='center' alignItems='center'>
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate({ pathname: "./" })}
          ></Button>
        </Box>
      )}
      {!isFetching && (
        <Grid
          container
          spacing={3}
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
          <Grid item sm={12} lg={4} xl={4}>
            <img
              style={{
                borderRadius: "20px",
                maxWidth: "90%",
                objectFit: "cover",
                boxShadow: "0.5em 1em 1em rgb(64,64,70)",

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
            direction='column'
            lg={7}
            xl={8}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant='h2' gutterBottom>
              {data?.name}
            </Typography>
            <Typography variant='h5' gutterBottom>
              Born: {data?.birthday}
            </Typography>
            <Typography variant='body2' align='justify' paragraph>
              {data?.biography || "Sorry... No biography yet!!"}
            </Typography>
            <Box
              sx={{
                mt: "2rem",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Button
                variant='contained'
                color='primary'
                endIcon={<MovieIcon />}
                target='_blank'
                rel='noopener noreferrer'
                href={`https://www.imdb.com/name/${data?.imdb_id}/`}
              >
                imdb
              </Button>
              <Button
                color='primary'
                startIcon={<ArrowBack />}
                rel='noopener noreferrer'
                onClick={() => navigate(-1)}
              >
                Back
              </Button>
            </Box>
          </Grid>
        </Grid>
      )}
      {/* Actor Movies */}
      {!isFetchingActorMoviesData && (
        <Box sx={{ margin: "2rem 0" }}>
          <Typography variant='h3' gutterBottom align='center'>
            Movies
          </Typography>
          <MovieList data={actorMoviesData} numberofMovies={12} />
          <Pagination
            page={page}
            setPage={setPage}
            pages={actorMoviesData.total_pages}
          />
        </Box>
      )}
      {isFetchingActorMoviesData && (
        <Box display='flex' justifyContent='center'>
          <CircularProgress />
        </Box>
      )}
      {errroActorMoviesData && (
        <Box display='flex' justifyContent='center' alignItems='center'>
          <Typography variant='inherit' gutterBottom align='center'>
            Failed to load movies
          </Typography>
          <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)}>
            Back
          </Button>
        </Box>
      )}
    </>
  );
};

export default Actors;
