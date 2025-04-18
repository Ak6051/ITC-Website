
import React from 'react';
import { Container, Typography, Box, Grid, Divider ,Paper,Button, Card , CardContent , CardMedia,List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
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
import {  School, Group, VerifiedUser, WorkspacePremium } from "@mui/icons-material";
import { Groups, Psychology, Handshake, Insights,  Leaderboard } from "@mui/icons-material";


// 🔥 Hero Section (Background Image)
const HeroSection = () => (
  <Box
  sx={{
    height: { xs: '160px', sm: '360px', md: '620px' }, 
    background: 'url(service.jpg) no-repeat center center/cover',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    p: { xs: 2, sm: 3, md: 4 }, // Adjust padding
  }}
>
  <Typography
    variant="h4"
    sx={{
      fontWeight: 'bold',
      fontSize: { xs: '1.5rem', sm: '2rem', md: '3rem' }, // Responsive font size
    marginTop:"15vh"
    
    }}
  >
    Our Services
  </Typography>
  <Typography
    variant="h6"
    sx={{
      mt: 2,
      fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }, // Responsive font size
    }}
  >
    Empowering Your Business with Professional Solutions
  </Typography>
</Box>
);

// 🛠️ Styled Service Box
const ServiceBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  padding: "30px 0",
  cursor: "pointer",
  transition: "0.3s",
  "&:hover": {
    transform: "translateX(10px)",
    "& .text": {
      color: "#f0b90b",
      fontWeight: "bold",
      letterSpacing: "1.5px",
    },
  },
}));

