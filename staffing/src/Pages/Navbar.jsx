// // import * as React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { Box, AppBar, Toolbar, Typography, Button, Menu, MenuItem, IconButton, Badge } from '@mui/material';
// // import MailIcon from '@mui/icons-material/Mail';
// // import NotificationsIcon from '@mui/icons-material/Notifications';
// // import AccountCircle from '@mui/icons-material/AccountCircle';
// // import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// // import LoginIcon from '@mui/icons-material/Login';

// // export default function PrimarySearchAppBar() {
// //   const [dropdowns, setDropdowns] = React.useState({
// //     jobs: null,
// //     career: null,
// //     consultant: null,
// //     employer: null,
// //   });

// //   const navigate = useNavigate();

// //   // Dropdown Open Handler
// //   const handleDropdownOpen = (event, key) => {
// //     setDropdowns({ ...dropdowns, [key]: event.currentTarget });
// //   };

// //   // Dropdown Close Handler
// //   const handleDropdownClose = (key) => {
// //     setDropdowns({ ...dropdowns, [key]: null });
// //   };

// //   // Redirect Functions
// //   const handleJobPostRedirect = () => {
// //     handleDropdownClose('employer');
// //     navigate('/employer-login');
// //   };

// //   const handleRegister = () => {
// //     handleDropdownClose('employer');
// //     navigate('/register');
// //   };

// //   const handleLogin = () => {
// //     handleDropdownClose('employer');
// //     navigate('/login');
// //   };

// //   const handlecontact = () => {
// //     navigate('/contactUs')
// //   }

// //   const handleAbout = () =>{
// //     navigate('/about')
// //   }

// //   const handleService = () =>{
// //     navigate('/service')
// //   }

// //   return (
// //     <Box sx={{ flexGrow: 1 }}>
// //       <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
// //         <Toolbar>

// //           {/* Logo */}
// //           <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
// //             <img
// //               src="11.svg"
// //               alt="Logo"
// //               style={{ cursor: 'pointer', width: '190px', height: 'auto' }}
// //               onClick={() => navigate('/')}
// //             />
// //           </Typography>

// //           {/* Left Side - Jobs, Career, Consultant */}
// //           <Box sx={{ display: 'flex', gap: 2, ml: 3 }}>
// //             {/* Jobs Dropdown */}
// //             {/* <Box>
// //               <Button color="inherit" onClick={(e) => handleDropdownOpen(e, 'jobs')} endIcon={<ArrowDropDownIcon />}>
// //                 Jobs
// //               </Button>
// //               <Menu
// //                 anchorEl={dropdowns.jobs}
// //                 open={Boolean(dropdowns.jobs)}
// //                 onClose={() => handleDropdownClose('jobs')}
// //                 anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
// //                 transformOrigin={{ vertical: 'top', horizontal: 'left' }}
// //               >
// //                 <MenuItem onClick={() => handleDropdownClose('jobs')}>Jobs by Category</MenuItem>
// //                 <MenuItem onClick={() => handleDropdownClose('jobs')}>Jobs by Skill</MenuItem>
// //                 <MenuItem onClick={() => handleDropdownClose('jobs')}>Jobs by Role</MenuItem>
// //               </Menu>
// //             </Box> */}
// // {/* 
// //             Career Dropdown
// //             <Box>
// //               <Button color="inherit" onClick={(e) => handleDropdownOpen(e, 'career')} endIcon={<ArrowDropDownIcon />}>
// //                 Career
// //               </Button>
// //               <Menu
// //                 anchorEl={dropdowns.career}
// //                 open={Boolean(dropdowns.career)}
// //                 onClose={() => handleDropdownClose('career')}
// //                 anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
// //                 transformOrigin={{ vertical: 'top', horizontal: 'left' }}
// //               >
// //                 <MenuItem onClick={() => handleDropdownClose('career')}>Career Advice</MenuItem>
// //                 <MenuItem onClick={() => handleDropdownClose('career')}>Resume Writing</MenuItem>
// //               </Menu>
// //             </Box> */}

