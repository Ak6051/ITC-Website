import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Box, Typography, Container } from '@mui/material';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundImage: "url('32.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden',
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          // backgroundColor: 'rgba(0, 0, 0, 0.5)'
          // backdropFilter: 'blur(1px)',
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', color: 'white', px: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50, scale: isVisible ? 1 : 0.9 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Typography variant="h2" fontWeight="bold">
            {/* Unlock Your <span style={{ fontStyle: 'italic', color: '#FFD700' }}>Potential</span> */}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50, scale: isVisible ? 1 : 0.95 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        >
          <Typography variant="h5" mt={3}>
            {/* Our unique recruiting approach helps our diverse client base increase effectiveness in the hiring of top talent. */}
          </Typography>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;