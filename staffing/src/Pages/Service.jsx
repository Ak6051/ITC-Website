

// import React from "react";
// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Box,
//   Divider,
//   LinearProgress,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import { motion } from "framer-motion";

// // Growth Rate Section
// const GrowthRate = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   const data = [
//     { label: "Placement Rate", value: 48 },
//     { label: "Client Satisfaction Increase", value: 79 },
//     { label: "Revenue Growth", value: 65 },
//   ];

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: isMobile ? "column" : "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//         my: 6,
//         p: 4,
//         bgcolor: "#F5FAFA",
//         borderRadius: "8px",
//       }}
//     >
//       {/* Left Section */}
//       <Box sx={{ maxWidth: isMobile ? "100%" : "40%", textAlign: isMobile ? "center" : "left" }}>
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
//       <Box sx={{ width: isMobile ? "100%" : "50%", mt: isMobile ? 3 : 0 }}>
//         <Typography variant="h6" sx={{ color: "#0D3B66", fontWeight: "bold", mb: 2 }}>
//           Annual Growth Rate
//         </Typography>
//         {data.map((item, index) => (
//           <Box key={index} sx={{ mb: 3 }}>
//             <Typography variant="body1" sx={{ fontWeight: "bold" }}>{item.label}</Typography>
//             <Box sx={{ display: "flex", alignItems: "center" }}>
//               <LinearProgress
//                 variant="determinate"
//                 value={item.value}
//                 sx={{
//                   width: "80%",
//                   height: 8,
//                   borderRadius: 5,
//                   bgcolor: "#ddd",
//                   "& .MuiLinearProgress-bar": { backgroundColor: "#FFB400" },
//                 }}
//               />
//               <Typography variant="body2" sx={{ ml: 2, fontWeight: "bold" }}>{item.value}%</Typography>
//             </Box>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// // Permanent Recruitment Section
// const PermanentRecruitment = () => (
//   <Box sx={{ my: 6, p: 4, bgcolor: "#EAF2F8", borderRadius: "8px" }}>
//     <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0D3B66", mb: 2 }}>
//       Permanent Recruitment
//     </Typography>
//     <Typography variant="body1" sx={{ mb: 3 }}>
//       Permanent recruitment is the process of hiring employees for long-term positions within an organization. These roles typically come with a direct employment contract, including benefits like health insurance, paid leave, retirement plans, and job security.
//     </Typography>
//     <Divider sx={{ my: 3 }} />
//      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0D3B66", mb: 2 }}>
//        Key Features
//     </Typography>
//     <ul>
//        <li>Long-Term Employment – Employees are hired for an indefinite period.</li>
//        <li>Comprehensive Hiring Process – Screening, interviews, and background checks.</li>
//        <li>Employee Benefits – Job security, insurance, paid leave, and more.</li>
//        <li>Higher Commitment – Employees align with company culture.</li>
//        <li>Company Payroll – Managed directly under the company’s payroll.</li>
//      </ul>
//     <Divider sx={{ my: 3 }} />
//   </Box>
// );

// // Executive Search Section
// const ExecutiveSearch = () => (
//   <Box sx={{ my: 6, p: 4, bgcolor: "#F3F4F6", borderRadius: "8px" }}>
//     <Typography variant="h4" sx={{ fontWeight: "bold", color: "#0D3B66", mb: 2 }}>
//       Executive Search
//     </Typography>
//     <Typography variant="body1" sx={{ mb: 3 }}>
//       Executive search, also known as headhunting, is a specialized recruitment process focused on finding and hiring top-level executives, such as CEOs, CFOs, and COOs. Unlike traditional recruitment, executive search is a proactive approach targeting highly qualified professionals.
//     </Typography>
//     <Divider sx={{ my: 3 }} />
//     <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0D3B66", mb: 2 }}>
//       Key Characteristics
//     </Typography>
//     <ul>
//       <li>🔹 Targeted Approach – Identifying and recruiting top-tier leadership talent.</li>
//       <li>🔹 Confidential Process – Protects both the hiring company and candidates.</li>
//       <li>🔹 Specialized Search Firms – Industry experts handle the recruitment process.</li>
//       <li>🔹 Passive Candidates – Engaging professionals who are not actively job-seeking.</li>
//       <li>🔹 Strategic Fit – Ensures alignment with company culture and long-term vision.</li>
//     </ul>
//     <Divider sx={{ my: 3 }} />
//     <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0D3B66", mb: 2 }}>
//       Benefits
//     </Typography>
//     <ul>
//       <li>✅ Access to High-Caliber Talent</li>
//       <li>✅ Confidential & Discreet Hiring</li>
//       <li>✅ Industry Expertise & Market Intelligence</li>
//       <li>✅ Customized & Strategic Hiring</li>
//     </ul>
//     <Divider sx={{ my: 3 }} />
//     <Typography variant="h5" sx={{ fontWeight: "bold", color: "#0D3B66", mb: 2 }}>
//       Challenges
//     </Typography>
//     <ul>
//       <li>⚠️ Time-Consuming Process</li>
//       <li>⚠️ Higher Cost</li>
//       <li>⚠️ Limited Candidate Pool</li>
//     </ul>
//   </Box>
// );

