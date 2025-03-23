
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Grid, Card, CardContent, Typography, Button, Box, Divider } from "@mui/material";
// import { LocationOn, Work } from "@mui/icons-material";
// import { motion } from "framer-motion";

// const JobsForFreshers = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showAll, setShowAll] = useState(false);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/employer/all-jobs");
//         setJobs(response.data); // Directly storing fetched jobs
//       } catch (error) {
//         setError("Error fetching jobs");
//         console.error("Error fetching jobs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchJobs();
//   }, []);

//   if (loading) return <Typography align="center">Loading jobs...</Typography>;
//   if (error) return <Typography align="center" color="error">{error}</Typography>;

//   const visibleJobs = showAll ? jobs : jobs.slice(0, 6);

//   return (
//     <Box sx={{ px: 3, py: 5, backgroundColor: "#f9f9fb" }}>
//       <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
//         Jobs for <span style={{ color: "#007bff" }}>Candidates</span>
//       </Typography>
//       <Grid container spacing={4}>
//         {visibleJobs.map((job, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Card
//                 sx={{
//                   borderRadius: "15px",
//                   boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
//                   transition: "0.3s",
//                   background: "rgba(255, 255, 255, 0.8)",
//                   backdropFilter: "blur(8px)",
//                 }}
//               >
//                 <CardContent>
//                   <Typography variant="h6" fontWeight="bold" color="#333">
//                     {job.title}
//                   </Typography>
//                   <Typography variant="subtitle1" color="primary" sx={{ mb: 1 }}>
//                     {job.requirement}
//                   </Typography>
//                   <Divider sx={{ mb: 2 }} />
//                   <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
//                     {job.description}
//                   </Typography>
//                   <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//                     <Work fontSize="small" sx={{ color: "#757575", mr: 0.5 }} />
//                     <Typography variant="body2" color="textSecondary">
//                       Experience: {job.experience || "Not specified"}
//                     </Typography>
//                   </Box>
//                   <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
//                     <LocationOn fontSize="small" sx={{ color: "#757575", mr: 0.5 }} />
//                     <Typography variant="body2" color="textSecondary">
//                       {job.location}
//                     </Typography>
//                   </Box>

//                   <Typography variant="body2" fontWeight="bold" sx={{ mt: 1 }}>
//                     Company: {job.companyName}
//                   </Typography>
//                   <Typography variant="body2">
//                 Employer: {job.employerName}
//                   </Typography>
//                   <Typography
//                     variant="body2"
//                     color={job.status === "active" ? "green" : "red"}
//                   >
//                     Status: {job.status}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </Grid>
//         ))}
//       </Grid>
//       <Box sx={{ textAlign: "center", mt: 4 }}>
//         {jobs.length > 6 && (
//           <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => setShowAll(!showAll)}
//               sx={{
//                 textTransform: "none",
//                 borderRadius: "25px",
//                 px: 4,
//                 py: 1,
//                 backgroundColor: "#007bff",
//                 transition: "0.3s",
//                 "&:hover": {
//                   backgroundColor: "#0056b3",
//                 },
//               }}
//             >
//               {showAll ? "Show Less" : "View All Jobs"}
//             </Button>
//           </motion.div>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default JobsForFreshers;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Card, CardContent, Typography, Button, Box, Divider, CardActions } from "@mui/material";
import { LocationOn, Work } from "@mui/icons-material";
import { motion } from "framer-motion";

const JobGrid = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const [employerResponse, recruiterResponse] = await Promise.all([
          axios.get("http://localhost:5000/api/employer/all-jobs"),
          axios.get("http://localhost:5000/api/recruiter/all"),
        ]);

        const mergedJobs = [...employerResponse.data, ...recruiterResponse.data]; // Merging both API responses
        setJobs(mergedJobs);
      } catch (error) {
        setError("Error fetching jobs");
        console.error("Error fetching jobs:", error);
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
      <Grid container spacing={2}>
        {visibleJobs.map((job, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Card
                sx={{
                  borderRadius: "10px",
                  boxShadow: "0 3px 8px rgba(0, 0, 0, 0.1)",
                  transition: "0.3s",
                  padding: "10px",
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  background: "#fff",
                }}
              >
                <CardContent sx={{ paddingBottom: "8px" }}>
                  <Typography variant="h6" fontWeight="bold" color="#333" sx={{ mb: 0.5 }}>
                    {job.title}
                  </Typography>
                  <Typography variant="subtitle2" color="primary" sx={{ mb: 1 }}>
                    {job.requirement}
                  </Typography>
                  <Divider sx={{ mb: 1 }} />
                  {/* <Typography variant="body2" color="textSecondary" sx={{ mb: 1, height: "40px", overflow: "hidden" }}>
                    {job.description.length > 80 ? job.description.substring(0, 80) + "..." : job.description}
                  </Typography> */}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                    <Work fontSize="small" sx={{ color: "#757575", mr: 0.5 }} />
                    <Typography variant="body2" color="textSecondary">
                      Experience: {job.experience || "Not specified"}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", mb: 0.5 }}>
                    <LocationOn fontSize="small" sx={{ color: "#757575", mr: 0.5 }} />
                    <Typography variant="body2" color="textSecondary">
                      {job.location}
                    </Typography>
                  </Box>
                  {/* <Typography variant="body2" fontWeight="bold">
                    Company: {job.companyName}
                  </Typography> */}
                </CardContent>
                <CardActions>
                  <Button size="small" sx={{ color: "#FFC107", fontWeight: "bold" }}>
                    Apply Now
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: "center", mt: 4 }}>
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

export default JobGrid;
