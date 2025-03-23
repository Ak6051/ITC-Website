// // // import * as React from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import {
// // //   AppBar,
// // //   Toolbar,
// // //   Typography,
// // //   Button,
// // //   Menu,
// // //   MenuItem,
// // //   IconButton,
// // //   Drawer,
// // //   List,
// // //   ListItem,
// // //   ListItemText,
// // //   Box,
// // //   Divider,
// // // } from "@mui/material";
// // // import MenuIcon from "@mui/icons-material/Menu";
// // // import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// // // export default function PrimarySearchAppBar() {
// // //   const [dropdowns, setDropdowns] = React.useState({ practice: null });
// // //   const [mobileOpen, setMobileOpen] = React.useState(false);
// // //   const navigate = useNavigate();

// // //   const handleDropdownOpen = (event, key) => {
// // //     setDropdowns({ ...dropdowns, [key]: event.currentTarget });
// // //   };

// // //   const handleDropdownClose = (key) => {
// // //     setDropdowns((prev) => ({ ...prev, [key]: null }));
// // //   };

// // //   const handleScrollToSection = (id) => {
// // //     navigate(`/practice-areas#${id}`);
// // //     setTimeout(() => {
// // //       const section = document.getElementById(id);
// // //       if (section) {
// // //         section.scrollIntoView({ behavior: "smooth", block: "start" });
// // //       }
// // //     }, 100);
// // //     handleDropdownClose("practice");
// // //   };

// // //   return (
// // //     <>
// // //       <AppBar position="fixed" sx={{ backgroundColor: "#132338", color: "#fff", boxShadow: "none", borderBottom: "1px solid #e0e0e0", zIndex: 1100 }}>
// // //         <Toolbar>
// // //           <IconButton color="inherit" edge="start" onClick={() => setMobileOpen(!mobileOpen)} sx={{ display: { xs: "block", md: "none" } }}>
// // //             <MenuIcon />
// // //           </IconButton>

// // //           <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: "pointer" }} onClick={() => navigate("/")}> 
// // //             <img src="24.png" alt="Logo" style={{ width: "200px", height: "auto" }} />
// // //           </Typography>

// // //           <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
// // //             <Button onClick={() => navigate("/about")} color="inherit">About Us</Button>
// // //             <Button onClick={() => navigate("/service")} color="inherit">Services</Button>
// // //             <Button onClick={() => navigate("/candidate-login")} color="inherit">Register Candidates</Button>
// // //             <Button onClick={() => navigate("/employer-login")} color="inherit">Employer</Button>
// // //             <Button onClick={() => navigate("/login")} color="inherit">Recruiter</Button>

// // //             <Button color="inherit" onClick={(e) => handleDropdownOpen(e, "practice")} endIcon={<ArrowDropDownIcon />}>
// // //               Practice Areas
// // //             </Button>
// // //             <Menu
// // //               anchorEl={dropdowns.practice}
// // //               open={Boolean(dropdowns.practice)}
// // //               onClose={() => handleDropdownClose("practice")}
// // //               anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
// // //               transformOrigin={{ vertical: "top", horizontal: "right" }}
// // //             >
// // //               {[
// // //                 { id: "manufacturing-technology", label: "Manufacturing & Technology" },
// // //                 { id: "service-distribution", label: "Service / Distribution" },
// // //                 { id: "accounting-finance", label: "Accounting / Finance" },
// // //                 { id: "financial-services-banking", label: "Financial Services / Banking" },
// // //                 { id: "private-equity", label: "Private Equity" },
// // //                 { id: "life-sciences", label: "Life Sciences" },
// // //                 { id: "healthcare", label: "Healthcare" },
// // //                 { id: "insurance", label: "Insurance" },
// // //               ].map((item) => (
// // //                 <MenuItem key={item.id} onClick={() => handleScrollToSection(item.id)}>
// // //                   {item.label}
// // //                 </MenuItem>
// // //               ))}
// // //             </Menu>

// // //             <Button onClick={() => navigate("/contactUs")} color="inherit">Contact Us</Button>
// // //           </Box>
// // //         </Toolbar>
// // //       </AppBar>

