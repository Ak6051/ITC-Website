

import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FaIndustry,
  FaBriefcase,
  FaUsers,
  FaHeartbeat,
  FaChartLine,
  FaHandHoldingUsd,
  FaLaptopCode,
  FaShieldAlt,
} from 'react-icons/fa';

const services = [
  { id: 'manufacturing-technology', title: 'Manufacturing & Tech', icon: <FaIndustry />, description: 'Streamline your operations with our technology-driven solutions.' },
  { id: 'service-distribution', title: 'Service & Distribution', icon: <FaUsers />, description: 'Optimize your supply chain with advanced logistics support.' },
  { id: 'accounting-finance', title: 'Finance & Accounting', icon: <FaChartLine />, description: 'Precise financial analysis and reporting services.' },
  { id: 'financial-services-banking', title: 'Banking & Insurance', icon: <FaHandHoldingUsd />, description: 'Secure and reliable banking and insurance support.' },
  { id: 'private-equity', title: 'Private Equity', icon: <FaBriefcase />, description: 'Empower your financial strategies with expert consulting.' },
  { id: 'life-sciences', title: 'Life Sciences', icon: <FaHeartbeat />, description: 'Innovative solutions for healthcare and life sciences.' },
  { id: 'healthcare', title: 'Healthcare', icon: <FaLaptopCode />, description: 'Healthcare industry is transforming rapidly due to consumer demand.' },
  { id: 'insurance', title: 'Insurance', icon: <FaShieldAlt />, description: 'New players in the insurance industry have brought increased competition.' },
];

const OurServices = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.9; // Adjust speed for smooth scrolling

    const scroll = () => {
      if (!scrollContainer) return;
      scrollAmount += scrollSpeed;
      if (scrollAmount >= scrollContainer.scrollWidth) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, []);

  return (
    <Box
      sx={{
        textAlign: 'center',
        py: { xs: 6, md: 10 },
        background: 'linear-gradient(to right, rgb(32, 31, 34), rgb(163, 219, 226))',
        minHeight: '70vh',
        color: '#f5f5f5',
        overflow: 'hidden',
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            sx={{ fontFamily: 'serif', fontSize: { xs: '2rem', md: '2.8rem' } }}
          >
            Our Practice Area
          </Typography>
        </motion.div>

        <Box
          sx={{
            width: 80,
            height: 5,
            backgroundColor: '#F2BC38',
            mx: 'auto',
            mb: 4,
            borderRadius: 2,
          }}
        />

        <Typography
          variant="body1"
          maxWidth={650}
          mx="auto"
          mb={5}
          sx={{ fontFamily: 'serif', fontSize: { xs: '18px', md: '1.2rem' } }}
        >
          Explore our wide range of services designed to meet your business needs.
        </Typography>

        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            gap: 3,
            overflowX: 'hidden',
            whiteSpace: 'nowrap',
            p: 2,
            width: '100%',
          }}
        >
          {services.concat(services).map((service, index) => ( // Duplicate for seamless loop
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                minWidth: '300px',
                padding: '20px',
                background: '#fff',
                color: '#2c3e50',
                borderRadius: '12px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                cursor: 'pointer',
                whiteSpace: 'normal',
              }}
            >
              <motion.div style={{ fontSize: '4rem', color: '#e67e22', marginBottom: '20px' }}>
                {service.icon}
              </motion.div>
              <Typography variant="h6" fontWeight="bold">{service.title}</Typography>
              <Typography variant="body2" sx={{ textAlign: 'center', color: '#7f8c8d' }}>
                {service.description}
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 2, background: '#F2BC38', color: '#fff', '&:hover': { background: '#d35400' } }}
                onClick={() => navigate(`/practice-areas#${service.id}`)}
              >
                Learn More
              </Button>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default OurServices;
