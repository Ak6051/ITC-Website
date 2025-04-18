// import React ,{ useState }from 'react'
// import { TextField, InputAdornment, Button, Box, MenuItem, Typography, Container, Card, CardContent, CardActions } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import WorkIcon from "@mui/icons-material/Work";
// import JobGrid from './JobGrid';
// import axios from "axios";
// import { AttachMoney } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';

// const JobOpen = () => {
//       const [title, setTitle] = useState("");
//       const [jobLocation, setJobLocation] = useState("");
//       const [experienceRequired, setExperienceRequired] = useState("");
//       const [jobResults, setJobResults] = useState([]);
//       const navigate = useNavigate();

//       const handleSearch = async () => {
//         try {
//           const response = await axios.get("http://localhost:5000/api/job/search", {
//             params: { title, jobLocation, experienceRequired },
//           });

//           setJobResults(response.data.jobs);
//         } catch (error) {
//           console.error("Error fetching jobs:", error);
//         }
//       };
//   return (
//     <>
//     <Box
//   sx={{
//     height: { xs: '50vh', sm: '60vh', md: '70vh', lg: '80vh' },  // Responsive height
//     background: `url(jobopen.jpg) no-repeat center center/cover`,
//     color: '#fff',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center',
//     p: { xs: 2, sm: 3, md: 4 },  // Responsive padding
//   }}
// >
//   <h1>Job Open Section</h1>
// </Box>

// <Box
//   sx={{
//     textAlign: "center",
//     padding: "25px 20px",
//     background: "linear-gradient(to right, rgb(18, 17, 83), rgb(0, 113, 130))",
//     color: "#fff",
//     marginTop: { xs: "2.5px", sm: "5px", md: "10px" },  // Top gap kam kiya
//   }}
// >
//   <Typography
//     variant="h3"
//     sx={{
//       fontWeight: "bold",
//       marginBottom: "20px",
//       fontSize: { xs: "24px", sm: "32px", md: "40px" },
//       letterSpacing: "1px",
//       color: "#FFC107",
//     }}
//   >
//     Find Your Dream Job Now
//   </Typography>

//   <Container maxWidth="lg">
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: { xs: "column", sm: "column", md: "row" },
//         alignItems: "center",
//         background: "rgba(255, 255, 255, 0.25)",
//         borderRadius: "50px",
//         padding: "20px",
//         boxShadow: 4,
//         justifyContent: "center",
//         width: "100%",
//         backdropFilter: "blur(12px)",
//         gap: "15px",
//       }}
//     >
//       <TextField
//         variant="outlined"
//         placeholder="Enter Requirement"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <SearchIcon sx={{ color: "#FFC107" }} />
//             </InputAdornment>
//           ),
//           sx: { borderRadius: "50px", background: "rgba(255, 255, 255, 0.9)", color: "#121153" },
//         }}
//         sx={{ width: { xs: "100%", sm: "100%", md: "250px" }, flexGrow: 1 }}
//       />

//       <TextField
//         variant="outlined"
//         placeholder="Enter Location"
//         value={jobLocation}
//         onChange={(e) => setJobLocation(e.target.value)}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <LocationOnIcon sx={{ color: "#FFC107" }} />
//             </InputAdornment>
//           ),
//           sx: { borderRadius: "50px", background: "rgba(255, 255, 255, 0.9)", color: "#121153" },
//         }}
//         sx={{ width: { xs: "100%", sm: "100%", md: "200px" }, flexGrow: 1 }}
//       />

//       <TextField
//         select
//         variant="outlined"
//         value={experienceRequired}
//         onChange={(e) => setExperienceRequired(e.target.value)}
//         InputProps={{
//           startAdornment: (
//             <InputAdornment position="start">
//               <WorkIcon sx={{ color: "#FFC107" }} />
//             </InputAdornment>
//           ),
//           sx: { borderRadius: "50px", background: "rgba(255, 255, 255, 0.9)", color: "#121153" },
//         }}
//         sx={{ width: { xs: "100%", sm: "100%", md: "150px" }, flexGrow: 1 }}
//       >
//         <MenuItem value="">Experience</MenuItem>
//         <MenuItem value="fresher">Fresher</MenuItem>
//         <MenuItem value="1-3">1-3 Years</MenuItem>
//         <MenuItem value="3-5">3-5 Years</MenuItem>
//         <MenuItem value="5+">5+ Years</MenuItem>

