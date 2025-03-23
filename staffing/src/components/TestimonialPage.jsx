// import React from "react";
// import { Box, Typography, Card, CardContent, Avatar, Grid, Container } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const testimonials = [
//   {
//     name: "John Doe",
//     feedback:
//       "This platform helped me find the best job opportunities. Highly recommended!",
//     image: "https://randomuser.me/api/portraits/men/32.jpg"
//   },
//   {
//     name: "Jane Smith",
//     feedback:
//       "The recruitment process was seamless and professional. Thank you!",
//     image: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     name: "Michael Johnson",
//     feedback:
//       "I was able to find my dream job in no time. Exceptional service!",
//     image: "https://randomuser.me/api/portraits/men/41.jpg"
//   }
// ];

// const TestimonialPage = () => {
//   return (
//     <Box sx={{ backgroundColor: "#f5f5f5", padding: "50px 0" }}>
//       <Container>
//         <Typography variant="h4" sx={{ textAlign: "center", mb: 4, color: "#333" }}>
//           What Our Clients Say
//         </Typography>
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000 }}
//           spaceBetween={30}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             900: { slidesPerView: 2 },
//             1200: { slidesPerView: 3 }
//           }}
//         >
//           {testimonials.map((testimonial, index) => (
//             <SwiperSlide key={index}>
//               <Card
//                 sx={{
//                   maxWidth: 345,
//                   margin: "0 auto",
//                   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//                   transition: "transform 0.3s",
//                   "&:hover": {
//                     transform: "scale(1.05)"
//                   }
//                 }}
//               >
//                 <CardContent sx={{ textAlign: "center" }}>
//                   <Avatar
//                     alt={testimonial.name}
//                     src={testimonial.image}
//                     sx={{
//                       width: 80,
//                       height: 80,
//                       margin: "0 auto 10px"
//                     }}
//                   />
//                   <Typography variant="h6" sx={{ color: "#333" }}>
//                     {testimonial.name}
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: "#777" }}>
//                     {testimonial.feedback}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </Container>
//     </Box>
//   );
// };

// export default TestimonialPage;
// import React from "react";
// import { Box, Typography, Card, CardContent, Avatar, Container } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";


// const testimonials = [
//   {
//     name: "Aether Industries",
//     feedback: "This platform helped me find the best job opportunities. ",
//     image: "aether.jpg"
//   },
//   {
//     name: "Apple Creations",
//     feedback: "The recruitment process was seamless and professional. ",
//     image: "applecr.JPG"
//   },
//   {
//     name: "Balaji Fashion",
//     feedback: "I was able to find my dream job in no time. Exceptional service!",
//     image: "balaji.JPG"
//   },
//   {
//     name: "OrangeTrend7",
//     feedback: "Fantastic customer support and great job listings!",
//     image: "orange.JPG"
//   },
//   {
//     name: "Protrack GPS ",
//     feedback: "I landed my ideal job thanks to this platform. Highly satisfied!",
//     image: "protrack.jpg"
//   },
//   {
//     name: "Plead Maste ",
//     feedback: "I landed my ideal job thanks to this platform. Highly satisfied!",
//     image: "pleadmasters.jpg"
//   }
// ];


// const TestimonialPage = () => {
//   return (
//     <Box sx={{ backgroundColor: "#f5f5f5", padding: "50px 0" }}>
//       <Container>
//         <Typography variant="h4" sx={{ textAlign: "center", mb: 4, color: "#333" }}>
//           What Our Clients Say
//         </Typography>
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 3000 }}
//           spaceBetween={30}
//           slidesPerView={3}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             900: { slidesPerView: 2 },
//             1200: { slidesPerView: 3 }
//           }}
//         >
//           {testimonials.map((testimonial, index) => (
//             <SwiperSlide key={index}>
//               <Card
//                 sx={{
//                   maxWidth: 450,
//                   margin: "0 auto",
//                   boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
//                   transition: "transform 0.1s ease-in-out",
//                   "&:hover": {
//                     transform: "scale(1.05)"
//                   }
//                 }}
//               >
//                 <CardContent sx={{ textAlign: "center" }}>
//                   <Avatar
//                     alt={testimonial.name}
//                     src={testimonial.image}
//                     sx={{ width: 180, height: 170, margin: "0 auto 10px" }}
//                   />
//                   <Typography variant="h6" sx={{ color: "#333" }}>
//                     {testimonial.name}
//                   </Typography>
//                   <Typography variant="body2" sx={{ color: "#777" }}>
//                     {testimonial.feedback}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </SwiperSlide>
//           ))}
//         </Swiper>
        
//         {/* Logo Slider */}
       
//       </Container>
//     </Box>
//   );
// };

// export default TestimonialPage;
import React from "react";
import { Box, Typography, Card, CardContent, Avatar, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Aether Industries",
    feedback: "This platform helped me find the best job opportunities.",
    image: "aether.jpg",
  },
  {
    name: "Apple Creations",
    feedback: "The recruitment process was seamless and professional.",
    image: "applecr.JPG",
  },
  {
    name: "Balaji Fashion",
    feedback: "I was able to find my dream job in no time. Exceptional service!",
    image: "balaji.JPG",
  },
  {
    name: "OrangeTrend7",
    feedback: "Fantastic customer support and great job listings!",
    image: "orange.JPG",
  },
  {
    name: "Protrack GPS ",
    feedback: "I landed my ideal job thanks to this platform. Highly satisfied!",
    image: "protrack.jpg",
  },
  {
    name: "Plead Maste ",
    feedback: "I landed my ideal job thanks to this platform. Highly satisfied!",
    image: "pleadmasters.jpg",
  },
];

const TestimonialPage = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", padding: "50px 0" }}>
      <Container>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 4, color: "#333", fontSize: { xs: "1.5rem", md: "2rem" } }}
        >
          What Our Clients Say
        </Typography>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          spaceBetween={20}
          slidesPerView={1} // Default to 1 for better responsiveness
          breakpoints={{
            600: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  maxWidth: { xs: "90%", sm: 400 },
                  margin: "0 auto",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Avatar
                    alt={testimonial.name}
                    src={testimonial.image}
                    sx={{ width: { xs: 120, sm: 150, md: 180 }, height: { xs: 120, sm: 150, md: 170 }, margin: "0 auto 10px" }}
                  />
                  <Typography variant="h6" sx={{ color: "#333", fontSize: { xs: "1rem", md: "1.25rem" } }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#777", fontSize: { xs: "0.875rem", md: "1rem" } }}>
                    {testimonial.feedback}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default TestimonialPage;
