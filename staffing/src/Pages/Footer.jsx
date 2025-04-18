// import React from "react";
// import { Box, Typography, Grid, Divider, IconButton, Link } from "@mui/material";
// import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

// const Footer = () => {
//   return (
//     <Box
//       sx={{
//         backgroundColor: "#fff",
//         color: "#000",
//         padding: { xs: "30px 15px", sm: "40px 20px" },
//         borderTop: "1px solid #ddd",
//       }}
//     >
//       <Grid container spacing={4} justifyContent="center" alignItems="center">
        
//         {/* Left Section - Logo & Text */}
//         <Grid item xs={12} sm={6} md={4} sx={{ textAlign: { xs: "center", md: "left" } }}>
//           <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, mb: 2 }}>
//             <img src="footer.png" alt="Company Logo" style={{ height: "60px" }} />
//           </Box>
//           <Typography variant="h6" sx={{ fontWeight: "bold" }}>
//             Ideal Talent Connect Pvt. Ltd.
//           </Typography>
//           <Typography variant="body2" sx={{ mt: 1 }}>
//             123, Mahek Icon, Sumul Dairy Road, Near Railway Station, Surat - 395004
//           </Typography>
//           <Typography variant="body2">
//             Call:{" "}
//             <Link href="tel:+919904501115" color="inherit" underline="none">
//               +91 99045 01115
//             </Link>
//           </Typography>
//           <Typography variant="body2">
//             Email:{" "}
//             <Link href="mailto:admin@italentconnect.com" color="inherit" underline="none">
//               admin@italentconnect.com
//             </Link>
//           </Typography>
//         </Grid>

//         {/* Middle Section - Navigation Links & Social Icons */}
//         <Grid item xs={12} sm={6} md={4} sx={{ textAlign: "center" }}>
//           <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
//             Quick Links
//           </Typography>
//           <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
//             <Link href="/about" color="inherit" underline="hover">
//               About Us
//             </Link>
//             <Link href="/service" color="inherit" underline="hover">
//               Services
//             </Link>
//             <Link href="/contactUs" color="inherit" underline="hover">
//               Contact Us
//             </Link>
//           </Box>

//           <Typography variant="h6" sx={{ fontWeight: "bold", mt: 2 }}>
//             Follow Us
//           </Typography>
//           <Box>
//             <IconButton
//               href="https://www.facebook.com/profile.php?id=61574087487969"
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{ color: "#3b5998" }}
//             >
//               <Facebook />
//             </IconButton>
//             <IconButton
//               href="https://x.com/?lang=en-in"
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{ color: "#1DA1F2" }}
//             >
//               <Twitter />
//             </IconButton>
//             <IconButton
//               href="https://www.instagram.com/ideal_talent_connect_pvt_ltd?igsh=MWR6Mjh2cW8zeDBueQ%3D%3D&utm_source=qr"
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{ color: "#E1306C" }}
//             >
//               <Instagram />
//             </IconButton>
//             <IconButton
//               href="https://in.linkedin.com/"
//               target="_blank"
//               rel="noopener noreferrer"
//               sx={{ color: "#0077b5" }}
//             >
//               <LinkedIn />
//             </IconButton>
//           </Box>
//         </Grid>

//         {/* Right Section - Google Map */}
//         <Grid item xs={12} md={4} sx={{ textAlign: { xs: "center", md: "right" } }}>
//           <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}>
//             Our Location
//           </Typography>
//           <Box sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
//             <iframe
//               title="Google Map"
//               width="100%"
//               height="190"
//               style={{ maxWidth: "400px", border: "0", borderRadius: "8px" }}
//               loading="lazy"
//               allowFullScreen
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.442688650946!2d72.8374340750368!3d21.214287180481996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fc789919359%3A0xdc8f1d468f830c77!2sMahek%20Icon!5e0!3m2!1sen!2sin!4v1742031715231!5m2!1sen!2sin"
//             ></iframe>
//           </Box>
//         </Grid>
//       </Grid>

//       <Divider sx={{ my: 3 }} />

//       {/* Copyright Info */}
//       <Typography variant="body2" sx={{ textAlign: "center", color: "#555" }}>
//         © {new Date().getFullYear()} Ideal Talent Connect Pvt. Ltd. All Rights Reserved.
//       </Typography>
//     </Box>
//   );
// };

