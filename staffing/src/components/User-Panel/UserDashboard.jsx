// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import { Box, Grid, Container, Typography, Paper, Avatar, List, ListItem, ListItemText, Divider, Button } from "@mui/material";
// // import Navbar from "./UserNavbar";
// // import { Email, Notifications, WorkOutline } from "@mui/icons-material";

// // const UserDashboard = () => {
// //   const [user, setUser] = useState({});

// //   useEffect(() => {
// //     const fetchUserProfile = async () => {
// //       try {
// //         const token = localStorage.getItem("token");
// //         const { data } = await axios.get("http://localhost:5000/api/user/profile", {
// //           headers: { Authorization: `Bearer ${token}` }
// //         });
// //         setUser(data.user);
// //       } catch (error) {
// //         console.error("Error fetching user profile:", error);
// //       }
// //     };

// //     fetchUserProfile();
// //   }, []);

// //   return (
// //     <>
// //       <Navbar />

// //       <Box
// //         component="main"
// //         sx={{
// //           flexGrow: 1,
// //           pt: 10,
// //           pb: 4,
// //           minHeight: "100vh",
// //           backgroundColor: "#f5f5f5",
// //         }}
// //       >
// //         <Container>
// //           <Grid container spacing={4}>
            
// //             {/* Left Side: Messages, Notifications, Jobs */}
// //             <Grid item xs={12} md={8}>
              
// //               {/* Messages Section */}
// //               <Paper sx={{ padding: 3, mb: 3, boxShadow: 3 }}>
// //                 <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
// //                   <Email sx={{ mr: 1 }} /> Messages
// //                 </Typography>
// //                 <List>
// //                   <ListItem>
// //                     <ListItemText primary="New message from Recruiter" secondary="2 hours ago" />
// //                   </ListItem>
// //                   <Divider />
// //                   <ListItem>
// //                     <ListItemText primary="Follow-up on your application" secondary="1 day ago" />
// //                   </ListItem>
// //                 </List>
// //                 <Button variant="contained" fullWidth sx={{ mt: 2, bgcolor: "#1E88E5" }}>
// //                   View All Messages
// //                 </Button>
// //               </Paper>

// //               {/* Notifications Section */}
// //               <Paper sx={{ padding: 3, mb: 3, boxShadow: 3 }}>
// //                 <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
// //                   <Notifications sx={{ mr: 1 }} /> Notifications
// //                 </Typography>
// //                 <List>
// //                   <ListItem>
// //                     <ListItemText primary="New job alert: Frontend Developer" secondary="5 minutes ago" />
// //                   </ListItem>
// //                   <Divider />
// //                   <ListItem>
// //                     <ListItemText primary="Your profile was viewed by 3 recruiters" secondary="1 day ago" />
// //                   </ListItem>
// //                 </List>
// //                 <Button variant="contained" fullWidth sx={{ mt: 2, bgcolor: "#1E88E5" }}>
// //                   View All Notifications
// //                 </Button>
// //               </Paper>

// //               {/* Job Recommendations */}
// //               <Paper sx={{ padding: 3, boxShadow: 3 }}>
// //                 <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
// //                   <WorkOutline sx={{ mr: 1 }} /> Job Recommendations
// //                 </Typography>
// //                 <List>
// //                   <ListItem>
// //                     <ListItemText primary="React Developer - XYZ Company" secondary="Location: Bangalore" />
// //                   </ListItem>
// //                   <Divider />
// //                   <ListItem>
// //                     <ListItemText primary="Backend Engineer - ABC Ltd" secondary="Location: Mumbai" />
// //                   </ListItem>
// //                 </List>
// //                 <Button variant="contained" fullWidth sx={{ mt: 2, bgcolor: "#1E88E5" }}>
// //                   Explore Jobs
// //                 </Button>
// //               </Paper>
// //             </Grid>

