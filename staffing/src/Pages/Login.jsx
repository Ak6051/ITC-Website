// import React, { useState, useEffect } from 'react';
// import { Box, Typography, TextField, Button, Paper, Grid, Avatar, Divider, Link } from '@mui/material';
// import { LockOutlined } from '@mui/icons-material';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const RecruiterLogin = () => {
//     const [loginMode, setLoginMode] = useState('mobile'); // 'mobile' or 'email'
//     const [mobile, setMobile] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         document.body.style.overflow = 'auto'; // Allow scrolling
//     }, []);

//     const handleLoginModeChange = (mode) => {
//         setLoginMode(mode);
//         setMobile('');
//         setEmail('');
//         setPassword('');
//     };

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/recruiter/recruiter-login', {
//                 mobile: loginMode === 'mobile' ? mobile : undefined,
//                 email: loginMode === 'email' ? email : undefined,
//                 password
//             });
//             toast.success('Login Successful');
//             localStorage.setItem('token', response.data.token);
//             navigate('/recruiter');
//         } catch (error) {
//             toast.error(error.response?.data?.message || 'Login failed');
//         }
//     };

//     return (
//         <Grid container justifyContent="center" alignItems="center" sx={{ height: '100vh', overflowY: 'auto', background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)', padding: '0 10%' }}>
//             <Grid container spacing={4} alignItems="center">
//                 {/* Left Content Section */}
//                 <Grid item xs={12} md={6}>
//                     <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
//                         <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}>Welcome Back, Recruiter!</Typography>
//                         <Typography variant="h6" sx={{ color: 'white', opacity: 0.8, mb: 3 }}>Log in to connect with top talent and streamline your hiring process.</Typography>
//                     </motion.div>
//                 </Grid>

//                 {/* Login Form Section */}
//                 <Grid item xs={12} md={6}>
//                     <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
//                         <Paper elevation={6} sx={{ width: 450, p: 4, borderRadius: 4, boxShadow: '0 6px 25px rgba(0,0,0,0.3)', background: 'rgba(255, 255, 255, 0.95)' }}>
//                             <Box display="flex" justifyContent="center" mb={2}>
//                                 <Avatar sx={{ bgcolor: '#2C5364', width: 60, height: 60 }}>
//                                     <LockOutlined />
//                                 </Avatar>
//                             </Box>
//                             <Typography variant="h4" mb={3} align="center" sx={{ fontWeight: 'bold', color: '#203A43' }}>Recruiter Login</Typography>
//                             <Divider sx={{ mb: 3 }} />
//                             <Box component="form" onSubmit={handleSubmit}>
//                                 {loginMode === 'mobile' ? (
//                                     <TextField label="Mobile No" name="mobile" fullWidth onChange={(e) => setMobile(e.target.value)} required margin="normal" variant="outlined" />
//                                 ) : (
//                                     <TextField label="Email" name="email" fullWidth onChange={(e) => setEmail(e.target.value)} required margin="normal" variant="outlined" />
//                                 )}
//                                 <TextField label="Password" type="password" name="password" fullWidth onChange={(e) => setPassword(e.target.value)} required margin="normal" variant="outlined" />
//                                 <Button type="submit" variant="contained" fullWidth sx={{ mt: 3, backgroundColor: '#2C5364', '&:hover': { backgroundColor: '#0F2027' }, py: 1.5, fontSize: '1.1rem' }}>Login</Button>
//                             </Box>
//                             <Divider sx={{ my: 3 }}>OR</Divider>
//                             <Button variant="outlined" fullWidth onClick={() => handleLoginModeChange(loginMode === 'mobile' ? 'email' : 'mobile')} sx={{ textTransform: 'none', color: '#2C5364', borderColor: '#2C5364', '&:hover': { borderColor: '#0F2027' } }}>
//                                 {loginMode === 'mobile' ? 'Login with Email' : 'Login with Mobile Number'}
//                             </Button>
//                             <Typography align="center" mt={3}>
//                                 Don't have an account? <Link href="/register" sx={{ color: '#2C5364', fontWeight: 'bold', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Create Account</Link>
//                             </Typography>
//                         </Paper>
//                     </motion.div>
//                 </Grid>
//             </Grid>



//             <ToastContainer position="top-center" autoClose={3000} />
//         </Grid>
//     );
// };

