import React from "react";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

const JobCard = ({ job }) => {
  return (
    <Card sx={{ mb: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6">{job.title}</Typography>
        <Typography color="textSecondary">{job.company}</Typography>
        <Typography>Location: {job.location}</Typography>
        <Typography>₹{job.salary}</Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Apply Now
          </Button>
          <Button variant="outlined" color="secondary">
            Save Job
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobCard;
