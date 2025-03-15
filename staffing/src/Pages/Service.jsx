// import React from "react";
// import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
// import { motion } from "framer-motion";

// const Services = () => {
//   return (
//     <Container style={{ padding: "40px", textAlign: "center" }}>
//       <Typography variant="h3" gutterBottom>Our Services</Typography>
//       <Grid container spacing={3} justifyContent="center">
//         {["Permanent Recruitment", "Executive Search"].map((service, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <motion.div whileHover={{ scale: 1.05 }}>
//               <Card elevation={5}>
//                 <CardContent>
//                   <Typography variant="h6">{service}</Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Services;




// import React from "react";
// import { Container, Typography, Grid, Card, CardContent, Box, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, LinearProgress } from "@mui/material";
// import { motion } from "framer-motion";

// const GrowthRate = () => {
//   const data = [
//     { label: "Placement Rate", value: 48 },
//     { label: "Client Satisfaction Increase", value: 79 },
//     { label: "Revenue Growth", value: 65 },
//   ];

//   return (
//     <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 6, p: 4, bgcolor: "#F5FAFA", borderRadius: "8px" }}>
//       {/* Left Section */}
//       <Box sx={{ maxWidth: "40%" }}>
//         <Typography variant="h6" sx={{ color: "#0D3B66", fontWeight: "bold", textTransform: "uppercase", mb: 1 }}>
//           Growth Rate
//         </Typography>
//         <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0D3B66", mb: 2 }}>
//           Rising Successful Placements Percentage
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 3 }}>
//           Our commitment to providing the best recruitment services has resulted in a significant increase in placement rates, client satisfaction, and revenue growth.
//         </Typography>
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           style={{
//             backgroundColor: "#0D3B66",
//             color: "#fff",
//             padding: "10px 20px",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Download
//         </motion.button>
//       </Box>
      
//       {/* Right Section - Progress Bars */}
//       <Box sx={{ width: "50%" }}>
//         <Typography variant="h6" sx={{ color: "#0D3B66", fontWeight: "bold", mb: 2 }}>
//           Annual growth rate 
//         </Typography>
//         {data.map((item, index) => (
//           <Box key={index} sx={{ mb: 3 }}>
//             <Typography variant="body1" sx={{ fontWeight: "bold" }}>{item.label}</Typography>
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <LinearProgress variant="determinate" value={item.value} sx={{ width: "80%", height: 8, borderRadius: 5, bgcolor: "#ddd", "& .MuiLinearProgress-bar": { backgroundColor: "#FFB400" } }} />
//               <Typography variant="body2" sx={{ ml: 2, fontWeight: "bold" }}>{item.value}%</Typography>
//             </Box>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// const PermanentRecruitment = () => (
//   <Box sx={{ my: 6, p: 4, bgcolor: "#EAF2F8", borderRadius: "8px" }}>
//     <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0D3B66", mb: 2 }}>
//        Permanent Recruitment?
//     </Typography>
//     <Typography variant="body1" sx={{ mb: 3 }}>
//       Permanent recruitment is the process of hiring employees for long-term positions within an organization. These roles typically come with a direct employment contract, including benefits like health insurance, paid leave, retirement plans, and job security.
//     </Typography>
//     <Divider sx={{ my: 3 }} />
//     <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0D3B66", mb: 2 }}>
//       Key Features
//     </Typography>
//     <ul>
//       <li>Long-Term Employment – Employees are hired for an indefinite period.</li>
//       <li>Comprehensive Hiring Process – Screening, interviews, and background checks.</li>
//       <li>Employee Benefits – Job security, insurance, paid leave, and more.</li>
//       <li>Higher Commitment – Employees align with company culture.</li>
//       <li>Company Payroll – Managed directly under the company’s payroll.</li>
//     </ul>
//     <Divider sx={{ my: 3 }} />
//     <Box sx={{ textAlign: "left", mt: 6 }}>
//          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0D3B66", mb: 3 }}>
//            What is Executive Search?
//          </Typography>
//          <Typography variant="body1" sx={{ mb: 3 }}>
//            Executive search, also known as headhunting, is a specialized recruitment process focused on finding and hiring top-level executives, such as CEOs, CFOs, COOs, and other senior leadership roles. Unlike traditional recruitment, executive search is a proactive approach that targets highly qualified professionals who may not be actively seeking a job.
//          </Typography>
//          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0D3B66", mb: 2 }}>
//            Key Characteristics of Executive Search
//          </Typography>
//          <ul>
//            <li>Targeted Approach – Focuses on identifying and recruiting top-tier leadership talent.</li>
//            <li>Confidential Process – Often conducted discreetly to protect both the hiring company and candidates.</li>
//            <li>Specialized Search Firms – Typically handled by executive search firms or headhunters with industry expertise.</li>
//            <li>Passive Candidates – Many executive candidates are not actively job-seeking but are open to the right opportunities.</li>
//            <li>Strategic Fit – Ensures alignment with company culture and long-term vision.</li>
//          </ul>
//          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0D3B66", mt: 3, mb: 2 }}>
//            Benefits of Executive Search
//          </Typography>
//          <ul>
//            <li>Access to High-Caliber Talent</li>
//            <li>Confidentiality & Discretion</li>
//            <li>Industry Expertise & Market Intelligence</li>
//            <li>Customized & Strategic Hiring</li>
//          </ul>
//          <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0D3B66", mt: 3, mb: 2 }}>
//            Challenges in Executive Search
//          </Typography>
//          <ul>
//            <li>Time-Consuming Process</li>
//            <li>Higher Cost</li>
//            <li>Limited Candidate Pool</li>
//          </ul>
//       </Box>
    
    
//   </Box>
// );

// const Services = () => {
//   return (
//     <Container maxWidth="lg" sx={{ py: 6, textAlign: "center" }}>
//       <Typography variant="h3" sx={{ fontWeight: "bold", color: "#0D3B66", mb: 4 }}>
//         Our Services
//       </Typography>
//       <Grid container spacing={3} justifyContent="center">
//         {["Permanent Recruitment", "Executive Search"].map((service, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <motion.div whileHover={{ scale: 1.05 }}>
//               <Card elevation={5} sx={{ backgroundColor: "#FFB400", color: "#fff" }}>
//                 <CardContent>
//                   <Typography variant="h6" sx={{ fontWeight: "bold" }}>{service}</Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//       <GrowthRate />
//       <PermanentRecruitment />
//     </Container>
//   );
// };

// export default Services;

import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Divider,
  LinearProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

// Growth Rate Section
const GrowthRate = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const data = [
    { label: "Placement Rate", value: 48 },
    { label: "Client Satisfaction Increase", value: 79 },
    { label: "Revenue Growth", value: 65 },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        my: 6,
        p: 4,
        bgcolor: "#F5FAFA",
        borderRadius: "8px",
      }}
    >
      {/* Left Section */}
      <Box sx={{ maxWidth: isMobile ? "100%" : "40%", textAlign: isMobile ? "center" : "left" }}>
        <Typography variant="h6" sx={{ color: "#0D3B66", fontWeight: "bold", textTransform: "uppercase", mb: 1 }}>
          Growth Rate
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0D3B66", mb: 2 }}>
          Rising Successful Placements Percentage
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Our commitment to providing the best recruitment services has resulted in a significant increase in placement rates, client satisfaction, and revenue growth.
        </Typography>
        <motion.button
          whileHover={{ scale: 1.1 }}
          style={{
            backgroundColor: "#0D3B66",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Download
        </motion.button>
      </Box>

      {/* Right Section - Progress Bars */}
      <Box sx={{ width: isMobile ? "100%" : "50%", mt: isMobile ? 3 : 0 }}>
        <Typography variant="h6" sx={{ color: "#0D3B66", fontWeight: "bold", mb: 2 }}>
          Annual Growth Rate
        </Typography>
        {data.map((item, index) => (
          <Box key={index} sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>{item.label}</Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <LinearProgress
                variant="determinate"
                value={item.value}
                sx={{
                  width: "80%",
                  height: 8,
                  borderRadius: 5,
                  bgcolor: "#ddd",
                  "& .MuiLinearProgress-bar": { backgroundColor: "#FFB400" },
                }}
              />
              <Typography variant="body2" sx={{ ml: 2, fontWeight: "bold" }}>{item.value}%</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

// Permanent Recruitment Section
const PermanentRecruitment = () => (
  <Box sx={{ my: 6, p: 4, bgcolor: "#EAF2F8", borderRadius: "8px" }}>
    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0D3B66", mb: 2 }}>
      Permanent Recruitment
    </Typography>
    <Typography variant="body1" sx={{ mb: 3 }}>
      Permanent recruitment is the process of hiring employees for long-term positions within an organization. These roles typically come with a direct employment contract, including benefits like health insurance, paid leave, retirement plans, and job security.
    </Typography>
    <Divider sx={{ my: 3 }} />
     <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0D3B66", mb: 2 }}>
       Key Features
    </Typography>
    <ul>
       <li>Long-Term Employment – Employees are hired for an indefinite period.</li>
       <li>Comprehensive Hiring Process – Screening, interviews, and background checks.</li>
       <li>Employee Benefits – Job security, insurance, paid leave, and more.</li>
       <li>Higher Commitment – Employees align with company culture.</li>
       <li>Company Payroll – Managed directly under the company’s payroll.</li>
     </ul>
    <Divider sx={{ my: 3 }} />
  </Box>
);

// Executive Search Section
const ExecutiveSearch = () => (
  <Box sx={{ my: 6, p: 4, bgcolor: "#F3F4F6", borderRadius: "8px" }}>
    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0D3B66", mb: 2 }}>
      Executive Search
    </Typography>
    <Typography variant="body1" sx={{ mb: 3 }}>
      Executive search, also known as headhunting, is a specialized recruitment process focused on finding and hiring top-level executives, such as CEOs, CFOs, and COOs. Unlike traditional recruitment, executive search is a proactive approach targeting highly qualified professionals.
    </Typography>
    <Divider sx={{ my: 3 }} />
    <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0D3B66", mb: 2 }}>
      Key Characteristics
    </Typography>
    <ul>
      <li>🔹 Targeted Approach – Identifying and recruiting top-tier leadership talent.</li>
      <li>🔹 Confidential Process – Protects both the hiring company and candidates.</li>
      <li>🔹 Specialized Search Firms – Industry experts handle the recruitment process.</li>
      <li>🔹 Passive Candidates – Engaging professionals who are not actively job-seeking.</li>
      <li>🔹 Strategic Fit – Ensures alignment with company culture and long-term vision.</li>
    </ul>
    <Divider sx={{ my: 3 }} />
    <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0D3B66", mb: 2 }}>
      Benefits
    </Typography>
    <ul>
      <li>✅ Access to High-Caliber Talent</li>
      <li>✅ Confidential & Discreet Hiring</li>
      <li>✅ Industry Expertise & Market Intelligence</li>
      <li>✅ Customized & Strategic Hiring</li>
    </ul>
    <Divider sx={{ my: 3 }} />
    <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0D3B66", mb: 2 }}>
      Challenges
    </Typography>
    <ul>
      <li>⚠️ Time-Consuming Process</li>
      <li>⚠️ Higher Cost</li>
      <li>⚠️ Limited Candidate Pool</li>
    </ul>
  </Box>
);

// Services Page
const Services = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6, textAlign: "center" }}>
      <Typography variant="h3" sx={{ fontWeight: "bold", color: "#0D3B66", mb: 4 }}>
        Our Services
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {["Permanent Recruitment", "Executive Search"].map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card elevation={5} sx={{ backgroundColor: "#FFB400", color: "#fff" }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>{service}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Growth Rate Section */}
      <GrowthRate />

      {/* Permanent Recruitment Section */}
      <PermanentRecruitment />

      {/* Executive Search Section */}
      <ExecutiveSearch />
    </Container>
  );
};

export default Services;



