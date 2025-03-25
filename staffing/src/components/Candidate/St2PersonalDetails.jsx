
import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography, Paper, MenuItem, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";

const Step2 = () => {
  const [formData, setFormData] = useState({});
  const [resumeFile, setResumeFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const step1Data = JSON.parse(localStorage.getItem("candidateFormData")) || {};
    const step2Data = JSON.parse(localStorage.getItem("candidateExperienceData")) || {};
    setFormData({ ...step1Data, ...step2Data });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
      setFormData((prev) => ({ ...prev, resume: file.name })); // Store filename in formData
    }
  };

  const handleNext = () => {
    localStorage.setItem("candidateExperienceData", JSON.stringify(formData));
    navigate("/st3");
  };

  return (
    <Grid container sx={{ minHeight: "100vh", backgroundColor: "#F5F5F5" }}>
      {/* Left Section */}
      <Grid item xs={12} md={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#1E293B", color: "#FFFFFF", padding: 4 }}>
        <WorkOutlineIcon sx={{ fontSize: 60, color: "#FFA726" }} />
        <Typography variant="h4" fontWeight="bold" mt={2}>Your Experience Matters</Typography>
        <Typography variant="body1" textAlign="center" mt={1}>
          Showcase your skills and get matched with the best job opportunities that suit your profile.
        </Typography>
      </Grid>

      {/* Right Section */}
      <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center", padding: 4 }}>
        <Paper elevation={4} sx={{ padding: 4, borderRadius: 2, width: "100%", maxWidth: 500, backgroundColor: "#FFFFFF" }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Share Your Experience
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            Tell us about your professional background to receive relevant job offers.
          </Typography>

          <TextField fullWidth select label="Select City" name="city" value={formData.city || ""} onChange={handleInputChange} margin="normal">
            <MenuItem value="New York">New York</MenuItem>
            <MenuItem value="Los Angeles">Los Angeles</MenuItem>
            <MenuItem value="Chicago">Chicago</MenuItem>
          </TextField>

          <TextField fullWidth label="Enter Current Locality" name="locality" value={formData.locality || ""} onChange={handleInputChange} margin="normal" />

          <TextField fullWidth select label="Select Functional Area" name="functionalArea" value={formData.functionalArea || ""} onChange={handleInputChange} margin="normal">
            <MenuItem value="IT">IT</MenuItem>
            <MenuItem value="Finance">Finance</MenuItem>
            <MenuItem value="Marketing">Marketing</MenuItem>
          </TextField>

          <TextField fullWidth select label="Select Highest Qualification" name="qualification" value={formData.qualification || ""} onChange={handleInputChange} margin="normal">
            <MenuItem value="Bachelors">Bachelors</MenuItem>
            <MenuItem value="Masters">Masters</MenuItem>
            <MenuItem value="PhD">PhD</MenuItem>
          </TextField>

          <TextField fullWidth label="Preferred Role" name="role" value={formData.role || ""} onChange={handleInputChange} margin="normal" />

          {/* Resume Upload */}
          <Box mt={2}>
            <Typography variant="body2" fontWeight="bold">Upload Resume (PDF only)</Typography>
            <input type="file" accept=".pdf" value={formData.resumePath || ""} onChange={handleFileChange} style={{ margin: "8px 0", display: "block" }} />
          </Box>

          {/* Resume Preview (if uploaded) */}
          {resumeFile && (
            <Typography variant="body2" mt={1}>
              <strong>Uploaded:</strong> {resumeFile.name} 
              <br />
              <a href={URL.createObjectURL(resumeFile)} target="_blank" rel="noopener noreferrer" style={{ color: "#FFA726", textDecoration: "none", fontWeight: "bold" }}>
                View Resume
              </a>
            </Typography>
          )}

          <TextField fullWidth label="Resume Skills" name="skills" value={formData.skills || ""} onChange={handleInputChange} margin="normal" />

          <Box display="flex" justifyContent="space-between" marginTop={3}>
            <Button variant="contained" color="secondary" onClick={() => navigate("/candidate-register")}>Back</Button>
            <Button variant="contained" sx={{ backgroundColor: "#FFA726", color: "#FFF", '&:hover': { backgroundColor: "#FB8C00" } }} onClick={handleNext}>
              Next
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Step2;
