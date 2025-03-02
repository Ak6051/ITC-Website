// import React from "react";
// import { Box, Typography, Link, Grid, IconButton } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

// const Footer = () => {
//   const navigate = useNavigate();

//   // Navigation Handlers
//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   return (
//     <Box
//       sx={{
//         backgroundColor: "#1a1a1a",
//         color: "#ccc",
//         padding: "20px 10px",
//         marginTop: "20px"
//       }}
//     >
//       <Grid container spacing={2} justifyContent="center">
//         {/* About Section */}
//         <Grid item xs={12} md={4}>
//           <Typography variant="h6" sx={{ color: "#fff", marginBottom: "10px" }}>
//             About Us
//           </Typography>
//           <Typography variant="body2">
//             We provide the best recruitment solutions, connecting top talent with leading companies.
//           </Typography>
//         </Grid>

//         {/* Quick Links */}
//         <Grid item xs={12} md={4}>
//           <Typography variant="h6" sx={{ color: "#fff", marginBottom: "10px" }}>
//             Quick Links
//           </Typography>
//           <Link
//             onClick={() => handleNavigate("/jobs")}
//             sx={{ display: "block", color: "#ccc", cursor: "pointer", marginBottom: "5px", textDecoration: "none", "&:hover": { color: "#fff" } }}
//           >
//             Jobs
//           </Link>
//           <Link
//             onClick={() => handleNavigate("/candidates")}
//             sx={{ display: "block", color: "#ccc", cursor: "pointer", marginBottom: "5px", textDecoration: "none", "&:hover": { color: "#fff" } }}
//           >
//             Candidates
//           </Link>
//           <Link
//             onClick={() => handleNavigate("/contact")}
//             sx={{ display: "block", color: "#ccc", cursor: "pointer", textDecoration: "none", "&:hover": { color: "#fff" } }}
//           >
//             Contact Us
//           </Link>
//         </Grid>

//         {/* Contact Info and Social Media */}
//         <Grid item xs={12} md={4}>
//           <Typography variant="h6" sx={{ color: "#fff", marginBottom: "10px" }}>
//             Contact Us
//           </Typography>
//           <Typography variant="body2">Call Us: +91-8929175342</Typography>
//           <Typography variant="body2">Email: info@recruiterdashboard.com</Typography>

//           <Box sx={{ marginTop: "10px" }}>
//             <IconButton sx={{ color: "#ccc", "&:hover": { color: "#fff" } }}>
//               <Facebook />
//             </IconButton>
//             <IconButton sx={{ color: "#ccc", "&:hover": { color: "#fff" } }}>
//               <Twitter />
//             </IconButton>
//             <IconButton sx={{ color: "#ccc", "&:hover": { color: "#fff" } }}>
//               <LinkedIn />
//             </IconButton>
//             <IconButton sx={{ color: "#ccc", "&:hover": { color: "#fff" } }}>
//               <Instagram />
//             </IconButton>
//           </Box>
//         </Grid>
//       </Grid>

//       <Typography variant="body2" sx={{ marginTop: "20px", color: "#777" }}>
//         © 2024 Recruiter Dashboard. All Rights Reserved.
//       </Typography>
//     </Box>
//   );
// };

// export default Footer;
import React from "react";
import { Box, Typography, Link, Grid, IconButton, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#121212",
        color: "#ddd",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* About Section */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ color: "#fff", marginBottom: "15px", fontWeight: "bold" }}>
            About Us
          </Typography>
          <Typography variant="body2" sx={{ maxWidth: "300px", margin: "auto" }}>
            We connect top talent with leading companies, providing the best recruitment solutions.
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ color: "#fff", marginBottom: "15px", fontWeight: "bold" }}>
            Quick Links
          </Typography>
          <Box>
            {[
              { label: "Jobs", path: "/jobs" },
              { label: "Candidates", path: "/candidates" },
              { label: "Contact Us", path: "/contact" },
            ].map((item, index) => (
              <Link
                key={index}
                onClick={() => handleNavigate(item.path)}
                sx={{
                  display: "block",
                  color: "#ccc",
                  cursor: "pointer",
                  marginBottom: "8px",
                  textDecoration: "none",
                  fontSize: "14px",
                  "&:hover": { color: "#fff", textDecoration: "underline" },
                }}
              >
                {item.label}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* Contact Info and Social Media */}
        <Grid item xs={12} md={4}>
          <Typography variant="h6" sx={{ color: "#fff", marginBottom: "15px", fontWeight: "bold" }}>
            Contact Us
          </Typography>
          <Typography variant="body2">Call: +91-8929175342</Typography>
          <Typography variant="body2">Email: info@recruiterdashboard.com</Typography>

          <Box sx={{ marginTop: "15px" }}>
            {[Facebook, Twitter, LinkedIn, Instagram].map((Icon, index) => (
              <IconButton
                key={index}
                sx={{ color: "#bbb", margin: "0 5px", "&:hover": { color: "#fff" } }}
              >
                <Icon />
              </IconButton>
            ))}
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ backgroundColor: "#444", margin: "30px 0" }} />

      <Typography variant="body2" sx={{ color: "#888" }}>
        © {new Date().getFullYear()} Recruiter Dashboard. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
