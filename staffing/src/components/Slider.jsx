import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/banner.webp';

// Add Lora font import
const loraFont = `
  @import url('https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap');
`;

const HeroSection = () => {
  const navigate = useNavigate();

  const handleEmployerClick = () => {
    navigate('/employer-login');
  };

  const handleCandidateClick = () => {
    navigate('/candidate-register');
  };

  return (
    <>
      {/* Add style tag for Lora font */}
      <style>{loraFont}</style>
      <Box
        sx={{
          width: '100%',
          height: {
            xs: '500px', // Mobile
            sm: '550px', // Tablet
            md: '600px', // Laptop
            lg: '650px', // Desktop
          },
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Semi-transparent white overlay with gradient */}
        <Box
          sx={{
            width: {
              xs: '95%', // Mobile
              sm: '85%', // Tablet
              md: '75%', // Laptop
              lg: '60%', // Desktop
            },
            background:
              'linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,255,255,0.7))',
            padding: {
              xs: '20px', // Mobile
              sm: '25px', // Tablet
              md: '35px', // Laptop
              lg: '40px', // Desktop
            },
            borderRadius: { xs: 1, sm: 2 },
            boxShadow: 3,
            zIndex: 2,
            margin: '20px auto',
            maxHeight: {
              xs: '450px', // Mobile
              sm: '500px', // Tablet
              md: '540px', // Laptop
              lg: '580px', // Desktop
            },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 500,
              color: '#F5B122',
              fontFamily: 'Lora, serif',
              letterSpacing: '0.5px',
              fontSize: {
                xs: '1.5rem', // Mobile
                sm: '1.8rem', // Tablet
                md: '2rem', // Laptop
                lg: '2.2rem', // Desktop
              },
              mb: { xs: 0.5, sm: 1 },
            }}
          >
            Connecting Talent
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              mt: { xs: 0.5, sm: 1 },
              color: '#1E2B51',
              fontFamily: 'Lora, serif',
              letterSpacing: '1px',
              fontSize: {
                xs: '1.8rem', // Mobile
                sm: '2rem', // Tablet
                md: '2.2rem', // Laptop
                lg: '2.5rem', // Desktop
              },
              lineHeight: 1.2,
            }}
          >
            WITH OPPORTUNITIES
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mt: { xs: 2, sm: 3 },
              color: '#1E2B51',
              lineHeight: 1.6,
              fontFamily: 'Lora',
              fontSize: {
                xs: '1rem', // Mobile
                sm: '1.2rem', // Tablet
                md: '1.3rem', // Laptop
                lg: '1.5rem', // Desktop
              },
              maxWidth: '90%',
            }}
          >
            Your Strategic Placement Partner, Elevate Your Workforce, Transform
            Your Future.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: { xs: 1, sm: 2 },
              mt: { xs: 3, sm: 4 },
              flexDirection: { xs: 'column', sm: 'row' },
            }}
          >
            <Button
              variant="contained"
              onClick={handleEmployerClick}
              sx={{
                backgroundColor: '#F5B122',
                color: '#000',
                fontWeight: 'bold',
                fontFamily: 'Lora, serif',
                px: { xs: 3, sm: 4 },
                py: { xs: 1, sm: 1.5 },
                width: { xs: '100%', sm: 'auto' },
                fontSize: { xs: '0.9rem', sm: '1rem' },
                '&:hover': {
                  backgroundColor: '#dca20e',
                },
              }}
            >
              Employer
            </Button>
            <Button
              variant="contained"
              onClick={handleCandidateClick}
              sx={{
                backgroundColor: '#1E2B51',
                color: '#fff',
                fontWeight: 'bold',
                fontFamily: 'Lora, serif',
                px: { xs: 3, sm: 4 },
                py: { xs: 1, sm: 1.5 },
                width: { xs: '100%', sm: 'auto' },
                fontSize: { xs: '0.9rem', sm: '1rem' },
                '&:hover': {
                  backgroundColor: '#162042',
                },
              }}
            >
              Candidate
            </Button>
          </Box>
        </Box>

        {/* "Job Opening" vertical tab */}
        <Box
          sx={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: '#F5B122',
            color: '#1E2B51',
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            padding: {
              xs: '8px 6px',
              sm: '10px 7px',
              md: '12px 8px',
            },
            fontWeight: 'bold',
            borderRadius: '8px 0 0 8px',
            cursor: 'pointer',
            zIndex: 3,
            fontFamily: 'Lora, serif',
            letterSpacing: '1px',
            fontSize: {
              xs: '0.8rem',
              sm: '0.9rem',
              md: '1rem',
            },
            display: { xs: 'none', md: 'block' }, // Hide on mobile and small tablets
          }}
        >
          Job Opening
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
