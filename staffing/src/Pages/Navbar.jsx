// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Menu,
//   MenuItem,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Box,
//   Divider,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// export default function PrimarySearchAppBar() {
//   const [dropdowns, setDropdowns] = useState({ login: null, practice: null });
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleDropdownOpen = (event, key) => {
//     setDropdowns({ ...dropdowns, [key]: event.currentTarget });
//   };

//   const handleDropdownClose = (key) => {
//     setDropdowns((prev) => ({ ...prev, [key]: null }));
//   };

//   return (
//     <>
//       <AppBar
//         position="fixed"
//         sx={{
//           backgroundColor: '#192A56',
//           color: '#fff',
//           fontFamily: 'Lora, serif',
//           height: '120px',
//           justifyContent: 'center', // vertically center the Toolbar
//         }}
//       >
//         <Toolbar sx={{ minHeight: '120px' }}>
//           <IconButton
//             color="inherit"
//             edge="start"
//             onClick={() => setMobileOpen(!mobileOpen)}
//             sx={{ display: { xs: 'block', md: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>

//           <Typography
//             variant="h6"
//             component="div"
//             sx={{
//               flexGrow: 1,
//               cursor: 'pointer',
//               marginLeft: '140px',
//               fontFamily: 'Lora, serif',
//             }}
//             onClick={() => navigate('/')}
//           >
//             <img
//               src="24.png"
//               alt="Logo"
//               style={{ width: '200px', height: 'auto' }}
//             />
//           </Typography>

//           <Box
//             sx={{
//               display: { xs: 'none', md: 'flex' },
//               gap: 4,
//               fontSize: { md: '1.2rem', lg: '1.5rem' },
//               padding: { md: '10px 20px', lg: '15px 30px' },
//               justifyContent: 'center',
//               flexGrow: 3,
//               fontFamily: 'Lora, serif',
//             }}
//           >
//             <Button onClick={() => navigate('/about')} color="inherit" sx={{ textTransform: 'none' }}>
//               About Us
//             </Button>
//             <Button onClick={() => navigate('/service')} color="inherit" sx={{ textTransform: 'none' }}>
//               Services
//             </Button>
//             <Button onClick={() => navigate('/open-job')} color="inherit" sx={{ textTransform: 'none' }}>
//               Job Opening
//             </Button>
//             <Button
//               color="inherit"
//               onClick={(e) => handleDropdownOpen(e, 'login')}
//               endIcon={<ArrowDropDownIcon />}
//               sx={{ textTransform: 'none' }}
//             >
//               Login
//             </Button>
//             <Menu
//               anchorEl={dropdowns.login}
//               open={Boolean(dropdowns.login)}
//               onClose={() => handleDropdownClose('login')}
//               anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//               transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//               sx={{
//                 '& .MuiPaper-root': {
//                   backgroundColor: '#1e293b',
//                   color: 'white',
//                   borderRadius: '8px',
//                   boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
//                 },
//                 '& .MuiMenuItem-root': {
//                   transition: 'background-color 0.2s ease-in-out',
//                   '&:hover': {
//                     backgroundColor: '#334155',
//                   },
//                 },
//               }}
//             >
//               <MenuItem onClick={() => navigate('/candidate-register')}>
//                 Candidate Register
//               </MenuItem>
//               <MenuItem onClick={() => navigate('/employer-login')}>
//                 Employer Login
//               </MenuItem>
//               <MenuItem onClick={() => navigate('/login')}>
//                 Recruiter Login
//               </MenuItem>
//             </Menu>

//             <Button
//               color="inherit"
//               onClick={(e) => handleDropdownOpen(e, 'practice')}
//               endIcon={<ArrowDropDownIcon />}
//               sx={{ textTransform: 'none' }}
//             >
//               Practice Areas
//             </Button>

//             <Menu
//               anchorEl={dropdowns.practice}
//               open={Boolean(dropdowns.practice)}
//               onClose={() => handleDropdownClose('practice')}
//               anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//               transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//             >
//               {[
//                 {
//                   id: 'manufacturing-technology',
//                   label: 'Manufacturing & Technology',
//                 },
//                 { id: 'service-distribution', label: 'Service / Distribution' },
//                 { id: 'accounting-finance', label: 'Accounting / Finance' },
//                 {
//                   id: 'financial-services-banking',
//                   label: 'Financial Services / Banking',
//                 },
//                 { id: 'private-equity', label: 'Private Equity' },
//                 { id: 'life-sciences', label: 'Life Sciences' },
//                 { id: 'healthcare', label: 'Healthcare' },
//                 { id: 'insurance', label: 'Insurance' },
//               ].map((item) => (
//                 <MenuItem
//                   key={item.id}
//                   onClick={() => navigate(`/practice-areas#${item.id}`)}
//                 >
//                   {item.label}
//                 </MenuItem>
//               ))}
//             </Menu>

//             <Button onClick={() => navigate('/contactUs')} color="inherit" sx={{ textTransform: 'none' }}>
//               Contact Us
//             </Button>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Add spacing so image/content doesn't hide under AppBar */}
//       <Box sx={{ height: '120px' }} />

//       <Drawer
//         anchor="left"
//         open={mobileOpen}
//         onClose={() => setMobileOpen(false)}
//       >
//         <List>
//           <ListItem button onClick={() => navigate('/')}>
//             <ListItemText primary="Home" />
//           </ListItem>
//           <ListItem button onClick={() => navigate('/about')}>
//             <ListItemText primary="About Us" />
//           </ListItem>
//           <ListItem button onClick={() => navigate('/service')}>
//             <ListItemText primary="Services" />
//           </ListItem>
//           <ListItem button onClick={() => navigate('/contactUs')}>
//             <ListItemText primary="Contact Us" />
//           </ListItem>
//           <Divider />
//           <ListItem button onClick={() => navigate('/open-job')}>
//             <ListItemText primary="Job Opening" />
//           </ListItem>
//           <ListItem button onClick={() => navigate('/candidate-register')}>
//             <ListItemText primary="Candidate Register" />
//           </ListItem>
//           <ListItem button onClick={() => navigate('/employer-login')}>
//             <ListItemText primary="Employer Login" />
//           </ListItem>
//           <ListItem button onClick={() => navigate('/login')}>
//             <ListItemText primary="Recruiter Login" />
//           </ListItem>
//           <Divider />
//         </List>
//       </Drawer>
//     </>
//   );
// }
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/24.png';

export default function PrimarySearchAppBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/service' },
    { label: 'Job Opening', path: '/open-job' },
    { label: 'Practice Areas', path: '/practice-areas' },
    { label: 'Contact Us', path: '/contactUs' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', mt: 2  }}>
      <img
        src={logo}
        alt="Logo"
        style={{ height: '50px', marginBottom: '10px' }}
      />
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.label}
            onClick={() => navigate(item.path)}
            sx={{
              color: location.pathname === item.path ? '#F7C948' : '#fff',
              fontWeight: location.pathname === item.path ? 'bold' : 'normal',
            }}
          >
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
        <ListItem>
          <Button
            variant="contained"
            onClick={() => navigate('/login')}
            fullWidth
            sx={{
              backgroundColor: '#F7C948',
              color: '#000',
              textTransform: 'none',
              fontFamily: 'Lora, serif',
              mt: 1,
              '&:hover': {
                backgroundColor: '#e6b800',
              },
            }}
          >
            Login
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#0D1A44',
          boxShadow: 'none',
          height: '83px',
          justifyContent: 'center',
          px: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            position: 'relative',
          }}
        >
          {/* Center Container: Logo + Nav */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              gap: 3,
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              whiteSpace: 'nowrap',
              flexWrap: 'nowrap',
              overflow: 'hidden',
              minWidth: 0,
            }}
          >
            <Box
              onClick={() => navigate('/')}
              sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            >
              <img src={logo} alt="Logo" style={{ height: '55px' }} />
            </Box>

            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => navigate(item.path)}
                sx={{
                  textTransform: 'none',
                  fontFamily: 'Lora, serif',
                  fontSize: '0.95rem',
                  color: location.pathname === item.path ? '#F7C948' : 'white',
                  borderBottom:
                    location.pathname === item.path
                      ? '2px solid #F7C948'
                      : 'none',
                  borderRadius: 0,
                }}
              >
                {item.label}
              </Button>
            ))}

            <Button
              variant="contained"
              onClick={() => navigate('/login')}
              sx={{
                backgroundColor: '#F7C948',
                color: '#000',
                textTransform: 'none',
                fontFamily: 'Lora, serif',
                '&:hover': {
                  backgroundColor: '#e6b800',
                },
              }}
            >
              Login
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, ml: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screens */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 240,
            backgroundColor: '#0D1A44',
            color: 'white',
          },
        }}
      >
        {drawer}
      </Drawer>

      <Box sx={{ height: '75px' }} />
    </>
  );
}
