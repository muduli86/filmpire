import React, { useState } from "react";

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
import NavDrawer from "./NavDrawer";
import Search from "../Search";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const theme = useTheme();
  const isAuthenticated = true;
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            height: "80px",
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "240px",
            [theme.breakpoints.down("sm")]: {
              marginLeft: "0",
              flexWrap: "wrap",
            },
          }}
        >
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => setDrawerOpen((prevDrawerOpen) => !prevDrawerOpen)}
              sx={{
                marginRight: (theme) => theme.spacing(2),
                [theme.breakpoints.up("sm")]: {
                  display: "none",
                },
              }}
            >
              <Menu />
            </IconButton>
          )}

          <IconButton
            color="inherit"
            sx={{
              ml: 1,
            }}
            onClick={() => {}}
          >
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
          {!isMobile && <Search />}
          <div>
            {!isAuthenticated ? (
              <Button color="inherit" onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </Button>
            ) : (
              <Button
                color="inherit"
                component={Link}
                to={`/profile/:id`}
                onClick={() => {}}
                sx={{
                  "&:hover": {
                    color: "white !important",
                    textDecoration: "none",
                  },
                }}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <Avatar
                  style={{ width: 30, height: 30 }}
                  alt="Profile"
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
                />
              </Button>
            )}
          </div>
          {isMobile && <Search />}
        </Toolbar>
      </AppBar>
      <NavDrawer
        isMobile={isMobile}
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
      />
    </>
  );
};

export default Navbar;
