// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Grid, Box, Typography, Button, Container, useMediaQuery } from "@mui/material";
// import { LocationOn, Work, AttachMoney } from "@mui/icons-material";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const JobList = () => {
//   // const [jobs, setJobs] = useState([]);
//   // const [loading, setLoading] = useState(true);
//   // const [error, setError] = useState(null);

//   // const isMobile = useMediaQuery("(max-width: 600px)");
//   // const navigate = useNavigate();

//   // useEffect(() => {
//   //   const fetchJobs = async () => {
//   //     try {
//   //       const [employerResponse, recruiterResponse] = await Promise.all([
//   //         axios.get("http://localhost:5000/api/employer/all-jobs"),
//   //         axios.get("http://localhost:5000/api/recruiter/all"),
//   //       ]);

//   //       const mergedJobs = [...employerResponse.data, ...recruiterResponse.data];
//   //       setJobs(mergedJobs);
//   //     } catch (error) {
//   //       setError("Error fetching jobs");
//   //       console.error("Error:", error);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchJobs();
//   // }, []);

//   // if (loading) return <Typography align="center">Loading jobs...</Typography>;
//   // if (error) return <Typography align="center" color="error">{error}</Typography>;
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const isMobile = useMediaQuery("(max-width: 600px)");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/jobs/all"); // ✅ Only one API
//         setJobs(response.data); // ✅ Directly setting the fetched data
//       } catch (error) {
//         setError("Error fetching jobs");
//         console.error("Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchJobs();
//   }, []);

//   if (loading) return <Typography align="center">Loading jobs...</Typography>;
//   if (error) return <Typography align="center" color="error">{error}</Typography>;

//   return (
//     <Container maxWidth="lg" sx={{ py: 5 }}>
//       <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
//         Find <span style={{ color: "#1976d2" }}>Your Dream Job</span>
//       </Typography>

//       <Grid container spacing={4}>
//         {jobs.map((job, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>  {/* ✅ 3 cards per row */}
//             <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
//               <Box
//                 sx={{
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "space-between",
//                   p: 4,
//                   backgroundColor: "#fff",
//                   borderRadius: "12px",
//                   boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//                   transition: "0.3s",
//                   "&:hover": { boxShadow: "0 8px 24px rgba(0,0,0,0.2)" },
//                   height: "100%",
//                   border: "1px solid #e0e0e0",
//                 }}
//               >
//                 {/* JOB TITLE */}
//                 <Typography
//                   variant="h6"
//                   fontWeight="bold"
//                   color="#1976d2"
//                   sx={{ mb: 1 }}
//                 >
//                   {job.title}
//                 </Typography>

//                 {/* LOCATION */}
//                 <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//                   <LocationOn fontSize="small" sx={{ color: "#616161", mr: 0.5 }} />
//                   <Typography variant="body2" color="textSecondary">
//                     {job.jobLocation || "Location not specified"}
//                   </Typography>
//                 </Box>

//                 {/* SALARY */}
//                 <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//                   <AttachMoney fontSize="small" sx={{ color: "#43a047", mr: 0.5 }} />
//                   <Typography variant="body2" color="textSecondary">
//                     {job.salary || "Not mentioned"}
//                   </Typography>
//                 </Box>

//                 {/* EXPERIENCE */}
//                 <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//                   <Work fontSize="small" sx={{ color: "#ff9800", mr: 0.5 }} />
//                   <Typography variant="body2" color="textSecondary">
//                     {job.experienceRequired || "Fresher"}
//                   </Typography>
//                 </Box>

//                 {/* APPLY BUTTON */}
//                 <Button
//                   variant="contained"
//                   fullWidth
//                   onClick={() => navigate("/jobdetails", { state: { job } })}
//                   sx={{
//                     backgroundColor: "#1976d2",
//                     color: "#fff",
//                     textTransform: "none",
//                     transition: "0.3s",
//                     "&:hover": { backgroundColor: "#1565c0" },
//                   }}
//                 >
//                   View Detail
//                 </Button>
//               </Box>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default JobList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Grid,
  Box,
  Typography,
  Button,
  Container,
  useMediaQuery,
} from '@mui/material';
import { LocationOn, Work, AttachMoney } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMobile = useMediaQuery('(max-width: 600px)');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/jobs/all');
        const activeJobs = response.data.filter(
          (job) => job.status === 'active'
        ); // ✅ Only active jobs
        setJobs(activeJobs);
      } catch (error) {
        setError('Error fetching jobs');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) return <Typography align="center">Loading jobs...</Typography>;
  if (error)
    return (
      <Typography align="center" color="error">
        {error}
      </Typography>
    );

  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Find <span style={{ color: '#1976d2' }}>Your Dream Job</span>
      </Typography>

      <Grid container spacing={4}>
        {jobs.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  p: 4,
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  transition: '0.3s',
                  '&:hover': { boxShadow: '0 8px 24px rgba(0,0,0,0.2)' },
                  height: '100%',
                  border: '1px solid #e0e0e0',
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="#1976d2"
                  sx={{ mb: 1 }}
                >
                  {job.title}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOn
                    fontSize="small"
                    sx={{ color: '#616161', mr: 0.5 }}
                  />
                  <Typography variant="body2" color="textSecondary">
                    {job.jobLocation || 'Location not specified'}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <CurrencyRupeeIcon
                    fontSize="small"
                    sx={{ color: '#43a047', mr: 0.5 }}
                  />
                  <Typography variant="body2" color="textSecondary">
                    {job.salary || 'Not mentioned'}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Work fontSize="small" sx={{ color: '#ff9800', mr: 0.5 }} />
                  <Typography variant="body2" color="textSecondary">
                    {job.experienceRequired || 'Fresher'}
                  </Typography>
                </Box>

                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => navigate('/jobdetails', { state: { job } })}
                  sx={{
                    backgroundColor: '#1976d2',
                    color: '#fff',
                    textTransform: 'none',
                    transition: '0.3s',
                    '&:hover': { backgroundColor: '#1565c0' },
                  }}
                >
                  View Detail
                </Button>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JobList;
