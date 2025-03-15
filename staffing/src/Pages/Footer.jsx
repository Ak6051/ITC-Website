// import React from "react";
// import { Box, Typography, Link, Grid, IconButton, Divider } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

// const Footer = () => {
//   const navigate = useNavigate();

//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#121212",
//         color: "#ddd",
//         padding: "40px 20px",
//         textAlign: "center",
//       }}
//     >
//       <Grid container spacing={4} justifyContent="center">
//         {/* Quick Links */}
//         <Grid item xs={12} md={4}>
//           <Typography variant="h6" sx={{ color: "#fff", marginBottom: "15px", fontWeight: "bold" }}>
//             Quick Links
//           </Typography>
//           <Box>
//             {[
//               { label: "Home", path: "/" },
//               { label: "About", path: "/about" },
//               { label: "Service", path: "/service" },
//             ].map((item, index) => (
//               <Link
//                 key={index}
//                 onClick={() => handleNavigate(item.path)}
//                 sx={{
//                   display: "block",
//                   color: "#ccc",
//                   cursor: "pointer",
//                   marginBottom: "8px",
//                   textDecoration: "none",
//                   fontSize: "14px",
//                   "&:hover": { color: "#fff", textDecoration: "underline" },
//                 }}
//               >
//                 {item.label}
//               </Link>
//             ))}
//           </Box>
//         </Grid>

//         {/* Contact Info and Social Media */}
//         <Grid item xs={12} md={4}>
//           <Typography variant="h6" sx={{ color: "#fff", marginBottom: "15px", fontWeight: "bold" }}>
//             Contact Us
//           </Typography>
//           <Typography variant="body2">Call: +91-8929175342</Typography>
//           <Typography variant="body2">Email: info@recruiterdashboard.com</Typography>

//           <Box sx={{ marginTop: "15px" }}>
//             {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, index) => (
//               <IconButton
//                 key={index}
//                 sx={{ color: "#bbb", margin: "0 5px", "&:hover": { color: "#fff" } }}
//               >
//                 <Icon />
//               </IconButton>
//             ))}
//           </Box>
//         </Grid>
//       </Grid>

//       <Divider sx={{ backgroundColor: "#444", margin: "30px 0" }} />

//       <Typography variant="body2" sx={{ color: "#888" }}>
//         © {new Date().getFullYear()} Recruiter Dashboard. All Rights Reserved.
//       </Typography>
//     </Box>
//   );
// };

// export default Footer;

import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#ddd",
        padding: "20px",
      }}
    >
      <Grid container justifyContent="space-between" alignItems="center">
        {/* Left Side */}
        <Grid item>
          <Typography variant="body2" sx={{ color: "#bbb" }}>
            © {new Date().getFullYear()} All rights reserved by ITC.
          </Typography>
        </Grid>

        {/* Right Side - Contact Details */}
        <Grid item>
          <Typography variant="body2" sx={{ color: "#bbb", textAlign: "right" }}>
            Call: +91-8929175342 | Email: info@recruiterdashboard.com
          </Typography>
          <Box sx={{ marginTop: "5px", textAlign: "right" }}>
            {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, index) => (
              <IconButton
                key={index}
                sx={{ color: "#bbb", marginLeft: "5px", "&:hover": { color: "#fff" } }}
              >
                <Icon />
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
