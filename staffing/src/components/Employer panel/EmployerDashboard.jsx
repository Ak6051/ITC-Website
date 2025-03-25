

import React, { useState, useEffect } from "react";
import { 
  Box, Typography, Button, TextField, Card, CardContent, Grid, 
  MenuItem, FormControl, InputLabel, Select, Avatar, LinearProgress 
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SearchSection from "./SearchSection";

const EmployerDashboard = () => {
  const [formData, setFormData] = useState({
    title: "",
    requirement: "",
    description: "",
    experience: "",
    status: "active",
  });

  const [jobs, setJobs] = useState([]); 
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userType = localStorage.getItem("userType");

    if (!token || userType !== "employer") {
      navigate("/login");
    } else {
      fetchEmployerJobs();
    }
  }, [navigate]);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.title) tempErrors.title = "Job Title is required";
    if (!formData.requirement) tempErrors.requirement = "Requirement is required";
    if (!formData.description) tempErrors.description = "Job Description is required";
    if (!formData.experience) tempErrors.experience = "Experience is required"; 

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) return;

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please log in again.");
        return;
      }

      const res = await axios.post(
        "http://localhost:5000/api/employer/add-job",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert(res.data.message);
      fetchEmployerJobs();
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <>
      <SearchSection />

      <Grid container spacing={3} sx={{ p: 3 }}>
        
        {/* Left Side - Job Posting Section */}
        <Grid item xs={12} md={8}>
          <Card elevation={10} sx={{ borderRadius: 4, p: 3 }}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" mb={2}>
                🚀 Post a New Job
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <TextField 
                  label="Job Title" name="title" fullWidth onChange={handleChange} 
                  value={formData.title} error={!!errors.title} helperText={errors.title} 
                  margin="normal"
                />

                <TextField 
                  label="Requirement" name="requirement" fullWidth onChange={handleChange} 
                  value={formData.requirement} error={!!errors.requirement} helperText={errors.requirement} 
                  margin="normal"
                />

                <FormControl fullWidth margin="normal" error={!!errors.experience}>
                  <InputLabel>Experience</InputLabel>
                  <Select name="experience" value={formData.experience} onChange={handleChange}>
                    <MenuItem value="">Select Experience</MenuItem>
                    <MenuItem value="0-1">0-1 Years</MenuItem>
                    <MenuItem value="1-3">1-3 Years</MenuItem>
                    <MenuItem value="3+">3+ Years</MenuItem>
                  </Select>
                  {errors.experience && <Typography color="error">{errors.experience}</Typography>}
                </FormControl>

                <TextField 
                  label="Job Description" name="description" multiline rows={4} fullWidth onChange={handleChange} 
                  value={formData.description} error={!!errors.description} helperText={errors.description} 
                  margin="normal"
                />

                <Button 
                  type="submit" variant="contained" fullWidth 
                  sx={{ mt: 3, py: 1.5, fontSize: "1rem", fontWeight: "bold" }}>
                  🚀 Post Job
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Side - Profile Card Section */}
        <Grid item xs={12} md={4}>
          <Card elevation={10} sx={{ borderRadius: 4, p: 3, textAlign: "center" }}>
            <CardContent>
              <Avatar sx={{ width: 80, height: 80, margin: "auto" }} />
              <Typography variant="h6" fontWeight="bold" mt={1}>
                Sahil
              </Typography>
              <Typography variant="body2" color="textSecondary">
                (Updated on today)
              </Typography>

              {/* Profile Completion Progress Bar */}
              <Box mt={2} textAlign="left">
                <Typography variant="body2">Profile Completeness: 79%</Typography>
                <LinearProgress variant="determinate" value={79} sx={{ height: 8, borderRadius: 4, mt: 1 }} />
              </Box>

              <Typography mt={2} variant="body2">
                Update your profile to increase your visibility in front of recruiters.
              </Typography>

              {/* Profile Actions */}
              <Box mt={2} textAlign="left">
                <Typography variant="body2" color="primary">+10% Upload Your Resume</Typography>
                <Typography variant="body2" color="primary">+6% Verify Your Email</Typography>
                <Typography variant="body2" color="primary">+5% Upload Photo</Typography>
              </Box>

              <Button variant="contained" fullWidth sx={{ mt: 3 }}>
                Update Profile
              </Button>

              {/* Contact Info */}
              <Box mt={2} textAlign="left">
                <Typography variant="body2">📧 yodoy73459@btcours.com</Typography>
                <Typography variant="body2">📞 91-9265875135</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </>
  );
};

export default EmployerDashboard;