// //             {/* Right Side: Profile Card */}
// //             <Grid item xs={12} md={4}>
// //               <Paper
// //                 sx={{
// //                   padding: 4,
// //                   boxShadow: 3,
// //                   textAlign: "center",
// //                   display: "flex",
// //                   flexDirection: "column",
// //                   alignItems: "center",
// //                 }}
// //               >
// //                 <Avatar
// //                   sx={{ width: 100, height: 100, mb: 2 }}
// //                   src={user.profilePic || "/static/images/avatar/1.jpg"}
// //                   alt={user.name}
// //                 />
// //                 <Typography variant="h6" sx={{ fontWeight: "bold" }}>
// //                   {user.name || "John Doe"}
// //                 </Typography>
// //                 <Typography variant="body2" color="textSecondary" mb={2}>
// //                   {user.email || "john.doe@example.com"}
// //                 </Typography>

// //                 <Divider sx={{ width: "100%", my: 2 }} />

// //                 <Box sx={{ textAlign: "left", width: "100%" }}>
// //                   <Typography variant="body1"><strong>City:</strong> {user.city || "N/A"}</Typography>
// //                   <Typography variant="body1"><strong>Mobile:</strong> {user.mobile || "N/A"}</Typography>
// //                   <Typography variant="body1"><strong>Skills:</strong> {user.skills || "React, Node.js"}</Typography>
// //                 </Box>

// //                 <Button
// //                   variant="contained"
// //                   fullWidth
// //                   sx={{ mt: 3, bgcolor: "#1E88E5", '&:hover': { bgcolor: "#1565C0" } }}
// //                 >
// //                   Edit Profile
// //                 </Button>
// //               </Paper>
// //             </Grid>
// //           </Grid>
// //         </Container>
// //       </Box>
// //     </>
// //   );
// // };

// // export default UserDashboard;
// import React, { useState } from "react";
// import {
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   Avatar,
//   Collapse,
//   IconButton,
//   Button,
// } from "@mui/material";
// import { ExpandMore, ExpandLess } from "@mui/icons-material";
// import Navbar from "./UserNavbar";

// const UserDashboard = () => {
//   const [expanded, setExpanded] = useState(null);

//   const handleExpandClick = (index) => {
//     setExpanded(expanded === index ? null : index);
//   };

//   // Dummy recent activities data
//   const recentActivities = [
//     { id: 1, activity: "Applied for Web Developer", date: "2025-03-18" },
//     { id: 2, activity: "Message from Recruiter", date: "2025-03-17" },
//     { id: 3, activity: "Updated Profile Info", date: "2025-03-15" },
//     { id: 4, activity: "Uploaded Resume", date: "2025-03-14" },
//     { id: 5, activity: "Viewed Job Listing", date: "2025-03-13" },
//     { id: 6, activity: "Contacted HR", date: "2025-03-12" },
//     { id: 7, activity: "Applied for Designer Role", date: "2025-03-11" },
//     { id: 8, activity: "New Message Received", date: "2025-03-10" },
//   ];

//   const boxes = [
//     { id: 1, title: "Jobs for you", value: 5, icon: "👔", color: "#FFCC80" },
//     { id: 2, title: "Profile Views", value: 12, icon: "📞", color: "#90CAF9" },
//     { id: 3, title: "My Messages", value: 3, icon: "📩", color: "#CE93D8" },
//     { id: 4, title: "Applied Jobs", value: 7, icon: "🔔", color: "#A5D6A7" },
//   ];

//   return (
//     <>
//       <Navbar />

//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           gap: 3,
//           p: 3,
//           mt: 8,
//           bgcolor: "#f5f5f5",
//           minHeight: "100vh",
//         }}
//       >
//         <Grid container spacing={3}>
//           {/* Expandable Cards Section */}
//           <Grid item xs={12} md={8}>
//             <Grid container spacing={2}>
//               {boxes.map((box, index) => (
//                 <Grid item xs={12} sm={6} key={box.id}>
//                   <Card
//                     sx={{
//                       bgcolor: box.color,
//                       transition: "0.3s",
//                       "&:hover": { boxShadow: 6, cursor: "pointer" },
//                     }}
//                     onClick={() => handleExpandClick(index)}
//                   >
//                     <CardContent
//                       sx={{ display: "flex", alignItems: "center", gap: 2 }}
//                     >
//                       <Typography variant="h4">{box.icon}</Typography>
//                       <Box>
//                         <Typography variant="h6">{box.value}</Typography>
//                         <Typography variant="body1">{box.title}</Typography>
//                       </Box>
//                       <IconButton sx={{ marginLeft: "auto" }}>
//                         {expanded === index ? <ExpandLess /> : <ExpandMore />}
//                       </IconButton>
//                     </CardContent>
//                   </Card>

