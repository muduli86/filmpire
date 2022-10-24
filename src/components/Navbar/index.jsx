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
  const isAuthenticated = true;
  return (
    <>
      <AppBar position='fixed' component='nav'>
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
              color='inherit'
              edge='start'
              style={{ outline: "none" }}
              onClick={() => {}}
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
            color='inherit'
            sx={{
              ml: 1,
            }}
            onClick={() => {}}
          >
            {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
            {!isMobile && "Search...."}
            <div>
              {!isAuthenticated ? (
                <Button color='inherit' onClick={() => {}}>
                  Login &nbsp; <AccountCircle />
                </Button>
              ) : (
                <Button
                  color='inherit'
                  component={Link}
                  to={`/profile/:id`}
                  onClick={() => {}}
                >
                  {!isMobile && <> Movies</>}
                  <Avatar
                    style={{ width: 30, height: 30 }}
                    alt='Profile'
                    src='https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-avatar-placeholder-png-image_3416697.jpg'
                  />
                </Button>
              )}
            </div>
            {isMobile && "Search...."}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
