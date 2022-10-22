import React from "react";

import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  // const xsUp = useMediaQuery(theme.breakpoints.up("sm"));
  // const xsDown = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => {}}
              sx={{
                height: "80px",
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "240px",
              }}
            >
              <Menu
                sx={{
                  display: { sm: "none", xs: "block" },
                  marginRight: (theme) => theme.spacing(2),
                }}
              />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