// // Services Page
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

//       {/* Growth Rate Section */}
//       <GrowthRate />

//       {/* Permanent Recruitment Section */}
//       <PermanentRecruitment />

//       {/* Executive Search Section */}
//       <ExecutiveSearch />
//     </Container>
//   );
// };

// export default Services;



// import React from "react";
// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   Box,
//   Button,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import { Link as ScrollLink, Element } from "react-scroll";

// // 🔥 Navbar with Smooth Scroll
// const Navbar = () => {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         gap: 4,
//         py: 3,
//         bgcolor: "#0D3B66",
//         position: "sticky",
//         top: 0,
//         marginTop:13,
//         zIndex: 1000,
//         boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//       }}
//     >
//       {["Growth", "Recruitment", "Executive Search"].map((section, index) => (
//         <ScrollLink
//           key={index}
//           to={section.toLowerCase().replace(/ /g, "-")}
//           smooth={true}
//           duration={800}
//           offset={-70} 
//         >
//           <motion.button
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             style={{
//               backgroundColor: "#FFB400",
//               color: "#fff",
//               padding: "12px 20px",
//               border: "none",
//               borderRadius: "30px",
//               cursor: "pointer",
//               fontSize: "16px",
//               fontWeight: "bold",
//             }}
//           >
//             {section}
//           </motion.button>
//         </ScrollLink>
//       ))}
//     </Box>
//   );
// };

// // 💡 Hero Section with Full-Width Background
// const HeroSection = () => (
//   <Box
//     sx={{
//       height: "90vh",
//       background: `url('3.jpg') no-repeat center center/cover`,
//       color: "#000",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       textAlign: "center",
//       p: 4,
//       scrollMarginTop: "70px",
//     }}
//   >
//     <motion.div
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1 }}
//     >
//       <Typography variant="h2" sx={{ fontWeight: "bold" }}>
//         Our Premium Services
//       </Typography>
//       <Typography variant="h5" sx={{ mt: 2, maxWidth: "700px", mx: "auto" }}>
//         Empower your business with expert recruitment, strategic growth, and top-tier executive search services.
//       </Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         sx={{ mt: 4, bgcolor: "#FFB400", "&:hover": { bgcolor: "#FF9800" } }}
//       >
//         Get Started
//       </Button>
//     </motion.div>
//   </Box>
// );

// // 🚀 Growth Section with Full Width
// const GrowthSection = () => (
//   <Element name="growth">
//     <Box sx={{ py: 8, px: 4, bgcolor: "#F5FAFA", scrollMarginTop: "70px" }}>
//       <Container>
//         <Typography variant="h3" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
//           📈 Business Growth
//         </Typography>
//         <Typography variant="body1" sx={{ lineHeight: 1.8, textAlign: "justify" }}>
//           We specialize in helping businesses expand their reach and maximize revenue.
//           Our strategic growth solutions are customized to match your goals, ensuring
//           long-term success.
//         </Typography>
//         <Grid container spacing={4} sx={{ mt: 4 }}>
//           {["Revenue Boost", "Market Expansion", "Brand Recognition"].map((feature, index) => (
//             <Grid item xs={12} md={4} key={index}>
//               <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
//                 <Card
//                   elevation={6}
//                   sx={{
//                     p: 4,
//                     textAlign: "center",
//                     borderRadius: "12px",
//                     background: `linear-gradient(135deg, #FFB400, #FF8C00)`,
//                     color: "#fff",
//                   }}
//                 >
//                   <Typography variant="h5" sx={{ fontWeight: "bold" }}>{feature}</Typography>
//                 </Card>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   </Element>
// );

// // 💼 Permanent Recruitment - Detailed Section
// const RecruitmentSection = () => (
//   <Element name="recruitment">
//     <Box sx={{ py: 8, px: 4, bgcolor: "#EAF2F8", scrollMarginTop: "70px" }}>
//       <Container>
//         <Typography variant="h3" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
//           💼 Permanent Recruitment
//         </Typography>
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <motion.img
//               src="3.jpg"
//               alt="Recruitment"
//               style={{ width: "100%", borderRadius: "12px" }}
//               whileHover={{ scale: 1.05 }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
//               Our expert team ensures that your company hires the best talent. 
//               We focus on long-term placement with job security, full-time benefits, 
//               and a rigorous screening process.
//             </Typography>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ mt: 3, bgcolor: "#4CAF50", "&:hover": { bgcolor: "#388E3C" } }}
//             >
//               Learn More
//             </Button>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   </Element>
// );

