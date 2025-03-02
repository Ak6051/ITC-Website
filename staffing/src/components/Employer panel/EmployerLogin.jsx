// import React, { useState } from 'react';
// import { Box, TextField, Button, Typography, Card, CardContent, Grid, Avatar, Link, Divider } from '@mui/material';
// import { LockOutlined } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const EmployerLogin = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     mobileNo: '',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/employer/login', formData);
//       alert(res.data.message);
//       navigate('/employer-dashboard');
//     } catch (error) {
//       alert(error.response?.data?.message || 'Something went wrong');
//     }
//   };

//   return (
//     <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh', background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)', padding: '0 10%' }}>
//       <Grid container spacing={4} alignItems="center">
//         {/* Left Content Section */}
//         <Grid item xs={12} md={6}>
//           <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
//             <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>Welcome Back!</Typography>
//             <Typography variant="h6" sx={{ color: 'white', opacity: 0.8, mb: 3 }}>Login to manage your recruitment with ease.</Typography>
//             <Typography variant="body1" sx={{ color: 'white', opacity: 0.8 }}>Access your employer dashboard and streamline your hiring process.</Typography>
//           </motion.div>
//         </Grid>

//         {/* Login Form Section */}
//         <Grid item xs={12} md={6}>
//           <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
//             <Card elevation={6} sx={{ width: 500, p: 4, borderRadius: 4, boxShadow: '0 6px 25px rgba(0,0,0,0.3)', background: 'rgba(255, 255, 255, 0.95)' }}>
//               <CardContent>
//                 <Grid container justifyContent="center" alignItems="center" mb={2}>
//                   <Avatar sx={{ bgcolor: '#2C5364', width: 60, height: 60 }}>
//                     <LockOutlined />
//                   </Avatar>
//                 </Grid>
//                 <Typography variant="h4" mb={3} align="center" sx={{ fontWeight: 'bold', color: '#203A43' }}>Employer Login</Typography>
//                 <Divider sx={{ mb: 3 }} />
//                 <Box component="form" onSubmit={handleSubmit}>
//                   <TextField label="Mobile No" name="mobileNo" fullWidth onChange={handleChange} required margin="normal" variant="outlined" type="tel" />
//                   <TextField label="Password" type="password" name="password" fullWidth onChange={handleChange} required margin="normal" variant="outlined" />
//                   <Button type="submit" variant="contained" fullWidth sx={{ mt: 3, backgroundColor: '#2C5364', '&:hover': { backgroundColor: '#0F2027' }, py: 1.5, fontSize: '1.1rem' }}>Login</Button>
//                 </Box>
//                 <Typography align="center" mt={3}>
//                   New Account? <Link href="/employer-register" sx={{ color: '#2C5364', fontWeight: 'bold', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Register Here</Link>
//                 </Typography>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default EmployerLogin;

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
      const res = await axios.post('http://localhost:5000/api/employer/login', formData);
      alert(res.data.message);
      navigate('/employer-dashboard');
    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh', background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)', p: isMobile ? 2 : 5 }}>
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
          <Typography variant={isMobile ? "h4" : "h3"} sx={{ fontWeight: 'bold', mb: 2 }}>Welcome Back!</Typography>
          <Typography variant="h6" sx={{ opacity: 0.8, mb: 3 }}>Login to manage your recruitment with ease.</Typography>
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
            elevation={6}
            sx={{
              width: isMobile ? '90%' : '80%',
              maxWidth: 400,
              p: isMobile ? 2 : 4,
              borderRadius: 4,
              boxShadow: '0 6px 25px rgba(0,0,0,0.3)',
              background: 'rgba(255, 255, 255, 0.95)'
            }}
          >

            <CardContent>
              <Grid container justifyContent="center" alignItems="center" mb={2}>
                <Avatar sx={{ bgcolor: '#2C5364', width: 60, height: 60 }}>
                  <LockOutlined />
                </Avatar>
              </Grid>
              <Typography variant="h4" mb={3} align="center" sx={{ fontWeight: 'bold', color: '#203A43' }}>Employer Login</Typography>
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
                    backgroundColor: '#2C5364',
                    '&:hover': { backgroundColor: '#0F2027' },
                    py: 1.5,
                    fontSize: '1.1rem'
                  }}
                >
                  Login
                </Button>
              </Box>
              <Typography align="center" mt={3}>
                New Account? <Link href="/employer-register" sx={{ color: '#2C5364', fontWeight: 'bold', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Register Here</Link>
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default EmployerLogin;
