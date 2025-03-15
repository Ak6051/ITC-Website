import React from 'react';
import { TextField, InputAdornment, Button, Box, MenuItem, Typography, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import Slider from '../components/Slider';
import PlacementConsultants from '../components/PlacementConsultants';
import SearchPost from '../components/SearchPost';
import JobGrid from '../components/JobGrid';
import TestimonialPage from '../components/TestimonialPage';
import VideoSection from '../components/VideoSection';
import OurCoreValue from '../components/OurCoreValue';
import PracticeAreas from '../components/OurServices';

const Home = () => {
  return (
    <>
      <Box
  sx={{
    textAlign: "center",
    padding: "25px 20px",
    background: "linear-gradient(to right, rgb(18, 17, 83), rgb(0, 113, 130))",
    color: "#fff",
    marginTop: "100px",
  }}
>
  <Typography
    variant="h3"
    sx={{
      fontWeight: "bold",
      marginBottom: "20px",
      fontSize: { xs: "24px", sm: "32px", md: "40px" },
      letterSpacing: "1px",
      color: "#FFC107", // Yellow Title
    }}
  >
    Find Your Dream Job Now
  </Typography>

  <Container maxWidth="lg">
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.25)", // Lightened background for contrast
        borderRadius: "50px",
        padding: "20px",
        boxShadow: 4,
        justifyContent: "center",
        width: "100%",
        backdropFilter: "blur(12px)",
        gap: "15px",
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Enter Requirement"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#FFC107" }} />
            </InputAdornment>
          ),
          sx: {
            borderRadius: "50px",
            background: "rgba(255, 255, 255, 0.9)", // White background
            color: "#121153", // Dark blue text
          },
        }}
        sx={{ width: { xs: "100%", sm: "100%", md: "250px" }, flexGrow: 1 }}
      />

      <TextField
        variant="outlined"
        placeholder="Enter Location"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnIcon sx={{ color: "#FFC107" }} />
            </InputAdornment>
          ),
          sx: {
            borderRadius: "50px",
            background: "rgba(255, 255, 255, 0.9)",
            color: "#121153",
          },
        }}
        sx={{ width: { xs: "100%", sm: "100%", md: "200px" }, flexGrow: 1 }}
      />

      <TextField
        select
        variant="outlined"
        defaultValue=""
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <WorkIcon sx={{ color: "#FFC107" }} />
            </InputAdornment>
          ),
          sx: {
            borderRadius: "50px",
            background: "rgba(255, 255, 255, 0.9)",
            color: "#121153",
          },
        }}
        sx={{ width: { xs: "100%", sm: "100%", md: "150px" }, flexGrow: 1 }}
      >
        <MenuItem value="">Experience</MenuItem>
        <MenuItem value="0-1">0-1 Years</MenuItem>
        <MenuItem value="1-3">1-3 Years</MenuItem>
        <MenuItem value="3+">3+ Years</MenuItem>
      </TextField>

      <Button
        variant="contained"
        sx={{
          borderRadius: "50px",
          padding: "12px 30px",
          background: "#FFC107",
          "&:hover": { background: "#E0A800" },
          color: "#121153",
          fontWeight: "bold",
          width: { xs: "100%", sm: "100%", md: "auto" },
          flexGrow: 1,
        }}
      >
        Search
      </Button>
    </Box>
  </Container>
</Box>


      <Slider />
      <JobGrid/>
      <OurCoreValue/>
      <PlacementConsultants/>
      <PracticeAreas/>
      <VideoSection/>
      <SearchPost/>
      <TestimonialPage/>
    </>
  );
};

export default Home;
