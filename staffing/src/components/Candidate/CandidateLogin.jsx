import React from "react";
import { Box, TextField, Button, Typography, Paper, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const JobseekerLogin = () => {
    const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #1E88E5,rgb(139, 205, 236))",
        padding: 2,
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: 4,
          width: { xs: "90%", sm: 400 },
          textAlign: "center",
          borderRadius: 3,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h5" fontWeight="bold" color="#1E88E5" gutterBottom>
          Jobseeker Login
        </Typography>
        <TextField
          fullWidth
          label="Enter Your Email ID / Mobile"
          variant="outlined"
          margin="normal"
          sx={{ borderRadius: 1 }}
        />
           <TextField
          fullWidth
          label="Enter Your Password"
          variant="outlined"
          margin="normal"
          sx={{ borderRadius: 1 }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#1E88E5",
            color: "white",
            marginTop: 2,
            fontWeight: "bold",
            borderRadius: 2,
            '&:hover': { backgroundColor: "#1565C0" },
          }}
        >
          Continue →
        </Button>
        <Typography variant="body2" sx={{ marginTop: 2, color: "gray" }}>
          OR
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          Don’t have a ITC account?
        <Button onClick={() => navigate("/candidate-register")} sx={{ marginLeft: 1, color: "#FFD700", fontWeight: "bold" }}>
            Register Now
          </Button>
        </Typography>
      </Paper>
    </Box>
  );
};

export default JobseekerLogin;