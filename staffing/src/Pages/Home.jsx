import React from 'react';
import {
  Box,
  Typography,
  useMediaQuery,
  IconButton,
  Tooltip,
} from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'; // PDF Icon
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Slider from '../components/Slider';
import PlacementConsultants from '../components/PlacementConsultants';
import JobGrid from '../components/JobGrid';
import TestimonialPage from '../components/TestimonialPage';
import VideoSection from '../components/VideoSection';
import AboutITC from '../components/AboutITC';
import HomeInfo from '../components/HomeInfo'
import OurCoreValue from '../components/OurCoreValue';
import PracticeAreas from '../components/OurServices';
import WhoWeAreSection from './OurMission';

const Home = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  // PDF Download Handler
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'br.pdf'; // 👈 PDF ka path
    link.download = 'Company_Brochure.pdf';
    link.click();
  };

  return (
    <>
      {/* Responsive Brochure Section */}
      <Box
        sx={{
          position: 'fixed',
          top: '93%',
          left: 0,
          transform: 'translateY(-50%)',
          background: '#FF9800',
          color: '#fff',
          padding: isMobile ? '8px' : '12px 18px',
          borderRadius: '0 10px 10px 0',
          boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
          zIndex: 1000,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': { background: '#f57c00' },
        }}
        onClick={handleDownload}
      >
        {isMobile ? (
          <Tooltip title="Download Brochure" arrow>
            <IconButton color="inherit">
              <PictureAsPdfIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </Tooltip>
        ) : (
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <PictureAsPdfIcon sx={{ fontSize: 28 }} /> Download Brochure
          </Typography>
        )}
      </Box>

      <Slider />
      <AboutITC/>
      <PracticeAreas />
      <HomeInfo/>
      <OurCoreValue />
      <VideoSection />
      <TestimonialPage />

      {/* WhatsApp Floating Button */}
      <Box
        sx={{
          position: 'fixed',
          bottom: isMobile ? '10px' : '20px',
          right: isMobile ? '10px' : '40px',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          background: '#25D366',
          color: '#fff',
          borderRadius: '50px',
          padding: isMobile ? '8px 12px' : '12px 20px',
          boxShadow: 3,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          '&:hover': { background: '#1ebe57' },
          marginRight: '50px',
          marginBottom: '20px',
        }}
        onClick={() => window.open('https://wa.me/919904501115', '_blank')}
      >
        <WhatsAppIcon sx={{ fontSize: isMobile ? 24 : 30 }} />
        {!isMobile && (
          <Typography sx={{ fontWeight: 'bold' }}>Hello</Typography>
        )}
      </Box>
    </>
  );
};

export default Home;
// // import React from "react";
// // import { Box, Typography, useMediaQuery, IconButton, Tooltip, Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
// // import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// // import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// // import HomeIcon from "@mui/icons-material/Home";
// // import InfoIcon from "@mui/icons-material/Info";
// // import WorkIcon from "@mui/icons-material/Work";
// // import ContactsIcon from "@mui/icons-material/Contacts";

// // import Slider from '../components/Slider';
// // import PlacementConsultants from '../components/PlacementConsultants';
// // import JobGrid from '../components/JobGrid';
// // import TestimonialPage from '../components/TestimonialPage';
// // import VideoSection from '../components/VideoSection';
// // import OurCoreValue from '../components/OurCoreValue';
// // import PracticeAreas from '../components/OurServices';
// // import WhoWeAreSection from "./OurMission";

// // const Home = () => {
// //   const isMobile = useMediaQuery("(max-width:600px)");
// //   const [value, setValue] = React.useState(0);

// //   // PDF Download Handler
// //   const handleDownload = () => {
// //     const link = document.createElement('a');
// //     link.href = "br.pdf";
// //     link.download = "Company_Brochure.pdf";
// //     link.click();
// //   };

// //   // Smooth Scroll to Section
// //   const handleNavigation = (sectionId) => {
// //     const element = document.getElementById(sectionId);
// //     if (element) {
// //       element.scrollIntoView({ behavior: "smooth", block: "start" });
// //     }
// //   };