// export default Footer;
import React from "react";
import { Box, Typography, Grid, Link, Stack, useTheme, useMediaQuery } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <>
    <Box sx={{ bgcolor: "#1B2A47", color: "white", pt: { xs: 3, sm: 4 }, pb: { xs: 3, sm: 4 } }}>
      <Box sx={{ 
        maxWidth: "1500px", 
        mx: "auto", 
        px: { xs: 2, sm: 3, md: 4, lg: 5 },
        width: '100%'
      }}>
        <Grid container spacing={{ xs: 3, sm: 4 }} alignItems="flex-start">
          {/* Company Info Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ 
              height: '100%',
              mb: { xs: 2, sm: 0 }
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                mb: 3,
                justifyContent: { xs: 'center', sm: 'flex-start' }
              }}>
                <Typography variant="h3" component="div" sx={{ 
                  fontFamily: "'Times New Roman', serif",
                  fontWeight: 'bold',
                  color: '#F4B41A',
                  fontSize: { xs: '2.3rem', sm: '2.5rem', md: '2.8rem' },
                  mr: 1
                }}>
                  ITC
                </Typography>
                <Box>
                  <Typography sx={{ 
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }, 
                    lineHeight: 1.2, 
                    color: 'white', 
                    fontWeight: 500 
                  }}>
                    Ideal
                  </Typography>
                  <Typography sx={{ 
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }, 
                    lineHeight: 1.2, 
                    color: 'white', 
                    fontWeight: 500 
                  }}>
                    Talent
                  </Typography>
                  <Typography sx={{ 
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }, 
                    lineHeight: 1.2, 
                    color: 'white', 
                    fontWeight: 500 
                  }}>
                    Connect
                  </Typography>
                </Box>
              </Box>
              <Typography sx={{ 
                mb: 3, 
                color: '#ffffff', 
                opacity: 0.9, 
                fontSize: { xs: '0.9rem', sm: '1rem' }, 
                lineHeight: 1.6, 
                pr: 2,
                textAlign: { xs: 'center', sm: 'left' }
              }}>
                We Connect Talent with Opportunities..
              </Typography>
            </Box>
          </Grid>

          {/* Useful Links Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ 
              height: '100%',
              textAlign: { xs: 'center', sm: 'left' }
            }}>
              <Typography sx={{ 
                color: "#F4B41A", 
                mb: 3,
                fontWeight: 'bold',
                fontSize: { xs: '1.3rem', sm: '1.4rem', md: '1.5rem' }
              }}>
                Useful Links
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Stack spacing={{ xs: 1.5, sm: 2 }} alignItems={{ xs: 'center', sm: 'flex-start' }}>
                    <Link href="/" color="inherit" underline="none" sx={{ '&:hover': { color: '#F4B41A' }, fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>Home</Link>
                    <Link href="/about" color="inherit" underline="none" sx={{ '&:hover': { color: '#F4B41A' }, fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>About Us</Link>
                    <Link href="/service" color="inherit" underline="none" sx={{ '&:hover': { color: '#F4B41A' }, fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>Services</Link>
                    <Link href="/open-job" color="inherit" underline="none" sx={{ '&:hover': { color: '#F4B41A' }, fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>Job Opening</Link>
                    <Link href="/practice-areas" color="inherit" underline="none" sx={{ '&:hover': { color: '#F4B41A' }, fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>Practice Areas</Link>
                  </Stack>
                </Grid>
                <Grid item xs={6}>
                  <Stack spacing={{ xs: 1.5, sm: 2 }} alignItems={{ xs: 'center', sm: 'flex-start' }}>
                    <Link href="/contactUs" color="inherit" underline="none" sx={{ '&:hover': { color: '#F4B41A' }, fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>Contact Us</Link>
                    <Link href="/terms" color="inherit" underline="none" sx={{ '&:hover': { color: '#F4B41A' }, fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>Terms and Conditions</Link>
                    <Link href="/privacy" color="inherit" underline="none" sx={{ '&:hover': { color: '#F4B41A' }, fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}>Privacy Policy</Link>
                  </Stack>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Follow Us Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ 
              height: '100%',
              textAlign: { xs: 'center', sm: 'left' }
            }}>
              <Typography sx={{ 
                color: "#F4B41A", 
                mb: 3,
                fontWeight: 'bold',
                fontSize: { xs: '1.3rem', sm: '1.4rem', md: '1.5rem' }
              }}>
                Follow Us
              </Typography>
              <Box sx={{ 
                display: "flex", 
                gap: 2, 
                mb: 4,
                justifyContent: { xs: 'center', sm: 'flex-start' }
              }}>
                <Link href="https://www.facebook.com/profile.php?id=61574087487969" target="_blank" rel="noopener noreferrer" sx={{ 
                  bgcolor: 'white',
                  width: { xs: 35, sm: 38, md: 40 },
                  height: { xs: 35, sm: 38, md: 40 },
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': { bgcolor: '#F4B41A' }
                }}>
                  <FacebookIcon sx={{ color: '#1B2A47', fontSize: { xs: 20, sm: 22, md: 24 } }} />
                </Link>
                <Link href="#" sx={{ 
                  bgcolor: 'white',
                  width: { xs: 35, sm: 38, md: 40 },
                  height: { xs: 35, sm: 38, md: 40 },
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': { bgcolor: '#F4B41A' }
                }}>
                  <InstagramIcon sx={{ color: '#1B2A47', fontSize: { xs: 20, sm: 22, md: 24 } }} />
                </Link>
                <Link href="#" sx={{ 
                  bgcolor: 'white',
                  width: { xs: 35, sm: 38, md: 40 },
                  height: { xs: 35, sm: 38, md: 40 },
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': { bgcolor: '#F4B41A' }
                }}>
                  <WhatsAppIcon sx={{ color: '#1B2A47', fontSize: { xs: 20, sm: 22, md: 24 } }} />
                </Link>
                <Link href="#" sx={{ 
                  bgcolor: 'white',
                  width: { xs: 35, sm: 38, md: 40 },
                  height: { xs: 35, sm: 38, md: 40 },
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': { bgcolor: '#F4B41A' }
                }}>
                  <TwitterIcon sx={{ color: '#1B2A47', fontSize: { xs: 20, sm: 22, md: 24 } }} />
                </Link>
                <Link href="#" sx={{ 
                  bgcolor: 'white',
                  width: { xs: 35, sm: 38, md: 40 },
                  height: { xs: 35, sm: 38, md: 40 },
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&:hover': { bgcolor: '#F4B41A' }
                }}>
                  <LinkedInIcon sx={{ color: '#1B2A47', fontSize: { xs: 20, sm: 22, md: 24 } }} />
                </Link>
              </Box>

              <Typography sx={{ 
                color: "#F4B41A", 
                mb: 3,
                fontWeight: 'bold',
                fontSize: { xs: '1.3rem', sm: '1.4rem', md: '1.5rem' }
              }}>
                Get In Touch
              </Typography>
              <Typography sx={{ 
                mb: 3, 
                color: '#ffffff', 
                opacity: 0.9, 
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, 
                lineHeight: 1.6,
                textAlign: { xs: 'center', sm: 'left' }
              }}>
                Address : 123, Mahek Icon, Sumul Dairy Road, Near Railway Station, Surat - 395004.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Contact Cards Row */}
        <Grid container spacing={{ xs: 2, sm: 3 }} sx={{ mt: { xs: 1, sm: 2 } }}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ 
              bgcolor: "white", 
              borderRadius: 1,
              p: { xs: 1.5, sm: 2 },
              display: 'flex',
              flexDirection: 'column',
              height: '40px',
              justifyContent: 'center'
            }}>
              <Typography sx={{ 
                color: "#000", 
                fontWeight: 600, 
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
              }}>
                +91 99045 01115
              </Typography>
              <Typography sx={{ 
                color: "#1B2A47", 
                fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' }
              }}>
                Give us a call
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ 
              bgcolor: "white", 
              borderRadius: 1,
              p: { xs: 1.5, sm: 2 },
              display: 'flex',
              flexDirection: 'column',
              height: '40px',
              justifyContent: 'center'
            }}>
              <Typography 
              href="mailto:admin@italentconnect.com"
              
              sx={{ 
                color: "#000", 
                fontWeight: 600, 
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
              }}>
                admin@italentconnect.com
              </Typography>
              <Typography sx={{ 
                color: "#1B2A47", 
                fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' }
              }}>
                Give us a Mail
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ 
              bgcolor: "white", 
              borderRadius: 1,
              p: { xs: 1.5, sm: 2 },
              display: 'flex',
              flexDirection: 'column',
              height: '40px',
              justifyContent: 'center'
            }}>
              <Typography sx={{ 
                color: "#000", 
                fontWeight: 600, 
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }
              }}>
                +91 99045 01115
              </Typography>
              <Typography sx={{ 
                color: "#1B2A47", 
                fontSize: { xs: '0.8rem', sm: '0.85rem', md: '0.9rem' }
              }}>
                Give us a Whatsapp
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>

    {/* Copyright Bar */}
    <Box sx={{ 
      bgcolor: "#F4B41A", 
      py: { xs: 1, sm: 1.5 },
      color: '#000'
    }}>
      <Box sx={{ 
        maxWidth: "1500px", 
        mx: "auto", 
        px: { xs: 2, sm: 3, md: 4, lg: 5 },
        width: '100%'
      }}>
        <Typography align="center" sx={{ 
          fontWeight: 500, 
          fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' }
        }}>
          Copyright © 2025, All Right Reserved by Ideal Talent Connect Private Limited.
        </Typography>
      </Box>
    </Box>
    </>
  );
};

export default Footer;