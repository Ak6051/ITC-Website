// import React, { useEffect, useState } from "react";
// import {
//   Container, Grid, Card, CardContent, Typography, Avatar, Box, Button, Divider
// } from "@mui/material";
// import { deepOrange } from "@mui/material/colors";
// import UpdateEmployerModal from "./UpdateEmployerProfile";
// import ChangePasswordModal from "./EmployerChangePasswordModel";

// const EmployerProfile = () => {
//   const [employer, setEmployer] = useState(null);
//   const [openEditModal, setOpenEditModal] = useState(false);
//   const [openPasswordModal, setOpenPasswordModal] = useState(false);

//   useEffect(() => {
//     fetchEmployerProfile();
//   }, []);

//   const fetchEmployerProfile = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await fetch("http://localhost:5000/api/employerProfile/profile", {
//         method: "GET",
//         headers: {
//           "Authorization": `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setEmployer(data);
//       } else {
//         console.error("Error fetching employer profile:", data.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <Container maxWidth="lg">
//       <Grid container spacing={4} sx={{ mt: 4 }}>
//         {/* Left Side Content */}
//         <Grid item xs={12} md={4}>
//           <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3, textAlign: "center" }}>
//             <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
//               Employer Dashboard
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               Manage your profile and job postings from here.
//             </Typography>
//           </Card>
//         </Grid>

//         {/* Right Side Profile Data */}
//         <Grid item xs={12} md={8}>
//           <Card sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
//             <Box display="flex" alignItems="center" gap={2}>
//               <Avatar sx={{ bgcolor: deepOrange[500], width: 90, height: 90, fontSize: 36 }}>
//                 {employer?.name?.charAt(0)}
//               </Avatar>
//               <Box>
//                 <Typography variant="h5" sx={{ fontWeight: "bold" }}>
//                   {employer?.name}
//                 </Typography>
//                 <Typography color="textSecondary">{employer?.companyName}</Typography>
//               </Box>
//             </Box>

//             <Divider sx={{ my: 2 }} />

//             <CardContent>
//               <Typography variant="body1">
//                 <strong>Email:</strong> {employer?.email}
//               </Typography>
//               <Typography variant="body1">
//                 <strong>Mobile No:</strong> {employer?.mobileNo}
//               </Typography>
//               <Typography variant="body1">
//                 <strong>Company Address:</strong> {employer?.companyAddress}
//               </Typography>

//               <Box display="flex" gap={2} mt={3}>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   fullWidth
//                   onClick={() => setOpenEditModal(true)}
//                 >
//                   Edit Profile
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   color="error"
//                   fullWidth
//                   onClick={() => setOpenPasswordModal(true)}
//                 >
//                   Change Password
//                 </Button>
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       {/* Update Profile Modal */}
//       <UpdateEmployerModal
//         open={openEditModal}
//         handleClose={() => setOpenEditModal(false)}
//         employer={employer}
//         refreshProfile={fetchEmployerProfile}
//       />

//       {/* Change Password Modal */}
//       <ChangePasswordModal
//         open={openPasswordModal}
//         handleClose={() => setOpenPasswordModal(false)}
//       />
//     </Container>
//   );
// };

// export default EmployerProfile;
import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Button,
  Divider,
  Paper,
} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import UpdateEmployerModal from './UpdateEmployerProfile';
import ChangePasswordModal from './EmployerChangePasswordModel';

const EmployerProfile = () => {
  const [employer, setEmployer] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openPasswordModal, setOpenPasswordModal] = useState(false);

  useEffect(() => {
    fetchEmployerProfile();
  }, []);

  const fetchEmployerProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        'http://localhost:5000/api/employerProfile/profile',
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();
      if (response.ok) {
        setEmployer(data);
      } else {
        console.error('Error fetching employer profile:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} sx={{ mt: 4, mb: 10 }}>
        {/* Left Side Content */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 6.5,
              borderRadius: 3,
              boxShadow: 4,
              background: '#f5f5f5',
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', mb: 2, color: '#333' }}
            >
              Welcome, {employer?.name}!
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
              Here you can manage your profile, company details, and job
              postings efficiently.
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              Company Name:
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {employer?.companyName}
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 2 }}>
              Location:
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {employer?.companyAddress}
            </Typography>
          </Paper>
        </Grid>

        {/* Right Side Profile Data */}
        <Grid item xs={12} md={8}>
          <Card
            sx={{ p: 4, borderRadius: 3, boxShadow: 4, background: '#fff' }}
          >
            <Box display="flex" alignItems="center" gap={3}>
              <Avatar
                sx={{
                  bgcolor: deepOrange[500],
                  width: 100,
                  height: 100,
                  fontSize: 40,
                }}
              >
                {employer?.name?.charAt(0)}
              </Avatar>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 'bold', color: '#222' }}
                >
                  {employer?.name}
                </Typography>
                <Typography color="textSecondary" sx={{ fontSize: 16 }}>
                  {employer?.email}
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ my: 3 }} />

            <CardContent>
              <Typography variant="body1">
                <strong>Mobile No:</strong> {employer?.mobileNo}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                <strong>Company Address:</strong> {employer?.companyAddress}
              </Typography>

              <Box display="flex" gap={2} mt={4}>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ textTransform: 'none', fontWeight: 'bold', px: 3 }}
                  onClick={() => setOpenEditModal(true)}
                >
                  Edit Profile
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  sx={{ textTransform: 'none', fontWeight: 'bold', px: 3 }}
                  onClick={() => setOpenPasswordModal(true)}
                >
                  Change Password
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Update Profile Modal */}
      <UpdateEmployerModal
        open={openEditModal}
        handleClose={() => setOpenEditModal(false)}
        employer={employer}
        refreshProfile={fetchEmployerProfile}
      />

      {/* Change Password Modal */}
      <ChangePasswordModal
        open={openPasswordModal}
        handleClose={() => setOpenPasswordModal(false)}
      />
    </Container>
  );
};

export default EmployerProfile;
