import { Drawer, useTheme, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "../Sidebar";

const NavDrawer = ({ isMobile, drawerOpen, setDrawerOpen }) => {
  const theme = useTheme();
  const drawerWidth = 240;
  const xs = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <div>
      <nav
        style={{
          width: xs && drawerWidth,
          flexShrink: xs && 0,
          height: xs && 100,
        }}
      >
        {isMobile ? (
          <Drawer
            variant="temporary"
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen((prevDrawerOpen) => !prevDrawerOpen)}
            PaperProps={{
              sx: {
                width: drawerWidth,
              },
            }}
            ModalProps={{ keepMounted: true }}
          >
            <Sidebar />
          </Drawer>
        ) : (
          <Drawer variant="permanent" open>
            <Sidebar />
          </Drawer>
        )}
      </nav>
    </div>
  );
};

export default NavDrawer;
