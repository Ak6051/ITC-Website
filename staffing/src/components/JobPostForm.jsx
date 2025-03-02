import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  Checkbox,
  FormControlLabel,
  AppBar,
  Toolbar,
  Menu,
  MenuItem as DropdownItem,
} from "@mui/material";

import { Dashboard } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";

const JobPostForm = () => {
  const navigate = useNavigate();

  // Dropdown ke liye state management
  const [jobAnchorEl, setJobAnchorEl] = useState(null);
  const [candidatesAnchorEl, setCandidatesAnchorEl] = useState(null);
  const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);

  const handleMenuOpen = (event, setAnchor) => {
    setAnchor(event.currentTarget);
  };

  const handleMenuClose = (setAnchor) => {
    setAnchor(null);
  };

  // Dashboard click handler
  const handleDashboardClick = () => {
    navigate("/recruiter");
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: "flex-start" }}>
          <Dashboard sx={{ marginRight: 2 }} />
          <Typography
            variant="h6"
            sx={{ marginRight: 4, cursor: "pointer" }}
            onClick={handleDashboardClick}
          >
            Dashboard
          </Typography>

          {/* Jobs Dropdown */}
          <Button
            color="inherit"
            onClick={(e) => handleMenuOpen(e, setJobAnchorEl)}
            endIcon={<ArrowDropDownIcon />}
          >
            Jobs
          </Button>
          <Menu
            anchorEl={jobAnchorEl}
            open={Boolean(jobAnchorEl)}
            onClose={() => handleMenuClose(setJobAnchorEl)}
          >
            <DropdownItem onClick={() => handleMenuClose(setJobAnchorEl)}>
              Add New Job
            </DropdownItem>
            <DropdownItem onClick={() => handleMenuClose(setJobAnchorEl)}>
              Manage Job
            </DropdownItem>
          </Menu>

          {/* Candidates Dropdown */}
          <Button
            color="inherit"
            onClick={(e) => handleMenuOpen(e, setCandidatesAnchorEl)}
            endIcon={<ArrowDropDownIcon />}
          >
            Candidates
          </Button>
          <Menu
            anchorEl={candidatesAnchorEl}
            open={Boolean(candidatesAnchorEl)}
            onClose={() => handleMenuClose(setCandidatesAnchorEl)}
          >
            <DropdownItem onClick={() => handleMenuClose(setCandidatesAnchorEl)}>
              New Application
            </DropdownItem>
            <DropdownItem onClick={() => handleMenuClose(setCandidatesAnchorEl)}>
              Manage Candidates
            </DropdownItem>
          </Menu>

          {/* Settings Dropdown */}
          <Button
            color="inherit"
            onClick={(e) => handleMenuOpen(e, setSettingsAnchorEl)}
            endIcon={<ArrowDropDownIcon />}
          >
            Settings
          </Button>
          <Menu
            anchorEl={settingsAnchorEl}
            open={Boolean(settingsAnchorEl)}
            onClose={() => handleMenuClose(setSettingsAnchorEl)}
          >
            <DropdownItem onClick={() => handleMenuClose(setSettingsAnchorEl)}>
              Remove Account
            </DropdownItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Form Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "40px",
          background: "#F8F8F8",
        }}
      >
        <Box
          sx={{
            width: "800px",
            background: "white",
            borderRadius: "10px",
            boxShadow: 3,
            padding: "20px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              background: "#E7F0FA",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            Job Detail
          </Typography>

          <Box sx={{ display: "flex", gap: "10px", marginTop: "15px" }}>
            <TextField
              fullWidth
              label="Job Title/Role"
              placeholder="Enter a Job Title / Role"
            />
            <TextField
              fullWidth
              label="No. of Openings"
              placeholder="Enter Number"
              type="number"
            />
          </Box>

          <Box sx={{ display: "flex", gap: "10px", marginTop: "15px" }}>
            <TextField fullWidth select label="Min Experience">
              <MenuItem value="0">0 Years</MenuItem>
              <MenuItem value="1">1 Year</MenuItem>
              <MenuItem value="2">2+ Years</MenuItem>
            </TextField>
            <TextField fullWidth select label="Max Experience">
              <MenuItem value="2">2 Years</MenuItem>
              <MenuItem value="5">5 Years</MenuItem>
              <MenuItem value="10">10+ Years</MenuItem>
            </TextField>
            <TextField fullWidth select label="Gender Preference">
              <MenuItem value="any">Any</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </TextField>
          </Box>

          <FormControlLabel
            control={<Checkbox />}
            label="Hide Salary from jobseekers"
            sx={{ marginTop: "10px" }}
          />

          <TextField
            fullWidth
            multiline
            rows={4}
            label="Job Description"
            placeholder="Please specify job requirements, skills, training, etc."
            sx={{ marginTop: "15px" }}
          />

          <Button
            variant="contained"
            sx={{
              width: "100%",
              marginTop: "20px",
              backgroundColor: "#007bff",
              "&:hover": { backgroundColor: "#0056b3" },
            }}
          >
            Continue →
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default JobPostForm;
