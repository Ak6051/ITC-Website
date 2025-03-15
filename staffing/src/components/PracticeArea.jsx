
// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { Container, Typography, Box } from "@mui/material";
// import { motion } from "framer-motion";
// import OurServices from "./OurServices";

// const sections = [
//   {
//     id: "manufacturing-technology",
//     title: "Manufacturing & Technology",
//     content:
//       "Advancing technology and automation have transformed manufacturing, increasing productivity – but also complexity. Companies now need executives to possess an advanced understanding of these complexities as well as the capabilities of the new technologies. Skilled leaders are required to navigate the manufacturing environment of increasing technology and globalization as technology experts lead the way into the ever-changing world of automation and productivity.",
//     image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_013.jpg",
//   },
//   {
//     id: "service-distribution",
//     title: "Service / Distribution",
//     content:
//       "In recent times, the service and distribution industries have undergone sudden and unexpected changes. Leaders in this industry must be responsive and nimble, with the ability to quickly assess the environment and make adjustments to benefit their company.",
//     image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_018.jpg",
//   },
//   {
//     id: "accounting-finance",
//     title: "Accounting / Finance",
//     content:
//       "Financial expertise is more crucial than ever in today’s rapidly evolving economy. Companies require leaders who not only have a deep understanding of accounting principles but can also drive financial strategy and innovation. With the right talent, organizations can achieve financial excellence and stay ahead in an ever-changing market.",
//     image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_016.jpg"
//   },
//   {
//     id: "financial-services-banking",
//     title: "Financial Services / Banking",
//     content:
//       "The financial services and banking sector is experiencing rapid digital transformation. Companies need leaders who can navigate regulatory complexities, drive innovation, and ensure financial security. With the right expertise, firms can thrive in a competitive and evolving market.",
//     image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_020.jpg",
//   },
//   { id: "private-equity", title: "Private Equity", content: "Content for Private Equity..." },
//   {
//     id: "life-sciences", title: "Life Sciences",
//     content: "Technological advances have led to breakthroughs in life sciences. Evolving models of healthcare, increasing patient expectations, and global competition add complexity. Leaders require a thorough understanding of consequences and the ability to make fast decisions.",
//     image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_03.jpg",
//   },
//   {
//     id: "healthcare", title: "Healthcare",
//     content: "The healthcare industry is transforming rapidly as new delivery methods evolve due to consumer demand. Value-based healthcare is changing the face of the industry. Technology is creating an explosion of data due to the Internet of Things used in patient care and monitoring. Pair that with the ever-increasing regulation of the industry and the importance of strong executive leadership becomes clear.",
//     image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_05.jpg",

//   },
//   { id: "insurance", title: "Insurance", content: "Content for Insurance..." },
// ];

// const scrollToSection = (id) => {
//   setTimeout(() => {
//     const sectionElement = document.getElementById(id);
//     if (sectionElement) {
//       sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   }, 700); // Zyada delay diya taaki content load hone ka time mile
// };

// export default function PracticeAreas() {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const sectionId = location.hash.replace("#", "");
//       scrollToSection(sectionId);
//     }
//   }, [location.hash]);

//   return (
//     <>
//       {/* Header Section */}
//       <Box
//         sx={{
//           position: "relative",
//           height: "50vh",
//           backgroundImage: "url(https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_024.jpg)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           color: "white",
//           textAlign: "center",
//         }}
//       >
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <Typography
//             variant="h3"
//             fontWeight={700}
//             sx={{ fontFamily: "serif", fontSize: { xs: "2rem", md: "2.8rem" } }}
//           >
//             Practice Areas
//           </Typography>
//         </motion.div>
//       </Box>

//       {/* Intro Section */}
//       <Container>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <Typography
//             variant="h5"
//             sx={{ textAlign: "center", mt: 4, fontWeight: "bold" }}
//           >
//             Dedicated & Focused
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{ textAlign: "center", mt: 2, maxWidth: "700px", mx: "auto" }}
//           >
//             We partner with you by taking the necessary time to understand your business philosophies and your unique needs, challenges, and culture. We can then share your energy and enthusiasm, and become advocates for your values, technology, and objectives.
//           </Typography>
//         </motion.div>
//       </Container>

//       <OurServices />

