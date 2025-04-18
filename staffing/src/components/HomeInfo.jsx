import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { FiberManualRecord as DotIcon } from '@mui/icons-material';
import teamImage from '../assets/5.png'; // Make sure the image matches the one in the design

const bulletPoints = [
  "Deep industry specialization: Our recruiters are experts in your field, understanding the specific skills, certifications, and experience required for success.",
  "Proactive talent pipeline development: We build and nurture a robust network of top talent, allowing us to respond quickly to your evolving needs.",
  "Customized talent solutions: We tailor our staffing services to your specific requirements, offering flexible solutions including Direct Hiring.",
  "Emphasis on cultural fit: We prioritize culture alignment, ensuring that candidates seamlessly integrate into your team.",
  "Dedicated client partnership: We are committed to building long-term relationships with our clients, providing ongoing support and communication.",
  "Focus on employee retention: We don’t just place talent; we help retain it by fostering a positive and productive work environment.",
  "Reduced time to hire: We accelerate the hiring process, minimizing downtime and maximizing productivity.",
  "Increased productivity and efficiency: We help you build a high-performing team that drives business growth.",
  "Reduced hiring cost: We optimize the recruitment process, saving you time and money."
];

const HomeInfo = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        fontFamily: 'Lora, serif',
        backgroundColor: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Text Content */}
          <Grid item xs={12} md={8}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, color: '#FBB040', mb: 1 }}
            >
              WE PRODUCE{' '}
              <Box component="span" sx={{ color: '#1a237e' }}>
                RESULTS.
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: '#444', mb: 3, lineHeight: 1.7 }}
            >
              We understand the impact of meeting your executive search needs. Our ability to deliver results to you, your company, and your stakeholders has made us a leader in the industry.
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                color: '#1a237e',
                mb: 2,
              }}
            >
              Our Unique Approach
            </Typography>

            {bulletPoints.map((point, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  mb: 1.5,
                }}
              >
                <DotIcon
                  sx={{
                    color: '#FBB040',
                    fontSize: 12,
                    mt: '6px',
                    mr: 1.5,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    color: '#333',
                    lineHeight: 1.7,
                  }}
                >
                  {point}
                </Typography>
              </Box>
            ))}
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                p: 1,
                border: '4px solid #FBB040',
                borderRadius: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Box
                component="img"
                src={teamImage}
                alt="Team"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeInfo;
