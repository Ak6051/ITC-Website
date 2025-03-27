import React from "react";
import { Box, Typography, Grid, Divider, IconButton, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#54616C",
        color: "#fff",
        padding: { xs: "30px 15px", sm: "40px 20px" },
        borderTop: "1px solid #ddd",
      }}
    >
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        
        {/* Left Section - Logo & Text */}
        <Grid item xs={12} sm={6} md={4} sx={{ textAlign: { xs: "center", md: "left" } }}>
          <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, mb: 2 }}>
            <img src="footer.png" alt="Company Logo" style={{ height: "60px" }} />
          </Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Ideal Talent Connect Pvt. Ltd.
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            123, Mahek Icon, Sumul Dairy Road, Near Railway Station, Surat - 395004
          </Typography>
          <Typography variant="body2">
            Call:{" "}
            <Link href="tel:+919904501115" color="inherit" underline="none">
              +91 99045 01115
            </Link>
          </Typography>
          <Typography variant="body2">
            Email:{" "}
            <Link href="mailto:admin@italentconnect.com" color="inherit" underline="none">
              admin@italentconnect.com
            </Link>
          </Typography>
        </Grid>

        {/* Middle Section - Navigation Links & Social Icons */}
        <Grid item xs={12} sm={6} md={4} sx={{ textAlign: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Link href="/about" color="inherit" underline="hover">
              About Us
            </Link>
            <Link href="/service" color="inherit" underline="hover">
              Services
            </Link>
            <Link href="/contactUs" color="inherit" underline="hover">
              Contact Us
            </Link>
          </Box>

          <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
            Follow Us
          </Typography>
          <Box>
            <IconButton
              href="https://www.facebook.com/profile.php?id=61574087487969"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#3b5998" }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              href="https://x.com/?lang=en-in"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#1DA1F2" }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/ideal_talent_connect_pvt_ltd?igsh=MWR6Mjh2cW8zeDBueQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#E1306C" }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              href="https://in.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#0077b5" }}
            >
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>

        {/* Right Section - Google Map */}
        <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "right" } }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}>
            Our Location
          </Typography>
          <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
            <iframe
              title="Google Map"
              width="100%"
              height="190"
              style={{ maxWidth: "400px", border: "0", borderRadius: "8px" }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.442688650946!2d72.8374340750368!3d21.214287180481996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fc789919359%3A0xdc8f1d468f830c77!2sMahek%20Icon!5e0!3m2!1sen!2sin!4v1742031715231!5m2!1sen!2sin"
            ></iframe>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      {/* Copyright Info */}
      <Typography variant="body2" sx={{ textAlign: "center", color: "#555" }}>
        © {new Date().getFullYear()} Ideal Talent Connect Pvt. Ltd. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
