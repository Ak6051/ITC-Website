
// import React from "react";
// import {
//   Container,
//   Typography,
//   Grid,
//   Box,
//   Button,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import { Link as ScrollLink, Element } from "react-scroll";

// // 🔥 Hero Section (Sabse Pehle)
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
//         sx={{ mt: 4, bgcolor: "#FFB400", "&:hover": { bgcolor: "#FF9800" } }}
//       >
//         Get Started
//       </Button>
//     </motion.div>
//   </Box>
// );

// // 🔝 Navbar with Smooth Scroll
// const Navbar = () => (
//   <Box
//     sx={{
//       display: "flex",
//       justifyContent: "center",
//       gap: 4,
//       py: 3,
//       bgcolor: "#0D3B66",
//       position: "sticky",
//       top: 0,
//       zIndex: 1000,
//       boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//     }}
//   >
//     {["Growth", "Recruitment", "Executive Search"].map((section, index) => (
//       <ScrollLink
//         key={index}
//         to={section.toLowerCase().replace(/ /g, "-")}
//         smooth={true}
//         duration={800}
//         offset={-70}
//       >
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//           style={{
//             backgroundColor: "#FFB400",
//             color: "#fff",
//             padding: "12px 20px",
//             border: "none",
//             borderRadius: "30px",
//             cursor: "pointer",
//             fontSize: "16px",
//             fontWeight: "bold",
//           }}
//         >
//           {section}
//         </motion.button>
//       </ScrollLink>
//     ))}
//   </Box>
// );

// // 🚀 Business Growth (Image Left, Content Right)
// const GrowthSection = () => (
//   <Element name="growth">
//     <Box sx={{ py: 8, px: 4, bgcolor: "#F5FAFA" }}>
//       <Container>
//         <Grid container spacing={4} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <motion.img
//               src="3.jpg"
//               alt="Business Growth"
//               style={{ width: "100%", borderRadius: "12px" }}
//               whileHover={{ scale: 1.05 }}
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Typography variant="h3" sx={{ fontWeight: "bold" }}>
//               📈 Business Growth
//             </Typography>
//             <Typography sx={{ lineHeight: 1.8 }}>
//               We specialize in helping businesses expand their reach and maximize revenue.
//               Our strategic growth solutions are customized to match your goals, ensuring
//               long-term success.
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   </Element>
// );

// // 💼 Permanent Recruitment (Image Left, Content Right)
// const RecruitmentSection = () => (
//   <Element name="recruitment">
//     <Box sx={{ py: 8, px: 4, bgcolor: "#EAF2F8" }}>
//       <Container>
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
//             <Typography variant="h3" sx={{ fontWeight: "bold" }}>
//               💼 Permanent Recruitment
//             </Typography>
//             <Typography sx={{ lineHeight: 1.8 }}>
//               Our expert team ensures that your company hires the best talent. 
//               We focus on long-term placement with job security, full-time benefits, 
//               and a rigorous screening process.
//             </Typography>
//             <Button
//               variant="contained"
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

// // 🔍 Executive Search (Image Left, Content Right)
// const ExecutiveSearch = () => (
//   <Element name="executive-search">
//     <Box sx={{ py: 8, px: 4, bgcolor: "#F3F4F6" }}>
//       <Container>
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
//             <Typography variant="h3" sx={{ fontWeight: "bold" }}>
//               🔍 Executive Search
//             </Typography>
//             <Typography sx={{ lineHeight: 1.8 }}>
//               Our executive search services identify and attract top-level talent.
//               We specialize in finding C-suite executives, board members, and senior managers 
//               who align with your company's goals.
//             </Typography>
//             <Button
//               variant="contained"
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
//       <HeroSection />  {/* 🔥 Hero Section sabse pehle */}
//       <Navbar />
//       <GrowthSection />
//       <RecruitmentSection />
//       <ExecutiveSearch />
//     </>
//   );
// };

