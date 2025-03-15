// import React, { useState } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   MenuItem,
//   Typography,
//   Checkbox,
//   FormControlLabel,
//   AppBar,
//   Toolbar,
//   Menu,
//   MenuItem as DropdownItem,
// } from "@mui/material";

// import { Dashboard } from "@mui/icons-material";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import { useNavigate } from "react-router-dom";
// import axios from "axios"; // Import axios for API call
// import RecruiterDashNav from "../Pages/RecruiterDashNav";

// const JobPostForm = () => {
//   const navigate = useNavigate();

//   // State for Form Data
//   const [formData, setFormData] = useState({
//     title: "",
//     requirement: "",
//     description: "",
//     experience: "",
//     location: "",
//     companyName: "",
//     status: "Open",
//   });

//   // Dropdown state management
//   const [jobAnchorEl, setJobAnchorEl] = useState(null);
//   const [candidatesAnchorEl, setCandidatesAnchorEl] = useState(null);
//   const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);

//   const handleMenuOpen = (event, setAnchor) => {
//     setAnchor(event.currentTarget);
//   };

//   const handleMenuClose = (setAnchor) => {
//     setAnchor(null);
//   };

//   const handleDashboardClick = () => {
//     navigate("/recruiter");
//   };

//   // Handle Input Change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle Form Submission
//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/recruiter/job", formData);
//       alert("Job Posted Successfully!");
//       console.log(response.data);
//       setFormData({
//         title: "",
//         requirement: "",
//         description: "",
//         experience: "",
//         location: "",
//         companyName: "",
//         status: "active",
//       });
//     } catch (error) {
//       console.error("Error posting job:", error);
//       alert("Failed to post job.");
//     }
//   };

//   return (
//     <>
//    <RecruiterDashNav/>

//       {/* Form Section */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           padding: "40px",
//           background: "#F8F8F8",
//         }}
//       >
//         <Box
//           sx={{
//             width: "800px",
//             background: "white",
//             borderRadius: "10px",
//             boxShadow: 3,
//             padding: "20px",
//           }}
//         >
//           <Typography
//             variant="h6"
//             sx={{
//               background: "#E7F0FA",
//               padding: "10px",
//               borderRadius: "5px",
//             }}
//           >
//             Job Detail
//           </Typography>

//           <TextField
//             fullWidth
//             label="Job Title"
//             name="title"
//             value={formData.title}
//             onChange={handleChange}
//             margin="normal"
//           />

//           <TextField
//             fullWidth
//             label="Job Requirement"
//             name="requirement"
//             value={formData.requirement}
//             onChange={handleChange}
//             margin="normal"
//           />

//           <TextField
//             fullWidth
//             multiline
//             rows={4}
//             label="Job Description"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             margin="normal"
//           />

//           <TextField
//             fullWidth
//             label="Experience"
//             name="experience"
//             value={formData.experience}
//             onChange={handleChange}
//             margin="normal"
//           />

//           <TextField
//             fullWidth
//             label="Location"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             margin="normal"
//           />

//           <TextField
//             fullWidth
//             label="Company Name"
//             name="companyName"
//             value={formData.companyName}
//             onChange={handleChange}
//             margin="normal"
//           />

//           <TextField
//             fullWidth
//             select
//             label="Status"
//             name="status"
//             value={formData.status}
//             onChange={handleChange}
//             margin="normal"
//           >
//             <MenuItem value="Open">active</MenuItem>
//             <MenuItem value="Closed">Closed</MenuItem>
//           </TextField>

//           <Button
//             variant="contained"
//             fullWidth
//             sx={{ marginTop: "20px", backgroundColor: "#007bff" }}
//             onClick={handleSubmit}
//           >
//             Submit Job Post
//           </Button>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default JobPostForm;
import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Typography,
  Paper,
  Grid,
} from "@mui/material";
import RecruiterDashNav from "../Pages/RecruiterDashNav";
import axios from "axios";

const JobPostForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    requirement: "",
    description: "",
    experience: "",
    location: "",
    companyName: "",
    status: "Open",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/recruiter/job",
        formData
      );
      alert("Job Posted Successfully!");
      console.log(response.data);
      setFormData({
        title: "",
        requirement: "",
        description: "",
        experience: "",
        location: "",
        companyName: "",
        status: "active",
      });
    } catch (error) {
      console.error("Error posting job:", error);
      alert("Failed to post job.");
    }
  };

  return (
    <>
      <RecruiterDashNav />

      {/* Main Layout */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          padding: "20px",
          background: "#F8F8F8",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            maxWidth: "1000px",
            padding: "20px",
            borderRadius: "10px",
            background: "#fff",
          }}
        >
          <Grid container spacing={3}>
            {/* Left Sidebar (Responsive) */}
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  padding: "20px",
                  background: "#E7F0FA",
                  borderRadius: "10px",
                  textAlign: "center",
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Job Posting Tips
                </Typography>
                <Typography variant="body2">
                  ✅ Ensure the job title is clear.<br />
                  ✅ Mention key requirements properly.<br />
                  ✅ Provide a detailed job description.<br />
                  ✅ Specify experience levels & location.
                </Typography>
              </Box>
            </Grid>

            {/* Job Post Form */}
            <Grid item xs={12} md={8}>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    background: "#E7F0FA",
                    padding: "10px",
                    borderRadius: "5px",
                    mb: 2,
                    textAlign: "center",
                  }}
                >
                  Job Details
                </Typography>

                <TextField
                  fullWidth
                  label="Job Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  label="Job Requirement"
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  label="Job Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  label="Experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  label="Location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  label="Company Name"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  margin="normal"
                />

                <TextField
                  fullWidth
                  select
                  label="Status"
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  margin="normal"
                >
                  <MenuItem value="Open">Active</MenuItem>
                  <MenuItem value="Closed">Closed</MenuItem>
                </TextField>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2, backgroundColor: "#007bff" }}
                  onClick={handleSubmit}
                >
                  Submit Job Post
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default JobPostForm;