//       {/* Manufacturing & Technology Section */}
// <Box
//   sx={{
//     position: "relative",
//     backgroundImage: { xs: "none", md: `url(${sections[0].image})` }, 
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     height: { xs: "auto", md: "60vh" }, // Mobile पर auto height
//     display: "flex",
//     flexDirection: { xs: "column", md: "row" }, // Mobile पर stack होगा
//     alignItems: "center",
//     justifyContent: { xs: "center", md: "flex-start" },
//     px: { xs: 2, md: 10 },
//     py: { xs: 5, md: 0 }, // Mobile पर padding
//   }}
// >
//   {/* Image सिर्फ Mobile/Tablet पर दिखेगी */}
//   {window.innerWidth < 960 && (
//     <Box
//       component="img"
//       src={sections[0].image}
//       alt="Manufacturing & Technology"
//       sx={{ width: "100%", height: "auto", mb: 2 }}
//     />
//   )}

//   {/* Content Box */}
//   <motion.div
//     initial={{ opacity: 0, x: -50 }}
//     animate={{ opacity: 1, x: 0 }}
//     transition={{ duration: 1 }}
//     style={{
//       backgroundColor: "rgba(255, 255, 255, 0.9)",
//       padding: "20px",
//       borderRadius: "8px",
//       maxWidth: { xs: "90%", md: "50%" }, // Mobile पर max-width 90%
//       textAlign: { xs: "center", md: "left" }, // Mobile पर text center
//     }}
//   >
//     <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
//       {sections[0].title}
//     </Typography>
//     <Typography variant="body1">{sections[0].content}</Typography>
//   </motion.div>
// </Box>


//       {/* Service / Distribution Section */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           alignItems: "center",
//           justifyContent: "space-between",
//           my: 6,
//           px: { xs: 2, md: 10 },
//         }}
//       >
//         {/* Image Section */}
//         <Box
//           component="img"
//           src={sections[1].image}
//           alt="Service Distribution"
//           sx={{
//             width: { xs: "100%", md: "50%" },
//             height: "auto",
//             borderRadius: "8px",
//           }}
//         />

//         {/* Text Section */}
//         <Box sx={{ width: { xs: "100%", md: "45%" }, textAlign: "left" }}>
//           <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, fontFamily: "serif" }}>
//             {sections[1].title}
//           </Typography>
//           <Typography variant="body1">{sections[1].content}</Typography>
//         </Box>
//       </Box>

//       {/* Accounting / Finance Section (Image on Right) */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row-reverse" },
//           alignItems: "center",
//           justifyContent: "space-between",
//           my: 6,
//           px: { xs: 2, md: 10 },
//         }}
//       >
//         <Box component="img" src={sections[2].image} alt="Accounting Finance" sx={{ width: { xs: "100%", md: "50%" }, height: "auto", borderRadius: "8px" }} />
//         <Box sx={{ width: { xs: "100%", md: "45%" }, textAlign: "left" }}>
//           <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, fontFamily: "serif" }}>
//             {sections[2].title}
//           </Typography>
//           <Typography variant="body1">{sections[2].content}</Typography>
//         </Box>
//       </Box>

//       {/* Financial Services / Banking (Image Left, Content Right with Background Color) */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           alignItems: "stretch", // Ensures both elements have equal height
//           justifyContent: "space-between",
//           my: 6,
//           px: { xs: 2, md: 10 },
//         }}
//       >
//         {/* Image on Left */}
//         <Box
//           component="img"
//           src={sections[3].image}
//           alt="Financial Services / Banking"
//           sx={{
//             width: { xs: "100%", md: "50%" },
//             height: { xs: "auto", md: "100%" }, // Ensures the image and content have the same height
//             objectFit: "cover",
//             borderRadius: "8px 0 0 8px",
//           }}
//         />

//         {/* Content on Right with Background Color */}
//         <Box
//           sx={{
//             width: { xs: "100%", md: "50%" }, // Matches image width
//             backgroundColor: "#27445D",
//             color: "white",
//             padding: { xs: 3, md: 5 },
//             borderRadius: "0 8px 8px 0",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//           }}
//         >
//           <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, fontFamily: "serif" }}>
//             {sections[3].title}
//           </Typography>
//           <Typography variant="body1">{sections[3].content}</Typography>
//         </Box>
//       </Box>