// export default Services;
// import React from 'react';
// import { Container, Typography, Grid, Box, Button, IconButton } from '@mui/material';
// import { motion } from 'framer-motion';
// import { Link as ScrollLink, Element } from 'react-scroll';
// import { styled } from '@mui/system';

// // 🔥 Full-Screen Background Image Hero Section
// const HeroSection = () => (
//   <Box
//     sx={{
//       height: '80vh', // Full viewport height
//       background: `url('3.jpg') no-repeat center center/cover`,
//       color: '#fff',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       textAlign: 'center',
//       position: 'relative',
//       zIndex: 1,
//       p: 4,
//     }}
//   >

//   </Box>
// );

// // 🛠️ Service Box Styling
// const services = [
//   'RECRUITER SERVICE',
//   'EXECUTIVE SEARCH',
//   'EMPLOYEE TRAINING',
//   'TEAM LEADERSHIP',
  
// ];

// const ServiceBox = styled(Box)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   gap: '20px',
//   padding: '15px 0',
//   cursor: 'pointer',
//   transition: '0.3s',
//   '&:hover': {
//     transform: 'translateX(10px)',
//     '& .text': {
//       color: '#f0b90b', // Gold color on hover
//       fontWeight: 'bold',
//       letterSpacing: '1.5px',
//     },
//   },
// }));

// // 🚀 Animated Services Section
// const Animation = () => (
//   <Box
//     sx={{
//       backgroundColor: '#0f4c5c',
//       color: '#fff',
//       minHeight: '50vh',
//       padding: '50px',
//       zIndex: 2,
//     }}
//   >
//     <Typography
//       variant="h3"
//       sx={{
//         fontWeight: 'bold',
//         color: 'transparent',
//         WebkitTextStroke: '1px white',
//         textAlign: 'center',
//       }}
//     >
//       OUR SERVICES
//     </Typography>

//     {services.map((service, index) => (
//       <ServiceBox key={index}>
//         <Typography sx={{ fontSize: '18px', color: '#aaa' }}>
//           {`0${index + 1}`}
//         </Typography>
//         <Typography
//           className="text"
//           sx={{ fontSize: '24px', transition: '0.3s' }}
//         >
//           {service}
//         </Typography>
//       </ServiceBox>
//     ))}

//     {/* Buttons */}
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'flex-end',
//         gap: '10px',
//         marginTop: '30px',
//       }}
//     >
     
//     </Box>
//   </Box>
// );


// const App = () => {
//   return (
//     <>
//       <HeroSection /> 
//       <Animation />
      
//     </>
//   );
// };

// export default App;
import React from 'react';
import { Container, Typography, Box, Grid, Divider } from '@mui/material';
import { Link as ScrollLink, Element } from 'react-scroll';
import { styled } from '@mui/system';
import AssignmentIcon from "@mui/icons-material/Assignment";
import SearchIcon from "@mui/icons-material/Search";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PeopleIcon from "@mui/icons-material/People";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LoopIcon from "@mui/icons-material/Loop";

// 🔥 Hero Section (Background Image)
const HeroSection = () => (
  <Box
    sx={{
      height: '80vh',
      background: `url(https://hireox.themeht.com/wp-content/uploads/2024/10/hero01-img02.jpg) no-repeat center center/cover`,
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      p: 4,
    }}
  >
    <Typography variant="h2" sx={{ fontWeight: 'bold' }}>Our Services</Typography>
    <Typography variant="h5" sx={{ mt: 2 }}>
      Empowering Your Business with Professional Solutions
    </Typography>
  </Box>
);

// 🛠️ Styled Service Box
const ServiceBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  padding: '30px 0',
  cursor: 'pointer',
  transition: '0.3s',
  '&:hover': {
    transform: 'translateX(10px)',
    '& .text': {
      color: '#f0b90b',
      fontWeight: 'bold',
      letterSpacing: '1.5px',
    },
  },
}));

