import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* Hamburger Menu Icon (visible only on small screens) */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo / Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Job Portal
        </Typography>

        {/* Nav Links (hidden on extra-small screens) */}
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Button color="inherit">Dashboard</Button>
          <Button color="inherit">Saved Jobs</Button>
          <Button color="inherit">Applied Jobs</Button>
          <Button color="inherit">Profile</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
