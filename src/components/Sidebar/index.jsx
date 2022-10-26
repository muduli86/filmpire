import React, { useState } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  ListItemIcon,
  Box,
  CircularProgress,
  useTheme,
  styled,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useGetGenresQuery } from "../../services/TMDB";
import { useDispatch, useSelector } from "react-redux";

import genreIcons from "../../assets/genres";
import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

const blueLogo =
  "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";
const redLogo =
  "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";

const Sidebar = ({ drawerOpen }) => {
  const theme = useTheme();
  const { data, isFetching } = useGetGenresQuery();
  const dispatch = useDispatch();

  return (
    <>
      <Link
        to="/"
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "10% 0",
        }}
      >
        <img
          src={theme.palette.mode === "light" ? blueLogo : redLogo}
          style={{
            width: "70%",
          }}
          alt="Logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link
            key={value}
            style={{
              color: theme.palette.text.primary,
              textDecoration: "none",
            }}
            to="/"
          >
            <ListItem
              onClick={() => dispatch(selectGenreOrCategory(value))}
              button
            >
              <ListItemIcon>
                <img
                  src={genreIcons[label.toLowerCase()]}
                  // style={{
                  //   filter:
                  //     theme.palette.mode === "dark" ? "dark" : "invert(1)",
                  // }}
                  height={30}
                />
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {isFetching && (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        )}
        {!isFetching &&
          data.genres.map(({ name, id }) => (
            <Link
              key={name}
              style={{
                color: theme.palette.text.primary,
                textDecoration: "none",
              }}
              to="/"
            >
              <ListItem
                onClick={() => dispatch(selectGenreOrCategory(id))}
                button
              >
                <ListItemIcon>
                  <img
                    src={genreIcons[name.toLowerCase()]}
                    // style={{
                    //   filter:
                    //     theme.palette.mode === "dark" ? "dark" : "invert(1)",
                    // }}
                    height={30}
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
            </Link>
          ))}
      </List>
    </>
  );
};

export default Sidebar;
