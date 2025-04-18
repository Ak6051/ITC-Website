

// // import React, { useEffect, useRef } from 'react';
// // import { Box, Typography, Container, Button } from '@mui/material';
// // import { motion } from 'framer-motion';
// // import { useNavigate } from 'react-router-dom';
// // import {
// //   FaIndustry,
// //   FaBriefcase,
// //   FaUsers,
// //   FaHeartbeat,
// //   FaChartLine,
// //   FaHandHoldingUsd,
// //   FaLaptopCode,
// //   FaShieldAlt,
// // } from 'react-icons/fa';

// // const services = [
// //   { id: 'manufacturing-technology', title: 'Manufacturing & Tech', icon: <FaIndustry />, description: 'Streamline your operations with our technology-driven solutions.' },
// //   { id: 'service-distribution', title: 'Service & Distribution', icon: <FaUsers />, description: 'Optimize your supply chain with advanced logistics support.' },
// //   { id: 'accounting-finance', title: 'Finance & Accounting', icon: <FaChartLine />, description: 'Precise financial analysis and reporting services.' },
// //   { id: 'financial-services-banking', title: 'Banking & Insurance', icon: <FaHandHoldingUsd />, description: 'Secure and reliable banking and insurance support.' },
// //   { id: 'private-equity', title: 'Private Equity', icon: <FaBriefcase />, description: 'Empower your financial strategies with expert consulting.' },
// //   { id: 'life-sciences', title: 'Life Sciences', icon: <FaHeartbeat />, description: 'Innovative solutions for healthcare and life sciences.' },
// //   { id: 'healthcare', title: 'Healthcare', icon: <FaLaptopCode />, description: 'Healthcare industry is transforming rapidly due to consumer demand.' },
// //   { id: 'insurance', title: 'Insurance', icon: <FaShieldAlt />, description: 'New players in the insurance industry have brought increased competition.' },
// // ];

// // const OurServices = () => {
// //   const navigate = useNavigate();
// //   const scrollRef = useRef(null);

// //   useEffect(() => {
// //     const scrollContainer = scrollRef.current;
// //     if (!scrollContainer) return;

// //     let scrollAmount = 0;
// //     const scrollSpeed = 0.9; // Adjust speed for smooth scrolling

// //     const scroll = () => {
// //       if (!scrollContainer) return;
// //       scrollAmount += scrollSpeed;
// //       if (scrollAmount >= scrollContainer.scrollWidth) {
// //         scrollAmount = 0;
// //       }
// //       scrollContainer.scrollLeft = scrollAmount;
// //       requestAnimationFrame(scroll);
// //     };

// //     requestAnimationFrame(scroll);
// //   }, []);

// //   return (
// //     <Box
// //       sx={{
// //         textAlign: 'center',
// //         py: { xs: 6, md: 10 },
// //         background: 'linear-gradient(to right, rgb(32, 31, 34), rgb(163, 219, 226))',
// //         minHeight: '70vh',
// //         color: '#f5f5f5',
// //         overflow: 'hidden',
// //       }}
// //     >
// //       <Container>
// //         <motion.div
// //           initial={{ opacity: 0, y: -20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6 }}
// //         >
// //           <Typography
// //             variant="h4"
// //             fontWeight={700}
// //             gutterBottom
// //             sx={{ fontFamily: 'serif', fontSize: { xs: '2rem', md: '2.8rem' } }}
// //           >
// //             Our Practice Area
// //           </Typography>
// //         </motion.div>

// //         <Box
// //           sx={{
// //             width: 80,
// //             height: 5,
// //             backgroundColor: '#F2BC38',
// //             mx: 'auto',
// //             mb: 4,
// //             borderRadius: 2,
// //           }}
// //         />

// //         <Typography
// //           variant="body1"
// //           maxWidth={650}
// //           mx="auto"
// //           mb={5}
// //           sx={{ fontFamily: 'serif', fontSize: { xs: '18px', md: '1.2rem' } }}
// //         >
// //           Explore our wide range of services designed to meet your business needs.
// //         </Typography>

