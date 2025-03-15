// import React, { useState } from 'react';
// import { Box, Typography, TextField, Button, Avatar, Divider, MenuItem, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
// import RecruiterDashNav from '../Pages/RecruiterDashNav';

// const ProfilePage = () => {
//     const [emailModalOpen, setEmailModalOpen] = useState(false);
//     const [mobileModalOpen, setMobileModalOpen] = useState(false);
//     const [email, setEmail] = useState('');
//     const [mobile, setMobile] = useState('');

//     return (
//         <Box>
//         <RecruiterDashNav/>
//         <Box sx={{ display: 'flex', flexDirection: 'row', padding: 3, gap: 3, backgroundColor: '#f8f9fa' }}>

//             <Box sx={{
//                 width: '30%',
//                 backgroundColor: '#fff',
//                 padding: 3,
//                 boxShadow: 2,
//                 borderRadius: 2,
//                 height: 'auto' // Auto adjust height
//             }}>
//                 <Avatar sx={{ width: 80, height: 80, margin: '0 auto' }} />
//                 <Typography variant="h6" textAlign="center" sx={{ fontWeight: 'bold', mt: 1 }}>
//                     Sahil Sharma
//                 </Typography>
//                 <Typography textAlign="center" color="text.secondary">
//                     SA TECH
//                 </Typography>
//                 <Divider sx={{ my: 2 }} />

//                 {/* Profile Content - Auto Adjust */}
//                 <Box sx={{ fontSize: '14px', color: '#333', overflowWrap: 'break-word' }}>
//                     <Typography><b>Email:</b> sahil42740@gmail.com</Typography>
//                     <Typography><b>Mobile:</b> +91-9265875135</Typography>
//                     <Typography><b>Address:</b> Godadara, Surat, Gujarat (India)</Typography>
//                     <Typography sx={{ mt: 1 }}>
//                         <b>Additional Info:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula erat nec metus bibendum tincidunt.
//                     </Typography>
//                 </Box>
//             </Box>


//             {/* Right Editable Form */}
//             <Box sx={{ flexGrow: 1, backgroundColor: '#fff', padding: 3, boxShadow: 2, borderRadius: 2 }}>
//                 <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, borderBottom: '2px solid #007bff', display: 'inline-block', pb: 0.5 }}>My Profile</Typography>

//                 <TextField label="Your Name" fullWidth sx={{ my: 1 }} defaultValue="Sahil Sharma" />
//                 <TextField label="Street Address" fullWidth sx={{ my: 1 }} placeholder="Enter Address" />

//                 {/* Country & State Dropdown */}
//                 <Box sx={{ display: 'flex', gap: 2 }}>
//                     <TextField select label="Select Your Country" fullWidth defaultValue="India" sx={{ my: 1 }}>
//                         <MenuItem value="India">India</MenuItem>
//                         <MenuItem value="USA">USA</MenuItem>
//                         <MenuItem value="UK">UK</MenuItem>
//                     </TextField>
//                     <TextField label="State" fullWidth sx={{ my: 1 }} defaultValue="Gujarat" />
//                 </Box>

//                 <TextField label="City / Sub City / Locality" fullWidth sx={{ my: 1 }} defaultValue="Godadara, Surat" />

//                 {/* Email & Verification */}
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 1 }}>
//                     <TextField label="Email ID" fullWidth defaultValue="sahil42740@gmail.com" disabled />
//                     <Typography sx={{ color: 'red', fontWeight: 'bold' }}>❌ Non Verified</Typography>
//                     <Typography sx={{ color: '#007bff', cursor: 'pointer', fontWeight: 'bold' }}>Verify</Typography>
//                 </Box>

//                 {/* Mobile Number */}
//                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 1 }}>
//                     <TextField label="Mobile No 1" fullWidth defaultValue="+91-9265875135" disabled />
//                     <Typography sx={{ color: 'green', fontWeight: 'bold' }}>✅ Verified</Typography>
//                     <Typography sx={{ color: '#007bff', cursor: 'pointer', fontWeight: 'bold' }}>Change</Typography>
//                 </Box>

