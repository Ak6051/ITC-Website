
import React, { useState, useEffect } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const EmployerJobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchEmployerJobs();
  }, []);

  const fetchEmployerJobs = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await fetch("http://localhost:5000/api/employer/employer-jobs", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setJobs(data.jobs);
    } catch (error) {
      console.error("🚨 Error fetching jobs:", error.message);
    }
  };

  const columns = [
    { field: "title", headerName: "Title", flex: 1, filterable: true },
    { field: "requirement", headerName: "Requirement", flex: 1, filterable: true },
    { field: "experience", headerName: "Experience", flex: 1, filterable: true, renderCell: (params) => params.value || "N/A" },
    { field: "description", headerName: "Description", flex: 2, filterable: true },
    { field: "status", headerName: "Status", flex: 1, filterable: true },
  ];

  return (
    <Box sx={{ mt: 4, px: 2 }}>
      <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
        Your Posted Jobs
      </Typography>
      {jobs.length === 0 ? (
        <Typography align="center" mt={2}>No jobs posted yet.</Typography>
      ) : (
        <Paper sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={jobs.map((job, index) => ({ id: index, ...job }))}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            checkboxSelection
            filterMode="client"
          />
        </Paper>
      )}
    </Box>
  );
};

export default EmployerJobList;
