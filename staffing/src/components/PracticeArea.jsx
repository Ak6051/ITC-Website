

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

const sections = [
  { id: "manufacturing-technology", 
    title: "Manufacturing & Technology", 
    content:
      "Advancing technology and automation have transformed manufacturing, increasing productivity – but also complexity. Companies now need executives to possess an advanced understanding of these complexities as well as the capabilities of the new technologies.",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_013.jpg",
  },
  { id: "service-distribution", title: "Service / Distribution", 
    content: "In recent times, the service and distribution industries have undergone sudden and unexpected changes. Leaders in this industry must be responsive and nimble.",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_018.jpg",
  },
  { id: "accounting-finance", 
    title: "Accounting / Finance", 
    content: "Financial expertise is more crucial than ever in today’s rapidly evolving economy. Companies require leaders who can drive financial strategy and innovation.",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_016.jpg"
  },
    {
    id: "financial-services-banking",
    title: "Financial Services / Banking",
    content:
      "The financial services and banking sector is experiencing rapid digital transformation. Companies need leaders who can navigate regulatory complexities, drive innovation, and ensure financial security. With the right expertise, firms can thrive in a competitive and evolving market.",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_020.jpg",

  },
  {
    id: "private-equity", title: "Private Equity",
    content: " Growth in this industry has come through a gradual increase in scope of investin from traditional buyouts to distressed funding, venture capital funding and more  The technology boom has brought an increase in private equity firms as companies move to gain funding for expansion. Rapid expansion and a volatile environment create a need for the best possible talent to both manage investments and manage the companies in which they have invested.",
    image: 'https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_08.jpg',
  },
  {
    id: "life-sciences",
    title: "Life Sciences",
    content: "Technological advances have led to breakthroughs in life sciences. Evolving models of healthcare, increasing patient expectations, and global competition add complexity. Leaders require a thorough understanding of consequences and the ability to make fast decisions.",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_03.jpg",

  },
  {
    id: "healthcare",
    title: "Healthcare",
    content:
      "The healthcare industry is transforming rapidly as new delivery methods evolve due to consumer demand. Value-based healthcare is changing the face of the industry...",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_05.jpg",
  },
  {
    id: "insurance", title: "Insurance",

    content: "New players in the insurance industry have brought increased competition, and leaders must be quick to identify and grasp opportunities to decrease their company’s risks. Leaders in this industry are looking to data mining and predictive analytics and modeling to increase their company’s competitive edge",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_010.jpg",
  },
];

export default function PracticeAreas() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 80;
        const elementPosition = sectionElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight - 20;
        setTimeout(() => {
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Box
        sx={{
          height: "50vh",
          backgroundImage: "url(https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_024.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="h3" fontWeight={700} sx={{ fontFamily: "serif", fontSize: { xs: "2rem", md: "3rem" } }}>
            Practice Areas
          </Typography>
        </motion.div>
      </Box>

      <Container sx={{ my: 4 }}>
        {sections.map((section, index) => (
          <Box
            key={section.id}
            id={section.id}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: index % 2 === 0 ? "row" : "row-reverse" },
              alignItems: "center",
              gap: 4,
              my: 6,
              p: 3,
              borderBottom: "1px solid #ddd",
              scrollMarginTop: "100px",
            }}
          >
            <Box
              component="img"
              src={section.image}
              alt={section.title}
              sx={{
                width: { xs: "100%", md: "40%" },
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
                transition: "transform 0.3s ease-in-out",
                '&:hover': { transform: "scale(1.05)" }
              }}
            />

            <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
              <Typography variant="h4" fontWeight={600} sx={{ mb: 2 }}>
                {section.title}
              </Typography>
              <Typography variant="body1">{section.content}</Typography>
            </Box>
          </Box>
        ))}
      </Container>
    </>
  );
}