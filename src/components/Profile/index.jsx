import React, { useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";
import { ExitToApp } from "@mui/icons-material";

import { useSelector } from "react-redux";
import { userSelector } from "../../features/auth";

const Profile = () => {
  const { user } = useSelector(userSelector);
  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  const favoriteMovies = [];
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>
        <Button color="inherit" onClick={logout}>
          Logout &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length ? (
        <Typography variant="h5">Add your favorites...</Typography>
      ) : (
        <Box>
          <Typography variant="h5">Favorites</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Profile;
