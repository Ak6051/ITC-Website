import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  Divider,
  CardMedia,
  Chip,
  Avatar,
} from '@mui/material';
import {
  TrendingUp,
  Gavel,
  Storefront,
  People,
  PieChart,
  AccountBalance,
} from '@mui/icons-material';



import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Navigate } from 'react-router-dom';

const advantages = [
  {
    id: 1,
    title: 'Reduce Hiring Risks',
    description: 'Minimize risks with effective recruitment strategies.',
    icon: <Gavel fontSize="large" sx={{ color: '#007bff' }} />,
  },
  {
    id: 2,
    title: 'Increase Efficiencies',
    description: 'Streamline your hiring process with expert solutions.',
    icon: <TrendingUp fontSize="large" sx={{ color: '#28a745' }} />,
  },
  {
    id: 3,
    title: 'Deeper Talent Pools',
    description: 'Access a wider and more qualified candidate network.',
    icon: <People fontSize="large" sx={{ color: '#ffc107' }} />,
  },
  {
    id: 4,
    title: 'Onboarding Support',
    description: 'Ensure smooth transitions for new hires.',
    icon: <Storefront fontSize="large" sx={{ color: '#17a2b8' }} />,
  },
  {
    id: 5,
    title: 'Effective Employer Branding',
    description: 'Enhance your brand’s reputation in the job market.',
    icon: <PieChart fontSize="large" sx={{ color: '#dc3545' }} />,
  },
  {
    id: 6,
    title: 'Deep Industry Knowledge',
    description: 'Leverage insights from industry experts.',
    icon: <AccountBalance fontSize="large" sx={{ color: '#6f42c1' }} />,
  },
];

const services = [
  {
    icon: <Storefront fontSize="large" />,
    title: 'Consultation',
    description:
      "We begin by understanding your requirements—whether you're looking to hire or seeking employment.",
  },
  {
    icon: <TrendingUp fontSize="large" />,
    title: 'Talent Search  ',
    description:
      'Using a combination of industry knowledge, proprietary technology, and a vast network, we identify the best-fit candidates for your needs.',
  },
  {
    icon: <AccountBalance fontSize="large" />,
    title: 'Screening & Interviews ',
    description:
      "We thoroughly assess each candidate's qualifications, experience, and cultural fit to ensure they meet your standards.",
  },
  {
    icon: <People fontSize="large" />,
    title: 'Placement ',
    description:
      'We finalize the match and ensure both the client and candidate are satisfied with the decision.',
  },
  {
    icon: <PieChart fontSize="large" />,
    title: 'Follow-up ',
    description:
      'We maintain ongoing support to ensure the success of the placement, making adjustments as necessary.',
  },
];

