// import React from "react";
// import { Box, Typography, Card, Container, Grid } from "@mui/material";

// const workProcess = [
//   {
//     title: "Consultation",
//     description: "We begin by understanding your requirements—whether you're looking to hire or seeking employment.",
//     icon: "👥"
//   },
//   {
//     title: "Talent Search",
//     description: "Using a combination of industry knowledge, proprietary technology, and a vast network, we identify the best-fit candidates for your needs.",
//     icon: "👥"
//   },
//   {
//     title: "Screening & Interviews",
//     description: "We thoroughly assess each candidate's qualifications, experience, and cultural fit to ensure they meet your standards.",
//     icon: "👥"
//   },
//   {
//     title: "Placement",
//     description: "We finalize the match and ensure both the client and candidate are satisfied with the decision.",
//     icon: "📍"
//   },
//   {
//     title: "Follow-up",
//     description: "We maintain ongoing support to ensure the success of the placement, making adjustments as necessary.",
//     icon: "👥"
//   }
// ];

// const WorkProcess = () => {
//   return (
//     <Box sx={{ bgcolor: "#192A56", py: 10 }}>
//       <Container maxWidth="lg">
//         <Typography
//           variant="h3"
//           align="center"
//           sx={{
//             mb: 6,
//             color: "white",
//             fontWeight: 600,
//             "& .highlight": {
//               color: "#FFC107"
//             }
//           }}
//         >
//           <span className="highlight">OUR BASIC</span> WORK PROCESS
//         </Typography>

//         <Grid container spacing={3}>
//           {/* First Row - 3 Cards */}
//           <Grid item container spacing={3} xs={12}>
//             {workProcess.slice(0, 3).map((process, index) => (
//               <Grid item xs={12} md={4} key={index}>
//                 <Card
//                   sx={{
//                     p: 4,
//                     height: '80%',
//                     bgcolor: 'white',
//                     borderRadius: 2,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'flex-start'
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       color: '#FFC107',
//                       fontSize: '2.5rem',
//                       mb: 2
//                     }}
//                   >
//                     {process.icon}
//                   </Typography>
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       color: '#1a237e',
//                       mb: 1,
//                       fontWeight: 600
//                     }}
//                   >
//                     {process.title}
//                   </Typography>
//                   <Typography
//                     sx={{
//                       color: '#666',
//                       lineHeight: 1.6
//                     }}
//                   >
//                     {process.description}
//                   </Typography>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>

//           {/* Second Row - 2 Cards */}
//           <Grid item container spacing={3} xs={12} justifyContent="center" sx={{ mt: 1 }}>
//             {workProcess.slice(3).map((process, index) => (
//               <Grid item xs={12} md={4} key={index}>
//                 <Card
//                   sx={{
//                     p: 4,
//                     height: '80%',
//                     bgcolor: 'white',
//                     borderRadius: 2,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'flex-start'
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       color: '#FFC107',
//                       fontSize: '2.5rem',
//                       mb: 2
//                     }}
//                   >
//                     {process.icon}
//                   </Typography>
//                   <Typography
//                     variant="h6"
//                     sx={{
//                       color: '#1a237e',
//                       mb: 1,
//                       fontWeight: 600
//                     }}
//                   >
//                     {process.title}
//                   </Typography>
//                   <Typography
//                     sx={{
//                       color: '#666',
//                       lineHeight: 1.6
//                     }}
//                   >
//                     {process.description}
//                   </Typography>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default WorkProcess;

import React from 'react';
import { Box, Typography, Card, Container, Grid } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import SearchIcon from '@mui/icons-material/Search';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import PlaceIcon from '@mui/icons-material/Place';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const workProcess = [
  {
    title: 'Consultation',
    description:
      "We begin by understanding your requirements—whether you're looking to hire or seeking employment.",
    icon: <GroupsIcon sx={{ color: '#0D1A44' }} />,
  },
  {
    title: 'Talent Search',
    description:
      'Using a combination of industry knowledge, proprietary technology, and a vast network, we identify the best-fit candidates for your needs.',
    icon: <SearchIcon sx={{ color: '#0D1A44' }} />,
  },
  {
    title: 'Screening & Interviews',
    description:
      "We thoroughly assess each candidate's qualifications, experience, and cultural fit to ensure they meet your standards.",
    icon: <AssignmentIndIcon sx={{ color: '#0D1A44' }} />,
  },
  {
    title: 'Placement',
    description:
      'We finalize the match and ensure both the client and candidate are satisfied with the decision.',
    icon: <PlaceIcon sx={{ color: '#0D1A44' }} />,
  },
  {
    title: 'Follow-up',
    description:
      'We maintain ongoing support to ensure the success of the placement, making adjustments as necessary.',
    icon: <SupportAgentIcon sx={{ color: '#0D1A44' }} />,
  },
];

const WorkProcess = () => {
  return (
    <Box sx={{ bgcolor: '#0D1A44', py: 10 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          sx={{
            mb: 6,
            color: 'white',
            fontWeight: 600,
            fontFamily: 'Lora, serif',
          }}
        >
          <span style={{ color: '#F7C948' }}>OUR BASIC</span> WORK PROCESS
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {workProcess.map((process, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <Card
  sx={{
    p: 3,
    width: 380,
    height: 140,
    bgcolor: '#fff',
    borderRadius: 1.5,
    boxShadow: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 1,
    fontFamily: 'Lora, serif',
  }}
>
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
    <Box
      sx={{
        bgcolor: '#F7C948',
        borderRadius: 1,
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {process.icon}
    </Box>

    <Typography
      variant="subtitle1"
      sx={{
        color: '#0D1A44',
        fontWeight: 700,
        fontSize: '1rem',
        fontFamily: 'Lora, serif',
      }}
    >
      {process.title}
    </Typography>
  </Box>

  <Typography
    sx={{
      color: '#555',
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontFamily: 'Lora, serif',
    }}
  >
    {process.description}
  </Typography>
</Card>

            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WorkProcess;
