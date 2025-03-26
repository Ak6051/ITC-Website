import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, CircularProgress, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    if (!email) {
      toast.error('Please enter your email');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/recruiter/forgot-password', { email });

      toast.success(res.data.message);

      localStorage.setItem('forgotEmail', email);
      navigate('/reset-password');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Top Section with Image */}
      <Box
        sx={{
          backgroundImage: `url(https://hireox.themeht.com/wp-content/uploads/2024/12/hero02-img01.jpg)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          height: { xs: '300px', sm: '450px', md: '650px' },
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          textShadow: '2px 2px 10px rgba(0,0,0,0.7)',
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.8rem' },
          fontWeight: 'bold',
        }}
      >
        Forgot Password
      </Box>

      {/* Main Section with Form and Left Content */}
      <Container maxWidth="lg" sx={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: -10 }}>
        <Paper elevation={3} sx={{ width: '100%', p: { xs: 3, md: 5 }, borderRadius: '12px', overflow: 'hidden' }}>
          <Grid container>
            {/* Left Side Content */}
            <Grid item xs={12} md={6} sx={{
              backgroundColor: '#f5f5f5',
              minHeight: { xs: '200px', md: '100%' },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              p: 4
            }}>
              <Typography variant="h4" fontWeight="bold" color="primary" gutterBottom>
                Reset Your Password
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.8, fontSize: '1rem' }}>
                Enter your registered email to receive a One-Time Password (OTP) and reset your password securely.
              </Typography>
            </Grid>

            {/* Right Side Form */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 4 }}>
              <Typography variant="h5" align="center" fontWeight="bold" sx={{ mb: 3 }}>
                Forgot Password
              </Typography>

              <Box component="form" noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <Button
                  onClick={handleSendOTP}
                  variant="contained"
                  color="primary"
                  fullWidth
                  disabled={loading}
                  sx={{
                    bgcolor: '#FF5722',
                    '&:hover': { bgcolor: '#E64A19' },
                    color: 'white',
                    fontSize: '1rem',
                    transition: '0.3s'
                  }}
                >
                  {loading ? <CircularProgress size={24} color="inherit" /> : 'Send OTP'}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default ForgotPassword;
