import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Avatar, Divider, Menu, MenuItem, ListItemIcon, Box, useMediaQuery, Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonIcon from '@mui/icons-material/Person';
import BusinessIcon from '@mui/icons-material/Business';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import LogoutIcon from '@mui/icons-material/Logout';

export default function RecruiterNavbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Dropdown Open Handler
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Dropdown Close Handler
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Logout Function
  const handleLogout = () => {
    handleMenuClose();
    navigate('/login');
  };

  // Toggle Mobile Menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const mobileMenu = (
    <Drawer anchor="left" open={mobileMenuOpen} onClose={toggleMobileMenu}>
      <Box sx={{ width: 250, padding: '20px' }}>
        <Typography variant="h6" sx={{ marginBottom: '20px' }}>Ideal Talent Connect</Typography>
        <List>
        
          <ListItem button onClick={() => { navigate('/profile'); toggleMobileMenu(); }}>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary="My Profile" />
          </ListItem>

          <ListItem button onClick={() => { navigate('/company-profile'); toggleMobileMenu(); }}>
            <ListItemIcon><BusinessIcon /></ListItemIcon>
            <ListItemText primary="Company Profile" />
          </ListItem>
          <ListItem button onClick={() => { navigate('/change-password'); toggleMobileMenu(); }}>
            <ListItemIcon><LockIcon /></ListItemIcon>
            <ListItemText primary="Change Password" />
          </ListItem>
          <ListItem button onClick={() => { navigate('/change-email'); toggleMobileMenu(); }}>
            <ListItemIcon><EmailIcon /></ListItemIcon>
            <ListItemText primary="Change Email" />
          </ListItem>
          <Divider />
          <ListItem button onClick={handleLogout} sx={{ color: 'red' }}>
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#fff', color: '#000', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>

          {/* Logo */}
          <Typography variant="h6" noWrap component="div" sx={{ cursor: 'pointer' }}>
            <img src="11.svg" alt="Logo" style={{ width: '150px', height: 'auto' }} />
          </Typography>

          {/* Icons Section */}
          {isMobile ? (
            <IconButton onClick={toggleMobileMenu} color="inherit">
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#000' }}>
                Call Us - +91 9765473214
              </Typography>

              <IconButton size="large" aria-label="show new notifications" color="inherit">
                <NotificationsIcon />
              </IconButton>

              {/* Account Section with Dropdown */}
              <Box>
                <IconButton onClick={handleMenuOpen} color="inherit">
                  <Avatar sx={{ width: 40, height: 40 }} />
                  <ArrowDropDownIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  sx={{
                    '& .MuiPaper-root': {
                      borderRadius: '10px',
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                      minWidth: '250px',
                      padding: '10px'
                    }
                  }}
                >
                  <Box sx={{ padding: '10px', textAlign: 'center' }}>
                    <Avatar sx={{ width: 56, height: 56, margin: '0 auto' }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Ideal Talent Connect</Typography>
                    <Typography variant="body2" color="text.secondary">idealtalentconnect789@gmail.com</Typography>
                  </Box>
                  <Divider />
                  <MenuItem onClick={() => navigate('/profile')}>
                    <ListItemIcon><PersonIcon /></ListItemIcon>
                    My Profile
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon><BusinessIcon /></ListItemIcon>
                    Company Profile
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon><LockIcon /></ListItemIcon>
                    Change Password
                  </MenuItem>
                  <MenuItem onClick={handleMenuClose}>
                    <ListItemIcon><EmailIcon /></ListItemIcon>
                    Change Email
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout} sx={{ color: 'red', fontWeight: 'bold' }}>
                    <ListItemIcon><LogoutIcon /></ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {mobileMenu}
    </Box>
  );
}
