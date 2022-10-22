import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MovieInformation, Movies, Profile, Actors, Navbar } from "./";

const App = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
      }}
    >
      <CssBaseline />
      <Navbar />
      <Box
        sx={{
          flexGrow: 1,
          padding: "2em",
        }}
      >
        <Box
          sx={{
            height: "70px",
          }}
        >
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieInformation />} />
            <Route path="/actors" element={<Actors />} />
            <Route path="/profile/:id" element={<Profile />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
