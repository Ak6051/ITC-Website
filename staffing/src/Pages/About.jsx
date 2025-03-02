// import React from "react";
// import { Container, Typography, Grid, Card, CardContent, Box } from "@mui/material";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <Container style={{ padding: "50px", textAlign: "center" }}>
//       <Typography
//         variant="h3"
//         component={motion.div}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         gutterBottom
//       >
//         About Us
//       </Typography>
//       <Grid container spacing={4} justifyContent="center">
//         <Grid item xs={12} sm={10} md={8}>
//           <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2 }}>
//             <Card elevation={5}>
//               <CardContent>
//                 <Typography variant="h5" color="primary" gutterBottom>
//                   Connecting Talent With Opportunity
//                 </Typography>
//                 <Typography variant="body1" color="textSecondary" paragraph>
//                   At <strong>Ideal Talent Connect Pvt. Ltd.</strong>, we are a dynamic recruitment company dedicated to bridging top-tier talent with leading organizations.
//                 </Typography>
//                 <Typography variant="body1" color="textSecondary" paragraph>
//                   Our mission is to provide innovative staffing solutions that help businesses grow and job seekers achieve their career goals.
//                 </Typography>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </Grid>
//       </Grid>

//       <Box mt={5}>
//         <Typography variant="h4" component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }} gutterBottom>
//           What We Do
//         </Typography>
//         <Grid container spacing={3} justifyContent="center">
//           {[
//             "Technology",
//             "Healthcare",
//             "Finance & Accounting",
//             "Engineering",
//             "Marketing & Sales",
//             "Human Resources",
//             "Legal",
//             "Hospitality & Retail",
//             "Creative & Design",
//           ].map((sector, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: index * 0.1 }}>
//                 <Card elevation={3}>
//                   <CardContent>
//                     <Typography variant="body1" color="primary">
//                       {sector}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Box>
//     </Container>
//   );
// };

// export default About;

import React from "react";
import { Container, Grid, Typography, Box, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import profileImage from "../assets/5.png"; // Replace with actual image

const AboutUsSection = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 8 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Section - Text & Stats */}
        <Grid item xs={12} md={6}>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <Typography variant="h6" sx={{ color: "#FFF", backgroundColor: "#004d40", display: "inline-block", px: 2, py: 1, borderRadius: "20px", fontWeight: "bold" }}>
              OUR SPECIALTY
            </Typography>
            <Typography variant="h3" sx={{ mt: 2, fontWeight: "bold" }}>
              Be a part of our giant growth network
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "gray" }}>
              We help businesses scale by providing top-tier consultancy and strategic growth solutions. Join us and elevate your business to the next level.
            </Typography>
            {/* Stats Box */}
            <Card elevation={3} sx={{ mt: 4, maxWidth: "80%", p: 2, backgroundColor: "#E3F2FD" }}>
              <CardContent>
                <Typography variant="body1" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CheckCircleIcon sx={{ color: "#004d40" }} /> Customer Growth
                </Typography>
                <Typography variant="body1" sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                  <CheckCircleIcon sx={{ color: "#004d40" }} /> Company Development
                </Typography>
                <Typography variant="body1" sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
                  <CheckCircleIcon sx={{ color: "#004d40" }} /> Business Transformation
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Right Section - Image & Award */}
        <Grid item xs={12} md={6}>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <Box position="relative" textAlign="center">
              <img src={profileImage} alt="Profile" style={{ width: "100%", borderRadius: "10px" }} />
              {/* Award Badge */}
              <Box sx={{ position: "absolute", top: 20, right: 20, backgroundColor: "#FFC107", color: "#000", p: 1.5, borderRadius: "50px", display: "flex", alignItems: "center" }}>
                <BusinessCenterIcon sx={{ mr: 1 }} /> 14 Excellence in Finance Award
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </Grid>

      {/* Testimonial */}
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
          <Typography variant="h5" fontStyle="italic" color="gray">
            “We as a team consider client’s growth as our own. Our passion and objective help us grow as the biggest business consultancy of this generation.”
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, color: "#004d40", fontWeight: "bold" }}>
            Sergio Joseph, CEO, Ideal Talent Connect Pvt. Ltd.
          </Typography>
        </motion.div>
      </Box>
    </Container>
  );
};

export default AboutUsSection;
