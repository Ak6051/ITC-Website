
// // import * as React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import {
// //   Box,
// //   AppBar,
// //   Toolbar,
// //   Typography,
// //   Button,
// //   Menu,
// //   MenuItem,
// //   IconButton,
// //   Drawer,
// //   List,
// //   ListItem,
// //   ListItemText,
// //   Collapse
// // } from '@mui/material';
// // import MenuIcon from '@mui/icons-material/Menu';
// // import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// // import ExpandLess from '@mui/icons-material/ExpandLess';
// // import ExpandMore from '@mui/icons-material/ExpandMore';
// // import LoginIcon from '@mui/icons-material/Login';

// // export default function PrimarySearchAppBar() {
// //   const [dropdowns, setDropdowns] = React.useState({
// //     employer: null,
// //   });
// //   const [mobileOpen, setMobileOpen] = React.useState(false);
// //   const [recruiterOpen, setRecruiterOpen] = React.useState(false);
// //   const navigate = useNavigate();

// //   // Dropdown Open Handler
// //   const handleDropdownOpen = (event, key) => {
// //     setDropdowns({ ...dropdowns, [key]: event.currentTarget });
// //   };

// //   // Dropdown Close Handler
// //   const handleDropdownClose = (key) => {
// //     setDropdowns({ ...dropdowns, [key]: null });
// //   };

// //   // Toggle Mobile Drawer
// //   const handleDrawerToggle = () => {
// //     setMobileOpen(!mobileOpen);
// //   };

// //   // Toggle Mobile Recruiter Dropdown
// //   const handleRecruiterToggle = (event) => {
// //     event.stopPropagation(); // Prevent drawer from closing
// //     setRecruiterOpen(!recruiterOpen);
// //   };

// //   // Redirect Functions
// //   const handleJobPostRedirect = () => {
// //     navigate('/employer-login');
// //     setMobileOpen(false);
// //   };

// //   const handleRegister = () => {
// //     navigate('/register');
// //     setMobileOpen(false);
// //   };

// //   const handleLogin = () => {
// //     navigate('/login');
// //     setMobileOpen(false);
// //   };

// //   const handleContact = () => {
// //     navigate('/contactUs');
// //     setMobileOpen(false);
// //   };

// //   const handleAbout = () => {
// //     navigate('/about');
// //     setMobileOpen(false);
// //   };

// //   const handleService = () => {
// //     navigate('/service');
// //     setMobileOpen(false);
// //   };

// //   // Mobile Drawer
// //   const drawer = (
// //     <Box sx={{ width: 250 }}>
// //       <List>
// //         <ListItem button onClick={() => { navigate('/'); setMobileOpen(false); }}>
// //           <ListItemText primary="Home" />
// //         </ListItem>
// //         <ListItem button onClick={handleAbout}>
// //           <ListItemText primary="About Us" />
// //         </ListItem>
// //         <ListItem button onClick={handleService}>
// //           <ListItemText primary="Services" />
// //         </ListItem>
// //         <ListItem button onClick={handleContact}>
// //           <ListItemText primary="Contact Us" />
// //         </ListItem>
// //         <ListItem button onClick={handleJobPostRedirect}>
// //           <ListItemText primary="Employer Login" />
// //         </ListItem>
// //         <ListItem button onClick={handleRecruiterToggle}>
// //           <ListItemText primary="For Recruiter" />
// //           {recruiterOpen ? <ExpandLess /> : <ExpandMore />}
// //         </ListItem>
// //         <Collapse in={recruiterOpen} timeout="auto" unmountOnExit>
// //           <List component="div" disablePadding>
// //             <ListItem button sx={{ pl: 4 }} onClick={handleLogin}>
// //               <ListItemText primary="Recruiter Login" />
// //             </ListItem>
// //             <ListItem button sx={{ pl: 4 }} onClick={handleRegister}>
// //               <ListItemText primary="Register" />
// //             </ListItem>
// //             {/* <ListItem button sx={{ pl: 4 }} onClick={handleContact}>
// //               <ListItemText primary="Contact Us" />
// //             </ListItem> */}
// //           </List>
// //         </Collapse>
// //       </List>
// //     </Box>
// //   );

