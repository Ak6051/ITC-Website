


import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        padding: "40px 20px",
        textAlign: "center",
        borderTop: "1px solid #ddd",
      }}
    >
      {/* Company Logo */}
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "10px" }}>
        <img src="footer.jpg" alt="MSC Logo" style={{ height: "50px" }} />
      </Box>

      {/* Company Info */}
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
       Ideal Talent Connect Private Limited
      </Typography>
      <Typography variant="body2" sx={{ marginTop: "5px" }}>
      123, Mahek Icon, Sumul Dairy Road, Near Railway Station,
      </Typography>
      <Typography variant="body2">
      Near Railway Station, Surat -395004      </Typography>
      <Typography variant="body2">
      Call:{" "}
         <a href="tel:+919904501115" style={{ color: "#000", textDecoration: "none" }}>
              +91 99045 01115
              </a>{" "}< br/>
        <a href="mailto:admin@italentconnect.com" style={{ textDecoration: "none", color: "inherit" }}>
        admin@italentconnect.com
        </a>
      </Typography>

      <br/>
     <Divider/>

      {/* Copyright Info */}
      <Typography variant="body2" sx={{ marginTop: "20px", color: "#555" }}>
        © {new Date().getFullYear()} All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
