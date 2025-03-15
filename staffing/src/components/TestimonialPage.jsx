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
    feedback: "This platform helped me find the best job opportunities. Highly recommended!",
    image: "aether.jpg"
  },
  {
    name: "Apple Creations",
    feedback: "The recruitment process was seamless and professional. Thank you!",
    image: "applecr.JPG"
  },
  {
    name: "Balaji Fashion",
    feedback: "I was able to find my dream job in no time. Exceptional service!",
    image: "balaji.JPG"
  },
  {
    name: "OrangeTrend7",
    feedback: "Fantastic customer support and great job listings!",
    image: "orange.JPG"
  },
  {
    name: "Protrack GPS",
    feedback: "I landed my ideal job thanks to this platform. Highly satisfied!",
    image: "protrack.jpg"
  }
];

const logos = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuYcCgZZyIR2a0AuBs35m1l4_NdHuY15c9rw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtuj1WXFokVT3660DfiEdWYwZltETwrc8CQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyPLJdNO0OiULXpKZnSJDP2h_7xevl-EaKag&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMCLluGTwuasPzKJjxiYtlBl5zixLcKzunmA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8iheWYpI2rKlAZROP_AX94QtINRRwMKQA1w&s"
];

const TestimonialPage = () => {
  return (
    <Box sx={{ backgroundColor: "#f5f5f5", padding: "50px 0" }}>
      <Container>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 4, color: "#333" }}>
          What Our Clients Say
        </Typography>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            900: { slidesPerView: 2 },
            1200: { slidesPerView: 3 }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  maxWidth: 450,
                  margin: "0 auto",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)"
                  }
                }}
              >
                <CardContent sx={{ textAlign: "center" }}>
                  <Avatar
                    alt={testimonial.name}
                    src={testimonial.image}
                    sx={{ width: 150, height: 150, margin: "0 auto 10px" }}
                  />
                  <Typography variant="h6" sx={{ color: "#333" }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#777" }}>
                    {testimonial.feedback}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Logo Slider */}
        <Box sx={{ marginTop: 6 }}>
          <Typography variant="h5" sx={{ textAlign: "center", mb: 3, color: "#333" }}>
            Our Trusted Partners
          </Typography>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              640: { slidesPerView: 3 },
              900: { slidesPerView: 4 },
              1200: { slidesPerView: 5 }
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <img src={logo} alt={`Logo ${index + 1}`} style={{ maxWidth: "100px" }} />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialPage;
