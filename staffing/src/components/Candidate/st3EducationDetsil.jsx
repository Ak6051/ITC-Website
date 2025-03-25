

import React, { useState, useEffect } from "react";
import { Box, TextField, Button, Typography, Paper, MenuItem, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { saveCandidateData } from "./api";
import { motion } from "framer-motion";

const Step3 = () => {
  const navigate = useNavigate();
  const [finalData, setFinalData] = useState({});

  useEffect(() => {
    const step1Data = JSON.parse(localStorage.getItem("candidateFormData")) || {};
    const step2Data = JSON.parse(localStorage.getItem("candidateExperienceData")) || {};
    setFinalData({ ...step1Data, ...step2Data });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFinalData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    await saveCandidateData(finalData);
    localStorage.clear();
    navigate("/candidate-login");
  };

  return (
    <Grid container spacing={4} sx={{ backgroundColor: "#F5F5F5", minHeight: "100vh", padding: 5 }}>
      {/* Left Side Content with Animation */}
      <Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent="center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ width: "100%", maxWidth: 500 }}
        >
          <Paper elevation={3} sx={{ padding: 4, borderRadius: 3, textAlign: "center", background: "#0D47A1", color: "#fff" }}>
            <Typography variant="h4" fontWeight="bold" color="inherit">
              Build a Strong Profile
            </Typography>
            <Typography variant="body1" sx={{ marginTop: 2, opacity: 0.9 }}>
              A well-detailed profile increases your chances of landing the perfect job. Make sure to add all necessary information.
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1, opacity: 0.8 }}>
              Showcase your skills, education, and certifications to stand out from the crowd.
            </Typography>
            <motion.img 
              src="/assets/profile.svg" 
              alt="Profile" 
              style={{ width: "80%", marginTop: 20 }} 
              whileHover={{ scale: 1.1 }} 
            />
          </Paper>
        </motion.div>
      </Grid>

      {/* Right Side Form with Animation */}
      <Grid item xs={12} md={6} display="flex" alignItems="center" justifyContent="center">
        <motion.div 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ width: "100%", maxWidth: 600 }}
        >
          <Paper elevation={4} sx={{ padding: 4, borderRadius: 3, background: "#fff" }}>
            <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: 2, color: "#0D47A1" }}>
              Profile Information
            </Typography>

            <TextField fullWidth label="Resume Headline" name="resumeHeadline" value={finalData.resumeHeadline || ""} onChange={handleInputChange} margin="normal" />

            <TextField fullWidth type="date" label="Date of Birth" name="dob" value={finalData.dob || ""} onChange={handleInputChange} margin="normal" InputLabelProps={{ shrink: true }} />

            <TextField fullWidth select label="Industry" name="industry" value={finalData.industry || ""} onChange={handleInputChange} margin="normal">
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="Finance">Finance</MenuItem>
              <MenuItem value="Healthcare">Healthcare</MenuItem>
              <MenuItem value="Engineering">Engineering</MenuItem>
            </TextField>

            <Typography variant="h6" fontWeight="bold" sx={{ marginTop: 2, color: "#0D47A1" }}>
              Education Details
            </Typography>

            <TextField fullWidth select label="Basic Education" name="basicEducation" value={finalData.basicEducation || ""} onChange={handleInputChange} margin="normal">
              <MenuItem value="B.C.A">B.C.A</MenuItem>
              <MenuItem value="B.Tech">B.Tech</MenuItem>
              <MenuItem value="B.Sc">B.Sc</MenuItem>
            </TextField>

            <TextField fullWidth select label="Master Degree / Post Graduation" name="masterEducation" value={finalData.masterEducation || ""} onChange={handleInputChange} margin="normal">
              <MenuItem value="M.C.A">M.C.A</MenuItem>
              <MenuItem value="M.Tech">M.Tech</MenuItem>
              <MenuItem value="MBA">MBA</MenuItem>
            </TextField>

            <TextField fullWidth select label="Add Doctorate/PhD Education" name="phdEducation" value={finalData.phdEducation || ""} onChange={handleInputChange} margin="normal">
              <MenuItem value="PhD in IT">PhD in IT</MenuItem>
              <MenuItem value="PhD in Management">PhD in Management</MenuItem>
              <MenuItem value="PhD in Engineering">PhD in Engineering</MenuItem>
            </TextField>

            {/* <TextField fullWidth label="Certificate Course 1" name="certificate1" value={finalData.certificate1 || ""} onChange={handleInputChange} margin="normal" /> */}

            <Box display="flex" justifyContent="space-between" marginTop={3}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="contained" sx={{ backgroundColor: "#FFC107", color: "#000" }} onClick={() => navigate("/st2")}>
                  Back
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="contained" sx={{ backgroundColor: "#0D47A1", color: "#fff" }} onClick={handleSubmit}>
                  Submit Profile
                </Button>
              </motion.div>
            </Box>
          </Paper>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default Step3;