//                 {/* Add Alternate Email & Mobile */}
//                 <Typography sx={{ color: '#007bff', cursor: 'pointer', fontWeight: 'bold', my: 1 }} onClick={() => setEmailModalOpen(true)}>
//                     Add Email ID
//                 </Typography>
//                 <Typography sx={{ color: '#007bff', cursor: 'pointer', fontWeight: 'bold', my: 1 }} onClick={() => setMobileModalOpen(true)}>
//                     Add Mobile No
//                 </Typography>

//                 {/* Update Button */}
//                 <Button variant="contained" sx={{ mt: 2, backgroundColor: '#dc3545', color: '#fff', '&:hover': { backgroundColor: '#c82333' } }}>
//                     Update Profile
//                 </Button>
//             </Box>

//             {/* Email Modal */}
//             <Dialog open={emailModalOpen} onClose={() => setEmailModalOpen(false)}>
//                 <DialogTitle sx={{ backgroundColor: '#007bff', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
//                     Add Alternate Email ID & Verify it
//                     <IconButton onClick={() => setEmailModalOpen(false)} sx={{ color: '#fff' }}>
//                         <CloseIcon />
//                     </IconButton>
//                 </DialogTitle>
//                 <DialogContent sx={{ padding: 3 }}>
//                     <Typography>Email ID:</Typography>
//                     <TextField fullWidth placeholder="Enter Email ID" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ my: 1 }} />
//                     <Typography fontSize="12px" color="gray">Note: To edit & save your email ID you need to verify it.</Typography>
//                     <Button variant="contained" sx={{ mt: 2, backgroundColor: '#dc3545', '&:hover': { backgroundColor: '#c82333' } }}>
//                         Save & Verify
//                     </Button>
//                 </DialogContent>
//             </Dialog>

//             {/* Mobile Modal */}
//             <Dialog open={mobileModalOpen} onClose={() => setMobileModalOpen(false)}>
//                 <DialogTitle sx={{ backgroundColor: '#007bff', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
//                     Add Alternate Mobile Number & Verify it
//                     <IconButton onClick={() => setMobileModalOpen(false)} sx={{ color: '#fff' }}>
//                         <CloseIcon />
//                     </IconButton>
//                 </DialogTitle>
//                 <DialogContent sx={{ padding: 3 }}>
//                     <Typography>Mobile Number:</Typography>
//                     <TextField fullWidth placeholder="Enter Mobile No" value={mobile} onChange={(e) => setMobile(e.target.value)} sx={{ my: 1 }} />
//                     <Typography fontSize="12px" color="gray">Note: To edit & save your mobile number you need to verify it.</Typography>
//                     <Button variant="contained" sx={{ mt: 2, backgroundColor: '#dc3545', '&:hover': { backgroundColor: '#c82333' } }}>
//                         Save & Verify
//                     </Button>
//                 </DialogContent>
//             </Dialog>

//         </Box>
//         </Box>
//     );
// };

// export default ProfilePage;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Box, Typography, TextField, Avatar, Divider, Button } from '@mui/material';
// import RecruiterDashNav from '../Pages/RecruiterDashNav';

// const ProfilePage = () => {
//     const [recruiter, setRecruiter] = useState(null);

//     useEffect(() => {
//         const fetchProfile = async () => {
//             try {
//                 const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
//                 const response = await axios.get('http://localhost:5000/api/fetch/profile', {
//                     headers: { Authorization: `Bearer ${token}` }
//                 });
//                 setRecruiter(response.data);
//             } catch (error) {
//                 console.error('Error fetching profile:', error);
//             }
//         };

//         fetchProfile();
//     }, []);

//     if (!recruiter) {
//         return <Typography>Loading profile...</Typography>;
//     }

//     return (
//         <Box>
//             <RecruiterDashNav />
//             <Box sx={{ display: 'flex', flexDirection: 'row', padding: 3, gap: 3, backgroundColor: '#f8f9fa' }}>
//                 {/* Left Profile Section */}
//                 <Box sx={{ width: '30%', backgroundColor: '#fff', padding: 3, boxShadow: 2, borderRadius: 2 }}>
//                     <Avatar sx={{ width: 80, height: 80, margin: '0 auto' }} />
//                     <Typography variant="h6" textAlign="center" sx={{ fontWeight: 'bold', mt: 1 }}>
//                         {recruiter.name}
//                     </Typography>
//                     <Typography textAlign="center" color="text.secondary">
//                         {recruiter.email}
//                     </Typography>
//                     <Divider sx={{ my: 2 }} />
//                     <Box sx={{ fontSize: '14px', color: '#333' }}>
//                         <Typography><b>Email:</b> {recruiter.email}</Typography>
//                         <Typography><b>Mobile:</b> {recruiter.mobile}</Typography>
//                         <Typography><b>Location:</b> {recruiter.location}</Typography>
//                     </Box>
//                 </Box>

