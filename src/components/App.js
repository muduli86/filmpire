import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { MovieInformation, Movies, Profile, Actors, Navbar } from "./";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
      }}
    >
      <CssBaseline />
      <Navbar />
      <main
        style={{
          flexGrow: 1,
          padding: "2em",
        }}
      >
        <div
          style={{
            height: "70px",
          }}
        ></div>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
