// 

import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";

const coreValues = [
  {
    title: "Ethics",
    description: "Without ethics, there can be no trust, and without trust, there cannot be a relationship.",
    icon: "🤲"
  },
  {
    title: "Teamwork",
    description: "Our Team, we thrive in an environment of accountability and collaboration.",
    icon: "👥"
  },
  {
    title: "Communication",
    description: "We actively listen to the needs and concerns of our clients to foster strong, lasting relationships.",
    icon: "💬"
  }
];

const CoreValues = () => {
  return (
    <Box sx={{ bgcolor: "#fff", py: 10, fontFamily: "Lora, serif" }}>
      <Container maxWidth="lg">
        <Typography 
          variant="h4" 
          align="center" 
          sx={{ 
            mb: 2,
            color: "#0D1A44",
            fontWeight: 700,
            fontFamily: "Lora, serif"
          }}
        >
          <span style={{ color: "#F7C948" }}>OUR </span>
          <span style={{ color: "#0D1A44" }}>CORE VALUES</span>
        </Typography>

        <Typography 
          align="center" 
          sx={{ 
            mb: 6,
            color: "#333",
            maxWidth: 800,
            mx: "auto",
            fontSize: "1rem",
            lineHeight: 1.7,
            fontFamily: "Lora, serif"
          }}
        >
          We understand the impact of meeting your executive search needs. Our ability to deliver results to you, your company, and your stakeholders has made us a leader in the industry.
        </Typography>

        <Grid container spacing={4}>
          {coreValues.map((value, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box 
                sx={{ 
                  position: "relative",
                  bgcolor: '#0D1A44',
                  borderRadius: 2.5,
                  p: 3,
                  pt: 6,
                  height: "100%",
                  color: 'white',
                  boxShadow: 3,
                  fontFamily: "Lora, serif"
                }}
              >
                <Box 
                  sx={{ 
                    bgcolor: '#F7C948',
                    width: 64,
                    height: 64,
                    borderRadius: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: "absolute",
                    top: -32,
                    left: 24,
                    boxShadow: 2
                  }}
                >
                  <Typography sx={{ fontSize: "2rem" }}>
                    {value.icon}
                  </Typography>
                </Box>

                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 700,
                    mb: 1,
                    mt: 1,
                    color: '#F7C948',
                    fontFamily: "Lora, serif"
                  }}
                >
                  {value.title}
                </Typography>

                <Typography sx={{ color: "#fff", opacity: 0.9, fontSize: "0.95rem" }}>
                  {value.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CoreValues;