//       </TextField>

//       <Button
//         variant="contained"
//         onClick={handleSearch}
//         sx={{
//           borderRadius: "50px",
//           padding: "12px 30px",
//           background: "#FFC107",
//           "&:hover": { background: "#E0A800" },
//           color: "#121153",
//           fontWeight: "bold",
//           width: { xs: "100%", sm: "100%", md: "auto" },
//           flexGrow: 1,
//         }}
//       >
//         Search
//       </Button>
//     </Box>
//   </Container>
// </Box>

//       {/* Job Results in Card Format */}
//       <Container maxWidth="lg" sx={{ marginTop: 4, marginBottom: 3 }}>
//         {jobResults.length > 0 ? (
//           <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: "20px" }}>
//             {jobResults.map((job, index) => (
//               <Card key={index} sx={{ boxShadow: 3, borderRadius: "15px", transition: "0.3s", "&:hover": { boxShadow: 6 } }}>
//                 <CardContent>
//                   <Typography variant="h6" sx={{ fontWeight: "bold", color: "#121153" }}>
//                     {job.title}
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: "#666" }}>
//                     {job.location}
//                   </Typography>
//                   <Typography variant="body2" sx={{ display: "flex", alignItems: "center", color: "#333", mt: 1 }}>
//                     <AttachMoney sx={{ fontSize: "18px", mr: 0.5 }} /> {job.salary}
//                   </Typography>
//                   <Typography variant="body2" sx={{ display: "flex", alignItems: "center", color: "#333", mt: 1 }}>
//                     <WorkIcon sx={{ fontSize: "18px", mr: 0.5 }} /> {job.experienceRequired}
//                   </Typography>
//                 </CardContent>
//                 <CardActions>
//                       <Button
//                                    variant="contained"
//                                    fullWidth
//                                    onClick={() => navigate("/jobdetails", { state: { job } })}
//                                    sx={{
//                                      backgroundColor: "#1976d2",
//                                      color: "#fff",
//                                      textTransform: "none",
//                                      transition: "0.3s",
//                                      "&:hover": { backgroundColor: "#1565c0" },
//                                    }}
//                                  >
//                                    Apply Now
//                                  </Button>
//                 </CardActions>
//               </Card>
//             ))}
//           </Box>
//         ) : null}
//       </Container>
//       <JobGrid/>
//     </>
//   )
// }