const AdvantageCard = ({ advantage }) => {
  return (
    <Card
      sx={{
        p: 3,
        borderLeft: '6px solid #F7C948',
        transition: '0.3s',
        '&:hover': { transform: 'scale(1.05)' },
      }}
    >
      <CardContent>
        <Typography variant="h5" sx={{ color: '#003366', fontWeight: 'bold' }}>
          {advantage.title}
        </Typography>
        <Typography sx={{ mt: 1, color: '#555' }}>
          {advantage.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const About = () => {
  return (
    <Box sx={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
     <Box
  sx={{
    // minHeight: '100vh', // Pura viewport height cover karega
    height: { xs: '300px', sm: '450px', md: '650px' }, 
    overflow: 'hidden',
    backgroundImage: `url(37.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover', 
    backgroundPosition: 'top',  
    // width: '1443px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    paddingX: { xs: '15px', sm: '25px', md: '35px' }, 
    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.8rem' },
    fontWeight: 'bold',
    textShadow: '2px 2px 10px rgba(0,0,0,0.7)',
    textAlign: 'center',
  }}
>
  About Us
</Box>



      <Box sx={{ padding: '80px 10%', backgroundColor: '#f8f9fa' }}>
        <Grid container spacing={4} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <img
              src="about.jpg"
              alt="HR Solution"
              style={{ width: '100%', borderRadius: '12px' }}
            />
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="overline"
              sx={{ color: '#007bff', fontWeight: 'bold' }}
            >
              ABOUT US
            </Typography>

            <Typography
              variant="h4"
              sx={{ fontWeight: 'bold', margin: '10px 0' }}
            >
              One Stop Solution for all your HR Needs
            </Typography>

            <Typography sx={{ color: '#6c757d', lineHeight: 1.7 }}>
              Nunc a scelerisque dolor, in cursus sem. Aenean turpis elit,
              tempus vel dictum consectetur, consectetur a sem. Vivamus lacinia
              rutrum justo sed iaculis. Ut eget magna vel elit suscipit
              scelerisque.
            </Typography>

            <Grid container spacing={3} sx={{ marginTop: '30px' }}>
              {/* Powerful Partners */}
              <Grid item xs={12} sm={6}>
                <Card
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: 'none',
                    backgroundColor: 'transparent',
                  }}
                >
                  <CardMedia>
                    <BusinessCenterIcon
                      sx={{
                        fontSize: 50,
                        color: '#007bff',
                        marginRight: '15px',
                      }}
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Powerful Partners
                    </Typography>
                    <Typography sx={{ color: '#6c757d' }}>
                      Vestibulum morbi blandit cursus risus.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              {/* Strategic Planning */}
              <Grid item xs={12} sm={6}>
                <Card
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: 'none',
                    backgroundColor: 'transparent',
                  }}
                >
                  <CardMedia>
                    <TrendingUpIcon
                      sx={{
                        fontSize: 50,
                        color: '#28a745',
                        marginRight: '15px',
                      }}
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      Strategic Planning
                    </Typography>
                    <Typography sx={{ color: '#6c757d' }}>
                      Vestibulum morbi blandit cursus risus.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#007bff',
                color: '#fff',
                marginTop: '30px',
                borderRadius: '30px',
                padding: '10px 25px',
                '&:hover': { backgroundColor: '#0056b3' },
              }}
              endIcon={<ArrowForwardIcon />} 
            
            >
              CONTACT US
            </Button>
          </Grid>
        </Grid>
      </Box>

      <div
        style={{ width: '100%', backgroundColor: '#F7F9F8', padding: '60px 0' }}
      >
        {' '}
        {/* ✅ Top-bottom space kam kiya */}
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          sx={{ maxWidth: '1400px', margin: '0 auto', px: 4 }}
        >
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <Chip
              label="WHY CHOOSE US"
              color="default"
              variant="outlined"
              sx={{ mb: 2, backgroundColor: 'white', fontWeight: 600 }}
            />
            <Typography variant="h4" fontWeight={600} gutterBottom>
              Our Basic Work Process
            </Typography>
          </Grid>

          {/* Right Section with Button */}
          <Grid item xs={12} md={6} sx={{ textAlign: 'right' }}>
            <Button
              variant="contained"
              sx={{
                borderRadius: 3,
                px: 4,
                py: 1,
                backgroundColor: '#064E3B',
              }}
            >
              SERVICES DETAILS
            </Button>
          </Grid>
        </Grid>
        {/* Services Section */}
        <Grid
          container
          spacing={4}
          sx={{ maxWidth: '1400px', margin: '0 auto', px: 4, mt: 4 }}
        >
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <div
                style={{
                  display: 'flex', // ✅ Logo left side set kiya
                  alignItems: 'center',
                  gap: '20px',
                  padding: '30px 20px', // ✅ Content ka top-bottom space kam kiya
                  transition: '0.3s',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  backgroundColor: 'transparent',
                  textAlign: 'left',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 80,
                    height: 80,
                    backgroundColor: '#064E3B',
                    color: 'white',
                    borderRadius: '50%', // ✅ Circular icon background
                    flexShrink: 0, // ✅ Logo size ko maintain kiya
                  }}
                >
                  {service.icon}
                </div>

                <div>
                  <Typography variant="h6" fontWeight={600}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    {service.description} {/* ✅ Secondary text */}
                  </Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>

      <Box sx={{ backgroundColor: '#243D44', py: 8, px: 4, color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Left Side Image */}
            <Grid
              item
              xs={12}
              md={4}
              sx={{ display: 'flex', justifyContent: 'flex-start' }}
            >
              {/* <Avatar
                src="Leader.png" // Tumhara image path
                alt="Sangita Butani"
                sx={{
                  width: 370,
                  height: 380,                
                  border: '4px solid white',
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                  ml: { md: -15 }, // Image ko aur left shift kiya
                }}
              /> */}
              <Avatar
  src="leader1.jpg"
  alt="Sangita Butani"
  sx={{
    width: 320,
    height: 385,
    border: '4px solid white',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
    ml: { md: -15 },
    img: {
      marginTop:"70px",
      height: '450px',
      width:"490px",  // Adjust internal height
      objectFit: 'cover', // Ensures it fills the space properly
    },
  }}
/>

            </Grid>

            {/* Right Side Full Information */}
            <Grid item xs={12} md={8} sx={{ pl: { md: 8 } }}>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                Sangita Butani
              </Typography>

              <Typography variant="body1" paragraph>
                Sangita Butani is a dynamic and visionary leader with over
                fifteen years of extensive experience in the staffing service
                industry and business development, specializing in talent
                acquisition and career development. With a proven track record
                in both in-house and external consultancy roles, she has
                successfully led recruitment strategies that align talent
                acquisition with organizational goals.
              </Typography>

              <Typography variant="body1" paragraph>
                A results-driven search practitioner, Sangita Butani is renowned
                for her integrity, dedication to excellence, and unwavering
                commitment to exceeding client expectations. Her leadership and
                expertise in talent management have played a key role in helping
                organizations thrive by building strong, capable teams.
              </Typography>

              <Typography variant="body1" paragraph>
                Before joining Management and staffing services, Sangita Butani
                served as CEO and Director of a prominent job placement firm,
                where she played a pivotal role in connecting top talent with
                leading organizations. Her strategic leadership contributed to
                the firm’s success in helping businesses build high-performing
                teams.
              </Typography>

              <Typography variant="body1" paragraph>
                Sangita Butani holds a Master of Social Work (MSW) from H. N.
                Shukla College and a Bachelor's degree from Saurashtra
                University.
              </Typography>

              <Typography variant="body1" paragraph>
                Sangita Butani values the diverse spectrum of talent
                professionals, recognizing that their commitment to career
                growth is essential not only to their personal passion but also
                to the security and well-being of their families.
              </Typography>

              <Typography variant="body1" paragraph>
                She has successfully placed executives at all levels of
                leadership, as well as highly skilled individual contributors.
                Her expertise spans local, national, and global organizations of
                all sizes, ensuring that the right talent is always aligned with
                business needs.
              </Typography>

              <Typography variant="body1" paragraph>
                Sangita Butani's strategic leadership and market insight have
                been crucial in advancing the company's progress and achieving
                its long-term goals.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Chip
            label="WHY CHOOSE US"
            color="primary"
            variant="outlined"
            sx={{ mb: 2, fontWeight: 600 }}
          />
          <Typography variant="h4" fontWeight={600}>
            Advantages of Working With Us
          </Typography>
          <Typography
            sx={{ color: '#6c757d', mt: 2, maxWidth: '800px', mx: 'auto' }}
          >
            We provide expert HR solutions to streamline your hiring process and maximize efficiency.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {advantages.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  backgroundColor: 'transparent',   // ✅ No card background
                  minHeight: '120px',                // ✅ Evenly spaced items
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                {/* Icon */}
                <Avatar
                  sx={{
                    backgroundColor: '#fff',
                    color: 'white',
                    width: 64,
                    height: 64,
                  }}
                >
                  {item.icon}
                </Avatar>

                {/* Title and Description */}
                <Box>
                  <Typography variant="h6" fontWeight="bold" sx={{ color: '#003366' }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ color: '#555' }}>{item.description}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    </Box>
  );
};

export default About;
