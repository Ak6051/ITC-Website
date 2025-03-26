
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function PrimarySearchAppBar() {
  const [dropdowns, setDropdowns] = useState({ practice: null });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownOpen = (event, key) => {
    setDropdowns({ ...dropdowns, [key]: event.currentTarget });
  };

  const handleDropdownClose = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: null }));
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: scrolled ? "#132338" : "transparent",
          transition: "background-color 0.3s ease-in-out",
          color: "#fff",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer", marginTop: 2, marginLeft: "70px" }}
            onClick={() => navigate("/")}
          >
            <img src="24.png" alt="Logo" style={{ width: "200px", height: "auto" }} />
          </Typography>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              fontSize: { md: "1.2rem", lg: "1.5rem" },
              padding: { md: "10px 20px", lg: "15px 30px" },
              justifyContent: "center",
              flexGrow: 1,
            }}
          >
                     <Button onClick={() => navigate("/about")} color="inherit"  sx={{ textTransform: "none" , fontSize:"1.1rem"}}>
               About Us
             </Button>
            <Button onClick={() => navigate("/service")} color="inherit" sx={{ textTransform: "none" ,fontSize:"1.1rem"}}>
              Services             </Button>
             <Button onClick={() => navigate("/open-job")} color="inherit" sx={{ textTransform: "none", fontSize:"1.1rem" }}>
               Job Opening
             </Button>
             <Button onClick={() => navigate("/candidate-login")} color="inherit" sx={{ textTransform: "none" ,fontSize:"1.1rem"}}>
               Candidate Login
            </Button>
             <Button onClick={() => navigate("/employer-login")} color="inherit" sx={{ textTransform: "none",fontSize:"1.1rem" }}>
               Employer
            </Button>
             <Button onClick={() => navigate("/login")} color="inherit" sx={{ textTransform: "none",fontSize:"1.1rem" }}>
              Recruiter
            </Button>

            <Button
              color="inherit"
              onClick={(e) => handleDropdownOpen(e, "practice")}
              endIcon={<ArrowDropDownIcon />}
              sx={{ textTransform: "none", fontSize: "1.1rem" }}
            >
              Practice Areas
            </Button>

            <Menu
              anchorEl={dropdowns.practice}
              open={Boolean(dropdowns.practice)}
              onClose={() => handleDropdownClose("practice")}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {[
                { id: "manufacturing-technology", label: "Manufacturing & Technology" },
                { id: "service-distribution", label: "Service / Distribution" },
                { id: "accounting-finance", label: "Accounting / Finance" },
                { id: "financial-services-banking", label: "Financial Services / Banking" },
                { id: "private-equity", label: "Private Equity" },
                { id: "life-sciences", label: "Life Sciences" },
                { id: "healthcare", label: "Healthcare" },
                { id: "insurance", label: "Insurance" },
              ].map((item) => (
                <MenuItem key={item.id} onClick={() => navigate(`/practice-areas#${item.id}`)}>
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
            <Button onClick={() => navigate("/contactUs")} color="inherit" sx={{ textTransform: "none",fontSize:"1.1rem" }}>
              Contact Us
          </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <List>
          <ListItem button onClick={() => navigate("/")}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => navigate("/about")}>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem button onClick={() => navigate("/service")}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button onClick={() => navigate("/contactUs")}>
            <ListItemText primary="Contact Us" />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => navigate("/open-job")}>
            <ListItemText primary=" Job Opening" />
          </ListItem>
          <ListItem button onClick={() => navigate("/candidate-login")}>
            <ListItemText primary=" Candidate Login" />
          </ListItem>
          <ListItem button onClick={() => navigate("/employer-login")}>
            <ListItemText primary=" Employer Login" />
          </ListItem>
          <ListItem button onClick={() => navigate("/login")}>
            <ListItemText primary=" Recruiter Login" />
          </ListItem>

          <Divider />

          <ListItem button onClick={(e) => handleDropdownOpen(e, "practice")}>
            <ListItemText primary="Practice Areas" />
          </ListItem>
        </List>
      </Drawer>

     
    </>
  );
}