// //   return (
// //     <Box sx={{ flexGrow: 1 }}>
// //       <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
// //         <Toolbar>
// //           {/* Hamburger Menu for Mobile */}
// //           <IconButton
// //             color="inherit"
// //             edge="start"
// //             onClick={handleDrawerToggle}
// //             sx={{ display: { xs: 'block', md: 'none' } }}
// //           >
// //             <MenuIcon />
// //           </IconButton>

// //           {/* Logo */}
// //           <Typography
// //             variant="h6"
// //             noWrap
// //             component="div"
// //             sx={{
// //               display: { xs: 'block', sm: 'block' },
// //               cursor: 'pointer',
// //               flexGrow: 1,
// //               ml: { xs: 1, sm: 0 }
// //             }}
// //             onClick={() => navigate('/')}
// //           >
// //             <img
// //               src="11.svg"
// //               alt="Logo"
// //               style={{ width: '180px', height: 'auto', }}
// //             />
// //           </Typography>

// //           {/* Desktop Menu */}
// //           <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
// //             <Button onClick={handleAbout} color="inherit">
// //               About Us
// //             </Button>
// //             <Button onClick={handleService} color="inherit">
// //               Services
// //             </Button>
// //             <Button onClick={handleContact} color="inherit">
// //               Contact Us
// //             </Button>
// //             <Button
// //               variant="contained"
// //               // startIcon={<LoginIcon />}
// //               onClick={handleJobPostRedirect}
// //               sx={{ backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#1565c0' } }}
// //             >
// //               Employer Login
// //             </Button>
// //             <Button color="inherit" sx={{ backgroundColor: '#1976d2',color:'white', '&:hover': { backgroundColor: '#1565c0' } }} onClick={(e) => handleDropdownOpen(e, 'employer')} endIcon={<ArrowDropDownIcon />}>
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

// //             </Menu>
// //           </Box>
// //         </Toolbar>
// //       </AppBar>

// //       {/* Drawer for Mobile View */}
// //       <Drawer
// //         anchor="left"
// //         open={mobileOpen}
// //         onClose={handleDrawerToggle}
// //         ModalProps={{
// //           keepMounted: true,
// //         }}
// //         sx={{
// //           display: { xs: 'block', md: 'none' },
// //           '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
// //         }}
// //       >
// //         {drawer}
// //       </Drawer>
// //     </Box>
// //   );
// // }
// import * as React from "react";
// import { useNavigate } from "react-router-dom";
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
//   Collapse,
//   Divider,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ExpandLess from "@mui/icons-material/ExpandLess";
// import ExpandMore from "@mui/icons-material/ExpandMore";
// import LoginIcon from "@mui/icons-material/Login";

// export default function PrimarySearchAppBar() {
//   const [dropdowns, setDropdowns] = React.useState({
//     employer: null,
//   });
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const [recruiterOpen, setRecruiterOpen] = React.useState(false);
//   const navigate = useNavigate();

//   const handleDropdownOpen = (event, key) => {
//     setDropdowns({ ...dropdowns, [key]: event.currentTarget });
//   };

