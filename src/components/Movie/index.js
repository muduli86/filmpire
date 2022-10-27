import React from "react";
import {
  Typography,
  Grid,
  Grow,
  Tooltip,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Scale } from "@mui/icons-material";

import "./style.css";

const Movie = ({ movie, i }) => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.up("xs"));
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      lg={4}
      xl={2}
      sx={{
        padding: "10px",
      }}
    >
      <Grow in key={i} timeout={(i + 1) * 250}>
        <Link
          to={`/movies/${movie.id}`}
          className="movieLink"
          style={{
            alignItems: "center",
            fontWeight: "bolder",
            textDecoration: "none",
            display: xs && "flex",
            flexDirection: xs && "column",
          }}
        >
          {
            <img
              className="movieImage"
              style={{
                borderRadius: "20px",
                height: "300px",
                marginBottom: "10px",
              }}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : `https://www.fillmurray.com/200/300`
              }
              alt={movie.title}
            />
          }
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.text.primary,
              textOverflow: "ellipsis",
              width: "230px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              mt: "10px",
              mb: 0,
              textAlign: "center",
            }}
          >
            {movie.title}
          </Typography>
          <Tooltip disableTouchListener title={`${movie.vote_average}/ 10`}>
            <div>
              <Rating readOnly value={movie.vote_average / 2} precision={0.1} />
            </div>
          </Tooltip>
        </Link>
      </Grow>
    </Grid>
  );
};

export default Movie;
