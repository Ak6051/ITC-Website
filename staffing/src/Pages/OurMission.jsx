import React from "react";
import { Box, Grid, Typography, CardMedia } from "@mui/material";
import { motion } from "framer-motion";

const WhoWeAreSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #f0f0f0, #dcdcdc)",
        color: "#333",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        overflow: "hidden",
        pt: 10,
      }}
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h2" fontWeight="bold" color="primary" gutterBottom>
          Who We Are
        </Typography>
        <Typography
          variant="h5"
          color="rgba(0, 0, 0, 0.75)"
          maxWidth="900px"
          mx="auto"
          mt={3}
        >
          Empowering businesses with top-tier talent and driving career growth through personalized recruitment solutions.
        </Typography>
      </motion.div>

      {/* About Content */}
      <Grid 
        container 
        spacing={5} 
        alignItems="stretch" 
        justifyContent="center" 
        px={5} 
        py={10} 
        sx={{ display: "flex" }}
      >
        {/* Left Content */}
        <Grid 
          item 
          xs={12} 
          md={6} 
          sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1" color="rgba(0, 0, 0, 0.85)" mb={4}>
              <strong>Ideal Talent Connect Pvt. Ltd.</strong> is committed to creating seamless and impactful 
              recruitment experiences. We specialize in matching top-tier talent with leading organizations 
              through tailored, data-driven strategies.
            </Typography>
            <Typography variant="body1" color="rgba(0, 0, 0, 0.85)" mb={6}>
              Our dedication to quality, transparency, and trust has made us a preferred partner for businesses 
              seeking skilled professionals and candidates striving for career growth.
            </Typography>
            
            <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1" color="rgba(0, 0, 0, 0.85)" mb={4}>
              To be the premier talent partner in all industries, recognized for our expertise, 
              and commitment to client success.
            </Typography>
          </motion.div>
        </Grid>

        {/* Right Image */}
        <Grid 
          item 
          xs={12} 
          md={6} 
          sx={{ display: "flex", alignItems: "stretch" }}
        >
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: "100%", height: "100%" }}
          >
            <CardMedia
              component="img"
              image="38.jpg"
              alt="Who We Are"
              sx={{
                width: "100%",
                marginTop:"30px",
                height: "70%",
                minHeight: "40%",   // Match left content height
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0px 12px 28px rgba(0,0,0,0.2)",
                transition: "0.5s",
                "&:hover": { transform: "scale(1.05)" }
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhoWeAreSection;
