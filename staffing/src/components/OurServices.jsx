// import React from "react";
// import { Box, Button, Typography, Container, Grid } from "@mui/material";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const practiceAreas = [
//   { name: "MANUFACTURING & TECHNOLOGY", link: "/manufacturing" },
//   { name: "PRIVATE EQUITY", link: "/private-equity" },
//   { name: "SERVICE / DISTRIBUTION", link: "/service-distribution" },
//   { name: "LIFE SCIENCES", link: "/life-sciences" },
//   { name: "ACCOUNTING / FINANCE", link: "/accounting-finance" },
//   { name: "HEALTHCARE", link: "/healthcare" },
//   { name: "FINANCIAL SERVICES / BANKING", link: "/financial-services" },
//   { name: "INSURANCE", link: "/insurance" },
// ];

// const PracticeAreas = () => {
//   const navigate = useNavigate();

//   return (
//     <Box
//       sx={{
//         textAlign: "center",
//         py: { xs: 4, md: 8 },
//         background: "#ffffff",
//         minHeight: "100vh",
//       }}
//     >
//       <Container>
//         <Typography
//           variant="h4"
//           fontWeight={700}
//           gutterBottom
//           component={motion.div}
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           sx={{ fontFamily: "serif", fontSize: { xs: "1.8rem", md: "2.5rem" } }}
//         >
//           Practice Areas
//         </Typography>
//         <Box
//           sx={{
//             width: 60,
//             height: 4,
//             backgroundColor: "#f4c400",
//             mx: "auto",
//             mb: 2,
//           }}
//         />
//         <Typography
//           variant="body1"
//           color="text.secondary"
//           maxWidth={600}
//           mx="auto"
//           mb={4}
//           component={motion.div}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//           sx={{ fontFamily: "serif", fontSize: { xs: "0.9rem", md: "1.1rem" }, px: { xs: 2, md: 0 } }}
//         >
//           Management Search Corporate professionals know the industries in which
//           we recruit. We provide you with solid expertise and experience within
//           the markets we serve.
//         </Typography>
//         <Grid container spacing={3} justifyContent="center">
//           {practiceAreas.map((area, index) => (
//             <Grid item xs={12} sm={6} md={5} key={index}>
//               <motion.div
//                 initial={{ x: 200, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   onClick={() => navigate(area.link)}
//                   sx={{
//                     backgroundColor: "rgb(15, 0, 130)", // Active state color
//                     color: "white",
//                     fontWeight: 600,
//                     py: { xs: 1.5, md: 2 },
//                     border: "3px solid #f4c400",
//                     fontFamily: "serif",
//                     fontSize: { xs: "0.8rem", md: "1rem" },
//                     "&:hover": {
//                       backgroundColor: "#e0b200",
//                     },
//                   }}
//                 >
//                   {area.name}
//                 </Button>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default PracticeAreas;
import React from "react";
import { Box, Button, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const practiceAreas = [
  { name: "MANUFACTURING & TECHNOLOGY", link: "/manufacturing" },
  { name: "PRIVATE EQUITY", link: "/private-equity" },
  { name: "SERVICE / DISTRIBUTION", link: "/service-distribution" },
  { name: "LIFE SCIENCES", link: "/life-sciences" },
  { name: "ACCOUNTING / FINANCE", link: "/accounting-finance" },
  { name: "HEALTHCARE", link: "/healthcare" },
  { name: "FINANCIAL SERVICES / BANKING", link: "/financial-services" },
  { name: "INSURANCE", link: "/insurance" },
];

const OurServices = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        textAlign: "center",
        py: { xs: 6, md: 10 },
        background: "linear-gradient(to right,rgb(56, 35, 88),rgb(134, 164, 168))",
        minHeight: "50vh",
        color: "#f5f5f5",
        marginLeft:'-7.8px'
      
        
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            sx={{ fontFamily: "serif", fontSize: { xs: "2rem", md: "2.8rem" } }}
          >
            Practice Areas
          </Typography>
        </motion.div>
        <Box
          sx={{
            width: 80,
            height: 5,
            backgroundColor: "#e67e22",
            mx: "auto",
            mb: 3,
            borderRadius: 2,
          }}
        />
        <Typography
          variant="body1"
          maxWidth={650}
          mx="auto"
          mb={5}
          sx={{ fontFamily: "serif", fontSize: { xs: "18px", md: "1.2rem" } }}
        >
          Discover our specialized industry expertise and services.
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {practiceAreas.map((area, index) => (
            <Grid item xs={12} sm={6} md={5} key={index}>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => navigate(area.link)}
                  sx={{
                    backgroundColor: "#34495e",
                    color: "#ecf0f1",
                    fontWeight: 600,
                    py: { xs: 1.5, md: 2 },
                    border: "2px solid #e67e22",
                    borderRadius: "12px",
                    fontSize: { xs: "0.9rem", md: "1.1rem" },
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      backgroundColor: "#e67e22",
                      color: "#ffffff",
                      transform: "translateY(-3px)",
                    },
                  }}
                >
                  {area.name}
                </Button>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default OurServices;