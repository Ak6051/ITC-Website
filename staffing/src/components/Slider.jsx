// import React from 'react';
// import { Box } from '@mui/material';

// const HeroSection = () => {
//   return (
//     <Box
//       sx={{
//         width: '100%',
        
//         height: { xs: '500px', sm: '600px', md: '700px' }, // Responsive height
//         backgroundImage: "url('32.jpg')",
//         backgroundSize: 'cover', // Ensure full image visibility
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
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
        width: '100%',
        height: { xs: '500px', sm: '600px', md: '700px' }, // Responsive height
        backgroundImage: "url('32.jpg')",
        backgroundSize: 'cover', // Ensure full image visibility
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

export default HeroSection;
