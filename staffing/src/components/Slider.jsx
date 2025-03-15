
// import React from 'react';
// import { Box } from '@mui/material';

// const HeroSection = () => {
//   return (
//     <Box
//       sx={{
//         width: '100%',
//         height: { xs: '400px', sm: '200px', md: '385px' }, // Responsive height
//         backgroundImage: "url('32.jpg')",
//         backgroundSize: 'contain', // Ensure the full image is visible
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         backgroundColor: '#000', // Optional: to avoid white gaps
//       }}
//     />
//   );
// };

// export default HeroSection;

import React from 'react';
import { Box } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        marginTop:"1px",
        width: '100%',
        minHeight: { xs: '200px', sm: '350px', md: '500px', lg: '600px' },
        backgroundImage: "url('33.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );
};

export default HeroSection;