//   const handleDropdownClose = (key) => {
//     setDropdowns({ ...dropdowns, [key]: null });
//   };

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const handleRecruiterToggle = (event) => {
//     event.stopPropagation();
//     setRecruiterOpen(!recruiterOpen);
//   };

//   const handleNavigation = (path) => {
//     navigate(path);
//     setMobileOpen(false);
//   };

//   // ** Mobile Drawer with Modern Styling **
//   const drawer = (
//     <Box sx={{ width: 280, background: "#f9f9f9", height: "100%" }}>
//       <List>
//         <ListItem
//           button
//           onClick={() => handleNavigation("/")}
//           sx={listItemStyles}
//         >
//           <ListItemText primary="🏠 Home" />
//         </ListItem>
//         <Divider />
//         <ListItem
//           button
//           onClick={() => handleNavigation("/about")}
//           sx={listItemStyles}
//         >
//           <ListItemText primary="ℹ️ About Us" />
//         </ListItem>
//         <ListItem
//           button
//           onClick={() => handleNavigation("/service")}
//           sx={listItemStyles}
//         >
//           <ListItemText primary="💼 Services" />
//         </ListItem>
//         <ListItem
//           button
//           onClick={() => handleNavigation("/contactUs")}
//           sx={listItemStyles}
//         >
//           <ListItemText primary="📞 Contact Us" />
//         </ListItem>
//         <Divider />

//         <ListItem
//           button
//           sx={{ ...listItemStyles, bgcolor: "#1976d2", color: "#fff" }}
//           onClick={() => handleNavigation("/employer-login")}
//         >
//           <LoginIcon sx={{ mr: 1 }} />
//           <ListItemText primary="Employer Login" />
//         </ListItem>

//         <Divider />

//         {/* Recruiter Dropdown */}
//         <ListItem button onClick={handleRecruiterToggle} sx={listItemStyles}>
//           <ListItemText primary="📌 For Recruiters" />
//           {recruiterOpen ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//         <Collapse in={recruiterOpen} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItem
//               button
//               sx={{ ...listItemStyles, pl: 4 }}
//               onClick={() => handleNavigation("/login")}
//             >
//               <ListItemText primary="🔑 Recruiter Login" />
//             </ListItem>
//             <ListItem
//               button
//               sx={{ ...listItemStyles, pl: 4 }}
//               onClick={() => handleNavigation("/register")}
//             >
//               <ListItemText primary="📝 Register" />
//             </ListItem>
//           </List>
//         </Collapse>
//       </List>
//     </Box>
//   );

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar
//         position="static"
//         sx={{
//           backgroundColor: "#fff",
       
//           color: "#000",
//           boxShadow: "none",
//           borderBottom: "1px solid #e0e0e0",
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ display: { xs: "block", md: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{
//               flexGrow: 1,
              
//               cursor: "pointer",
//             }}
//             onClick={() => navigate("/")}
//           >
//             <img
//               src="11.svg"
//               alt="Logo"
//               style={{
//                 width: "200px",
                
          
//                 height: "auto",
//                 background: "transparent", // Ensures no background
//                 mixBlendMode: "multiply",  // Helps remove white backgrounds
//               }}
//             />
          
//           </Typography>


//           {/* Desktop Menu */}
//           <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
//             <Button onClick={() => handleNavigation("/about")} color="inherit">
//               About Us
//             </Button>
//             <Button
//               onClick={() => handleNavigation("/service")}
//               color="inherit"
//             >
//               Services
//             </Button>
//             <Button
//               onClick={() => handleNavigation("/contactUs")}
//               color="inherit"
//             >
//               Contact Us
//             </Button>
//             <Button
//               variant="contained"
//               // startIcon={<LoginIcon />}
//               onClick={() => handleNavigation("/employer-login")}
//               sx={{
//                 backgroundColor: "#1976d2",
//                 "&:hover": { backgroundColor: "#1565c0" },
//               }}
//             >
//               Employer Login
//             </Button>
//             <Button
//               color="inherit"
//               sx={{
//                 backgroundColor: "#1976d2", color: 'white',
//                 "&:hover": { backgroundColor: "#1565c0" },
//               }}
//               onClick={(e) => handleDropdownOpen(e, "employer")}
//               endIcon={<ArrowDropDownIcon />}
//             >
//               For Recruiter
//             </Button>
//             <Menu
//               anchorEl={dropdowns.employer}
//               open={Boolean(dropdowns.employer)}
//               onClose={() => handleDropdownClose("employer")}
//               anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//               transformOrigin={{ vertical: "top", horizontal: "right" }}
//             >
//               <MenuItem onClick={() => handleNavigation("/login")}>
//                 Recruiter Login
//               </MenuItem>
//               <MenuItem onClick={() => handleNavigation("/register")}>
//                 Register
//               </MenuItem>
//             </Menu>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Drawer for Mobile View */}
//       <Drawer
//         anchor="left"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         sx={{
//           display: { xs: "block", md: "none" },
//           "& .MuiDrawer-paper": {
//             boxSizing: "border-box",
//             width: 280,
//             borderTopRightRadius: "12px",
//             borderBottomRightRadius: "12px",
//           },
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </Box>
//   );
// }

// // ** Stylish List Item CSS **
// const listItemStyles = {
//   px: 3,
//   py: 1.5,
//   fontSize: "1rem",
//   borderRadius: "8px",
//   transition: "all 0.3s ease",
//   "&:hover": { backgroundColor: "#e3f2fd", color: "#1565c0" },
// };

// import * as React from "react";
// import { useNavigate } from "react-router-dom";
// import {
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
//   Box,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import LoginIcon from "@mui/icons-material/Login";

// export default function PrimarySearchAppBar() {
//   const [dropdowns, setDropdowns] = React.useState({ practice: null });
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const navigate = useNavigate();

//   const handleDropdownOpen = (event, key) => {
//     setDropdowns({ ...dropdowns, [key]: event.currentTarget });
//   };

//   const handleDropdownClose = (key) => {
//     setDropdowns({ ...dropdowns, [key]: null });
//   };

//   const scrollToSection = (id) => {
//     navigate(`#${id}`);
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
//     handleDropdownClose("practice");
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar
//         position="static"
//         sx={{
//           backgroundColor: "#fff",
//           color: "#000",
//           boxShadow: "none",
//           borderBottom: "1px solid #e0e0e0",
//         }}
//       >
//         <Toolbar>
//           {/* Mobile Menu Icon */}
//           <IconButton
//             color="inherit"
//             edge="start"
//             onClick={() => setMobileOpen(!mobileOpen)}
//             sx={{ display: { xs: "block", md: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>

//           {/* Logo */}
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, cursor: "pointer" }}
//             onClick={() => navigate("/")}
//           >
//             <img src="11.svg" alt="Logo" style={{ width: "200px", height: "auto" }} />
//           </Typography>

//           {/* Desktop Menu */}
//           <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
//             <Button onClick={() => navigate("/about")} color="inherit">
//               About Us
//             </Button>
//             <Button onClick={() => navigate("/service")} color="inherit">
//               Services
//             </Button>
//             <Button onClick={() => navigate("/contactUs")} color="inherit">
//               Contact Us
//             </Button>

//             {/* Employer & Recruiter Buttons */}
//             <Button onClick={() => navigate("/employer-login")} color="inherit">
//               Employer
//             </Button>
//             <Button onClick={() => navigate("/login")} color="inherit">
//               Recruiter
//             </Button>

//             {/* Practice Areas Dropdown */}
//             <Button
//               color="inherit"
//               onClick={(e) => handleDropdownOpen(e, "practice")}
//               endIcon={<ArrowDropDownIcon />}
//             >
//               Practice Areas
//             </Button>
//             <Menu
//               anchorEl={dropdowns.practice}
//               open={Boolean(dropdowns.practice)}
//               onClose={() => handleDropdownClose("practice")}
//               anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//               transformOrigin={{ vertical: "top", horizontal: "right" }}
//             >
//               {[
//                 { label: "Manufacturing & Technology", id: "manufacturing" },
//                 { label: "Service / Distribution", id: "service" },
//                 { label: "Accounting / Finance", id: "accounting" },
//                 { label: "Financial Services / Banking", id: "banking" },
//                 { label: "Private Equity", id: "equity" },
//                 { label: "Life Sciences", id: "life-sciences" },
//                 { label: "Healthcare", id: "healthcare" },
//                 { label: "Insurance", id: "insurance" },
//               ].map((item) => (
//                 <MenuItem key={item.id} onClick={() => scrollToSection(item.id)}>
//                   {item.label}
//                 </MenuItem>
//               ))}
//             </Menu>

//             {/* Employer Login Button */}
//             {/* <Button onClick={() => navigate("/login")} color="inherit" startIcon={<LoginIcon />}>
//               Employer Login
//             </Button> */}
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Mobile Drawer */}
//       <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>
//         <List>
//           <ListItem button onClick={() => navigate("/about")}>
//             <ListItemText primary="About Us" />
//           </ListItem>
//           <ListItem button onClick={() => navigate("/service")}>
//             <ListItemText primary="Services" />
//           </ListItem>
//           <ListItem button onClick={() => navigate("/contactUs")}>
//             <ListItemText primary="Contact Us" />
//           </ListItem>