// 🚀 Services Section with Smooth Scrolling
const ServicesSection = () => (
  <Box sx={{ backgroundColor: '#0f4c5c', color: '#fff', minHeight: '60vh', padding: '50px' }}>
  <Container>
    <Grid container spacing={4} alignItems="center">
      
      {/* Left Side: Content */}
      <Grid item xs={12} md={6}>
        <Typography variant="h3" sx={{ color: '#f0b90b', mb: 5 , textAlign:'center', ml:35}}>
          Our Services
        </Typography>

        {[
          { id: 'recruiter-service', name: 'RECRUITER SERVICE' },
          { id: 'executive-search', name: 'EXECUTIVE SEARCH' },
          { id: 'employee-training', name: 'EMPLOYEE TRAINING' },
          { id: 'team-leadership', name: 'TEAM LEADERSHIP' }
        ].map((service, index) => (
          <ScrollLink key={index} to={service.id} smooth={true} duration={500}>
            <ServiceBox>
              <Typography sx={{ fontSize: '18px', color: '#aaa' }}>{`0${index + 1}`}</Typography>
              <Typography className="text" sx={{ fontSize: '24px', transition: '0.3s' }}>
                {service.name}
              </Typography>
            </ServiceBox>
          </ScrollLink>
        ))}
      </Grid>

      {/* Right Side: Image */}
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src="https://hireox.themeht.com/wp-content/uploads/2024/12/hero02-img02.jpg"
          alt="Our Service"
          sx={{
            width: '85vh',
            height: '100%',
            minHeight:'45vh',
            marginTop: '110px',
            objectFit: 'cover',
            borderRadius: '12px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          }}
        />
      </Grid>
    </Grid>
  </Container>
</Box>
);

// ✅ Individual Service Details Section
const ServiceDetail = ({ id, title, description, children }) => (
  <Element name={id}>
    <Box sx={{ py: 6, px: 4, backgroundColor: '#f4f4f4', minHeight: '70vh' }}>
      <Container>
        <Typography variant="h4" sx={{ color: '#0f4c5c', mb: 3, fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8, mb: 4 }}>
          {description}
        </Typography>
        {children}
      </Container>
    </Box>
  </Element>
);

// ✅ Recruitment Process Section
const RecruitmentProcess = () => (
  <Box sx={{ backgroundColor: '#e3f2fd', p: 4, borderRadius: '8px', boxShadow: 3, mt: 4 }}>
    <Typography variant="h5" sx={{ color: '#0f4c5c', fontWeight: 'bold', mb: 2 }}>
      Recruitment Process
    </Typography>
    <Grid container spacing={4}>
      {[
        { step: '1', title: 'Requirement Analysis', detail: 'Understanding the client’s needs, job description, and desired qualifications.' },
        { step: '2', title: 'Candidate Sourcing', detail: 'Identifying and reaching out to potential candidates through multiple channels.' },
        { step: '3', title: 'Screening & Shortlisting', detail: 'Reviewing resumes, conducting initial interviews, and shortlisting qualified candidates.' },
        { step: '4', title: 'Client Interview & Selection', detail: 'Arranging interviews with the client and assisting in the selection process.' },
        { step: '5', title: 'Offer & Onboarding', detail: 'Extending the offer and ensuring a smooth onboarding process for the new hire.' }
      ].map((item, index) => (
        <Grid item xs={12} md={6} key={index}>
          <Box sx={{ p: 3, backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: 1 }}>
            <Typography variant="h6" sx={{ color: '#0f4c5c', fontWeight: 'bold' }}>
              {`Step ${item.step}: ${item.title}`}
            </Typography>
            <Typography variant="body2" sx={{ color: '#555', mt: 1 }}>
              {item.detail}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  
  </Box>
);

const steps = [
  {
    icon: <AssignmentIcon fontSize="large" color="primary" />,
    title: "Assignment Specification",
    description:
      "We learn about our clients through meetings with senior executives and key decision-makers or stakeholders. After solidifying the details of the mandate, EMA Partners develops a customised search strategy.",
  },
  {
    icon: <SearchIcon fontSize="large" color="primary" />,
    title: "Identifying Talent",
    description:
      "Our dedicated research team undertakes a systematic search for qualified executives that fit the criteria and mandate. We have over 400+ consultants worldwide.",
  },
  {
    icon: <AssessmentIcon fontSize="large" color="primary" />,
    title: "Candidate Assessment",
    description:
      "On identifying candidates with the necessary expertise and skills for the role, we ensure that the candidate’s personality and intellectual depth complements the client’s organisation and culture.",
  },
  {
    icon: <PeopleIcon fontSize="large" color="primary" />,
    title: "Candidate Presentation",
    description:
      "We meet with our clients to discuss a final short list and present comprehensive reports on each candidate.",
  },
  {
    icon: <WorkOutlineIcon fontSize="large" color="primary" />,
    title: "Candidate Offer",
    description:
      "We work in partnership with our client to select the final candidate and assist with the negotiation and presentation of an offer.",
  },
  {
    icon: <CheckCircleOutlineIcon fontSize="large" color="primary" />,
    title: "Sign-Off",
    description:
      "Once the selected candidate has accepted the offer in writing, we personally contact the other candidates, thanking them for their time and interest.",
  },
  {
    icon: <LoopIcon fontSize="large" color="primary" />,
    title: "Follow-Up",
    description:
      "EMA Partners follows up with every placed candidate during the first year of their employment to ensure smooth transitioning into the role.",
  },
];

const ExecutiveTalent = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 0 }}>
      <Box display="flex" justifyContent="center" sx={{ mt: 6 }}>
        <Grid container spacing={6} justifyContent="center" maxWidth="md">
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",  // 👈 Left-align items
                  textAlign: "left",          // 👈 Text aligned to the left
                  transition: "transform 0.3s",
                  "&:hover": { transform: "translateY(-5px)" },
                }}
              >
                {step.icon}
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", mt: 2 }}
                >
                  {step.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mt: 1, color: "text.secondary" }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};


