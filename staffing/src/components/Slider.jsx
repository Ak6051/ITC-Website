import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";

const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.png',


];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: false, // Auto scroll continues even on hover
  };

  return (
    <Box
      sx={{
        width: "100%",
        // height:'50%',
        margin: "auto",
        mt: 3,
        overflow: "hidden",
        borderRadius: "25px",
        boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.4)",
      }}
    >
      <Slider {...settings}>
        {images.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={img}
            alt={`slide-${index}`}
            sx={{
              width: "100%",
              height: {
                xs: "200px", // Mobile
                sm: "300px", // Tablet
                md: "400px", // Laptop
                lg: "500px", // Desktop
              },
              objectFit: "cover",
              borderRadius: "25px",
            }}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