// //         <Box
// //           ref={scrollRef}
// //           sx={{
// //             display: 'flex',
// //             gap: 3,
// //             overflowX: 'hidden',
// //             whiteSpace: 'nowrap',
// //             p: 2,
// //             width: '100%',
// //           }}
// //         >
// //           {services.concat(services).map((service, index) => ( // Duplicate for seamless loop
// //             <motion.div
// //               key={index}
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //               style={{
// //                 minWidth: '300px',
// //                 padding: '20px',
// //                 background: '#fff',
// //                 color: '#2c3e50',
// //                 borderRadius: '12px',
// //                 boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
// //                 cursor: 'pointer',
// //                 whiteSpace: 'normal',
// //               }}
// //             >
// //               <motion.div style={{ fontSize: '4rem', color: '#e67e22', marginBottom: '20px' }}>
// //                 {service.icon}
// //               </motion.div>
// //               <Typography variant="h6" fontWeight="bold">{service.title}</Typography>
// //               <Typography variant="body2" sx={{ textAlign: 'center', color: '#7f8c8d' }}>
// //                 {service.description}
// //               </Typography>
// //               <Button
// //                 variant="contained"
// //                 sx={{ mt: 2, background: '#F2BC38', color: '#fff', '&:hover': { background: '#d35400' } }}
// //                 onClick={() => navigate(`/practice-areas#${service.id}`)}
// //               >
// //                 Learn More
// //               </Button>
// //             </motion.div>
// //           ))}
// //         </Box>
// //       </Container>
// //     </Box>
// //   );
// // };

// // export default OurServices;
// import React, { useEffect, useRef } from 'react';
// import { Box, Typography, Container, Button } from '@mui/material';
// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';
// import {
//   FaIndustry,
//   FaBriefcase,
//   FaUsers,
//   FaHeartbeat,
//   FaChartLine,
//   FaHandHoldingUsd,
//   FaLaptopCode,
//   FaShieldAlt,
// } from 'react-icons/fa';

// const services = [
//   { id: 'manufacturing-technology', title: 'Manufacturing & Tech', icon: <FaIndustry />, description: 'Streamline your operations with our technology-driven solutions.' },
//   { id: 'service-distribution', title: 'Service & Distribution', icon: <FaUsers />, description: 'Optimize your supply chain with advanced logistics support.' },
//   { id: 'accounting-finance', title: 'Finance & Accounting', icon: <FaChartLine />, description: 'Precise financial analysis and reporting services.' },
//   { id: 'financial-services-banking', title: 'Banking & Insurance', icon: <FaHandHoldingUsd />, description: 'Secure and reliable banking and insurance support.' },
//   { id: 'private-equity', title: 'Private Equity', icon: <FaBriefcase />, description: 'Empower your financial strategies with expert consulting.' },
//   { id: 'life-sciences', title: 'Life Sciences', icon: <FaHeartbeat />, description: 'Innovative solutions for healthcare and life sciences.' },
//   { id: 'healthcare', title: 'Healthcare', icon: <FaLaptopCode />, description: 'Healthcare industry is transforming rapidly due to consumer demand.' },
//   { id: 'insurance', title: 'Insurance', icon: <FaShieldAlt />, description: 'New players in the insurance industry have brought increased competition.' },
// ];

// const OurServices = () => {
//   const navigate = useNavigate();
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const scrollContainer = scrollRef.current;
//     if (!scrollContainer) return;

//     let scrollAmount = 0;
//     const scrollSpeed = 0.3; // Adjust speed for smooth scrolling

//     const scroll = () => {
//       if (!scrollContainer) return;
//       scrollAmount += scrollSpeed;
//       if (scrollAmount >= scrollContainer.scrollWidth) {
//         scrollAmount = 0;
//       }
//       scrollContainer.scrollLeft = scrollAmount;
//       requestAnimationFrame(scroll);
//     };

//     requestAnimationFrame(scroll);
//   }, []);

//   return (
//     <Box
//       sx={{
//         textAlign: 'center',
//         py: { xs: 6, md: 10 },
//         background: '#192A56',
//         minHeight: '60vh',
//         color: '#f5f5f5',
//         overflow: 'hidden',
//       }}
//     >
//       <Container>
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <Typography
//             variant="h4"
//             fontWeight={700}
//             gutterBottom
//             sx={{ fontFamily: 'serif', fontSize: { xs: '2rem', md: '2.8rem' } }}
//           >
//             Our Practice Area
//           </Typography>
//         </motion.div>

//         <Box
//           sx={{
//             width: 80,
//             height: 5,
//             backgroundColor: '#F2BC38',
//             mx: 'auto',
//             mb: 4,
//             borderRadius: 2,
//           }}
//         />

//         <Typography
//           variant="body1"
//           maxWidth={650}
//           mx="auto"
//           mb={5}
//           sx={{ fontFamily: 'serif', fontSize: { xs: '18px', md: '1.3rem' } }}
//         >
//           Explore our wide range of services designed to meet your business needs.
//         </Typography>

