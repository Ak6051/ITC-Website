// import React from "react";
// import { motion } from "framer-motion";
// import { Box, Typography, Card, Container, Grid } from "@mui/material";

// const coreValues = [
//   {
//     title: "ETHICS",
//     description:
//       "Without ethics, there can be no trust, and without trust, there cannot be a relationship.",
//     icon: "📖",
//   },
//   {
//     title: "TEAMWORK",
//     description:
//       "From our administrative staff to our senior partners, we thrive in an environment of accountability and collaboration.",
//     icon: "🤝",
//   },
//   {
//     title: "COMMUNICATION",
//     description:
//       "We actively listen to the needs and concerns of our clients to foster strong, lasting relationships.",
//     icon: "💬",
//   },
// ];

// const approachDetails = [
//   "Deep industry specialization: Our recruiters are experts in your field, understanding the specific skills, certifications, and experience required for success.",
//   "Proactive talent pipeline development: We build and nurture a robust network of top talent, allowing us to respond quickly to your evolving needs.",
//   "Customized talent solutions: We tailor our staffing services to your specific requirements, offering flexible solutions including Direct Hiring.",
//   "Emphasis on cultural fit: We prioritize culture alignment, ensuring that candidates seamlessly integrate into your team.",
//   "Dedicated client partnership: We are committed to building long-term relationships with our clients, providing ongoing support and communication.",
//   "Focus on employee retention: We don’t just place talent; we help retain it by fostering a positive and productive work environment.",
//   "Reduced time to hire: We accelerate the hiring process, minimizing downtime and maximizing productivity.",
//   "Increased productivity and efficiency: We help you build a high-performing team that drives business growth.",
//   "Reduced hiring cost: We optimize the recruitment process, saving you time and money.",
// ];

// const OurCoreValue = () => {
//   return (
//     <Box sx={{ position: "relative" }}>
//       {/* Background Section */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: 390,
//           left: 0,
//           width: "100%",
//           height: 500,
//           backgroundImage: "url('/5.png')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           zIndex: -1,
//         }}
//       />

//       {/* Core Values Section */}
//       <Container
//         maxWidth="lg"
//         sx={{ textAlign: "center", position: "relative", zIndex: 2, pt: 10 }}
//       >
//         <Typography variant="h3" fontWeight={700} color="text.primary" gutterBottom>
//           Our Core Values
//         </Typography>
//         <Box sx={{ height: 4, width: 80, bgcolor: "#FFC107", mx: "auto", mb: 4 }} />

//         {/* Cards Section */}
//         <Grid container spacing={4} justifyContent="center">
//           {coreValues.map((value, index) => (
//             <Grid item xs={12} md={4} key={index}>
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <Card
//                   sx={{
//                     textAlign: "center",
//                     boxShadow: 3,
//                     borderRadius: 2,
//                     p: 3,
//                     bgcolor: "white",
//                   }}
//                 >
//                   <Typography variant="h2" color="#FFC107" gutterBottom>
//                     {value.icon}
//                   </Typography>
//                   <Typography
//                     variant="h6"
//                     fontWeight={600}
//                     sx={{
//                       bgcolor: "#212121",
//                       color: "white",
//                       py: 1,
//                       borderRadius: 1,
//                     }}
//                   >
//                     {value.title}
//                   </Typography>
//                   <Typography mt={2} color="text.secondary">
//                     {value.description}
//                   </Typography>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//       {/* Bottom Section */}
//       <Box
//         sx={{
//           position: "relative",
//           mt: -10,
//           pt: 10,
//           pb: 10,
//           px: 5,
//           bgcolor: "rgba(0, 0, 0, 0.7)",
//           color: "white",
//         }}
//       >
//         <Container
//           maxWidth="lg"
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           <motion.div whileHover={{ scale: 1.1 }}>
//             <Box
//               sx={{
//                 width: 300,
//                 height: 250,
//                 border: "6px solid #FFC107",
//                 marginTop: "85px",
//                 borderRadius: 2,
//                 overflow: "hidden",
//                 position: "relative",
//               }}
//             >
//               <img
//                 src="/3.jpg"
//                 alt="teamwork"
//                 style={{ width: "100%", height: "100%", objectFit: "cover" }}
//               />
//             </Box>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <Box sx={{ maxWidth: 500, textAlign: "left" }}>
//               <Typography variant="h4" fontWeight={700} gutterBottom mt={5}>
//                 We Produce <span style={{ color: "#FFC107" }}>Results.</span>
//               </Typography>
//               <Typography>
//                 We understand the impact of meeting your executive search needs. Our ability to deliver results to you, your company, and your stakeholders has made us a leader in the industry.
//               </Typography>
//             </Box>
//           </motion.div>
//         </Container>

//         {/* Always Visible Approach Details */}
//         <Box
//           sx={{
//             mt: 6,
//             p: 3,
//             bgcolor: "rgba(237, 238, 241, 0.7)",
//             borderRadius: 2,
//             color: "black",
//             maxWidth: "lg",
//             mx: "auto",
//           }}
//         >
//           <Typography
//             variant="h4"
//             fontWeight={700}
//             gutterBottom
//             textAlign="center"
//           >
//             Our Unique Approach
//           </Typography>
//           <ul style={{ textAlign: "left", paddingLeft: 20 }}>
//             {approachDetails.map((point, index) => (
//               <li key={index} style={{ marginBottom: 10 }}>
//                 <Typography>{point}</Typography>
//               </li>
//             ))}
//           </ul>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default OurCoreValue;
import React from "react";
import { Box } from "@mui/material";
import WorkProcess from "./WorkProcess";
import CoreValues from "./CoreValue";


const OurCoreValue = () => {
  return (
    <Box>
      <WorkProcess />
      <CoreValues />
    </Box>
  );
};

export default OurCoreValue;