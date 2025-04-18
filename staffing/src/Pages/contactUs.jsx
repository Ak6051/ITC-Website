
import React from "react";
import { Container, Grid, TextField, Button, Typography, Box, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import contactImage from "../assets/5.png"; // Replace with actual image path
import bannerImage from "../assets/2.jpg"; // Replace with actual banner image path

const ContactUs = () => {
  return (
    <Container >
      {/* Banner Section */}
      <Box
        sx={{
          width: "99vw",
          height: { xs: "250px", md: "680px" },
          backgroundImage: `url(contact.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
     
      </Box>
      <Box
    sx={{
      textAlign: "center",
      maxWidth: "800px",
      mx: "auto", // Centers horizontally
      mt: 6, // Adds space below the banner
      mb: 4, // Adds space above the form section
    }}
  >
    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#333", mb: 2 }}>
      We’re Ready to Connect!
    </Typography>
    <Typography variant="body1" sx={{ color: "#555" }}>
      Whether you have a question, a business inquiry, or just want to say hello, 
      we’d love to hear from you. Fill out the form below, and we’ll get back to you as soon as possible.
    </Typography>
  </Box>

      {/* Contact Form Section */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            sx={{
              height: { xs: "300px", md: "450px" },
              backgroundImage: `url(${contactImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "12px",
              marginRight: "30px",
            }}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            sx={{
              background: "#F5FAFA",
              p: { xs: 3, md: 4 },
              borderRadius: "12px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "#0D3B66" }}>
              Let's Collaborate!
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
              Office: 123, Mahek Icon, Sumul Dairy Road, Near Railway Station,Near Railway Station, Surat -395004
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="*Full Name" variant="outlined" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="*Email Address" variant="outlined" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="*Phone Number" variant="outlined" required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="*Your Requirements" variant="outlined" required />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Your Message" variant="outlined" multiline rows={4} />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#FFB400",
                color: "#fff",
                fontWeight: "bold",
                mt: 3,
                py: 1.5,
                "&:hover": { backgroundColor: "#E69A00" },
              }}
            >
              Submit Now →
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Contact Information Section */}
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Ready to Assist—Contact Now
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
        "Let’s Connect! We’d love to hear from you. Drop us a message, and we’ll be in touch soon!"
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {/* Office Location */}
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={3} sx={{ textAlign: "center", p: 3 }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <img src="data:image/jpeg;base64,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" alt="Office Location" width={40} />
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  Office Location
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Discover innovation at our doorstep.
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  color="primary"
                  sx={{ mt: 1, cursor: "pointer" }}
                >
                  VIEW ON MAP →
                </Typography>
                <Box sx={{ mt: 2, p: 2, bgcolor: "#F5FAFA", borderRadius: "8px" }}>
                123, Mahek Icon, Sumul Dairy Road, Near Railway Station,Near Railway Station, Surat -395004
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Quick Contact */}
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={3} sx={{ textAlign: "center", p: 3 }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <img src="data:image/jpeg;base64,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" alt="Quick Contact" width={40} />
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  Quick Contact
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Call or email us for immediate help.
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  color="primary"
                  sx={{ mt: 1, cursor: "pointer" }}
                >
                  GET CALL BACK →
                </Typography>
                <Box sx={{ mt: 2, p: 2, bgcolor: "#F5FAFA", borderRadius: "8px" }}>
                  +91 99045 01115 <br />
                  admin@italentconnect.com
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Office Hours */}
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={3} sx={{ textAlign: "center", p: 3 }}>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <img src="data:image/jpeg;base64,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" alt="Office Hours" width={40} />
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  Office Hrs
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Visit us during our office hours.
                </Typography>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  color="primary"
                  sx={{ mt: 1, cursor: "pointer" }}
                >
                  APPOINTMENT →
                </Typography>
                <Box sx={{ mt: 2, p: 2, bgcolor: "#F5FAFA", borderRadius: "8px" }}>
                  Mon - Saturday: 9am to 6.30pm <br />
                  Sunday: Closed.
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        
      </Box>
      <Box
         component={motion.div}
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1 }}
         sx={{
           width: "100%",
           height: "400px",
           mt: 5,
           borderRadius: "8px",
           overflow: "hidden",
         }}
       >
         {/* <iframe
           src=""
           width="100%"
           height="100%"
           style={{ border: 0 }}
           allowFullScreen
           loading="lazy"
         /> */}
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.442688650946!2d72.8374340750368!3d21.214287180481996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fc789919359%3A0xdc8f1d468f830c77!2sMahek%20Icon!5e0!3m2!1sen!2sin!4v1742031715231!5m2!1sen!2sin"   referrerpolicy="no-referrer-when-downgrade"
         width="100%"
         height="100%"
         style={{ border: 0 }}
         allowFullScreen
         loading="lazy"></iframe>
    </Box>
      
    </Container>
    
  );
};

export default ContactUs;
