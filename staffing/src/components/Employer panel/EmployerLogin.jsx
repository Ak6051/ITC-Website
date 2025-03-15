import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Card, CardContent, Grid, Avatar, Link, Divider, useMediaQuery } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const EmployerLogin = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [formData, setFormData] = useState({
    mobileNo: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/employer/login", { 
        mobileNo: formData.mobileNo, 
        password: formData.password 
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userType", "employer"); // Set user type
      
      alert("Login Successful!");
      navigate('/employer-dashboard');
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh', background: 'linear-gradient(to right, #FFC72C, #00509E, #002147)', p: isMobile ? 2 : 5 }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          textAlign: 'left',
          color: 'white',
          mb: isMobile ? 4 : 0,
          pr: isMobile ? 0 : 4
        }}
      >
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <Typography variant={isMobile ? "h4" : "h3"} sx={{ fontWeight: 'bold', mb: 2, color: '#00509E' }}>Welcome Back!</Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>Login to manage your recruitment with ease.</Typography>
          <Typography variant="body1" sx={{ opacity: 0.8 }}>Access your employer dashboard and streamline your hiring process.</Typography>
        </motion.div>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <Card
            elevation={10}
            sx={{
              width: isMobile ? '95%' : '85%',
              maxWidth: 450,
              p: isMobile ? 3 : 5,
              borderRadius: 6,
              boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
              background: 'rgba(255, 255, 255, 0.98)'
            }}
          >
            <CardContent>
              <Grid container justifyContent="center" alignItems="center" mb={2}>
                <Avatar sx={{ bgcolor: '#00509E', width: 70, height: 70 }}>
                  <LockOutlined sx={{ color: '#FFC72C' }} />
                </Avatar>
              </Grid>
              <Typography variant="h4" mb={3} align="center" sx={{ fontWeight: 'bold', color: '#002147' }}>Employer Login</Typography>
              <Divider sx={{ mb: 3 }} />
              <Box component="form" onSubmit={handleSubmit}>
                <TextField label="Mobile No" name="mobileNo" fullWidth onChange={handleChange} required margin="normal" variant="outlined" type="tel" />
                <TextField label="Password" type="password" name="password" fullWidth onChange={handleChange} required margin="normal" variant="outlined" />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 3,
                    backgroundColor: '#00509E',
                    color: '#FFC72C',
                    '&:hover': { backgroundColor: '#002147' },
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderRadius: 3
                  }}
                >
                  Login
                </Button>
              </Box>
              <Typography align="center" mt={3}>
                New Account? <Link href="/employer-register" sx={{ color: '#002147', fontWeight: 'bold', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Register Here</Link>
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default EmployerLogin;
