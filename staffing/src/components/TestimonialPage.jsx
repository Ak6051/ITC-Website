


import React, { useEffect, useRef } from "react";
import { Box, Typography, Container } from "@mui/material";
import "swiper/css";

const testimonials = [
  { name: "Aether Industries", image: "aether.jpg" },
  { name: "Apple Creations", image: "applecr.JPG" },
  { name: "Balaji Fashion", image: "balaji.JPG" },
  { name: "OrangeTrend7", image: "orange.JPG" },
  { name: "Protrack GPS", image: "protrack.jpg" },
  { name: "Plead Masters", image: "pleadmasters.jpg" },
  { name: "Omdev Fashion", image: "omdev fashion.jpg" }
];

const TestimonialPage = () => {
  const scrollRef = useRef(null);
  const scrollSpeed = 1; // Adjust speed as needed

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    
    const scrollAnimation = () => {
      if (!scrollContainer) return;
      
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0; // Reset to create infinite loop effect
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(scrollAnimation);
    };

    requestAnimationFrame(scrollAnimation);

    return () => cancelAnimationFrame(scrollAnimation);
  }, []);

  return (
    <Box sx={{ padding: "80px 0", backgroundColor: "#f5f5f5", overflow: "hidden" }}>
      <Container>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", mb: 6, color: "#333", fontSize: { xs: "1.8rem", md: "2.5rem" } }}
        >
          What Our Clients Say
        </Typography>

        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 4,
            overflow: "hidden",
            whiteSpace: "nowrap",
            width: "100%",
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Box
              key={index}
              sx={{
                textAlign: "center",
                minWidth: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <Box
                component="img"
                src={testimonial.image}
                alt={testimonial.name}
                sx={{
                  width: { xs: 200, sm: 250, md: 300 },
                  height: { xs: 150, sm: 180, md: 220 },
                  objectFit: "contain",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                  mb: 2,
                }}
              />
              <Typography
                variant="h6"
                sx={{ color: "#333", fontSize: { xs: "1rem", md: "1.25rem" } }}
              >
                {testimonial.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialPage;
