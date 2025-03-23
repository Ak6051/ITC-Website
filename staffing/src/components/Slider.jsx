import React from 'react';
import { Box } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        width: '100%',  // 100vw ki jagah 100% kiya to fix horizontal scroll
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
        // marginTop: "-72px",
        // paddingTop: "10px",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: '100%',  // 100vw ki jagah 100% use kiya
          height: '100vh',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,  // top: 70 hata diya taaki extra space na aaye
          left: 0,
        }}
      >
        <source src="35.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content above the video */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
          zIndex: 10,
          background: 'rgba(0, 0, 0, 0.4)', // Overlay effect
        }}
      >
        <h1>Welcome to Our Website</h1>
      </Box>
    </Box>
  );
};

export default HeroSection;
