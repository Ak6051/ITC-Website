
import React from 'react';
import { Box, Typography, Button, Grid, Container } from '@mui/material';
import teamImage from '../assets/5.png';
import overlayImage from '../assets/4.jpg';

const AboutITC = () => {
  return (
    <Box sx={{ py: { xs: 4, sm: 6, md: 12 }, backgroundColor: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center">
          {/* Left Side - Images */}
          <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 1 } }}>
            <Box 
              sx={{ 
                position: 'relative', 
                ml: { xs: 1, sm: 2, md: 4 }, 
                mt: { xs: 1, sm: 2, md: 4 }, 
                mb: { xs: 2, sm: 3, md: 6 },
                maxWidth: { xs: '100%', sm: '90%', md: '550px' },
                mx: 'auto'
              }}
            >
              {/* Black and white background image */}
              <Box
                component="img"
                src='about-1.webp'
                alt="Office Environment"
                sx={{
                  width: { xs: '85%', sm: '88%', md: '92%' },
                  height: { xs: '250px', sm: '350px', md: '400px' },
                  position: 'absolute',
                  top: { xs: '8%', sm: '10%', md: '12%' },
                  right: { xs: '-5%', sm: '-8%', md: '-10%' },
                  zIndex: 1,
                  filter: 'grayscale(100%) brightness(0.7)',
                  border: '4px solid #fff',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                }}
              />
              {/* Main colorful team image */}
              <Box
                component="img"
                src={teamImage}
                alt="Team Meeting"
                sx={{
                  width: { xs: '85%', sm: '88%', md: '92%' },
                  height: 'auto',
                  position: 'relative',
                  left: { xs: '-5%', sm: '-8%', md: '-10%' },
                  zIndex: 2,
                  border: '4px solid #fff',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                }}
              />
              {/* Top-left L-shaped border */}
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: -5, sm: -8, md: -10 },
                  left: { xs: -30, sm: -45, md: -58 },
                  width: { xs: '50px', sm: '65px', md: '80px' },
                  height: { xs: '50px', sm: '65px', md: '80px' },
                  borderLeft: '4px solid #FBB040',
                  borderTop: '4px solid #FBB040',
                  zIndex: 3
                }}
              />
            </Box>
          </Grid>

          {/* Right Side - Content */}
          <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 2 } }}>
            <Box sx={{ 
              pl: { xs: 0, sm: 3, md: 4 },
              mt: { xs: 4, sm: 0, md: 0 },
              textAlign: { xs: 'center', sm: 'left', md: 'left' }
            }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  color: '#FBB040',
                  fontWeight: 600,
                  mb: { xs: 1.5, sm: 2, md: 2.5 },
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                }}
              >
                ABOUT ITC
              </Typography>
              
              <Typography
                variant="h3"
                sx={{
                  color: '#1a237e',
                  fontWeight: 700,
                  mb: { xs: 2, sm: 2.5, md: 3.5 },
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '2.5rem' },
                  lineHeight: 1.2
                }}
              >
                One Stop Solution For All Your HR Needs
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: '#555',
                  mb: { xs: 3, sm: 4, md: 5 },
                  fontSize: { xs: '1rem', sm: '1.05rem', md: '1.1rem' },
                  lineHeight: 1.6,
                  maxWidth: { xs: '100%', sm: '90%', md: '100%' },
                  mx: 'auto'
                }}
              >
                "Your One-Stop HR Solution – From Talent Acquisition to Employee Engagement, We Streamline Your Workforce for Success!"
              </Typography>

              <Grid container spacing={{ xs: 3, sm: 4 }} sx={{ 
                mb: { xs: 3, sm: 4, md: 5 },
                justifyContent: { xs: 'center', sm: 'flex-start', md: 'flex-start' }
              }}>
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#FBB040',
                      fontWeight: 600,
                      mb: { xs: 1, sm: 1.5 },
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem' }
                    }}
                  >
                    Powerful Partners
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    sx={{ 
                      lineHeight: 1.6,
                      fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
                    }}
                  >
                    "Empowering Success Through Strong Partnerships."
                  </Typography>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#FBB040',
                      fontWeight: 600,
                      mb: { xs: 1, sm: 1.5 },
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.25rem' }
                    }}
                  >
                    Strategic Planning
                  </Typography>
                  <Typography 
                    variant="body1" 
                    color="text.secondary"
                    sx={{ 
                      lineHeight: 1.6,
                      fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
                    }}
                  >
                    "Strategic Planning: Charting the Path to Success."
                  </Typography>
                </Grid>
              </Grid>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#1a237e',
                  color: '#fff',
                  px: { xs: 3, sm: 4 },
                  py: { xs: 1, sm: 1.5 },
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  '&:hover': {
                    backgroundColor: '#0d1b69'
                  }
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutITC;