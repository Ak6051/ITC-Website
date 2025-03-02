
// import React, { useState } from 'react';
// import { Box, TextField, Button, Typography, Card, CardContent, Grid, Avatar, Link, Divider } from '@mui/material';
// import { LockOutlined } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const EmployerRegister = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     companyName: '',
//     mobileNo: '',
//     email: '',
//     requirement: '',
//     location:'',
//     password: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/employer/register', formData);
//       alert(res.data.message);
//       navigate('/employer-login');
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
//             <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>Welcome to Our Employer Portal</Typography>
//             <Typography variant="h6" sx={{ color: 'white', opacity: 0.8, mb: 3 }}>Register to access top talent and grow your business with ease.</Typography>
//             <Typography variant="body1" sx={{ color: 'white', opacity: 0.8 }}>Join us today and take your recruitment process to the next level!</Typography>
//           </motion.div>
//         </Grid>

//         {/* Registration Form Section */}
//         <Grid item xs={12} md={6}>
//           <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
//             <Card elevation={6} sx={{ width: 500, p: 4, borderRadius: 4, boxShadow: '0 6px 25px rgba(0,0,0,0.3)', background: 'rgba(255, 255, 255, 0.95)' }}>
//               <CardContent>
//                 <Grid container justifyContent="center" alignItems="center" mb={2}>
//                   <Avatar sx={{ bgcolor: '#2C5364', width: 60, height: 60 }}>
//                     <LockOutlined />
//                   </Avatar>
//                 </Grid>
//                 <Typography variant="h4" mb={3} align="center" sx={{ fontWeight: 'bold', color: '#203A43' }}>Register Employer</Typography>
//                 <Divider sx={{ mb: 3 }} />
//                 <Box component="form" onSubmit={handleSubmit}>
//                   <TextField label="Full Name" name="name" fullWidth onChange={handleChange} required margin="normal" variant="outlined" />
//                   <TextField label="Company Name" name="companyName" fullWidth onChange={handleChange} required margin="normal" variant="outlined" />
//                   <TextField label="Mobile No" name="mobileNo" fullWidth onChange={handleChange} required margin="normal" type="tel" variant="outlined" />
//                   <TextField label="Email" name="email" fullWidth onChange={handleChange} required margin="normal" type="email" variant="outlined" />
//                   <TextField label="Requirement" name="requirement" fullWidth onChange={handleChange} required margin="normal" variant="outlined" />
//                   <TextField label="Location" name="location" fullWidth onChange={handleChange} required margin="normal" variant="outlined" />
//                   <TextField label="Password" type="password" name="password" fullWidth onChange={handleChange} required margin="normal" variant="outlined" />
//                   <Button type="submit" variant="contained" fullWidth sx={{ mt: 3, backgroundColor: '#2C5364', '&:hover': { backgroundColor: '#0F2027' }, py: 1.5, fontSize: '1.1rem' }}>Register</Button>
//                 </Box>
//                 <Typography align="center" mt={3}>
//                   Already have an account? <Link href="/employer-login" sx={{ color: '#2C5364', fontWeight: 'bold', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Login</Link>
//                 </Typography>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// };

// export default EmployerRegister;

import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Card, CardContent, Grid, Avatar, Link, Divider } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EmployerRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    mobileNo: '',
    email: '',
    requirement: '',
    location: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/employer/register', formData);
      alert(res.data.message);
      navigate('/employer-login');
    } catch (error) {
      alert(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh', background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)', p: { xs: 2, md: 10 } }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left Content Section */}
        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
              Welcome to Our Employer Portal
            </Typography>
            <Typography variant="h6" sx={{ color: 'white', opacity: 0.8, mb: 3, fontSize: { xs: '1rem', md: '1.25rem' } }}>
              Register to access top talent and grow your business with ease.
            </Typography>
            <Typography variant="body1" sx={{ color: 'white', opacity: 0.8, fontSize: { xs: '0.9rem', md: '1rem' } }}>
              Join us today and take your recruitment process to the next level!
            </Typography>
          </motion.div>
        </Grid>

        {/* Registration Form Section */}
        <Grid item xs={12} md={6}>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Card elevation={6} sx={{
              maxWidth: { xs: '100%', sm: '400px', md: '500px' },
              mx: 'auto',
              p: { xs: 3, md: 4 },
              borderRadius: 4,
              boxShadow: '0 6px 25px rgba(0,0,0,0.3)',
              background: 'rgba(255, 255, 255, 0.95)'
            }}>
              <CardContent>
                <Grid container justifyContent="center" alignItems="center" mb={2}>
                  <Avatar sx={{ bgcolor: '#2C5364', width: 60, height: 60 }}>
                    <LockOutlined />
                  </Avatar>
                </Grid>
                <Typography variant="h4" mb={3} align="center" sx={{ fontWeight: 'bold', color: '#203A43', fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
                  Register Employer
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Box component="form" onSubmit={handleSubmit}>
                  <TextField label="Full Name" name="name" fullWidth onChange={handleChange} required margin="normal" variant="outlined" />
                  <TextField label="Company Name" name="companyName" fullWidth onChange={handleChange} required margin="normal" variant="outlined" />
                  <TextField label="Mobile No" name="mobileNo" fullWidth onChange={handleChange} required margin="normal" type="tel" variant="outlined" />
                  <TextField label="Email" name="email" fullWidth onChange={handleChange} required margin="normal" type="email" variant="outlined" />
                  <TextField label="Requirement" name="requirement" fullWidth onChange={handleChange} required margin="normal" variant="outlined" />
                  <TextField label="Location" name="location" fullWidth onChange={handleChange} required margin="normal" variant="outlined" />
                  <TextField label="Password" type="password" name="password" fullWidth onChange={handleChange} required margin="normal" variant="outlined" />
                  <Button type="submit" variant="contained" fullWidth sx={{
                    mt: 3,
                    backgroundColor: '#2C5364',
                    '&:hover': { backgroundColor: '#0F2027' },
                    py: 1.5,
                    fontSize: '1.1rem'
                  }}>Register</Button>
                </Box>
                <Typography align="center" mt={3}>
                  Already have an account? <Link href="/employer-login" sx={{
                    color: '#2C5364',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' }
                  }}>Login</Link>
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EmployerRegister;