// 🚀 Services Section with Smooth Scrolling
const ServicesSection = () => (
  <Box
    sx={{
      backgroundColor: "#0f4c5c",
      color: "#fff",
      minHeight: "60vh",
      padding: { xs: "30px", md: "50px" }, // Responsive padding
    }}
  >
    <Container>
      <Grid
        container
        spacing={4}
        alignItems="center"
        direction={{ xs: "column-reverse", md: "row" }} // Image below content on mobile
      >
        {/* Left Side: Content */}
        <Grid item xs={12} md={6}>
          <Typography
            variant="h3"
            sx={{
              color: "#f0b90b",
              mb: 5,
              textAlign: { xs: "center", md: "left" }, // Center text on mobile
            }}
          >
            Our Services
          </Typography>

          {[
            { id: "recruiter-service", name: "RECRUITER SERVICE" },
            { id: "executive-search", name: "EXECUTIVE SEARCH" },
            { id: "employee-training", name: "EMPLOYEE TRAINING" },
            { id: "team-leadership", name: "TEAM LEADERSHIP" },
          ].map((service, index) => (
            <ScrollLink key={index} to={service.id} smooth={true} duration={500}>
              <ServiceBox>
                <Typography sx={{ fontSize: "18px", color: "#aaa" }}>
                  {`0${index + 1}`}
                </Typography>
                <Typography
                  className="text"
                  sx={{ fontSize: "24px", transition: "0.3s" }}
                >
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
            src="41.jpg"
            alt="Our Service"
            sx={{
              width: "100%",
              maxHeight: { xs: "300px", md: "450px" }, // Adjust image size responsively
              objectFit: "cover",
              borderRadius: "12px",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              marginTop: { xs: "20px", md: "0" }, // Add margin on mobile
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
    <Box sx={{ py: 6, px: 4, backgroundColor: "#f4f4f4", minHeight: "70vh" }}>
      <Container>
        <Typography
          variant="h4"
          sx={{ color: "#0f4c5c", mb: 3, fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#555", lineHeight: 1.8, mb: 4 }}
        >
          {description}
        </Typography>
        {children}
      </Container>
    </Box>
  </Element>
);

const recruitmentSteps = [
  {
    icon: <AssignmentIcon fontSize="large" color="primary" />,
    title: "Requirement Analysis",
    description: "Understanding the client’s needs, job description, and desired qualifications.",
  },
  {
    icon: <SearchIcon fontSize="large" color="primary" />,
    title: "Candidate Sourcing",
    description: "Identifying and reaching out to potential candidates through multiple channels.",
  },
  {
    icon: <AssessmentIcon fontSize="large" color="primary" />,
    title: "Screening & Shortlisting",
    description: "Reviewing resumes, conducting initial interviews, and shortlisting qualified candidates.",
  },
  {
    icon: <PeopleIcon fontSize="large" color="primary" />,
    title: "Grooming Candidate",
    description: "Ensuring the candidate is prepared and aligned with client expectations before the final interview.",
  },
  {
    icon: <WorkOutlineIcon fontSize="large" color="primary" />,
    title: "Client Interview & Selection",
    description: "Arranging interviews with the client and assisting in the selection process.",
  },
  {
    icon: <CheckCircleOutlineIcon fontSize="large" color="primary" />,
    title: "Offer & Onboarding",
    description: "Extending the offer and ensuring a smooth onboarding process for the new hire.",
  },
  {
    icon: <LoopIcon fontSize="large" color="primary" />,
    title: "Follow-Up",
    description: "Following up with candidates and clients post-placement to ensure satisfaction.",
  },
];

const RecruitmentProcess = () => {
  return (
    <Box sx={{ py: 10, px: 3, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="xl">
        <Grid container spacing={5} alignItems="center">

          {/* Left Image Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <CardMedia
                component="img"
                image="81.jpg"  // ⭐️ Replace with your image path
                alt="Recruitment Process"
                sx={{ 
                  width: "100%", 
                  borderRadius: "12px", 
                  boxShadow: "0px 8px 18px rgba(0,0,0,0.3)" 
                }}
              />
            </motion.div>
          </Grid>

          {/* Right Card Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h4" fontWeight="bold" color="secondary" gutterBottom>
                Recruitment Process
              </Typography>

              <Typography variant="body1" color="textSecondary" mb={4}>
                Our streamlined recruitment process ensures that the right talent is identified, evaluated, and hired efficiently.
              </Typography>

              <Grid container spacing={3}>
                {recruitmentSteps.map((step, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Card
                        sx={{
                          minHeight: "220px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          boxShadow: 4,
                          borderRadius: "12px",
                          transition: "0.4s",
                          "&:hover": {
                            boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
                            transform: "translateY(-10px)"
                          }
                        }}
                      >
                        <CardContent>
                          {step.icon}
                          <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                            {step.title}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" mt={1}>
                            {step.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

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
    <Box sx={{ py: 10, px: 3, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="xl">
        <Grid container spacing={5} alignItems="center">

          {/* Left Card Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography variant="h4" fontWeight="bold" color="secondary" gutterBottom>
                Executive Search Process
              </Typography>

              <Typography variant="body1" color="textSecondary" mb={4}>
                Our structured executive search process ensures that top-tier talent is identified, evaluated, and placed successfully.
              </Typography>

              <Grid container spacing={3}>
                {steps.map((step, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Card
                        sx={{
                          minHeight: "220px",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                          boxShadow: 4,
                          borderRadius: "12px",
                          transition: "0.4s",
                          "&:hover": {
                            boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
                            transform: "translateY(-10px)"
                          }
                        }}
                      >
                        <CardContent>
                          {step.icon}
                          <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                            {step.title}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" mt={1}>
                            {step.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>

          {/* Right Image Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <CardMedia
                component="img"
                image="82.jpg"  // ⭐️ Replace with your image path
                alt="Executive Search"
                sx={{ 
                  width: "100%", 
                  borderRadius: "12px", 
                  boxShadow: "0px 8px 18px rgba(0,0,0,0.3)" 
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const EmployeeTrainingSection = () => {
  const features = [
    {
      icon: <School fontSize="large" color="primary" />,
      title: "Interactive Learning Sessions",
      description: "Engage employees with hands-on training, real-world scenarios, and collaborative activities."
    },
    {
      icon: <Group fontSize="large" color="secondary" />,
      title: "Expert Trainers",
      description: "Learn from industry professionals with years of experience and specialized knowledge."
    },
    {
      icon: <WorkspacePremium fontSize="large" color="success" />,
      title: "Customized Training Modules",
      description: "Tailor training content to match your company's specific goals and objectives."
    },
    {
      icon: <VerifiedUser fontSize="large" color="warning" />,
      title: "Certification & Assessment",
      description: "Track progress and recognize achievements with certificates and evaluations."
    },
    {
      icon: <CheckCircleOutline fontSize="large" color="info" />,
      title: "Leadership & Development",
      description: "Develop strong leadership skills with specialized coaching and mentoring programs."
    },
    {
      icon: <CheckCircleOutline fontSize="large" color="error" />,
      title: "Continuous Learning Support",
      description: "Access ongoing resources and support to promote continuous employee growth."
    }
  ];

  return (
    <Box sx={{ py: 10, px: 3, backgroundColor: "#f5f5f5" }}>
      <Grid 
        container 
        spacing={5} 
        alignItems="center"
        direction={{ xs: 'column-reverse', md: 'row' }}  // Responsive Direction
      >

        {/* Left Image */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CardMedia
              component="img"
              image="40.jpg"
              alt="Employee Training"
              sx={{
                width: "100%",
                borderRadius: "12px",
                boxShadow: "0px 8px 18px rgba(0,0,0,0.3)"
              }}
            />
          </motion.div>
        </Grid>

        {/* Right Content */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h4" fontWeight="bold" color="secondary" gutterBottom>
              Employee Training & Development
            </Typography>

            <Typography variant="body1" color="textSecondary" mb={4}>
              Empower your workforce with our expert-led training programs. Our courses are designed to enhance skills, boost productivity, and drive business growth.
            </Typography>

            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card
                      sx={{
                        minHeight: "220px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        boxShadow: 4,
                        borderRadius: "12px",
                        transition: "0.4s",
                        "&:hover": {
                          boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
                          transform: "translateY(-10px)"
                        }
                      }}
                    >
                      <CardContent>
                        {feature.icon}
                        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" mt={1}>
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Grid>

      </Grid>
    </Box>
  );
};


const TeamLeadershipSection = () => {
  const features = [
    {
      icon: <Groups fontSize="large" color="primary" />,
      title: "Effective Communication Skills",
      description: "Learn how to clearly convey ideas, motivate your team, and build trust with effective communication techniques."
    },
    {
      icon: <Psychology fontSize="large" color="secondary" />,
      title: "Conflict Resolution & Problem Solving",
      description: "Develop strategies to resolve conflicts, promote teamwork, and maintain a harmonious work environment."
    },
    {
      icon: <Leaderboard fontSize="large" color="success" />,
      title: "Leadership Mindset Development",
      description: "Enhance your leadership capabilities by fostering a growth mindset and strengthening decision-making skills."
    },
    {
      icon: <Handshake fontSize="large" color="warning" />,
      title: "Practical Case Studies & Role Plays",
      description: "Apply leadership theories to real-life scenarios through engaging role plays and case studies."
    },
    {
      icon: <VerifiedUser fontSize="large" color="info" />,
      title: "Strategic Thinking & Planning",
      description: "Improve your strategic planning skills to make informed decisions and achieve long-term business goals."
    },
    {
      icon: <Insights fontSize="large" color="error" />,
      title: "Coaching & Mentoring",
      description: "Learn to coach and mentor your team effectively, fostering personal and professional growth."
    }
  ];

  return (
    <Box sx={{ py: 10, px: 3, backgroundColor: "#f5f5f5" }}>
      <Grid container spacing={5} alignItems="center">

        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h4" fontWeight="bold" color="secondary" gutterBottom>
              Team Leadership Training
            </Typography>

            <Typography variant="body1" color="textSecondary" mb={4}>
              Develop strong leadership skills to guide and inspire your team. 
              Our training focuses on communication, decision-making, and 
              strategic thinking to create effective leaders.
            </Typography>

            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Card
                      sx={{
                        minHeight: "220px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        boxShadow: 4,
                        borderRadius: "12px",
                        transition: "0.4s",
                        "&:hover": {
                          boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
                          transform: "translateY(-10px)"
                        }
                      }}
                    >
                      <CardContent>
                        {feature.icon}
                        <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" mt={1}>
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Grid>

        {/* Right Image */}
        <Grid item xs={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CardMedia
              component="img"
              image="42.jpg"
              alt="Team Leadership"
              sx={{ 
                width: "100%", 
                borderRadius: "12px", 
                boxShadow: "0px 8px 18px rgba(0,0,0,0.3)" 
              }}
            />
          </motion.div>
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