// // //       <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>
// // //         <List>
// // //           <ListItem button onClick={() => navigate("/about")}>
// // //             <ListItemText primary="About Us" />
// // //           </ListItem>
// // //           <ListItem button onClick={() => navigate("/service")}>
// // //             <ListItemText primary="Services" />
// // //           </ListItem>
// // //           <ListItem button onClick={() => navigate("/contactUs")}>
// // //             <ListItemText primary="Contact Us" />
// // //           </ListItem>
// // //           <Divider />
// // //           <ListItem button onClick={() => navigate("/candidate-login")}>
// // //             <ListItemText primary="Candidate Login" />
// // //           </ListItem>
// // //           <ListItem button onClick={() => navigate("/employer-login")}>
// // //             <ListItemText primary="Employer" />
// // //           </ListItem>
// // //           <ListItem button onClick={() => navigate("/login")}>
// // //             <ListItemText primary="Recruiter" />
// // //           </ListItem>
// // //           <Divider />
// // //           <ListItem button onClick={(e) => handleDropdownOpen(e, "practice")}>
// // //             <ListItemText primary="Practice Areas" />
// // //           </ListItem>
// // //         </List>
// // //       </Drawer>

// // //       <Box sx={{ marginTop: "64px" }} />
// // //     </>
// // //   );
// // // }

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
//   Divider,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// export default function PrimarySearchAppBar() {
//   const [dropdowns, setDropdowns] = React.useState({ practice: null });
//   const [mobileOpen, setMobileOpen] = React.useState(false);
//   const navigate = useNavigate();

//   const handleDropdownOpen = (event, key) => {
//     setDropdowns({ ...dropdowns, [key]: event.currentTarget });
//   };

//   const handleDropdownClose = (key) => {
//     setDropdowns((prev) => ({ ...prev, [key]: null }));
//   };