//           {/* Employer & Recruiter Buttons */}
//           <ListItem button onClick={() => navigate("/employer-login")}>
//             <ListItemText primary="Employer" />
//           </ListItem>
//           <ListItem button onClick={() => navigate("/login")}>
//             <ListItemText primary="Recruiter" />
//           </ListItem>

//           {/* Practice Areas Dropdown */}
//           <ListItem button onClick={(e) => handleDropdownOpen(e, "practice")}>
//             <ListItemText primary="Practice Areas" />
//           </ListItem>
//           <Menu
//             anchorEl={dropdowns.practice}
//             open={Boolean(dropdowns.practice)}
//             onClose={() => handleDropdownClose("practice")}
//             anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//             transformOrigin={{ vertical: "top", horizontal: "right" }}
//           >
//             {[
//               { label: "Manufacturing & Technology", id: "manufacturing" },
//               { label: "Service / Distribution", id: "service" },
//               { label: "Accounting / Finance", id: "accounting" },
//               { label: "Financial Services / Banking", id: "banking" },
//               { label: "Private Equity", id: "equity" },
//               { label: "Life Sciences", id: "life-sciences" },
//               { label: "Healthcare", id: "healthcare" },
//               { label: "Insurance", id: "insurance" },
//             ].map((item) => (
//               <MenuItem key={item.id} onClick={() => scrollToSection(item.id)}>
//                 {item.label}
//               </MenuItem>
//             ))}
//           </Menu>

