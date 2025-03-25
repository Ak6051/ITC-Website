
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