//   const handleScrollToSection = (id) => {
//     navigate(`/practice-areas#${id}`);
//     setTimeout(() => {
//       const section = document.getElementById(id);
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth", block: "start" });
//       }
//     }, 100);
//     handleDropdownClose("practice");
//   };

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         sx={{
//           backgroundColor: "#132338",
//           color: "#fff",
//           boxShadow: "none",
//           borderBottom: "1px solid #e0e0e0",
//           zIndex: 1100,
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             edge="start"
//             onClick={() => setMobileOpen(!mobileOpen)}
//             sx={{ display: { xs: "block", md: "none" } }}
//           >
//             <MenuIcon />
//           </IconButton>

//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, cursor: "pointer", marginTop:2,marginLeft:"70px" }}
//             onClick={() => navigate("/")}
//           >
//             <img src="24.png" alt="Logo" style={{ width: "200px", height: "auto" }} />
//           </Typography>



// <Box
//   sx={{
//     display: { xs: "none", md: "flex" },
//     gap: 4, 
//     fontSize: { md: "1.2rem", lg: "1.5rem" },
//     padding: { md: "10px 20px", lg: "15px 30px" },
//     justifyContent: "center", // Centers the navbar
//     flexGrow: 1, // Ensures it takes up available space
//   }}
// >

//             <Button onClick={() => navigate("/about")} color="inherit"  sx={{ textTransform: "none" , fontSize:"1.0rem"}}>
//               About Us
//             </Button>
//             <Button onClick={() => navigate("/service")} color="inherit" sx={{ textTransform: "none" ,fontSize:"1.0rem"}}>
//               Services
//             </Button>
//             <Button onClick={() => navigate("/open-job")} color="inherit" sx={{ textTransform: "none", fontSize:"1.0rem" }}>
//               Job Opening
//             </Button>
//             <Button onClick={() => navigate("/candidate-login")} color="inherit" sx={{ textTransform: "none" ,fontSize:"1.0rem"}}>
//               Candidate Login
//             </Button>
//             <Button onClick={() => navigate("/employer-login")} color="inherit" sx={{ textTransform: "none",fontSize:"1.0rem" }}>
//               Employer
//             </Button>
//             <Button onClick={() => navigate("/login")} color="inherit" sx={{ textTransform: "none",fontSize:"1.0rem" }}>
//               Recruiter
//             </Button>

//             <Button
//               color="inherit"
//               onClick={(e) => handleDropdownOpen(e, "practice")}
//               endIcon={<ArrowDropDownIcon />}
//               sx={{ textTransform: "none" ,fontSize:"1.0rem"}}
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
//                 { id: "manufacturing-technology", label: "Manufacturing & Technology" },
//                 { id: "service-distribution", label: "Service / Distribution" },
//                 { id: "accounting-finance", label: "Accounting / Finance" },
//                 { id: "financial-services-banking", label: "Financial Services / Banking" },
//                 { id: "private-equity", label: "Private Equity" },
//                 { id: "life-sciences", label: "Life Sciences" },
//                 { id: "healthcare", label: "Healthcare" },
//                 { id: "insurance", label: "Insurance" },
//               ].map((item) => (
//                 <MenuItem key={item.id} onClick={() => handleScrollToSection(item.id)}>
//                   {item.label}
//                 </MenuItem>
//               ))}
//             </Menu>

//             <Button onClick={() => navigate("/contactUs")} color="inherit" sx={{ textTransform: "none",fontSize:"1.0rem" }}>
//               Contact Us
//             </Button>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>
//         <List>
//         <ListItem button onClick={() => navigate("/")}>
//             <ListItemText primary="Home" sx={{ textTransform: "none" }} />
//           </ListItem>
//           <ListItem button onClick={() => navigate("/about")}>
//             <ListItemText primary="About Us" sx={{ textTransform: "none" }} />
//           </ListItem>
//           <ListItem button onClick={() => navigate("/service")}>
//             <ListItemText primary="Services" sx={{ textTransform: "none" }} />
//           </ListItem>
//           <ListItem button onClick={() => navigate("/contactUs")}>
//             <ListItemText primary="Contact Us" sx={{ textTransform: "none" }} />
//           </ListItem>
//           <Divider />
//           <ListItem button onClick={() => navigate("/open-job")}>
//             <ListItemText primary="Job Opening" sx={{ textTransform: "none" }} />
//           </ListItem>
//           <ListItem button onClick={() => navigate("/candidate-login")}>
//             <ListItemText primary="Candidate Login" sx={{ textTransform: "none" }} />
//           </ListItem>
//           <ListItem button onClick={() => navigate("/employer-login")}>
//             <ListItemText primary="Employer" sx={{ textTransform: "none" }} />
//           </ListItem>
//           <ListItem button onClick={() => navigate("/login")}>
//             <ListItemText primary="Recruiter" sx={{ textTransform: "none" }} />
//           </ListItem>
//           <Divider />
//           <ListItem button onClick={(e) => handleDropdownOpen(e, "practice")}>
//             <ListItemText primary="Practice Areas" sx={{ textTransform: "none" }} />
//           </ListItem>
//         </List>
//       </Drawer>

//       <Box sx={{ marginTop: "64px" }} />
//     </>
//   );
// }





// // import * as React from "react";
// // import { useNavigate } from "react-router-dom";
// // import {
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
// //   Box,
// //   Divider,
// // } from "@mui/material";
// // import MenuIcon from "@mui/icons-material/Menu";
// // import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// // export default function PrimarySearchAppBar() {
// //   const [dropdowns, setDropdowns] = React.useState({ practice: null });
// //   const [mobileOpen, setMobileOpen] = React.useState(false);
// //   const [scrollY, setScrollY] = React.useState(0);
// //   const navigate = useNavigate();

// //   // Scroll event listener
// //   React.useEffect(() => {
// //     const handleScroll = () => {
// //       setScrollY(window.scrollY);
// //     };
// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   const handleDropdownOpen = (event, key) => {
// //     setDropdowns({ ...dropdowns, [key]: event.currentTarget });
// //   };

// //   const handleDropdownClose = (key) => {
// //     setDropdowns((prev) => ({ ...prev, [key]: null }));
// //   };

// //   return (
// //     <>
// //       <AppBar
// //         position="fixed"
// //         sx={{
// //           backgroundColor: scrollY > 50 ? "#132338" : "rgba(0, 0, 0, 0.1)", // Transparent initially
// //           backdropFilter: scrollY > 50 ? "none" : "blur(10px)",
// //           color: scrollY > 50 ? "#fff" : "#000", // White text on scroll, Black when transparent
// //           boxShadow: "none",
// //           transition: "background-color 0.5s ease, color 0.5s ease, backdrop-filter 0.5s ease",
// //           zIndex: 1100,
// //         }}
// //       >

// //         <Toolbar>
// //           <IconButton
// //             color="inherit"
// //             edge="start"
// //             onClick={() => setMobileOpen(!mobileOpen)}
// //             sx={{ display: { xs: "block", md: "none" } }}
// //           >
// //             <MenuIcon />
// //           </IconButton>

// //           <Typography
// //             variant="h6"
// //             component="div"
// //             sx={{ flexGrow: 1, cursor: "pointer", marginLeft: "70px" }}
// //             onClick={() => navigate("/")}
// //           >
// //             <img src="24.png" alt="Logo" style={{ width: "200px", height: "auto", color:"black" }} />
// //           </Typography>

// //           <Box
// //             sx={{
// //               display: { xs: "none", md: "flex" },
// //               gap: 6,
// //               fontSize: { md: "1.2rem", lg: "1.5rem" },
// //               padding: { md: "10px 20px", lg: "15px 30px" },
// //               justifyContent: "center",
// //               flexGrow: 1,
// //               fontWeight:"blod"
// //             }}
// //           >
// //             <Button onClick={() => navigate("/about")} color="inherit" sx={{ textTransform: "none" }}>
// //               About Us
// //             </Button>
// //             <Button onClick={() => navigate("/service")} color="inherit" sx={{ textTransform: "none" }}>
// //               Services
// //             </Button>
// //             <Button onClick={() => navigate("/open-job")} color="inherit" sx={{ textTransform: "none" }}>
// //               Job Opening
// //             </Button>
// //             <Button onClick={() => navigate("/candidate-login")} color="inherit" sx={{ textTransform: "none" }}>
// //               Candidate Login
// //             </Button>
// //             <Button onClick={() => navigate("/employer-login")} color="inherit" sx={{ textTransform: "none" }}>
// //               Employer
// //             </Button>
// //             <Button onClick={() => navigate("/login")} color="inherit" sx={{ textTransform: "none" }}>
// //               Recruiter
// //             </Button>

// //             <Button
// //               color="inherit"
// //               onClick={(e) => handleDropdownOpen(e, "practice")}
// //               endIcon={<ArrowDropDownIcon />}
// //               sx={{ textTransform: "none" }}
// //             >
// //               Practice Areas
// //             </Button>

// //             <Menu
// //               anchorEl={dropdowns.practice}
// //               open={Boolean(dropdowns.practice)}
// //               onClose={() => handleDropdownClose("practice")}
// //               anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
// //               transformOrigin={{ vertical: "top", horizontal: "right" }}
// //             >
// //               <MenuItem onClick={() => navigate("/practice-areas")}>Manufacturing & Technology</MenuItem>
// //             </Menu>

// //             <Button onClick={() => navigate("/contactUs")} color="inherit" sx={{ textTransform: "none" }}>
// //               Contact Us
// //             </Button>
// //           </Box>
// //         </Toolbar>
// //       </AppBar>

// //       {/* Drawer for mobile */}
// //       <Drawer anchor="left" open={mobileOpen} onClose={() => setMobileOpen(false)}>
// //         <List>
// //           <ListItem button onClick={() => navigate("/")}>
// //             <ListItemText primary="Home" sx={{ textTransform: "none" }} />
// //           </ListItem>
// //           <Divider />
// //         </List>
// //       </Drawer>

// //       {/* Fix white space */}
// //       <Box sx={{ paddingTop: "64px" }} />
// //     </>
// //   );
// // }
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
                     <Button onClick={() => navigate("/about")} color="inherit"  sx={{ textTransform: "none" , fontSize:"1.0rem"}}>
               About Us
             </Button>
            <Button onClick={() => navigate("/service")} color="inherit" sx={{ textTransform: "none" ,fontSize:"1.0rem"}}>
              Services             </Button>
             <Button onClick={() => navigate("/open-job")} color="inherit" sx={{ textTransform: "none", fontSize:"1.0rem" }}>
               Job Opening
             </Button>
             <Button onClick={() => navigate("/candidate-login")} color="inherit" sx={{ textTransform: "none" ,fontSize:"1.0rem"}}>
               Candidate Login
            </Button>
             <Button onClick={() => navigate("/employer-login")} color="inherit" sx={{ textTransform: "none",fontSize:"1.0rem" }}>
               Employer
            </Button>
             <Button onClick={() => navigate("/login")} color="inherit" sx={{ textTransform: "none",fontSize:"1.0rem" }}>
              Recruiter
            </Button>

            <Button
              color="inherit"
              onClick={(e) => handleDropdownOpen(e, "practice")}
              endIcon={<ArrowDropDownIcon />}
              sx={{ textTransform: "none", fontSize: "1.0rem" }}
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
            <Button onClick={() => navigate("/contactUs")} color="inherit" sx={{ textTransform: "none" }}>
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
          <ListItem button onClick={(e) => handleDropdownOpen(e, "practice")}>
            <ListItemText primary="Practice Areas" />
          </ListItem>
        </List>
      </Drawer>

     
    </>
  );
}
