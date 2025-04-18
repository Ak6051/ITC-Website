import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Menu, MenuItem, IconButton, Avatar, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import DashboardContent from "./DashboardContent"; // Placeholder for candidate dashboard content

const CandidateNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    navigate("/candidate-login");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Candidate Dashboard
          </Typography>
          <IconButton onClick={handleMenuOpen} color="inherit">
            <Avatar alt="Profile" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => navigate("/profile")}>
              Manage Profile
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      {/* <DashboardContent /> */}
    </Box>
  );
};

export default CandidateNavbar;