//           {/* Employer Login Button */}
//           <ListItem button onClick={() => navigate("/employer-login")}>
//             <ListItemText primary="Employer Login" />
//           </ListItem>
//         </List>
//       </Drawer>
//     </Box>
//   );
// }
// import * as React from "react";
// import { useNavigate } from "react-router-dom";
// import {
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
//   ListItemIcon,
//   Box,
//   Divider,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import LoginIcon from "@mui/icons-material/Login";
// import BusinessIcon from "@mui/icons-material/Business";
// import BuildIcon from "@mui/icons-material/Build";
// import PhoneIcon from "@mui/icons-material/Phone";
// import WorkIcon from "@mui/icons-material/Work";
// import PersonIcon from "@mui/icons-material/Person";
// import CategoryIcon from "@mui/icons-material/Category";

// export default function PrimarySearchAppBar() {
//   const [dropdowns, setDropdowns] = React.useState({ practice: null });
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const navigate = useNavigate();

//   const handleDropdownOpen = (event, key) => {
//     setDropdowns({ ...dropdowns, [key]: event.currentTarget });
//   };

//   const handleDropdownClose = (key) => {
//     setDropdowns({ ...dropdowns, [key]: null });
//   };

//   const scrollToSection = (id) => {
//     navigate(`/practice-areas#${id}`);
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
//     handleDropdownClose("practice");
//   };

  

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar
//         position="static"
//         sx={{ backgroundColor: "#fff", color: "#000", boxShadow: "none", borderBottom: "1px solid #e0e0e0" }}
//       >
//         <Toolbar>
//           <IconButton color="inherit" edge="start" onClick={() => setMobileOpen(!mobileOpen)} sx={{ display: { xs: "block", md: "none" } }}>
//             <MenuIcon />
//           </IconButton>

//           <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: "pointer" }} onClick={() => navigate("/")}> 
//             <img src="11.svg" alt="Logo" style={{ width: "200px", height: "auto" }} />
//           </Typography>

//           <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
//             <Button onClick={() => navigate("/about")} color="inherit" startIcon={<BusinessIcon />}>About Us</Button>
//             <Button onClick={() => navigate("/service")} color="inherit" startIcon={<BuildIcon />}>Services</Button>
//             <Button onClick={() => navigate("/contactUs")} color="inherit" startIcon={<PhoneIcon />}>Contact Us</Button>
//             <Button onClick={() => navigate("/employer-login")} color="inherit" startIcon={<WorkIcon />}>Employer</Button>
//             <Button onClick={() => navigate("/login")} color="inherit" startIcon={<PersonIcon />}>Recruiter</Button>