// //             {/* Consultant Dropdown */}
// //             {/* <Box>
// //               <Button color="inherit" onClick={(e) => handleDropdownOpen(e, 'consultant')} endIcon={<ArrowDropDownIcon />}>
// //                 Consultant
// //               </Button>
// //               <Menu
// //                 anchorEl={dropdowns.consultant}
// //                 open={Boolean(dropdowns.consultant)}
// //                 onClose={() => handleDropdownClose('consultant')}
// //                 anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
// //                 transformOrigin={{ vertical: 'top', horizontal: 'left' }}
// //               >
// //                 <MenuItem onClick={() => handleDropdownClose('consultant')}>Consultant Login</MenuItem>
// //                 <MenuItem onClick={() => handleDropdownClose('consultant')}>Consultant Packages</MenuItem>
// //               </Menu>
// //             </Box> */}
// //             <Button onClick={handleAbout} color ="inherit">
// //               About Us
// //             </Button>
// //             <Button onClick={handleService} color ="inherit">
// //               Services
// //             </Button>
// //             <Button onClick={handlecontact} color ="inherit">
// //               Contact Us
// //             </Button>
// //           </Box>

// //           <Box sx={{ flexGrow: 1 }} />

// //           {/* Employer login */}
// //           <Box>
// //             <Button
// //               variant="contained"
// //               startIcon={<LoginIcon />}
// //               onClick={handleJobPostRedirect}
// //               sx={{ backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#1565c0' } }}
// //             >
// //               Employer Login
// //             </Button>
// //           </Box>

// //           {/* Right Side - For Employer Dropdown */}
// //           <Box>
// //             <Button color="inherit" onClick={(e) => handleDropdownOpen(e, 'employer')} endIcon={<ArrowDropDownIcon />}>
// //               For Recruiter
// //             </Button>
// //             <Menu
// //               anchorEl={dropdowns.employer}
// //               open={Boolean(dropdowns.employer)}
// //               onClose={() => handleDropdownClose('employer')}
// //               anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
// //               transformOrigin={{ vertical: 'top', horizontal: 'right' }}
// //             >
// //               <MenuItem onClick={handleLogin}>Recruiter Login</MenuItem>
// //               <MenuItem onClick={handleRegister}>Register</MenuItem>
// //               <MenuItem onClick={() => handleDropdownClose('employer')}>Contact Us</MenuItem>
// //             </Menu>
// //           </Box>

// //           {/* Notification Icons */}
// //           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: 2 }}>
// //             <IconButton size="large" aria-label="show new mails" color="inherit">
// //               <Badge badgeContent={4} color="error">
// //                 <MailIcon />
// //               </Badge>
// //             </IconButton>
// //             <IconButton size="large" aria-label="show new notifications" color="inherit">
// //               <Badge badgeContent={17} color="error">
// //                 <NotificationsIcon />
// //               </Badge>
// //             </IconButton>
// //             <IconButton size="large" edge="end" aria-label="account of current user" color="inherit">
// //               <AccountCircle />
// //             </IconButton>
// //           </Box>
// //         </Toolbar>
// //       </AppBar>
// //     </Box>
// //   );
// // }
// import * as React from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Box,
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Menu,
//   MenuItem,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Collapse
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
// import LoginIcon from '@mui/icons-material/Login';

// export default function PrimarySearchAppBar() {
//   const [dropdowns, setDropdowns] = React.useState({
//     employer: null,
//   });
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [recruiterOpen, setRecruiterOpen] = React.useState(false);
//   const navigate = useNavigate();

//   // Dropdown Open Handler
//   const handleDropdownOpen = (event, key) => {
//     setDropdowns({ ...dropdowns, [key]: event.currentTarget });
//   };

//   // Dropdown Close Handler
//   const handleDropdownClose = (key) => {
//     setDropdowns({ ...dropdowns, [key]: null });
//   };

//   // Toggle Mobile Drawer
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   // Toggle Mobile Recruiter Dropdown
//   const handleRecruiterToggle = (event) => {
//     event.stopPropagation(); // Prevent drawer from closing
//     setRecruiterOpen(!recruiterOpen);
//   };

//   // Redirect Functions
//   const handleJobPostRedirect = () => {
//     navigate('/employer-login');
//     setMobileOpen(false);
//   };