//                 {/* Right Editable Form */}
//                 <Box sx={{ flexGrow: 1, backgroundColor: '#fff', padding: 3, boxShadow: 2, borderRadius: 2 }}>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, borderBottom: '2px solid #007bff', display: 'inline-block', pb: 0.5 }}>My Profile</Typography>
//                     <TextField label="Your Name" fullWidth sx={{ my: 1 }} defaultValue={recruiter.name} />
//                     <TextField label="Location" fullWidth sx={{ my: 1 }} defaultValue={recruiter.location} />
//                     <TextField label="Email ID" fullWidth sx={{ my: 1 }} defaultValue={recruiter.email} disabled />
//                     <TextField label="Mobile No" fullWidth sx={{ my: 1 }} defaultValue={recruiter.mobile} disabled />

//                     <Button variant="contained" sx={{ mt: 2, backgroundColor: '#007bff', color: '#fff' }}>
//                         Update Profile
//                     </Button>
//                 </Box>
//             </Box>
//         </Box>
//     );
// };

// export default ProfilePage;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, TextField, Avatar, Divider, Button } from '@mui/material';
import RecruiterDashNav from '../Pages/RecruiterDashNav';

const ProfilePage = () => {
    const [recruiter, setRecruiter] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        location: '',
    });

    const fetchProfile = async () => {
        try {
            const token = localStorage.getItem('token'); 
            const response = await axios.get('http://localhost:5000/api/fetch/profile', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setRecruiter(response.data);
            setFormData({
                name: response.data.name || '',
                location: response.data.location || '',
            });
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.put('http://localhost:5000/api/fetch/update', formData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            alert('Profile updated successfully!');
            fetchProfile(); // Refetch data instead of reloading
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile.');
        }
    };

    if (!recruiter) {
        return <Typography>Loading profile...</Typography>;
    }

    return (
        <Box>
            <RecruiterDashNav />
            <Box sx={{ display: 'flex', flexDirection: 'row', padding: 3, gap: 3, backgroundColor: '#f8f9fa' }}>
                {/* Left Profile Section */}
                <Box sx={{ width: '30%', backgroundColor: '#fff', padding: 3, boxShadow: 2, borderRadius: 2 }}>
                    <Avatar sx={{ width: 80, height: 80, margin: '0 auto' }} />
                    <Typography variant="h6" textAlign="center" sx={{ fontWeight: 'bold', mt: 1 }}>
                        {recruiter.name}
                    </Typography>
                    <Typography textAlign="center" color="text.secondary">
                        {recruiter.email}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Box sx={{ fontSize: '14px', color: '#333' }}>
                        <Typography><b>Email:</b> {recruiter.email}</Typography>
                        <Typography><b>Mobile:</b> {recruiter.mobile}</Typography>
                        <Typography><b>Location:</b> {recruiter.location}</Typography>
                    </Box>
                </Box>

                {/* Right Editable Form */}
                <Box sx={{ flexGrow: 1, backgroundColor: '#fff', padding: 3, boxShadow: 2, borderRadius: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, borderBottom: '2px solid #007bff', display: 'inline-block', pb: 0.5 }}>My Profile</Typography>
                    <TextField 
                        label="Your Name" 
                        fullWidth 
                        sx={{ my: 1 }} 
                        name="name"
                        value={formData.name} 
                        onChange={handleChange} 
                    />
                    <TextField 
                        label="Location" 
                        fullWidth 
                        sx={{ my: 1 }} 
                        name="location"
                        value={formData.location} 
                        onChange={handleChange} 
                    />
                    <TextField label="Email ID" fullWidth sx={{ my: 1 }} value={recruiter.email} disabled />
                    <TextField label="Mobile No" fullWidth sx={{ my: 1 }} value={recruiter.mobile} disabled />

                    <Button 
                        variant="contained" 
                        sx={{ mt: 2, backgroundColor: '#007bff', color: '#fff' }}
                        onClick={handleUpdate}
                    >
                        Update Profile
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ProfilePage;
