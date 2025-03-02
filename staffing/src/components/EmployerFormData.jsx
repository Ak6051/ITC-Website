import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import moment from 'moment';
import { Box, Typography } from '@mui/material';
import RecruiterDashNav from '../Pages/RecruiterDashNav';

const EmployerDataGrid = () => {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    const fetchEmployers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/employer/fetch-employer');
        setEmployers(response.data);
      } catch (error) {
        console.log('Error fetching employers:', error);
      }
    };

    fetchEmployers();
  }, []);

  const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'companyName', headerName: 'Company Name', width: 200 },
    { field: 'mobileNo', headerName: 'Mobile No', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'requirement', headerName: 'Requirement', width: 200 },
    { 
      field: 'createdAt', 
      headerName: 'Created At', 
      width: 180,
      valueFormatter: (params) => moment(params.value).format('DD-MM-YYYY HH:mm')
    },
    { 
      field: 'updatedAt', 
      headerName: 'Updated At', 
      width: 180,
      valueFormatter: (params) => moment(params.value).format('DD-MM-YYYY HH:mm')
    }
  ];

  const rows = employers.map((employer, index) => ({
    id: index + 1,
    name: employer.name,
    companyName: employer.companyName,
    mobileNo: employer.mobileNo,
    email: employer.email,
    requirement: employer.requirement,
    createdAt: employer.createdAt,
    updatedAt: employer.updatedAt
  }));

  return (
    <>
    <RecruiterDashNav/>
       <Typography 
        variant="h4" 
        sx={{ 
          textAlign: 'center', 
          color: '#ff5722', 
          marginBottom: '20px', 
          fontWeight: 'bold' 
        }}>
        Employer Details
      </Typography>
    <Box sx={{ 
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
            fontWeight: 'bold'
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