//                   <Collapse in={expanded === index}>
//                     <Card
//                       sx={{
//                         mt: 1,
//                         p: 2,
//                         bgcolor: "#ffffff",
//                         boxShadow: 2,
//                         transition: "0.3s",
//                       }}
//                     >
//                       <Typography variant="body2" color="text.secondary">
//                         You have {box.value} new {box.title.toLowerCase()}.
//                       </Typography>
//                       <Button variant="contained" sx={{ mt: 1 }} size="small">
//                         View More
//                       </Button>
//                     </Card>
//                   </Collapse>
//                 </Grid>
//               ))}
//             </Grid>
//           </Grid>

//           {/* Profile Card and Recent Activities on the right */}
//           <Grid item xs={12} md={4}>
//             {/* Profile Card */}
//             <Card
//               sx={{
//                 borderRadius: "12px",
//                 p: 3,
//                 bgcolor: "#ffffff",
//                 boxShadow: 3,
//                 transition: "0.3s",
//                 "&:hover": { boxShadow: 6 },
//               }}
//             >
//               <Box display="flex" flexDirection="column" alignItems="center">
//                 <Avatar
//                   sx={{ width: 100, height: 100, mb: 2 }}
//                   src="https://via.placeholder.com/150"
//                   alt="Profile Picture"
//                 />
//                 <Typography variant="h6">John Doe</Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   johndoe@example.com
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   sx={{ mt: 2, px: 4 }}
//                 >
//                   Edit Profile
//                 </Button>
//               </Box>
//             </Card>

//             {/* Recent Activities below Profile */}
//             <Card
//               sx={{
//                 borderRadius: "12px",
//                 mt: 3,
//                 p: 2,
//                 bgcolor: "#ffffff",
//                 boxShadow: 3,
//                 height: "400px",
//                 overflowY: "auto", // Scrollable box
//                 transition: "0.3s",
//                 "&:hover": { boxShadow: 6 },
//               }}
//             >
//               <Typography variant="h6" mb={2}>
//                 Recent Activities
//               </Typography>
//               {recentActivities.map((activity) => (
//                 <Card
//                   key={activity.id}
//                   sx={{
//                     p: 2,
//                     mb: 2,
//                     bgcolor: "#f0f0f0",
//                     boxShadow: 1,
//                     transition: "0.3s",
//                     "&:hover": { boxShadow: 4 },
//                   }}
//                 >
//                   <Typography variant="body1">{activity.activity}</Typography>
//                   <Typography variant="body2" color="text.secondary" mt={1}>
//                     {activity.date}
//                   </Typography>
//                 </Card>
//               ))}
//             </Card>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   );
// };

// export default UserDashboard;
import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Collapse,
  IconButton,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import Navbar from "./UserNavbar";