const ServiceDetailWithImage = ({ id, title, description, image }) => (
  <Element name={id}>
    <Box sx={{ py: 6, px: 4, backgroundColor: '#f4f4f4', minHeight: '70vh' }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              src={image}
              alt={title}
              style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ color: '#0f4c5c', mb: 3, fontWeight: 'bold' }}>
              {title}
            </Typography>
            <Typography variant="body1" sx={{ color: '#555', lineHeight: 1.8 }}>
              {description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </Element>
);


const App = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />

      {/* Detailed Service Sections */}
      <ServiceDetail
        id="recruiter-service"
        title="Recruiter Service"
        description="Our recruitment service helps you find the best talent through a streamlined process, including job posting, candidate screening, and final selection."
      >
        <RecruitmentProcess />
      </ServiceDetail>

      <Divider />

      <ServiceDetail
        id="executive-search"
        title="Executive Search"
        description="Unearth exceptional leaders through our dedicated executive search services. 
        We thoughtfully identify top-tier candidates to spearhead your organization. 
        With a deep understanding of your requirements, we deliver tailored executive solutions that align with your vision."
      >
        <ExecutiveTalent />
      </ServiceDetail>

      <Divider />

      {/* Detailed Service Sections with Images */}
      <ServiceDetailWithImage
        id="employee-training"
        title="Employee Training"
        description="Our employee training programs enhance skills, boost productivity, 
        and empower your workforce with the latest industry knowledge."
        image="31.png"
      />

      <Divider />

      <ServiceDetailWithImage
        id="team-leadership"
        title="Team Leadership"
        description="We offer expert consultation on building strong, effective teams by 
        improving communication, collaboration, and leadership skills."
        image="33.jpg"
      />
    </>
  );
};
export default App;