//   const handleRegister = () => {
//     navigate('/register');
//     setMobileOpen(false);
//   };

//   const handleLogin = () => {
//     navigate('/login');
//     setMobileOpen(false);
//   };

//   const handleContact = () => {
//     navigate('/contactUs');
//     setMobileOpen(false);
//   };

//   const handleAbout = () => {
//     navigate('/about');
//     setMobileOpen(false);
//   };

//   const handleService = () => {
//     navigate('/service');
//     setMobileOpen(false);
//   };

//   // Mobile Drawer
//   const drawer = (
//     <Box sx={{ width: 250 }}>
//       <List>
//         <ListItem button onClick={() => { navigate('/'); setMobileOpen(false); }}>
//           <ListItemText primary="Home" />
//         </ListItem>
//         <ListItem button onClick={handleAbout}>
//           <ListItemText primary="About Us" />
//         </ListItem>
//         <ListItem button onClick={handleService}>
//           <ListItemText primary="Services" />
//         </ListItem>
//         <ListItem button onClick={handleContact}>
//           <ListItemText primary="Contact Us" />
//         </ListItem>
//         <ListItem button onClick={handleJobPostRedirect}>
//           <ListItemText primary="Employer Login" />
//         </ListItem>
//         <ListItem button onClick={handleRecruiterToggle}>
//           <ListItemText primary="For Recruiter" />
//           {recruiterOpen ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//         <Collapse in={recruiterOpen} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItem button sx={{ pl: 4 }} onClick={handleLogin}>
//               <ListItemText primary="Recruiter Login" />
//             </ListItem>
//             <ListItem button sx={{ pl: 4 }} onClick={handleRegister}>
//               <ListItemText primary="Register" />
//             </ListItem>
//             {/* <ListItem button sx={{ pl: 4 }} onClick={handleContact}>
//               <ListItemText primary="Contact Us" />
//             </ListItem> */}
//           </List>
//         </Collapse>
//       </List>
//     </Box>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
//         <Toolbar>
//           {/* Hamburger Menu for Mobile */}
//           <IconButton
//             color="inherit"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ display: { xs: 'block', md: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>