const UserDashboard = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedDetail, setSelectedDetail] = useState(null);

  const handleExpandClick = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
    setSelectedDetail(detailData[index]);
  };

  // Sample data for expandable details
  const detailData = [
    {
      id: 1,
      title: "Jobs for You",
      description:
        "You have 5 recommended jobs. Apply now to increase your chances.",
      extraInfo: "Suggested roles: Frontend Developer, Backend Developer.",
    },
    {
      id: 2,
      title: "Profile Views",
      description:
        "Your profile has been viewed 12 times in the last week. Keep it updated!",
      extraInfo: "Top visitors: Amazon, Google, Microsoft.",
    },
    {
      id: 3,
      title: "My Messages",
      description:
        "You have 3 unread messages. Respond quickly to increase engagement.",
      extraInfo: "New messages from: HR, Recruiter, Hiring Manager.",
    },
    {
      id: 4,
      title: "Applied Jobs",
      description:
        "You applied for 7 jobs recently. Keep checking for updates.",
      extraInfo: "Latest application: Senior Software Engineer at XYZ Corp.",
    },
  ];

  return (
    <>
      <Navbar />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          p: 3,
          mt: 8,
          bgcolor: "#f5f5f5",
          minHeight: "100vh",
        }}
      >
        <Grid container spacing={3}>
          {/* Right-Side Expandable Cards */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              {detailData.map((item, index) => (
                <Grid item xs={12} sm={6} key={item.id}>
                  <Card
                    sx={{
                      bgcolor: "#ffffff",
                      borderRadius: "12px",
                      boxShadow: 3,
                      transition: "0.3s",
                      "&:hover": { boxShadow: 6, cursor: "pointer" },
                    }}
                    onClick={() => handleExpandClick(index)}
                  >
                    <CardContent
                      sx={{ display: "flex", alignItems: "center", gap: 2 }}
                    >
                      <Typography variant="h4" color="primary">
                        {index + 1}
                      </Typography>
                      <Box>
                        <Typography variant="h6">{item.title}</Typography>
                        <Typography variant="body1" color="text.secondary">
                          Click to view details
                        </Typography>
                      </Box>
                      <IconButton sx={{ marginLeft: "auto" }}>
                        {expanded === index ? <ExpandLess /> : <ExpandMore />}
                      </IconButton>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Expandable Detail Box Below All Cards */}
            <Collapse in={expanded !== null} timeout="auto" unmountOnExit>
              {selectedDetail && (
                <Card
                  sx={{
                    mt: 3,
                    p: 4,
                    bgcolor: "#e3f2fd",
                    boxShadow: 4,
                    borderRadius: "12px",
                    transition: "0.3s",
                  }}
                >
                  <Typography variant="h5" color="primary" gutterBottom>
                    {selectedDetail.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    {selectedDetail.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedDetail.extraInfo}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 2 }}
                  >
                    View More
                  </Button>
                </Card>
              )}
            </Collapse>
          </Grid>

          {/* Profile Card & Recent Activities */}
          <Grid item xs={12} md={4}>
            {/* Profile Card */}
            <Card
              sx={{
                borderRadius: "12px",
                p: 3,
                bgcolor: "#ffffff",
                boxShadow: 3,
                transition: "0.3s",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar
                  sx={{ width: 100, height: 100, mb: 2 }}
                  src="https://via.placeholder.com/150"
                  alt="Profile Picture"
                />
                <Typography variant="h6">John Doe</Typography>
                <Typography variant="body2" color="text.secondary">
                  johndoe@example.com
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2, px: 4 }}
                >
                  Edit Profile
                </Button>
              </Box>
            </Card>

            {/* Recent Activities */}
            <Card
              sx={{
                borderRadius: "12px",
                mt: 3,
                p: 2,
                bgcolor: "#ffffff",
                boxShadow: 3,
                height: "400px",
                overflowY: "auto",
                transition: "0.3s",
                "&:hover": { boxShadow: 6 },
              }}
            >
              <Typography variant="h6" mb={2}>
                Recent Activities
              </Typography>
              {[
                "Applied for Web Developer",
                "Message from Recruiter",
                "Updated Profile Info",
                "Uploaded Resume",
              ].map((activity, index) => (
                <Card
                  key={index}
                  sx={{
                    p: 2,
                    mb: 2,
                    bgcolor: "#f0f0f0",
                    boxShadow: 1,
                    transition: "0.3s",
                    "&:hover": { boxShadow: 4 },
                  }}
                >
                  <Typography variant="body1">{activity}</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    mt={1}
                  >
                    2025-03-18
                  </Typography>
                </Card>
              ))}
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UserDashboard;
