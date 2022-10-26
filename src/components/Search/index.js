import React, { useState, useEffect } from "react";
import { Box, TextField, InputAdornment, useTheme } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { searchMovie } from "../../features/currentGenreOrCategory";

const Search = () => {
  const theme = useTheme();
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      dispatch(searchMovie(query));
    }
  };
  return (
    <Box
      sx={{
        [theme.breakpoints.down("sm")]: {
          display: "flex",
          justifyContent: "center",
          width: "100%",
        },
      }}
    >
      <TextField
        onKeyDown={handleKeyDown}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        variant="standard"
        InputProps={{
          sx: {
            color: theme.palette.mode === "light" && "black",
            filter: theme.palette.mode === "light" && "invert(1)",
            [theme.breakpoints.down("sm")]: {
              marginTop: "-10px",
              marginBottom: "10px",
            },
          },

          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Search;