//           {/* Logo */}
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{
//               display: { xs: 'block', sm: 'block' },
//               cursor: 'pointer',
//               flexGrow: 1,
//               ml: { xs: 1, sm: 0 }
//             }}
//             onClick={() => navigate('/')}
//           >
//             <img
//               src="11.svg"
//               alt="Logo"
//               style={{ width: '180px', height: 'auto', }}
//             />
//           </Typography>

//           {/* Desktop Menu */}
//           <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
//             <Button onClick={handleAbout} color="inherit">
//               About Us
//             </Button>
//             <Button onClick={handleService} color="inherit">
//               Services
//             </Button>
//             <Button onClick={handleContact} color="inherit">
//               Contact Us
//             </Button>
//             <Button
//               variant="contained"
//               // startIcon={<LoginIcon />}
//               onClick={handleJobPostRedirect}
//               sx={{ backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#1565c0' } }}
//             >
//               Employer Login
//             </Button>
//             <Button color="inherit" sx={{ backgroundColor: '#1976d2',color:'white', '&:hover': { backgroundColor: '#1565c0' } }} onClick={(e) => handleDropdownOpen(e, 'employer')} endIcon={<ArrowDropDownIcon />}>
//               For Recruiter
//             </Button>
//             <Menu
//               anchorEl={dropdowns.employer}
//               open={Boolean(dropdowns.employer)}
//               onClose={() => handleDropdownClose('employer')}
//               anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//               transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             >
//               <MenuItem onClick={handleLogin}>Recruiter Login</MenuItem>
//               <MenuItem onClick={handleRegister}>Register</MenuItem>
              
//             </Menu>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Drawer for Mobile View */}
//       <Drawer
//         anchor="left"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true,
//         }}
//         sx={{
//           display: { xs: 'block', md: 'none' },
//           '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </Box>
//   );
// }
import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
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
  Collapse,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LoginIcon from "@mui/icons-material/Login";

export default function PrimarySearchAppBar() {
  const [dropdowns, setDropdowns] = React.useState({
    employer: null,
  });
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [recruiterOpen, setRecruiterOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDropdownOpen = (event, key) => {
    setDropdowns({ ...dropdowns, [key]: event.currentTarget });
  };

  const handleDropdownClose = (key) => {
    setDropdowns({ ...dropdowns, [key]: null });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleRecruiterToggle = (event) => {
    event.stopPropagation();
    setRecruiterOpen(!recruiterOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  // ** Mobile Drawer with Modern Styling **
  const drawer = (
    <Box sx={{ width: 280, background: "#f9f9f9", height: "100%" }}>
      <List>
        <ListItem
          button
          onClick={() => handleNavigation("/")}
          sx={listItemStyles}
        >
          <ListItemText primary="🏠 Home" />
        </ListItem>
        <Divider />
        <ListItem
          button
          onClick={() => handleNavigation("/about")}
          sx={listItemStyles}
        >
          <ListItemText primary="ℹ️ About Us" />
        </ListItem>
        <ListItem
          button
          onClick={() => handleNavigation("/service")}
          sx={listItemStyles}
        >
          <ListItemText primary="💼 Services" />
        </ListItem>
        <ListItem
          button
          onClick={() => handleNavigation("/contactUs")}
          sx={listItemStyles}
        >
          <ListItemText primary="📞 Contact Us" />
        </ListItem>
        <Divider />

        <ListItem
          button
          sx={{ ...listItemStyles, bgcolor: "#1976d2", color: "#fff" }}
          onClick={() => handleNavigation("/employer-login")}
        >
          <LoginIcon sx={{ mr: 1 }} />
          <ListItemText primary="Employer Login" />
        </ListItem>

        <Divider />

        {/* Recruiter Dropdown */}
        <ListItem button onClick={handleRecruiterToggle} sx={listItemStyles}>
          <ListItemText primary="📌 For Recruiters" />
          {recruiterOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={recruiterOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              sx={{ ...listItemStyles, pl: 4 }}
              onClick={() => handleNavigation("/login")}
            >
              <ListItemText primary="🔑 Recruiter Login" />
            </ListItem>
            <ListItem
              button
              sx={{ ...listItemStyles, pl: 4 }}
              onClick={() => handleNavigation("/register")}
            >
              <ListItemText primary="📝 Register" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <img
              src="11.svg"
              alt="Logo"
              style={{ width: "180px", height: "auto" }}
            />
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button onClick={() => handleNavigation("/about")} color="inherit">
              About Us
            </Button>
            <Button
              onClick={() => handleNavigation("/service")}
              color="inherit"
            >
              Services
            </Button>
            <Button
              onClick={() => handleNavigation("/contactUs")}
              color="inherit"
            >
              Contact Us
            </Button>
            <Button
              variant="contained"
              // startIcon={<LoginIcon />}
              onClick={() => handleNavigation("/employer-login")}
              sx={{
                backgroundColor: "#1976d2",
                "&:hover": { backgroundColor: "#1565c0" },
              }}
            >
              Employer Login
            </Button>
            <Button
              color="inherit"
              sx={{
                backgroundColor: "#1976d2",color:'white',
                "&:hover": { backgroundColor: "#1565c0" },
              }}
              onClick={(e) => handleDropdownOpen(e, "employer")}
              endIcon={<ArrowDropDownIcon />}
            >
              For Recruiter
            </Button>
            <Menu
              anchorEl={dropdowns.employer}
              open={Boolean(dropdowns.employer)}
              onClose={() => handleDropdownClose("employer")}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem onClick={() => handleNavigation("/login")}>
                Recruiter Login
              </MenuItem>
              <MenuItem onClick={() => handleNavigation("/register")}>
                Register
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile View */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 280,
            borderTopRightRadius: "12px",
            borderBottomRightRadius: "12px",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

// ** Stylish List Item CSS **
const listItemStyles = {
  px: 3,
  py: 1.5,
  fontSize: "1rem",
  borderRadius: "8px",
  transition: "all 0.3s ease",
  "&:hover": { backgroundColor: "#e3f2fd", color: "#1565c0" },
};