//             <Button color="inherit" onClick={(e) => handleDropdownOpen(e, "practice")} endIcon={<ArrowDropDownIcon />}>Practice Areas</Button>
//             <Menu
//               anchorEl={dropdowns.practice}
//               open={Boolean(dropdowns.practice)}
//               onClose={() => handleDropdownClose("practice")}
//               anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//               transformOrigin={{ vertical: "top", horizontal: "right" }}
//             >
//               {[ "Manufacturing & Technology", "Service / Distribution", "Accounting / Finance", "Financial Services / Banking", "Private Equity", "Life Sciences", "Healthcare", "Insurance"].map((label) => (
//                 <MenuItem key={label} onClick={() => scrollToSection(label.toLowerCase().replace(/\s/g, "-"))}>
//                   {label}
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>
//         <List>
//           <ListItem button onClick={() => navigate("/about")}>  <ListItemText primary="About Us" /> </ListItem>
//           <ListItem button onClick={() => navigate("/service")}>  <ListItemText primary="Services" /> </ListItem>
//           <ListItem button onClick={() => navigate("/contactUs")}>  <ListItemText primary="Contact Us" /> </ListItem>
//           <Divider />
//           <ListItem button onClick={() => navigate("/employer-login")}> <ListItemText primary="Employer" /> </ListItem>
//           <ListItem button onClick={() => navigate("/login")}>  <ListItemText primary="Recruiter" /> </ListItem>
//           <Divider />
//           <ListItem button onClick={(e) => handleDropdownOpen(e, "practice")}>   <ListItemText primary="Practice Areas" /> </ListItem>
//           <Menu
//             anchorEl={dropdowns.practice}
//             open={Boolean(dropdowns.practice)}
//             onClose={() => handleDropdownClose("practice")}
//             anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//             transformOrigin={{ vertical: "top", horizontal: "right" }}
//           >
//             {[ "Manufacturing & Technology", "Service / Distribution", "Accounting / Finance", "Financial Services / Banking", "Private Equity", "Life Sciences", "Healthcare", "Insurance"].map((label) => (
//               <MenuItem key={label} onClick={() => scrollToSection(label.toLowerCase().replace(/\s/g, "-"))}>
//                 {label}
//               </MenuItem>
//             ))}
//           </Menu>
//         </List>
//       </Drawer>
//     </Box>
//   );
// }
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
import BusinessIcon from "@mui/icons-material/Business";
import BuildIcon from "@mui/icons-material/Build";
import PhoneIcon from "@mui/icons-material/Phone";
import WorkIcon from "@mui/icons-material/Work";
import PersonIcon from "@mui/icons-material/Person";

export default function PrimarySearchAppBar() {
  const [dropdowns, setDropdowns] = React.useState({ practice: null });
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDropdownOpen = (event, key) => {
    setDropdowns({ ...dropdowns, [key]: event.currentTarget });
  };

  const handleDropdownClose = (key) => {
    setDropdowns({ ...dropdowns, [key]: null });
  };

  const scrollToSection = (id) => {
    navigate(`/practice-areas#${id}`);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    handleDropdownClose("practice");
  };

  return (
    <>
      {/* Fixed Navbar */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
          zIndex: 1100, // Ensure it's above other content
          
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
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <img src="11.svg" alt="Logo" style={{ width: "200px", height: "auto" }} />
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
            <Button onClick={() => navigate("/about")} color="inherit" startIcon={<BusinessIcon />}>
              About Us
            </Button>
            <Button onClick={() => navigate("/service")} color="inherit" startIcon={<BuildIcon />}>
              Services
            </Button>
            <Button onClick={() => navigate("/contactUs")} color="inherit" startIcon={<PhoneIcon />}>
              Contact Us
            </Button>
            <Button onClick={() => navigate("/employer-login")} color="inherit" startIcon={<WorkIcon />}>
              Employer
            </Button>
            <Button onClick={() => navigate("/login")} color="inherit" startIcon={<PersonIcon />}>
              Recruiter
            </Button>

            <Button
              color="inherit"
              onClick={(e) => handleDropdownOpen(e, "practice")}
              endIcon={<ArrowDropDownIcon />}
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
                "Manufacturing & Technology",
                "Service / Distribution",
                "Accounting / Finance",
                "Financial Services / Banking",
                "Private Equity",
                "Life Sciences",
                "Healthcare",
                "Insurance",
              ].map((label) => (
                <MenuItem
                  key={label}
                  onClick={() => scrollToSection(label.toLowerCase().replace(/\s/g, "-"))}
                >
                  {label}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar for Mobile */}
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

      {/* Space below navbar to avoid overlap */}
      <Box sx={{ marginTop: "64px" }} />
    </>
  );
}