//       {/* Private Equity Section */}
//       <Box
//         sx={{
//           position: "relative",
//           backgroundImage: `url(https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_08.jpg)`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "60vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//           color: "white",
//         }}
//       >
//         {/* Dark Overlay for Better Text Visibility */}
//         <Box
//           sx={{
//             position: "absolute",
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent overlay
//           }}
//         />

//         {/* Content Box */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           style={{
//             position: "relative",
//             maxWidth: "60%",
//             backgroundColor: "rgba(10, 25, 47, 0.8)", // Dark Blue Transparent Box
//             padding: "20px",
//             borderRadius: "8px",
//           }}
//         >
//           <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, fontFamily: "serif" }}>
//             Private Equity
//           </Typography>
//           <Typography variant="body1">
//             Growth in this industry has come through a gradual increase in scope of investing
//             from traditional buyouts to distressed funding, venture capital funding and more.
//             The technology boom has brought an increase in private equity firms as companies
//             move to gain funding for expansion. Rapid expansion and a volatile environment create
//             a need for the best possible talent to both manage investments and manage the companies
//             in which they have invested.
//           </Typography>
//         </motion.div>
//       </Box>

//       {/* Life Sciences Section (Image on Right) */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row-reverse" },
//           alignItems: "center",
//           justifyContent: "space-between",
//           my: 6,
//           px: { xs: 2, md: 10 },
//         }}
//       >
//         <Box component="img" src={sections[5].image} alt="Life Sciences" sx={{ width: { xs: "100%", md: "50%" }, height: "auto", borderRadius: "8px" }} />
//         <Box sx={{ width: { xs: "100%", md: "45%" }, textAlign: "left" }}>
//           <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, fontFamily: "serif" }}>
//             {sections[5].title}
//           </Typography>
//           <Typography variant="body1">{sections[5].content}</Typography>
//         </Box>
//       </Box>

//       {/* Healthcare Section */}
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           alignItems: "center",
//           justifyContent: "space-between",
//           my: 6,
//           px: { xs: 2, md: 10 },
//         }}
//       >
//         {/* Image Section */}
//         <Box
//           component="img"
//           src={sections[6].image}
//           alt="Healthcare"
//           sx={{
//             width: { xs: "100%", md: "50%" },
//             height: "auto",
//             borderRadius: "8px",
//           }}
//         />

//         {/* Text Section */}
//         <Box sx={{ width: { xs: "100%", md: "45%" }, textAlign: "left" }}>
//           <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, fontFamily: "serif" }}>
//             {sections[6].title}
//           </Typography>
//           <Typography variant="body1">{sections[6].content}</Typography>
//         </Box>
//       </Box>

//       {/* Other Practice Areas */}
//       {/* <Container>


//         {sections.slice(3).map((section) => (
//           <Box key={section.id} id={section.id} sx={{ my: 6, p: 3, border: "1px solid #ddd", borderRadius: "8px" }}>
//             <Typography variant="h5">{section.title}</Typography>
//             <Typography variant="body1">{section.content}</Typography>
//           </Box>
//         ))}
//       </Container> */}

//     </>
//   );
// }

// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { Box, Typography, Container } from "@mui/material";
// import { motion } from "framer-motion";

// const sections = [
//   {
//     id: "manufacturing-technology",
//     title: "Manufacturing & Technology",
//     content:
//       "Advancing technology and automation have transformed manufacturing, increasing productivity – but also complexity. Companies now need executives to possess an advanced understanding of these complexities as well as the capabilities of the new technologies. Skilled leaders are required to navigate the manufacturing environment of increasing technology and globalization as technology experts lead the way into the ever-changing world of automation and productivity.",
//     image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_013.jpg",

//   },
//   {
//     id: "service-distribution", title: "Service / Distribution",
//     content: "In recent times, the service and distribution industries have undergone sudden and unexpected changes. Leaders in this industry must be responsive and nimble, with the ability to quickly assess the environment and make adjustments to benefit their company.",
//     image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_018.jpg",
//   },
//   {
//     id: "accounting-finance",
//     title: "Accounting / Finance",
//     content:
//       "Financial expertise is more crucial than ever in today’s rapidly evolving economy. Companies require leaders who not only have a deep understanding of accounting principles but can also drive financial strategy and innovation. With the right talent, organizations can achieve financial excellence and stay ahead in an ever-changing market.",
//     image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_016.jpg"

