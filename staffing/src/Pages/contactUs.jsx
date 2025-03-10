import React from "react";
import { Container, Grid, TextField, Button, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import contactImage from "../assets/5.png"; // Replace with actual image path

const ContactUs = () => {
  return (
    
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            sx={{
              height: "100%",
              backgroundImage: `url(${contactImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
              minHeight: "450px",
            }}
          ></Box>
        </Grid>

        {/* Right Form Section */}
        <Grid item xs={12} md={6}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            sx={{
              background: "#F5FAFA",
              p: 4,
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "#0D3B66" }}>
              Let's Collaborate with Us!
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
              Office: 2220 Plymouth Rd #302, Hopkins, Minnesota(MN), 55305
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="*Full Name" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="*Email Address" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="*Phone Number" variant="outlined" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="*What are your needs?" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Your Message" variant="outlined" multiline rows={4} />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFB400",
                color: "#fff",
                fontWeight: "bold",
                mt: 3,
                px: 4,
                py: 1.5,
                "&:hover": { backgroundColor: "#E69A00" },
              }}
            >
              Submit Now →
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Full-Width Google Map Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        sx={{
          width: "1200px",
          height: "400px",
          mt: 4,
          mr:16,
          position: "full",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "0px",
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.437458502956!2d72.82382297503577!3d21.17477408051131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04de2fa57df1b%3A0xe7d89a20999346ea!2sVesu%20Canal%20Rd%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1740894802212!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Container>
  );
};

export default ContactUs;