// //   return (
// //     <>
// //       {/* Responsive Brochure Section */}
// //       <Box
// //   sx={{
// //     position: "fixed",
// //     top: "85%", // 🔼 Upar shift kiya
// //     left: 0,
// //     transform: "translateY(-50%)",
// //     background: "#FF9800",
// //     color: "#fff",
// //     padding: isMobile ? "8px" : "12px 18px",
// //     borderRadius: "0 10px 10px 0",
// //     boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
// //     zIndex: 1000,
// //     cursor: "pointer",
// //     transition: "all 0.3s ease",
// //     "&:hover": { background: "#f57c00" }
// //   }}
// //   onClick={handleDownload}
// // >
// //   {isMobile ? (
// //     <Tooltip title="Download Brochure" arrow>
// //       <IconButton color="inherit">
// //         <PictureAsPdfIcon sx={{ fontSize: 28 }} />
// //       </IconButton>
// //     </Tooltip>
// //   ) : (
// //     <Typography variant="h6" sx={{ fontWeight: "bold", display: "flex", alignItems: "center", gap: 1 }}>
// //       <PictureAsPdfIcon sx={{ fontSize: 28 }} /> Download Brochure
// //     </Typography>
// //   )}
// // </Box>

// //       {/* Sections */}
// //       <Slider />
// //       <div id="about"><WhoWeAreSection /></div>
// //       <div id="values"><OurCoreValue /></div>
// //       <div id="services"><PracticeAreas /></div>
// //       <VideoSection />
// //       <div id="testimonials"><TestimonialPage /></div>

// //       {/* WhatsApp Floating Button */}
// //       <Box
// //   sx={{
// //     position: "fixed",
// //     bottom: isMobile ? "80px" : "100px", // 🔼 Pehle se upar shift kiya
// //     right: isMobile ? "10px" : "40px",
// //     zIndex: 1000,
// //     display: "flex",
// //     alignItems: "center",
// //     gap: 1,
// //     background: "#25D366",
// //     color: "#fff",
// //     borderRadius: "50px",
// //     padding: isMobile ? "8px 12px" : "12px 20px",
// //     boxShadow: 3,
// //     cursor: "pointer",
// //     transition: "all 0.3s ease",
// //     "&:hover": { background: "#1ebe57" },
// //     marginRight: "50px",
// //     marginBottom: "20px"
// //   }}
// //   onClick={() => window.open("https://wa.me/919904501115", "_blank")}
// // >
// //   <WhatsAppIcon sx={{ fontSize: isMobile ? 24 : 30 }} />
// //   {!isMobile && <Typography sx={{ fontWeight: "bold" }}>Hello</Typography>}
// // </Box>

// //       {/* Fixed Transparent Navbar (Wider & Scroll to Section) */}
// //       <Paper
// //         elevation={3}
// //         sx={{
// //           position: "fixed",
// //           bottom: isMobile ? "10px" : "20px",
// //           left: "50%",
// //           transform: "translateX(-50%)",
// //           background: "rgba(255, 255, 255, 0.3)", // Transparent Effect
// //           backdropFilter: "blur(10px)", // Glassmorphism Blur Effect
// //           boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
// //           borderRadius: "40px", // Rounded Corners
// //           padding: "5px 25px", // Wider Padding
// //           zIndex: 999
// //         }}
// //       >

// //      <BottomNavigation
// //   value={value}
// //   onChange={(event, newValue) => {
// //     setValue(newValue);
// //     if (newValue === 0) handleNavigation("home");
// //     if (newValue === 1) handleNavigation("about");
// //     if (newValue === 2) handleNavigation("services");
// //     if (newValue === 3) handleNavigation("contactUs");
// //   }}
// //   sx={{ background: "transparent" }}
// // >
// //   <BottomNavigationAction label="Home" icon={<HomeIcon />} />
// //   <BottomNavigationAction label="About" icon={<InfoIcon />} />
// //   <BottomNavigationAction label="Services" icon={<WorkIcon />} />
// //   <BottomNavigationAction label="Contact" icon={<ContactsIcon />} />
// // </BottomNavigation>

// //       </Paper>
// //     </>
// //   );
// // };

// // export default Home;
// import React from "react";
// import { Box, Typography, useMediaQuery, IconButton, Tooltip, Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
// import { useNavigate } from "react-router-dom"; // ✅ Add this for navigation
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import WorkIcon from "@mui/icons-material/Work";
// import ContactsIcon from "@mui/icons-material/Contacts";

// import Slider from '../components/Slider';
// import PlacementConsultants from '../components/PlacementConsultants';
// import JobGrid from '../components/JobGrid';
// import TestimonialPage from '../components/TestimonialPage';
// import VideoSection from '../components/VideoSection';
// import OurCoreValue from '../components/OurCoreValue';
// import PracticeAreas from '../components/OurServices';
// import WhoWeAreSection from "./OurMission";

