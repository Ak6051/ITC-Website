// import React, { useState } from 'react';
// import { Box, Typography, TextField, Button, Checkbox, FormControlLabel, Grid, Paper, Link as MuiLink } from '@mui/material';
// import { Link, useNavigate } from 'react-router-dom';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import PeopleIcon from '@mui/icons-material/People';
// import SearchIcon from '@mui/icons-material/Search';

// const Register = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     password:'',
//     location: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch('http://localhost:5000/api/recruiter/recruiter-register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         alert('User registered successfully');
//         navigate('/login');
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       alert('Error registering user');
//     }
//   };

//   return (
//     <Grid container sx={{ minHeight: '100vh' }}>
//       {/* Left Column */}
//       <Grid
//         item
//         xs={12}
//         md={6}
//         sx={{
//           backgroundColor: '#f4f4f9',
//           padding: 4,
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <Box>
//           <Typography variant="h4" color="primary" gutterBottom>
//             Welcome
//           </Typography>
//           <Typography variant="h6" gutterBottom>
//             One stop recruitment solution for both employers / placement agencies
//           </Typography>

//           <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
//             <AssignmentIcon color="error" sx={{ mr: 2 }} />
//             <Typography variant="body1">
//               Fulfill your Hiring Process <strong>within 5 Days</strong>
//             </Typography>
//           </Box>
//           <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
//             <PeopleIcon color="error" sx={{ mr: 2 }} />
//             <Typography variant="body1">
//               Share your job opening with <strong>10 Million Candidates</strong>
//             </Typography>
//           </Box>
//           <Box display="flex" alignItems="center" sx={{ mt: 3 }}>
//             <SearchIcon color="error" sx={{ mr: 2 }} />
//             <Typography variant="body1">
//               Find the right candidates from our <strong>Large Database</strong>
//             </Typography>
//           </Box>
//         </Box>
//       </Grid>

//       {/* Right Column */}
//       <Grid
//         item
//         xs={12}
//         md={6}
//         sx={{
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: '#f8f9fa',
//         }}
//       >
//         <Paper
//           elevation={3}
//           sx={{ padding: 4, width: '90%', maxWidth: 450, borderRadius: 2 }}
//         >
//           <Box component="form" onSubmit={handleSubmit} noValidate>
//             <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
//               Create an account now
//             </Typography>
//             <Typography variant="body2" sx={{ mb: 2, color: '#555' }}>
//               or already registered?{' '}
//               <Link to="/login" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
//                 Login Now
//               </Link>
//             </Typography>

//             <TextField
//               fullWidth
//               label="Your Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               margin="normal"
//               required
//             />
//             <TextField
//               fullWidth
//               label="Company Email"
//               name="email"
//               type="email"
//               value={formData.email}
//               onChange={handleChange}
//               margin="normal"
//               required
//             />
//             <TextField
//               fullWidth
//               label="Your Mobile Number"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               margin="normal"
//               required
//             />
//              <TextField
//               fullWidth
//               label="Your Password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               margin="normal"
//               required
//             />
//             <TextField
//               fullWidth
//               label="Your Location"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               margin="normal"
//               required
//             />

//             <FormControlLabel
//               control={<Checkbox required />}
//               label={
//                 <Typography variant="body2" sx={{ color: '#555' }}>
//                   I agree to all the{' '}
//                   <MuiLink href="#" underline="hover" sx={{ color: '#007bff' }}>
//                     Terms & Conditions
//                   </MuiLink>
//                   ,{' '}
//                   <MuiLink href="#" underline="hover" sx={{ color: '#007bff' }}>
//                     Privacy Policy
//                   </MuiLink>{' '}
//                   stated herein.
//                 </Typography>
//               }
//             />

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{
//                 backgroundColor: '#d32f2f',
//                 color: '#fff',
//                 padding: '10px 0',
//                 fontWeight: 'bold',
//                 textTransform: 'none',
//                 '&:hover': {
//                   backgroundColor: '#c62828',
//                 },
//               }}
//             >
//               Create Account
//             </Button>

//             <Typography variant="body2" align="center" sx={{ mt: 2, color: '#555' }}>
//               Already Registered?{' '}
//               <Link to="/login" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>
//                 Login Here
//               </Link>
//             </Typography>
//           </Box>
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Paper, Grid, Avatar, Divider, Link as MuiLink } from '@mui/material';
import { PersonAdd } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecruiterRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    password: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/recruiter/recruiter-register', formData);
      toast.success('Registration Successful');
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)',
        padding: { xs: '0 5%', md: '0 10%' }
      }}
    >
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Left Content Section */}
        <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <Typography
              variant="h3"
              sx={{
                color: 'white',
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' }
              }}
            >
              Join Our Recruiter Network
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: 'white',
                opacity: 0.8,
                mb: 3,
                fontSize: { xs: '1rem', md: '1.25rem' }
              }}
            >
              Create an account to find top talent quickly and efficiently.
            </Typography>
          </motion.div>
        </Grid>

        {/* Registration Form Section */}
        <Grid item xs={12} md={6}>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <Paper 
  elevation={6} 
  sx={{ 
    width: { xs: '85%', sm: '75%', md: 400 }, 
    mx: 'auto', 
    my: { xs: 4, md: 6 }, // Reduced top and bottom margin
    p: { xs: 2, md: 3 }, 
    borderRadius: 4, 
    boxShadow: '0 6px 25px rgba(0,0,0,0.3)', 
    background: 'rgba(255, 255, 255, 0.95)' 
  }}
>


              <Box display="flex" justifyContent="center" mb={2}>
                <Avatar sx={{ bgcolor: '#2C5364', width: 60, height: 60 }}>
                  <PersonAdd />
                </Avatar>
              </Box>
              <Typography
                variant="h4"
                mb={3}
                align="center"
                sx={{
                  fontWeight: 'bold',
                  color: '#203A43',
                  fontSize: { xs: '1.8rem', md: '2.125rem' }
                }}
              >
                Recruiter Register
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <Box component="form" onSubmit={handleSubmit}>
                <TextField fullWidth label="Full Name" name="name" onChange={handleChange} margin="normal" variant="outlined" required />
                <TextField fullWidth label="Company Email" type="email" name="email" onChange={handleChange} margin="normal" variant="outlined" required />
                <TextField fullWidth label="Mobile Number" name="mobile" onChange={handleChange} margin="normal" variant="outlined" required />
                <TextField fullWidth label="Password" type="password" name="password" onChange={handleChange} margin="normal" variant="outlined" required />
                <TextField fullWidth label="Location" name="location" onChange={handleChange} margin="normal" variant="outlined" required />

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
                  Register
                </Button>
              </Box>
              <Divider sx={{ my: 3 }}>OR</Divider>
              <Typography align="center">
                Already have an account?
                <MuiLink
                  href="/login"
                  sx={{
                    color: '#2C5364',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  Login Here
                </MuiLink>
              </Typography>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>
    </Grid>

  );
};

export default RecruiterRegister;
