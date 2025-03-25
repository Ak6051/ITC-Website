
import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { useNavigate } from "react-router-dom";

const Step1 = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("candidateFormData")) || {};
    setFormData(savedData);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    localStorage.setItem("candidateFormData", JSON.stringify(formData));
    navigate("/st2");
  };

  return (
    <Grid
      container
      spacing={4}
      sx={{
        background: "linear-gradient(135deg, #E3F2FD 30%, #BBDEFB 100%)",
        minHeight: "100vh",
        padding: { xs: 3, md: 5 },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Left Section */}
      <Grid item xs={12} md={6} textAlign="center">
        <Typography variant="h3" fontWeight="bold" color="#0D47A1" gutterBottom>
          Your Dream Job Awaits!
        </Typography>
        <Typography variant="h6" color="#FFD700">
          Upload Your Resume for Free!
        </Typography>
        <Grid container spacing={2} justifyContent="center" mt={3}>
          {[  
            { icon: <WorkIcon sx={{ fontSize: 30, color: "#0D47A1" }} />, text: "Build a profile that attracts top recruiters" },
            { icon: <BusinessCenterIcon sx={{ fontSize: 30, color: "#0D47A1" }} />, text: "Find top jobs that match your skills" },
            { icon: <VerifiedUserIcon sx={{ fontSize: 30, color: "#0D47A1" }} />, text: "Verified companies looking for top talent" },
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card elevation={4} sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 2,
                backgroundColor: "#FFFFFF",
                borderRadius: 2,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                borderBottom: "5px solid #FFD700",
              }}>
                {item.icon}
                <CardContent>
                  <Typography fontSize={16} color="#0D47A1">{item.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>

      {/* Right Section - Form */}
      <Grid item xs={12} md={5}>
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            borderRadius: 3,
            width: "100%",
            maxWidth: 450,
            mx: "auto",
            backgroundColor: "#FAFAFA",
            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Typography variant="h5" fontWeight="bold" color="#0D47A1" textAlign="center" gutterBottom>
            Post Your Resume <span style={{ color: "#FFD700" }}>Free !!</span>
          </Typography>
          
          <TextField
            fullWidth
            label="Your Name"
            name="name"
            value={formData.name || ""}
            onChange={handleInputChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            select
            label="Gender"
            name="gender"
            value={formData.gender || ""}
            onChange={handleInputChange}
            margin="normal"
            variant="outlined"
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
          <TextField
            fullWidth
            label="Your Mobile Number"
            name="mobile"
            value={formData.mobile || ""}
            onChange={handleInputChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Your Email ID"
            name="email"
            value={formData.email || ""}
            onChange={handleInputChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            name="password"
            value={formData.password || ""}
            onChange={handleInputChange}
            margin="normal"
            variant="outlined"
          />
          <FormControlLabel
            control={<Checkbox sx={{ color: "#0D47A1" }} />}
            label="Agree to Terms & Conditions"
            sx={{ display: "block", mt: 1, color: "#0D47A1" }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              fontSize: "1rem",
              backgroundColor: "#0D47A1",
              '&:hover': { backgroundColor: "#0B3D91" },
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            }}
            onClick={handleNext}
          >
            Continue →
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Step1;