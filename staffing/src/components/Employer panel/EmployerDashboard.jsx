
import React from 'react';
import { Box, Typography } from '@mui/material';

const EmployerDashboard = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4">Welcome to Employer Dashboard</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Here you can manage your job posts, view applicants, and much more.
      </Typography>
    </Box>
  );
};

export default EmployerDashboard;