// export default JobOpen
import React, { useState } from 'react';
import {
  TextField,
  InputAdornment,
  Button,
  Box,
  MenuItem,
  Typography,
  Container,
  Card,
  CardContent,
  CardActions,
  CircularProgress,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import JobGrid from './JobGrid';

const JobOpen = () => {
  const [title, setTitle] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [experienceRequired, setExperienceRequired] = useState('');
  const [jobResults, setJobResults] = useState([]);
  const [loading, setLoading] = useState(false); // Track loading state
  const [noResults, setNoResults] = useState(false); // Track if no results are found
  const navigate = useNavigate();

  const handleSearch = async () => {
    setLoading(true);
    setNoResults(false);
    try {
      const response = await axios.get('http://localhost:5000/api/job/search', {
        params: { title, jobLocation, experienceRequired },
      });

      setJobResults(response.data.jobs);
      if (response.data.jobs.length === 0) {
        setNoResults(true); // Set noResults to true if no jobs are found
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setTitle('');
    setJobLocation('');
    setExperienceRequired('');
    setJobResults([]);
    setNoResults(false);
  };

  return (
    <>
      <Box
        sx={{
          height: { xs: '30vh', sm: '40vh', md: '60vh', lg: '80vh' },
          background: `url(jobopen.jpg) no-repeat center center/cover`,
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          p: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <h1>Job Open Section</h1>
      </Box>

      <Box
        sx={{
          textAlign: 'center',
          padding: '25px 20px',
          background:
            'linear-gradient(to right, rgb(18, 17, 83), rgb(0, 113, 130))',
          color: '#fff',
          marginTop: { xs: '2.5px', sm: '5px', md: '10px' },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            marginBottom: '20px',
            fontSize: { xs: '24px', sm: '32px', md: '40px' },
            letterSpacing: '1px',
            color: '#FFC107',
          }}
        >
          Find Your Dream Job Now
        </Typography>

        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'column', md: 'row' },
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 0.25)',
              borderRadius: '50px',
              padding: '20px',
              boxShadow: 4,
              justifyContent: 'center',
              width: '100%',
              backdropFilter: 'blur(12px)',
              gap: '15px',
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Enter Requirement"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: '#FFC107' }} />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: '50px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: '#121153',
                },
              }}
              sx={{
                width: { xs: '100%', sm: '100%', md: '250px' },
                flexGrow: 1,
              }}
            />

            <TextField
              variant="outlined"
              placeholder="Enter Location"
              value={jobLocation}
              onChange={(e) => setJobLocation(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon sx={{ color: '#FFC107' }} />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: '50px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: '#121153',
                },
              }}
              sx={{
                width: { xs: '100%', sm: '100%', md: '200px' },
                flexGrow: 1,
              }}
            />

            <TextField
              select
              variant="outlined"
              value={experienceRequired}
              onChange={(e) => setExperienceRequired(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <WorkIcon sx={{ color: '#FFC107' }} />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: '50px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: '#121153',
                },
              }}
              sx={{
                width: { xs: '100%', sm: '100%', md: '150px' },
                flexGrow: 1,
              }}
            >
              <MenuItem value="">Experience</MenuItem>
              <MenuItem value="fresher">Fresher</MenuItem>
              <MenuItem value="1-3">1-3 Years</MenuItem>
              <MenuItem value="3-5">3-5 Years</MenuItem>
              <MenuItem value="5+">5+ Years</MenuItem>
            </TextField>

            <Button
              variant="contained"
              onClick={handleSearch}
              sx={{
                borderRadius: '50px',
                padding: '12px 30px',
                background: '#FFC107',
                '&:hover': { background: '#E0A800' },
                color: '#121153',
                fontWeight: 'bold',
                width: { xs: '100%', sm: '100%', md: 'auto' },
                flexGrow: 1,
              }}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: '#fff' }} />
              ) : (
                'Search'
              )}
            </Button>

            <Button
              variant="outlined"
              onClick={handleReset}
              sx={{
                borderRadius: '50px',
                padding: '12px 30px',
                background: '#E0E0E0',
                color: '#121153',
                fontWeight: 'bold',
                width: { xs: '100%', sm: '100%', md: 'auto' },
                flexGrow: 1,
                marginTop: '10px',
              }}
            >
              Reset
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ marginTop: 4, marginBottom: 3 }}>
        {loading ? (
          <CircularProgress sx={{ display: 'block', margin: 'auto' }} />
        ) : noResults ? (
          <Typography
            variant="h6"
            sx={{ color: '#ff3b30', textAlign: 'center' }}
          >
            No jobs found matching your search criteria.
          </Typography>
        ) : (
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                md: '1fr 1fr 1fr',
              },
              gap: '20px',
            }}
          >
            {jobResults.map((job, index) => (
              <Card
                key={index}
                sx={{
                  boxShadow: 3,
                  borderRadius: '15px',
                  transition: '0.3s',
                  '&:hover': { boxShadow: 6 },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', color: '#121153' }}
                  >
                    {job.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    {job.location}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#121153',
                    }}
                  >
                    <WorkIcon sx={{ color: '#FFC107', marginRight: '5px' }} />
                    {job.experienceRequired} experience
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#121153',
                    }}
                  >
                    <CurrencyRupeeIcon
                      sx={{ color: '#FFC107', marginRight: '5px' }}
                    />
                    {job.salary}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => navigate('/jobdetails', { state: { job } })}
                    sx={{ color: '#FFC107', fontWeight: 'bold' }}
                  >
                    View Details
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        )}
      </Container>
      <JobGrid />
    </>
  );
};

export default JobOpen;