// // 🔍 Executive Search - With Detailed Section
// const ExecutiveSearch = () => (
//   <Element name="executive-search">
//     <Box sx={{ py: 8, px: 4, bgcolor: "#F3F4F6", scrollMarginTop: "70px" }}>
//       <Container>
//         <Typography variant="h3" align="center" sx={{ fontWeight: "bold", mb: 4 }}>
//           🔍 Executive Search
//         </Typography>
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <motion.img
//               src="3.jpg"
//               alt="Executive Search"
//               style={{ width: "100%", borderRadius: "12px" }}
//               whileHover={{ scale: 1.05 }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
//               Our executive search services identify and attract top-level talent.
//               We specialize in finding C-suite executives, board members, and senior managers 
//               who align with your company's goals.
//             </Typography>
//             <Button
//               variant="contained"
//               color="primary"
//               sx={{ mt: 3, bgcolor: "#FF5722", "&:hover": { bgcolor: "#D84315" } }}
//             >
//               Contact Us
//             </Button>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   </Element>
// );

// // 🌟 Main Services Page Component
// const Services = () => {
//   return (
//     <>
//       <Navbar />
//       <HeroSection />
//       <GrowthSection />
//       <RecruitmentSection />
//       <ExecutiveSearch />
   
//     </>
//   );
// };

// export default Services;
import React from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { Link as ScrollLink, Element } from "react-scroll";

// 🔥 Hero Section (Sabse Pehle)
const HeroSection = () => (
  <Box
    sx={{
      height: "90vh",
      background: `url('3.jpg') no-repeat center center/cover`,
      color: "#000",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      p: 4,
    }}
  >
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Typography variant="h2" sx={{ fontWeight: "bold" }}>
        Our Premium Services
      </Typography>
      <Typography variant="h5" sx={{ mt: 2, maxWidth: "700px", mx: "auto" }}>
        Empower your business with expert recruitment, strategic growth, and top-tier executive search services.
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 4, bgcolor: "#FFB400", "&:hover": { bgcolor: "#FF9800" } }}
      >
        Get Started
      </Button>
    </motion.div>
  </Box>
);

// 🔝 Navbar with Smooth Scroll
const Navbar = () => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      gap: 4,
      py: 3,
      bgcolor: "#0D3B66",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    }}
  >
    {["Growth", "Recruitment", "Executive Search"].map((section, index) => (
      <ScrollLink
        key={index}
        to={section.toLowerCase().replace(/ /g, "-")}
        smooth={true}
        duration={800}
        offset={-70}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: "#FFB400",
            color: "#fff",
            padding: "12px 20px",
            border: "none",
            borderRadius: "30px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          {section}
        </motion.button>
      </ScrollLink>
    ))}
  </Box>
);

// 🚀 Business Growth (Image Left, Content Right)
const GrowthSection = () => (
  <Element name="growth">
    <Box sx={{ py: 8, px: 4, bgcolor: "#F5FAFA" }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.img
              src="3.jpg"
              alt="Business Growth"
              style={{ width: "100%", borderRadius: "12px" }}
              whileHover={{ scale: 1.05 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              📈 Business Growth
            </Typography>
            <Typography sx={{ lineHeight: 1.8 }}>
              We specialize in helping businesses expand their reach and maximize revenue.
              Our strategic growth solutions are customized to match your goals, ensuring
              long-term success.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </Element>
);

// 💼 Permanent Recruitment (Image Left, Content Right)
const RecruitmentSection = () => (
  <Element name="recruitment">
    <Box sx={{ py: 8, px: 4, bgcolor: "#EAF2F8" }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.img
              src="3.jpg"
              alt="Recruitment"
              style={{ width: "100%", borderRadius: "12px" }}
              whileHover={{ scale: 1.05 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              💼 Permanent Recruitment
            </Typography>
            <Typography sx={{ lineHeight: 1.8 }}>
              Our expert team ensures that your company hires the best talent. 
              We focus on long-term placement with job security, full-time benefits, 
              and a rigorous screening process.
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 3, bgcolor: "#4CAF50", "&:hover": { bgcolor: "#388E3C" } }}
            >
              Learn More
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </Element>
);

// 🔍 Executive Search (Image Left, Content Right)
const ExecutiveSearch = () => (
  <Element name="executive-search">
    <Box sx={{ py: 8, px: 4, bgcolor: "#F3F4F6" }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.img
              src="3.jpg"
              alt="Executive Search"
              style={{ width: "100%", borderRadius: "12px" }}
              whileHover={{ scale: 1.05 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              🔍 Executive Search
            </Typography>
            <Typography sx={{ lineHeight: 1.8 }}>
              Our executive search services identify and attract top-level talent.
              We specialize in finding C-suite executives, board members, and senior managers 
              who align with your company's goals.
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 3, bgcolor: "#FF5722", "&:hover": { bgcolor: "#D84315" } }}
            >
              Contact Us
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </Element>
);

// 🌟 Main Services Page Component
const Services = () => {
  return (
    <>
      <HeroSection />  {/* 🔥 Hero Section sabse pehle */}
      <Navbar />
      <GrowthSection />
      <RecruitmentSection />
      <ExecutiveSearch />
    </>
  );
};

export default Services;
