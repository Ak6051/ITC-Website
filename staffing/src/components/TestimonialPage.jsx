
import React from "react";
import { Box, Typography, Avatar, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  { name: "Aether Industries", image: "aether.jpg" },
  { name: "Apple Creations", image: "applecr.JPG" },
  { name: "Balaji Fashion", image: "balaji.JPG" },
  { name: "OrangeTrend7", image: "orange.JPG" },
  { name: "Protrack GPS", image: "protrack.jpg" },
  { name: "Plead Masters", image: "pleadmasters.jpg" },
  {name:"Omdev Fashion" , image :"omdev fashion.jpg"}
];

const TestimonialPage = () => {
  return (
    <Box sx={{ padding: "50px 0" }}>
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
          slidesPerView={1}
          breakpoints={{
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  alt={testimonial.name}
                  src={testimonial.image}
                  sx={{
                    width: { xs: 140, sm: 170, md: 200 },
                    height: { xs: 140, sm: 170, md: 200 },
                    mb: 2,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{ color: "#333", fontSize: { xs: "1rem", md: "1.25rem" } }}
                >
                  {testimonial.name}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default TestimonialPage;
