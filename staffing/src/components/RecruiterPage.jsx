import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  IconButton,
  Menu,
  MenuItem as DropdownItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Dashboard,
  ArrowDropDown,
  Menu as MenuIcon,
  Work,
  Visibility,
  Notifications,
  Business,
} from "@mui/icons-material";
import RecruiterDashNav from "../Pages/RecruiterDashNav";

const DashboardPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Dropdown state management
  const [jobAnchorEl, setJobAnchorEl] = useState(null);
  const [candidatesAnchorEl, setCandidatesAnchorEl] = useState(null);
  const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Employer count state
  const [employerCount, setEmployerCount] = useState(0);
  

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userType = localStorage.getItem("userType");

    if (!token || userType !== "recruiter") {
        navigate("/login"); // Unauthorized users ko login pe bhejo
    }
}, [navigate]);

  // Fetch employer count on component load
  useEffect(() => {
    const fetchEmployers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/employer/fetch-employer"
        );
        setEmployerCount(response.data.length); // Total employers count
      } catch (error) {
        console.log("Error fetching employers:", error);
      }
    };

    fetchEmployers();
  }, []);

  const handleMenuOpen = (event, setAnchor) => {
    setAnchor(event.currentTarget);
  };

  const handleMenuClose = (setAnchor) => {
    setAnchor(null);
  };

  const handleDashboardClick = () => {
    navigate("/recruiter");
  };

  const handleApplicantsIconClick = () => {
    navigate("/employerUpdate");
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <Box>
      {/* Navbar */}
      {/* <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            sx={{ cursor: "pointer" }}
            onClick={handleDashboardClick}
          >
            Recruiter Dashboard
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                onClick={() => toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => toggleDrawer(false)}
              >
                <Box sx={{ width: 250 }}>
                  <List>
                    <ListItem button onClick={() => navigate("/jobpost")}>
                      <ListItemText primary="Add New Job" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Manage Job" />
                    </ListItem>
                    <ListItem button onClick={() => navigate("/employerUpdate")}>
                      <ListItemText primary="New Application" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Manage Candidates" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Remove Account" />
                    </ListItem>
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                onClick={(e) => handleMenuOpen(e, setJobAnchorEl)}
                endIcon={<ArrowDropDown />}
              >
                Jobs
              </Button>
              <Menu
                anchorEl={jobAnchorEl}
                open={Boolean(jobAnchorEl)}
                onClose={() => handleMenuClose(setJobAnchorEl)}
              >
                <DropdownItem onClick={() => navigate("/jobpost")}>
                  Add New Job
                </DropdownItem>
                <DropdownItem onClick={() => handleMenuClose(setJobAnchorEl)}>
                  Manage Job
                </DropdownItem>
              </Menu>

              <Button
                color="inherit"
                onClick={(e) => handleMenuOpen(e, setCandidatesAnchorEl)}
                endIcon={<ArrowDropDown />}
              >
                Candidates
              </Button>
              <Menu
                anchorEl={candidatesAnchorEl}
                open={Boolean(candidatesAnchorEl)}
                onClose={() => handleMenuClose(setCandidatesAnchorEl)}
              >
                <DropdownItem onClick={() => navigate("/employerUpdate")}>
                  New Application
                </DropdownItem>
                <DropdownItem
                  onClick={() => handleMenuClose(setCandidatesAnchorEl)}
                >
                  Manage Candidates
                </DropdownItem>
              </Menu>

              <Button
                color="inherit"
                onClick={(e) => handleMenuOpen(e, setSettingsAnchorEl)}
                endIcon={<ArrowDropDown />}
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
            </>
          )}
        </Toolbar>
      </AppBar> */}
      <RecruiterDashNav/>

      {/* Cards Section */}
      <Grid container spacing={3} p={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Current Openings</Typography>
              <Typography variant="h4">1</Typography>
              <Typography variant="body2">Total Jobs / Non-Active</Typography>
              <IconButton>
                <Work />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Applicants</Typography>
              <Typography variant="h4">{employerCount}</Typography>
              <Typography variant="body2">Total Employers</Typography>
              <IconButton onClick={handleApplicantsIconClick}>
                <Visibility />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Interview List</Typography>
              <Typography variant="h4">0</Typography>
              <Typography variant="body2">Upcoming / Past</Typography>
              <IconButton>
                <Notifications />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Inquiries</Typography>
              <Typography variant="h4">0</Typography>
              <Typography variant="body2">Read / Unread</Typography>
              <IconButton>
                <Business />
              </IconButton>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardPage;
