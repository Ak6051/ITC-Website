
import React from 'react';
import { Container, Typography, Box, Grid, Divider ,Paper,Button, Card , CardContent , List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import { Link as ScrollLink, Element } from 'react-scroll';
import { styled } from '@mui/system';
import AssignmentIcon from "@mui/icons-material/Assignment";
import SearchIcon from "@mui/icons-material/Search";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PeopleIcon from "@mui/icons-material/People";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import LoopIcon from "@mui/icons-material/Loop";
import { motion } from "framer-motion";  // For subtle animations
import { CheckCircleOutline } from '@mui/icons-material';


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
        { step: '4', title: 'Candidate & Gromming', detail: 'Extending the offer and ensuring a smooth onboarding process for the new hire.' },
        { step: '5', title: 'Client Interview & Selection', detail: 'Arranging interviews with the client and assisting in the selection process.' },
        { step: '6', title: 'Offer & Onboarding', detail: 'Extending the offer and ensuring a smooth onboarding process for new hire.' }
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
 
  <Box
  sx={{
    minHeight: "100vh", // Full screen height
    width: "70vw", // Full screen width
    background: "linear-gradient(135deg,rgb(156, 173, 181),rgb(206, 226, 233))", // Gradient background
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingY: 10,
    paddingX: 0, // Remove any unwanted left/right padding
    overflow: "hidden", // Prevent unwanted scroll
  }}
>
    <Container maxWidth="xl">
      <Typography
        variant="h3"
        align="center"
        color="#fff"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 6, textShadow: "2px 2px 4px rgba(221, 55, 55, 0.7)" }}
      >
        Executive Process
      </Typography>

      <Grid container spacing={6}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Paper
                elevation={6}
                sx={{
                  p: 4,
                  minHeight: "250px",   // Same card height
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  borderRadius: "12px",
                  background: "rgba(112, 120, 120, 0.7)",   // Darker card color
                  color: "#fff",            // White text
                  transition: "all 0.4s",
                  "&:hover": {
                    background: "#1E2A35",
                    boxShadow: "0 12px 30px rgba(0,0,0,0.8)",
                    transform: "translateY(-8px)",
                  }
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", mb: 2 }}
                >
                  {step.title}
                </Typography>
                <Typography
                  variant="body1"
                >
                  {step.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
  );
};

const EmployeeTrainingSection = () => {
  return (
    <>
    <Box sx={{ py: 10, px: 3, backgroundColor: '#f5f5f5' }}>
      <Grid container spacing={5} alignItems="center">
        
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h4" fontWeight="bold" color="secondary" gutterBottom>
              Employee Training & Development
            </Typography>

            <Typography variant="body1" color="textSecondary" mb={4}>
              Empower your workforce with our expert-led training programs. Our courses are designed to enhance skills, boost productivity, and drive business growth.
            </Typography>

            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutline color="primary" />
                </ListItemIcon>
                <ListItemText primary="Interactive Learning Sessions" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutline color="secondary" />
                </ListItemIcon>
                <ListItemText primary="Expert Trainers" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutline color="success" />
                </ListItemIcon>
                <ListItemText primary="Customized Training Modules" />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <CheckCircleOutline color="warning" />
                </ListItemIcon>
                <ListItemText primary="Certification & Assessment" />
              </ListItem>
            </List>

            
          </motion.div>
        </Grid>

        {/* Right Image */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://hireox.themeht.com/wp-content/uploads/2024/10/section-img01.jpg"
              alt="Employee Training"
              style={{ width: "100%", borderRadius: "12px", boxShadow: "0px 8px 18px rgba(0,0,0,0.3)" }}
            />
          </motion.div>
        </Grid>

      </Grid>
    </Box>
    </>
  );
};

const TeamLeadershipSection = () => {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        width: "150vh",
        color: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
       
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Team Leadership Training
            </Typography>
            <Typography variant="body1" mb={3}>
              Develop strong leadership skills to guide and inspire your team. 
              Our training focuses on communication, decision-making, and 
              strategic thinking to create effective leaders.
            </Typography>
            <ul>
              <li>✅ Effective Communication Skills</li>
              <li>✅ Conflict Resolution & Problem Solving</li>
              <li>✅ Leadership Mindset Development</li>
              <li>✅ Practical Case Studies & Role Plays</li>
            </ul>
            
          </motion.div>
        </Grid>

        {/* Right Image */}
        <Grid item xs={12} md={6}>
          <motion.img
            src="https://hireox.themeht.com/wp-content/uploads/2024/10/section-img01.jpg"
            alt="Team Leadership"
            style={{
              width: "100%",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.5)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};



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
      <ServiceDetail
        id="employee-training"
        title="Employee Training"
        description="Our employee training programs enhance skills, boost productivity, 
        and empower your workforce with the latest industry knowledge."
        // image="31.png"
        >
          <EmployeeTrainingSection/>
        </ServiceDetail>

      <Divider />

      <ServiceDetail
        id="team-leadership"
        title="Team Leadership"
        description="We offer expert consultation on building strong, effective teams by 
        improving communication, collaboration, and leadership skills."
        >
        <TeamLeadershipSection/>
        </ServiceDetail>
    </>
  );
};
export default App;
