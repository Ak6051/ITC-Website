// import React from 'react';
// import { TextField, InputAdornment, Button, Box, MenuItem, Typography } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import WorkIcon from "@mui/icons-material/Work";
// import Slider from '../components/Slider';
// import PlacementConsultants from '../components/PlacementConsultants';
// import SearchPost from '../components/SearchPost';
// import JobGrid from '../components/JobGrid';

// const Home = () => {
//   return (
//     <>
//       <Box
//         sx={{
//           textAlign: "center",
//           padding: "30px 0",
//           background: "linear-gradient(to right, #2C0086, #3A1C71)",
//           color: "#fff"
//         }}
//       >
//         <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
//           Find your dream job now
//         </Typography>
        
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             background: "#fff",
//             borderRadius: "50px",
//             padding: "5px",
//             boxShadow: 3,
//             justifyContent: "center",
//             width: "80%",
//             margin: "0 auto"
//           }}
//         >
//           <TextField
//             variant="outlined"
//             placeholder="Enter Skills, Designation, etc"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon color="primary" />
//                 </InputAdornment>
//               ),
//               sx: { borderRadius: "50px", background: "#fff" },
//             }}
//             sx={{ width: "250px", margin: "0 8px" }}
//           />

//           <TextField
//             variant="outlined"
//             placeholder="Enter Location"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <LocationOnIcon color="primary" />
//                 </InputAdornment>
//               ),
//               sx: { borderRadius: "50px", background: "#fff" },
//             }}
//             sx={{ width: "200px", margin: "0 8px" }}
//           />

//           <TextField
//             select
//             variant="outlined"
//             defaultValue=""
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <WorkIcon color="primary" />
//                 </InputAdornment>
//               ),
//               sx: { borderRadius: "50px", background: "#fff" },
//             }}
//             sx={{ width: "150px", margin: "0 8px" }}
//           >
//             <MenuItem value="">Experience</MenuItem>
//             <MenuItem value="0-1">0-1 Years</MenuItem>
//             <MenuItem value="1-3">1-3 Years</MenuItem>
//             <MenuItem value="3+">3+ Years</MenuItem>
//           </TextField>

//           <Button
//             variant="contained"
//             sx={{
//               borderRadius: "50px",
//               margin: "0 8px",
//               padding: "10px 25px",
//               background: "#3A1C71",
//               "&:hover": { background: "#3D3A83" },
//               color: "#fff",
//               fontWeight: "bold"
//             }}
//           >
//             Search
//           </Button>
//         </Box>

//         {/* Navigation Links */}
//         <Box sx={{ marginTop: "20px" }}>
//           {["BROWSE JOBS", "Location", "Role", "Fresher Jobs", "Walkin Jobs", "Female Jobs", "International", "Gulf", "Companies"].map((item, index) => (
//             <Button
//               key={index}
//               sx={{
//                 color: "#fff",
//                 textTransform: "none",
//                 fontSize: "14px",
//                 fontWeight: "bold",
//                 margin: "0 10px",
//                 "&:hover": {
//                   textDecoration: "underline"
//                 }
//               }}
//             >
//               {item}
//             </Button>
//           ))}
//         </Box>
//       </Box>

//       <Slider />
//       <JobGrid/>
//       <PlacementConsultants/>
    
      
//       <SearchPost/>
      
//     </>
//   );
// };

// export default Home;
// import React from 'react';
// import { TextField, InputAdornment, Button, Box, MenuItem, Typography } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import WorkIcon from "@mui/icons-material/Work";
// import Slider from '../components/Slider';
// import PlacementConsultants from '../components/PlacementConsultants';
// import SearchPost from '../components/SearchPost';
// import JobGrid from '../components/JobGrid';
// import TestimonialPage from '../components/TestimonialPage';
// import VideoSection from '../components/VideoSection';

// const Home = () => {
//   return (
//     <>
//       <Box
//         sx={{
//           textAlign: "center",
//           padding: "30px 10px",
//           background: "linear-gradient(to right, #2C0086, #3A1C71)",
//           color: "#fff"
//         }}
//       >
//         <Typography 
//           variant="h4" 
//           sx={{ 
//             fontWeight: "bold", 
//             marginBottom: "20px", 
//             fontSize: { xs: "22px", sm: "28px", md: "34px" } 
//           }}
//         >
//           Find your dream job now
//         </Typography>
        
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", sm: "column", md: "row" },
//             alignItems: "center",
//             background: "#fff",
//             borderRadius: "50px",
//             padding: "15px",
//             boxShadow: 3,
//             justifyContent: "center",
//             width: { xs: "95%", sm: "90%", md: "80%" },
//             margin: "0 auto",
//             gap: "15px",
//           }}
//         >
//           <TextField
//             variant="outlined"
//             placeholder="Enter Skills, Designation, etc"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon color="primary" />
//                 </InputAdornment>
//               ),
//               sx: { borderRadius: "50px", background: "#fff" },
//             }}
//             sx={{ 
//               width: { xs: "100%", sm: "100%", md: "250px" },
//               flexGrow: 1 
//             }}
//           />

