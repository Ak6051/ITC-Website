import * as React from "react";
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
  const [dropdowns, setDropdowns] = React.useState({ practice: null });
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDropdownOpen = (event, key) => {
    setDropdowns({ ...dropdowns, [key]: event.currentTarget });
  };

  const handleDropdownClose = (key) => {
    setDropdowns((prev) => ({ ...prev, [key]: null }));
  };

  const handleScrollToSection = (id) => {
    navigate(`/practice-areas#${id}`);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
    handleDropdownClose("practice");
  };

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#fff", color: "#000", boxShadow: "none", borderBottom: "1px solid #e0e0e0", zIndex: 1100 }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={() => setMobileOpen(!mobileOpen)} sx={{ display: { xs: "block", md: "none" } }}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: "pointer" }} onClick={() => navigate("/")}> 
            <img src="11.svg" alt="Logo" style={{ width: "200px", height: "auto" }} />
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            <Button onClick={() => navigate("/about")} color="inherit">About Us</Button>
            <Button onClick={() => navigate("/service")} color="inherit">Services</Button>
            <Button onClick={() => navigate("/candidate-login")} color="inherit">Register Candidates</Button>
            <Button onClick={() => navigate("/employer-login")} color="inherit">Employer</Button>
            <Button onClick={() => navigate("/login")} color="inherit">Recruiter</Button>
            
            <Button color="inherit" onClick={(e) => handleDropdownOpen(e, "practice")} endIcon={<ArrowDropDownIcon />}>
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
                <MenuItem key={item.id} onClick={() => handleScrollToSection(item.id)}>
                  {item.label}
                </MenuItem>
              ))}
            </Menu>
            
            <Button onClick={() => navigate("/contactUs")} color="inherit">Contact Us</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>
        <List>
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
          <ListItem button onClick={() => navigate("/employer-login")}>
            <ListItemText primary="Employer" />
          </ListItem>
          <ListItem button onClick={() => navigate("/login")}>
            <ListItemText primary="Recruiter" />
          </ListItem>
          <Divider />
          <ListItem button onClick={(e) => handleDropdownOpen(e, "practice")}>
            <ListItemText primary="Practice Areas" />
          </ListItem>
        </List>
      </Drawer>

      <Box sx={{ marginTop: "64px" }} />
    </>
  );
}