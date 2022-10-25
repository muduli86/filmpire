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

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Most Recent", value: "most_recent" },
];

const genres = [
  { label: "Comedy", value: "comedy" },
  { label: "Animation", value: "animation" },
  { label: "Horror", value: "horror" },
  { label: "Action", value: "action" },
];

const blueLogo =
  "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";
const redLogo =
  "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";

const Sidebar = ({ drawerOpen }) => {
  const theme = useTheme();

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
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img
                  src={blueLogo}
                  style={{
                    filter:
                      theme.palette.mode === "dark" ? "dark" : "invert(1)",
                  }}
                  height={30}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {genres.map(({ label, value }) => (
          <Link
            key={value}
            style={{
              color: theme.palette.text.primary,
              textDecoration: "none",
            }}
            to="/"
          >
            <ListItem onClick={() => {}} button>
              {/* <ListItemIcon>
                <img
                  src={blueLogo}
                  style={{
                    filter:
                      theme.palette.mode === "dark" ? "dark" : "invert(1)",
                  }}
                  height={30}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
};

export default Sidebar;
