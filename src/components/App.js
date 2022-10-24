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
      <main
        style={{
          flexGrow: 2,
          paddingTop: "5em",
          paddingLeft: "2em",
          paddingRight: "2em",
        }}
      >
        <div
          style={{
            height: "70px",
          }}
        >
          <Routes>
            <Route path='/' element={<Movies />} />
            <Route path='/movies/:id' element={<MovieInformation />} />
            <Route path='/actors' element={<Actors />} />
            <Route path='/profile/:id' element={<Profile />} />
          </Routes>
        </div>
      </main>
    </Box>
  );
};

export default App;