//   },
//   {
//     id: "financial-services-banking",
//     title: "Financial Services / Banking",
//     content:
//       "The financial services and banking sector is experiencing rapid digital transformation. Companies need leaders who can navigate regulatory complexities, drive innovation, and ensure financial security. With the right expertise, firms can thrive in a competitive and evolving market.",
//     image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_020.jpg",

//   },
//   {
//     id: "private-equity", title: "Private Equity",
//     content: " Growth in this industry has come through a gradual increase in scope of investin from traditional buyouts to distressed funding, venture capital funding and more  The technology boom has brought an increase in private equity firms as companies move to gain funding for expansion. Rapid expansion and a volatile environment create a need for the best possible talent to both manage investments and manage the companies in which they have invested.",
//     image: 'https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_08.jpg',
//   },
//   {
//     id: "life-sciences",
//     title: "Life Sciences",
//     content: "Technological advances have led to breakthroughs in life sciences. Evolving models of healthcare, increasing patient expectations, and global competition add complexity. Leaders require a thorough understanding of consequences and the ability to make fast decisions.",
//     image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_03.jpg",

//   },
//   {
//     id: "healthcare",
//     title: "Healthcare",
//     content:
//       "The healthcare industry is transforming rapidly as new delivery methods evolve due to consumer demand. Value-based healthcare is changing the face of the industry...",
//     image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_05.jpg",
//   },
//   {
//     id: "insurance", title: "Insurance",

//     content: "New players in the insurance industry have brought increased competition, and leaders must be quick to identify and grasp opportunities to decrease their company’s risks. Leaders in this industry are looking to data mining and predictive analytics and modeling to increase their company’s competitive edge",
//     image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_010.jpg",
//   },
// ];

// export default function PracticeAreas() {
//   const location = useLocation();

//   useEffect(() => {
//     if (location.hash) {
//       const sectionId = location.hash.replace("#", "");
//       const sectionElement = document.getElementById(sectionId);

//       if (sectionElement) {
//         const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 80; // Navbar height dynamically le raha hai
//         const elementPosition = sectionElement.getBoundingClientRect().top + window.scrollY;
//         const offsetPosition = elementPosition - navbarHeight - 20; // Extra 20px margin de diya

//         setTimeout(() => {
//           window.scrollTo({
//             top: offsetPosition,
//             behavior: "smooth",
//           });
//         }, 100);
//       }
//     }
//   }, [location]);

//   return (
//     <>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           height: "50vh",
//           backgroundImage: "url(https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_024.jpg)",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           color: "white",
//           textAlign: "center",
//         }}
//       >
//         <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
//           <Typography variant="h3" fontWeight={700} sx={{ fontFamily: "serif", fontSize: { xs: "2rem", md: "3rem" } }}>
//             Practice Areas
//           </Typography>
//         </motion.div>
//       </Box>

//       {/* Section List */}
//       <Container sx={{ my: 4 }}>
//         {sections.map((section) => (
//           <Box
//             key={section.id}
//             id={section.id}
//             sx={{
//               display: "flex",
//               flexDirection: { xs: "column", md: "row" },
//               alignItems: "center",
//               gap: 4,
//               my: 6,
//               p: 3,
//               borderBottom: "1px solid #ddd",
//               scrollMarginTop: "100px",
//             }}
//           >
//             {/* Image Section (if available) */}
//             {section.image && (
//               <Box
//                 component="img"
//                 src={section.image}
//                 alt={section.title}
//                 sx={{
//                   width: { xs: "100%", md: "40%" },
//                   height: "auto",
//                   borderRadius: "8px",
//                   objectFit: "cover",
//                 }}
//               />
//             )}

//             {/* Text Content */}
//             <Box sx={{ flex: 1 }}>
//               <Typography variant="h4" fontWeight={600} sx={{ mb: 2 }}>
//                 {section.title}
//               </Typography>
//               <Typography variant="body1">{section.content}</Typography>
//             </Box>
//           </Box>
//         ))}
//       </Container>
//     </>
//   );
// }
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