// const Home = () => {
//   const isMobile = useMediaQuery("(max-width:600px)");
//   const [value, setValue] = React.useState(0);
//   const navigate = useNavigate(); // ✅ Use useNavigate for navigation

//   // PDF Download Handler
//   const handleDownload = () => {
//     const link = document.createElement('a');
//     link.href = "br.pdf";
//     link.download = "Company_Brochure.pdf";
//     link.click();
//   };

//   return (
//     <>
//       {/* Responsive Brochure Section */}
//       <Box
//         sx={{
//           position: "fixed",
//           top: "85%",
//           left: 0,
//           transform: "translateY(-50%)",
//           background: "#FF9800",
//           color: "#fff",
//           padding: isMobile ? "8px" : "12px 18px",
//           borderRadius: "0 10px 10px 0",
//           boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
//           zIndex: 1000,
//           cursor: "pointer",
//           transition: "all 0.3s ease",
//           "&:hover": { background: "#f57c00" }
//         }}
//         onClick={handleDownload}
//       >
//         {isMobile ? (
//           <Tooltip title="Download Brochure" arrow>
//             <IconButton color="inherit">
//               <PictureAsPdfIcon sx={{ fontSize: 28 }} />
//             </IconButton>
//           </Tooltip>
//         ) : (
//           <Typography variant="h6" sx={{ fontWeight: "bold", display: "flex", alignItems: "center", gap: 1 }}>
//             <PictureAsPdfIcon sx={{ fontSize: 28 }} /> Download Brochure
//           </Typography>
//         )}
//       </Box>

//       {/* Sections */}
//       <Slider />
//       <div id="about"><WhoWeAreSection /></div>
//       <div id="values"><OurCoreValue /></div>
//       <div id="services"><PracticeAreas /></div>
//       <VideoSection />
//       <div id="testimonials"><TestimonialPage /></div>

//       {/* WhatsApp Floating Button */}
//       <Box
//         sx={{
//           position: "fixed",
//           bottom: isMobile ? "80px" : "100px",
//           right: isMobile ? "10px" : "40px",
//           zIndex: 1000,
//           display: "flex",
//           alignItems: "center",
//           gap: 1,
//           background: "#25D366",
//           color: "#fff",
//           borderRadius: "50px",
//           padding: isMobile ? "8px 12px" : "12px 20px",
//           boxShadow: 3,
//           cursor: "pointer",
//           transition: "all 0.3s ease",
//           "&:hover": { background: "#1ebe57" },
//           marginRight: "50px",
//           marginBottom: "20px"
//         }}
//         onClick={() => window.open("https://wa.me/919904501115", "_blank")}
//       >
//         <WhatsAppIcon sx={{ fontSize: isMobile ? 24 : 30 }} />
//         {!isMobile && <Typography sx={{ fontWeight: "bold" }}>Hello</Typography>}
//       </Box>

//       {/* Fixed Transparent Navbar (Navigation to Pages) */}
//       <Paper
//         elevation={3}
//         sx={{
//           position: "fixed",
//           bottom: isMobile ? "10px" : "20px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           background: "rgba(255, 255, 255, 0.3)", // Transparent Effect
//           backdropFilter: "blur(10px)", // Glassmorphism Blur Effect
//           boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
//           borderRadius: "40px", // Rounded Corners
//           padding: "5px 25px", // Wider Padding
//           zIndex: 999
//         }}
//       >
//         <BottomNavigation
//           value={value}
//           onChange={(event, newValue) => {
//             setValue(newValue);
//             if (newValue === 0) navigate("/"); // ✅ Home Page
//             if (newValue === 1) navigate("/about"); // ✅ About Page
//             if (newValue === 2) navigate("/service"); // ✅ Services Page
//             if (newValue === 3) navigate("/contactUs"); // ✅ Contact Page
//           }}
//           sx={{ background: "transparent" }}
//         >
//           <BottomNavigationAction label="Home" icon={<HomeIcon />} />
//           <BottomNavigationAction label="About" icon={<InfoIcon />} />
//           <BottomNavigationAction label="Services" icon={<WorkIcon />} />
//           <BottomNavigationAction label="Contact" icon={<ContactsIcon />} />
//         </BottomNavigation>
//       </Paper>
//     </>
//   );
// };

// export default Home;