// export default RecruiterLogin;
import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Paper, Grid, Avatar, Divider, Link } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecruiterLogin = () => {
    const [loginMode, setLoginMode] = useState('mobile'); // 'mobile' or 'email'
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = 'auto'; // Allow scrolling
    }, []);

    const handleLoginModeChange = (mode) => {
        setLoginMode(mode);
        setMobile('');
        setEmail('');
        setPassword('');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/recruiter/recruiter-login', {
                mobile: loginMode === 'mobile' ? mobile : undefined,
                email: loginMode === 'email' ? email : undefined,
                password
            });
            toast.success('Login Successful');
            localStorage.setItem('token', response.data.token);
            navigate('/recruiter');
        } catch (error) {
            toast.error(error.response?.data?.message || 'Login failed');
        }
    };

    return (
        <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '100vh', overflowY: 'auto', background: 'linear-gradient(to right, #2C5364, #203A43, #0F2027)', padding: { xs: '5%', md: '2%' } }}>
            <Grid container spacing={4} alignItems="center">
                {/* Left Content Section */}
                <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' }, mb: { xs: 4, md: 0 } }}>
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                        <Typography variant="h3" sx={{ color: 'white', fontWeight: 'bold', mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
                            Welcome Back, Recruiter!
                        </Typography>
                        <Typography variant="h6" sx={{ color: 'white', opacity: 0.8, mb: 3, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                            Log in to connect with top talent and streamline your hiring process.
                        </Typography>
                    </motion.div>
                </Grid>

                {/* Login Form Section */}
                <Grid item xs={12} md={6}>
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                        <Paper elevation={6} sx={{
                            width: { xs: '90%', sm: '80%', md: '450px' },
                            p: { xs: 2, md: 4 },
                            borderRadius: 4,
                            boxShadow: '0 6px 25px rgba(0,0,0,0.3)',
                            background: 'rgba(255, 255, 255, 0.95)',
                            mx: 'auto',
                            mt: { xs: 2, md: 4 }  // Top margin for breathing space
                        }}>
                            <Box display="flex" justifyContent="center" mb={1}>
                                <Avatar sx={{ bgcolor: '#2C5364', width: 50, height: 50 }}>
                                    <LockOutlined />
                                </Avatar>
                            </Box>
                            <Typography variant="h5" mb={2} align="center" sx={{ fontWeight: 'bold', color: '#203A43' }}>
                                Recruiter Login
                            </Typography>
                            <Divider sx={{ mb: 2 }} />
                            <Box component="form" onSubmit={handleSubmit}>
                                {loginMode === 'mobile' ? (
                                    <TextField
                                        label="Mobile No"
                                        name="mobile"
                                        fullWidth
                                        onChange={(e) => setMobile(e.target.value)}
                                        value={mobile}
                                        required
                                        margin="normal"
                                        variant="outlined"
                                    />
                                ) : (
                                    <TextField
                                        label="Email"
                                        name="email"
                                        fullWidth
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email}
                                        required
                                        margin="normal"
                                        variant="outlined"
                                    />
                                )}
                                <TextField
                                    label="Password"
                                    type="password"
                                    name="password"
                                    fullWidth
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                    margin="normal"
                                    variant="outlined"
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        mt: 2,
                                        backgroundColor: '#2C5364',
                                        '&:hover': { backgroundColor: '#0F2027' },
                                        py: 1,
                                        fontSize: '1rem'
                                    }}
                                >
                                    Login
                                </Button>
                            </Box>

                            <Divider sx={{ my: 2 }}>OR</Divider>
                            <Button
                                variant="outlined"
                                fullWidth
                                onClick={() => handleLoginModeChange(loginMode === 'mobile' ? 'email' : 'mobile')}
                                sx={{
                                    textTransform: 'none',
                                    color: '#2C5364',
                                    borderColor: '#2C5364',
                                    '&:hover': { borderColor: '#0F2027' }
                                }}
                            >
                                {loginMode === 'mobile' ? 'Login with Email' : 'Login with Mobile Number'}
                            </Button>
                            <Typography align="center" mt={2} sx={{ fontSize: '0.9rem' }}>
                                Don't have an account?{' '}
                                <Link href="/register" sx={{
                                    color: '#2C5364',
                                    fontWeight: 'bold',
                                    textDecoration: 'none',
                                    '&:hover': { textDecoration: 'underline' }
                                }}>
                                    Create Account
                                </Link>
                            </Typography>
                        </Paper>

                    </motion.div>
                </Grid>
            </Grid>
            <ToastContainer position="top-center" autoClose={3000} />
        </Grid>

    );
};

export default RecruiterLogin;
