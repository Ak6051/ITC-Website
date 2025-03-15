import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import RecruiterDashNav from '../Pages/RecruiterDashNav';

const EmployerDataGrid = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/employer/all-jobs');
        setJobs(response.data);
      } catch (error) {
        console.log('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  const columns = [
    { field: 'title', headerName: 'Job Title', width: 200 },
    { field: 'requirement', headerName: 'Requirement', width: 200 },
    { field: 'experience', headerName: 'Experience', width: 150 },
    { field: 'description', headerName: 'Description', width: 250 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'companyName', headerName: 'Company Name', width: 200 },
    { field: 'location', headerName: 'Location', width: 150 },
    { field: 'mobileNo', headerName: 'Mobile No', width: 150 },
    { field: 'employerName', headerName: 'Employer Name', width: 180 }
  ];

  const rows = jobs.map((job, index) => ({
    id: index + 1,
    title: job.title,
    requirement: job.requirement,
    experience: job.experience,
    description: job.description,
    status: job.status,
    companyName: job.companyName,
    location: job.location,
    mobileNo: job.mobileNo,
    employerName: job.employerName
  }));

  return (
    <>
      <RecruiterDashNav />
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          color: '#ff5722',
          marginBottom: '20px',
          fontWeight: 'bold'
        }}>
        Job Listings
      </Typography>
      <Box
        sx={{
          height: 500,
          width: '90%',
          margin: 'auto',
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          padding: '20px'
        }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          checkboxSelection
          sx={{
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#f5f5f5',
              color: '#333',
              fontWeight: 'bold', // 🆕 Bold headers
              fontSize: '16px' // थोड़ा बड़ा font size
            },
            '& .MuiDataGrid-row': {
              '&:hover': {
                backgroundColor: '#fff3e0'
              }
            },
            '& .MuiDataGrid-cell': {
              borderBottom: '1px solid #e0e0e0'
            },
            '& .MuiCheckbox-root': {
              color: '#ff5722'
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: '1px solid #e0e0e0'
            }
          }}
        />
      </Box>
    </>
  );
};

export default EmployerDataGrid;
