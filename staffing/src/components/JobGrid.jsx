// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
// import { LocationOn, Work,  } from "@mui/icons-material";
// import PersonIcon from '@mui/icons-material/Person';
// import PhoneIcon from '@mui/icons-material/Phone';

// const JobsForFreshers = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/employer/fetch-employer");
//         setJobs(response.data);
//       } catch (error) {
//         setError("Error fetching jobs");
//         console.error("Error fetching employers:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchJobs();
//   }, []);

//   if (loading) return <Typography align="center">Loading jobs...</Typography>;
//   if (error) return <Typography align="center" color="error">{error}</Typography>;

//   return (
//     <div style={{ padding: "20px", backgroundColor: "#f4f4f9" }}>
//       <Typography variant="h4" align="center" gutterBottom>
//         Jobs for <span style={{ color: "#007bff" }}>Candidates</span>
//       </Typography>
//       <Grid container spacing={3}>
//         {jobs.map((job, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Card sx={{ borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
//               <CardContent>
//                 <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//                   {job.requirement}
//                 </Typography>
//                 <Typography variant="subtitle2" color="primary">
//                   {job.companyName}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   <LocationOn fontSize="small" /> {job.location}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   <PhoneIcon fontSize="small" /> {job.mobileNo}
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   <PersonIcon fontSize="small" /> {job.name || "Not disclosed"}
//                 </Typography>
//                 {/* <Typography variant="body2" sx={{ mt: 1 }}>
//                   {job.skills?.join(", ") || "No skills listed"}
//                 </Typography> */}
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <Button variant="outlined" color="primary">
//           View All Jobs
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default JobsForFreshers;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Typography, Button, Box, Divider } from "@mui/material";
import { LocationOn, Work } from "@mui/icons-material";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import { motion } from "framer-motion";

const JobsForFreshers = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/employer/fetch-employer");
        setJobs(response.data);
      } catch (error) {
        setError("Error fetching jobs");
        console.error("Error fetching employers:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) return <Typography align="center">Loading jobs...</Typography>;
  if (error) return <Typography align="center" color="error">{error}</Typography>;

  const visibleJobs = showAll ? jobs : jobs.slice(0, 6);

  return (
    <Box sx={{ px: 3, py: 5, backgroundColor: "#f9f9fb" }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Jobs for <span style={{ color: "#007bff" }}>Candidates</span>
      </Typography>
      <Grid container spacing={4}>
        {visibleJobs.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Card
                sx={{
                  borderRadius: "15px",
                  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
                  transition: "0.3s",
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <CardContent >
                  <Typography variant="h6" fontWeight="bold" color="#333">
                    {job.requirement}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" sx={{ mb: 1 }}>
                    {job.companyName}
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <LocationOn fontSize="small" sx={{ color: "#757575", mr: 0.5 }} />
                    <Typography variant="body2" color="textSecondary">
                      {job.location}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <PhoneIcon fontSize="small" sx={{ color: "#757575", mr: 0.5 }} />
                    <Typography variant="body2" color="textSecondary">
                      {job.mobileNo}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <PersonIcon fontSize="small" sx={{ color: "#757575", mr: 0.5 }} />
                    <Typography variant="body2" color="textSecondary">
                      {job.name || "Not disclosed"}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: "center", mt: 4 , }}>
        {jobs.length > 6 && (
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setShowAll(!showAll)}
              sx={{
                textTransform: "none",
                borderRadius: "25px",
                px: 4,
                py: 1,
                backgroundColor: "#007bff",
                transition: "0.3s",
                "&:hover": {
                  backgroundColor: "#0056b3",
                },
              }}
            >
              {showAll ? "Show Less" : "View All Jobs"}
            </Button>
          </motion.div>
        )}
      </Box>
    </Box>
  );
};

export default JobsForFreshers;