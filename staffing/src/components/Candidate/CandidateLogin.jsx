import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  CircularProgress,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const JobseekerLogin = () => {
  const [formData, setFormData] = useState({ mobileNo: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const res = await axios.post(
        'http://localhost:5000/api/candidate/login',
        formData
      );

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('userType', 'candidate'); // Set user type

      alert('Login Successful!');
      navigate('/candidate-dashboard');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #1E88E5,rgb(139, 205, 236))',
        padding: 2,
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: 4,
          width: { xs: '90%', sm: 400 },
          textAlign: 'center',
          borderRadius: 3,
          backgroundColor: 'white',
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="#1E88E5" gutterBottom>
          Jobseeker Login
        </Typography>

        <TextField
          fullWidth
          label="Mobile Number"
          variant="outlined"
          name="mobileNo"
          value={formData.mobileNo}
          onChange={handleChange}
          margin="normal"
          sx={{ borderRadius: 1 }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          name="password"
          value={formData.password}
          onChange={handleChange}
          margin="normal"
          sx={{ borderRadius: 1 }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: '#1E88E5',
            color: 'white',
            marginTop: 2,
            fontWeight: 'bold',
            borderRadius: 2,
            '&:hover': { backgroundColor: '#1565C0' },
          }}
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : (
            'Continue →'
          )}
        </Button>

        <Typography variant="body2" sx={{ marginTop: 2, color: 'gray' }}>
          OR
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          Don’t have an account?
          <Button
            onClick={() => navigate('/candidate-register')}
            sx={{ marginLeft: 1, color: '#FFD700', fontWeight: 'bold' }}
          >
            Register Now
          </Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default JobseekerLogin;
