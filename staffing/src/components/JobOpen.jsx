import React ,{ useState }from 'react'
import { TextField, InputAdornment, Button, Box, MenuItem, Typography, Container, Card, CardContent, CardActions } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import JobGrid from './JobGrid';
import axios from "axios";


const JobOpen = () => {
      const [requirement, setRequirement] = useState("");
      const [location, setLocation] = useState("");
      const [experience, setExperience] = useState("");
      const [jobResults, setJobResults] = useState([]);
    
      const handleSearch = async () => {
        try {
          const response = await axios.get("http://localhost:5000/api/job/search", {
            params: { requirement, location, experience },
          });
    
          setJobResults(response.data.jobs);
        } catch (error) {
          console.error("Error fetching jobs:", error);
        }
      };
  return (
    <>
     <Box
        sx={{
          height: '80vh',
          background: `url(https://hireox.themeht.com/wp-content/uploads/2024/10/hero1-img2.jpg) no-repeat center center/cover`,
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          p: 4,
        }}
      >
      
      </Box>
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
            color: "#FFC107",
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
              background: "rgba(255, 255, 255, 0.25)",
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
              value={requirement}
              onChange={(e) => setRequirement(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#FFC107" }} />
                  </InputAdornment>
                ),
                sx: { borderRadius: "50px", background: "rgba(255, 255, 255, 0.9)", color: "#121153" },
              }}
              sx={{ width: { xs: "100%", sm: "100%", md: "250px" }, flexGrow: 1 }}
            />

            <TextField
              variant="outlined"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon sx={{ color: "#FFC107" }} />
                  </InputAdornment>
                ),
                sx: { borderRadius: "50px", background: "rgba(255, 255, 255, 0.9)", color: "#121153" },
              }}
              sx={{ width: { xs: "100%", sm: "100%", md: "200px" }, flexGrow: 1 }}
            />

            <TextField
              select
              variant="outlined"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <WorkIcon sx={{ color: "#FFC107" }} />
                  </InputAdornment>
                ),
                sx: { borderRadius: "50px", background: "rgba(255, 255, 255, 0.9)", color: "#121153" },
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
              onClick={handleSearch}
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

      {/* Job Results in Card Format */}
      <Container maxWidth="lg" sx={{ marginTop: 4, marginBottom: 3 }}>
        {jobResults.length > 0 ? (
          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" }, gap: "20px" }}>
            {jobResults.map((job, index) => (
              <Card key={index} sx={{ boxShadow: 3, borderRadius: "15px", transition: "0.3s", "&:hover": { boxShadow: 6 } }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#121153" }}>
                    {job.requirement}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    {job.company}
                  </Typography>
                  <Typography variant="body2" sx={{ display: "flex", alignItems: "center", color: "#333", mt: 1 }}>
                    <LocationOnIcon sx={{ fontSize: "18px", mr: 0.5 }} /> {job.location}
                  </Typography>
                  <Typography variant="body2" sx={{ display: "flex", alignItems: "center", color: "#333", mt: 1 }}>
                    <WorkIcon sx={{ fontSize: "18px", mr: 0.5 }} /> {job.experience} Years
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" sx={{ color: "#FFC107", fontWeight: "bold" }}>
                    Apply Now
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        ) : null}
      </Container>
      <JobGrid/>
    </>
  )
}

export default JobOpen
