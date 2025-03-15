import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, CircularProgress, Alert } from "@mui/material";
import RecruiterDashNav from "../Pages/RecruiterDashNav";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/recruiter/all");
        setJobs(response.data);
      } catch (error) {
        setError("Error fetching job data.");
        console.error("API fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Job Title", width: 200 },
    { field: "requirement", headerName: "Requirement", width: 250 },
    { field: "description", headerName: "Description", width: 250 },
    { field: "experience", headerName: "Experience", width: 150 },
    { field: "location", headerName: "Location", width: 150 },
    { field: "companyName", headerName: "Company", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => (
        <span style={{ color: params.value === "active" ? "green" : "red" }}>
          {params.value}
        </span>
      ),
    },
  ];

  // Assign unique ID for DataGrid
  const rows = jobs.map((job, index) => ({ id: index + 1, ...job }));

  return (
    <>
    <RecruiterDashNav/>
    <Box sx={{ height: 500, width: "100%", padding: 3 }}>
      <Typography variant="h4" gutterBottom align="center">
        Job Listings
      </Typography>

      {loading && <CircularProgress sx={{ display: "block", margin: "20px auto" }} />}
      {error && <Alert severity="error">{error}</Alert>}

      {!loading && !error && (
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          sx={{
            backgroundColor: "#fff",
            boxShadow: 3,
            borderRadius: "10px",
          }}
        />
      )}
    </Box>
    </>
  );
};

export default JobList;