//           <TextField
//             variant="outlined"
//             placeholder="Enter Location"
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <LocationOnIcon color="primary" />
//                 </InputAdornment>
//               ),
//               sx: { borderRadius: "50px", background: "#fff" },
//             }}
//             sx={{ 
//               width: { xs: "100%", sm: "100%", md: "200px" },
//               flexGrow: 1 
//             }}
//           />

//           <TextField
//             select
//             variant="outlined"
//             defaultValue=""
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <WorkIcon color="primary" />
//                 </InputAdornment>
//               ),
//               sx: { borderRadius: "50px", background: "#fff" },
//             }}
//             sx={{ 
//               width: { xs: "100%", sm: "100%", md: "150px" },
//               flexGrow: 1 
//             }}
//           >
//             <MenuItem value="">Experience</MenuItem>
//             <MenuItem value="0-1">0-1 Years</MenuItem>
//             <MenuItem value="1-3">1-3 Years</MenuItem>
//             <MenuItem value="3+">3+ Years</MenuItem>
//           </TextField>

//           <Button
//             variant="contained"
//             sx={{
//               borderRadius: "50px",
//               padding: "10px 25px",
//               background: "#3A1C71",
//               "&:hover": { background: "#3D3A83" },
//               color: "#fff",
//               fontWeight: "bold",
//               width: { xs: "100%", sm: "100%", md: "auto" },
//               flexGrow: 1
//             }}
//           >
//             Search
//           </Button>
//         </Box>

//         {/* Navigation Links */}
//         <Box 
//           sx={{ 
//             marginTop: "20px", 
//             flexWrap: "wrap",
//             display: "flex",
//             justifyContent: "center",
//             gap: "10px"
//           }}
//         >
//           {["BROWSE JOBS", "Location", "Role", "Fresher Jobs", "Walkin Jobs", "Female Jobs", "International", "Gulf", "Companies"].map((item, index) => (
//             <Button
//               key={index}
//               sx={{
//                 color: "#fff",
//                 textTransform: "none",
//                 fontSize: "14px",
//                 fontWeight: "bold",
//                 "&:hover": {
//                   textDecoration: "underline"
//                 }
//               }}
//             >
//               {item}
//             </Button>
//           ))}
//         </Box>
//       </Box>

//       <Slider />
//       <JobGrid/>
//       <PlacementConsultants/>
//       <VideoSection/>
//       <SearchPost/>
//       <TestimonialPage/>
//     </>
//   );
// };

// export default Home;


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
          background: "linear-gradient(to right,rgb(18, 17, 83),rgb(0, 113, 130))",
          // background: "linear-gradient(to right,rgb(73, 137, 209),rgb(0, 113, 130))",
          color: "#fff",
          marginTop:'100px'
        }}
      >
        <Typography 
          variant="h3" 
          sx={{ 
            fontWeight: "bold", 
            marginBottom: "20px", 
            fontSize: { xs: "24px", sm: "32px", md: "40px" },
            letterSpacing: "1px"
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
              background: "rgba(255, 255, 255, 0.15)",
              borderRadius: "50px",
              padding: "20px ",
              marginLeft:'-18px',
              boxShadow: 4,
              justifyContent: "center",
              width: "100%",
              backdropFilter: "blur(10px)",
              gap: "15px",
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Enter Skills, Designation, etc"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#fff" }} />
                  </InputAdornment>
                ),
                sx: { borderRadius: "50px", background: "rgba(255,255,255,0.2)", color: "#fff" },
              }}
              sx={{ width: { xs: "100%", sm: "100%", md: "250px" }, flexGrow: 1 }}
            />

            <TextField
              variant="outlined"
              placeholder="Enter Location"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnIcon sx={{ color: "#fff" }} />
                  </InputAdornment>
                ),
                sx: { borderRadius: "50px", background: "rgba(255,255,255,0.2)", color: "#fff" },
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
                    <WorkIcon sx={{ color: "#fff" }} />
                  </InputAdornment>
                ),
                sx: { borderRadius: "50px", background: "rgba(255,255,255,0.2)", color: "#fff" },
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
                background: "#ff9800",
                "&:hover": { background: "#e68900" },
                color: "#fff",
                fontWeight: "bold",
                width: { xs: "100%", sm: "100%", md: "auto" },
                flexGrow: 1
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