//         <Box
//           ref={scrollRef}
//           sx={{
//             display: 'flex',
//             gap: 3,
//             overflowX: 'hidden',
//             whiteSpace: 'nowrap',
//             p: 3,
//             width: '100%',
//           }}
//         >
//           {services.concat(services).map((service, index) => ( // Duplicate for seamless loop
//             <motion.div
//               key={index}
//               whileHover={{ scale: 1.08 }}
//               whileTap={{ scale: 0.95 }}
//               style={{
//                 minWidth: '350px',
//                 padding: '45px',
//                 background: '#fff',
//                 color: '#2c3e50',
//                 borderRadius: '12px',
//                 boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
//                 cursor: 'pointer',
//                 whiteSpace: 'normal',
//               }}
//             >
//               <motion.div style={{ fontSize: '4rem', color: '#e67e22', marginBottom: '20px' }}>
//                 {service.icon}
//               </motion.div>
//               <Typography variant="h6" fontWeight="bold">{service.title}</Typography>
//               <Typography variant="body2" sx={{ textAlign: 'center', color: '#7f8c8d' }}>
//                 {service.description}
//               </Typography>
//               <Button
//                 variant="contained"
//                 sx={{ mt: 2, background: '#F2BC38', color: '#fff', '&:hover': { background: '#d35400' } }}
//                 onClick={() => navigate(`/practice-areas#${service.id}`)}
//               >
//                 Learn More
//               </Button>
//             </motion.div>
//           ))}
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default OurServices;

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';

// Sample services - Replace with your actual data
const services = [
  { id: "manufacturing-technology", 
    title: "Manufacturing & Technology", 
    content:
      "Advancing technology and automation have transformed manufacturing, increasing productivity – but also complexity. Companies now need executives to possess an advanced understanding of these complexities as well as the capabilities of the new technologies.",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_013.jpg",
  },
  { id: "service-distribution", title: "Service / Distribution", 
    content: "In recent times, the service and distribution industries have undergone sudden and unexpected changes. Leaders in this industry must be responsive and nimble.",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_018.jpg",
  },
  { id: "accounting-finance", 
    title: "Accounting / Finance", 
    content: "Financial expertise is more crucial than ever in today’s rapidly evolving economy. Companies require leaders who can drive financial strategy and innovation.",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_016.jpg"
  },
    {
    id: "financial-services-banking",
    title: "Financial Services / Banking",
    content:
      "The financial services and banking sector is experiencing rapid digital transformation. Companies need leaders who can navigate regulatory complexities, drive innovation, and ensure financial security. With the right expertise, firms can thrive in a competitive and evolving market.",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_020.jpg",

  },
  {
    id: "private-equity", title: "Private Equity",
    content: " Growth in this industry has come through a gradual increase in scope of investin from traditional buyouts to distressed funding, venture capital funding and more  The technology boom has brought an increase in private equity firms as companies move to gain funding for expansion. Rapid expansion and a volatile environment create a need for the best possible talent to both manage investments and manage the companies in which they have invested.",
    image: 'https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_08.jpg',
  },
  {
    id: "life-sciences",
    title: "Life Sciences",
    content: "Technological advances have led to breakthroughs in life sciences. Evolving models of healthcare, increasing patient expectations, and global competition add complexity. Leaders require a thorough understanding of consequences and the ability to make fast decisions.",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_03.jpg",

  },
  {
    id: "healthcare",
    title: "Healthcare",
    content:
      "The healthcare industry is transforming rapidly as new delivery methods evolve due to consumer demand. Value-based healthcare is changing the face of the industry...",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_05.jpg",
  },
  {
    id: "insurance", title: "Insurance",

    content: "New players in the insurance industry have brought increased competition, and leaders must be quick to identify and grasp opportunities to decrease their company’s risks. Leaders in this industry are looking to data mining and predictive analytics and modeling to increase their company’s competitive edge",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_010.jpg",
  },
];

const OurServices = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#0A1D4D',
        color: '#fff',
        py: 8,
        fontFamily: 'Lora, serif',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 'bold',
            fontFamily: 'Lora, serif',
          }}
        >
          <span style={{ color: '#F2BC38' }}>OUR</span> PRACTICE AREA
        </Typography>

        <Typography
          variant="body1"
          align="center"
          mt={2}
          sx={{
            maxWidth: '600px',
            mx: 'auto',
            fontSize: '1.1rem',
          }}
        >
          Explore our wide range of services designed to meet your business needs.
        </Typography>

        {/* Scrollable card section */}
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            mt: 6,
            px: 1,
            pb: 2,
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            cursor: 'grab',
            '&::-webkit-scrollbar': {
              height: 0,
            },
          }}
          onWheel={(e) => {
            e.currentTarget.scrollLeft += e.deltaY;
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.03 }}
              style={{
                minWidth: 300,
                backgroundColor: '#fff',
                borderRadius: '10px',
                overflow: 'hidden',
                color: '#000',
                textAlign: 'center',
                fontFamily: 'Lora, serif',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{ width: '100%', height: '220px', objectFit: 'cover' }}
              />
              <Box
                sx={{
                  backgroundColor: '#F2BC38',
                  py: 1.5,
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                  }}
                >
                  {service.title}
                </Typography>
              </Box>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default OurServices;
