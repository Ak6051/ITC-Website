// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { Container, Typography, Box } from "@mui/material";
// import { motion } from "framer-motion";
// import OurServices from "./OurServices";

// const sections = [
//   {
//     id: "manufacturing",
//     title: "Manufacturing & Technology",
//     content:
//       "Advancing technology and automation have transformed manufacturing, increasing productivity – but also complexity. Companies now need executives to possess an advanced understanding of these complexities as well as the capabilities of the new technologies. Skilled leaders are required to navigate the manufacturing environment of increasing technology and globalization as technology experts lead the way into the ever-changing world of automation and productivity.",
//     image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_013.jpg",
//   },
//   { id: "service", title: "Service / Distribution", content: "Content for Service / Distribution..." },
//   { id: "accounting", title: "Accounting / Finance", content: "Content for Accounting / Finance..." },
//   { id: "banking", title: "Financial Services / Banking", content: "Content for Financial Services / Banking..." },
//   { id: "equity", title: "Private Equity", content: "Content for Private Equity..." },
//   { id: "life-sciences", title: "Life Sciences", content: "Content for Life Sciences..." },
//   { id: "healthcare", title: "Healthcare", content: "Content for Healthcare..." },
//   { id: "insurance", title: "Insurance", content: "Content for Insurance..." },
// ];

// export default function PracticeAreas() {
//   const location = useLocation();

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const sectionId = queryParams.get("section");

//     if (sectionId) {
//       const sectionElement = document.getElementById(sectionId);
//       if (sectionElement) {
//         setTimeout(() => {
//           sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
//         }, 100); // Delay to ensure DOM is loaded
//       }
//     }
//   }, [location]);

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

//       <OurServices/>

//       {/* Manufacturing & Technology Section */}
//       <Box
//         sx={{
//           position: "relative",
//           backgroundImage: `url(${sections[0].image})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "60vh",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "flex-start",
//           px: { xs: 2, md: 10 },
//         }}
//       >
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           style={{
//             backgroundColor: "rgba(255, 255, 255, 0.9)",
//             padding: "20px",
//             borderRadius: "8px",
//             maxWidth: "50%",
//           }}
//         >
//           <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
//             {sections[0].title}
//           </Typography>
//           <Typography variant="body1">{sections[0].content}</Typography>
//         </motion.div>
//       </Box>

//       {/* Other Practice Areas */}
//       <Container>
//         <Typography variant="h4" sx={{ my: 4, textAlign: "center" }}>
//           Practice Areas
//         </Typography>

//         {sections.slice(1).map((section) => (
//           <Box
//             key={section.id}
//             id={section.id}
//             sx={{ my: 6, p: 3, border: "1px solid #ddd", borderRadius: "8px" }}
//           >
//             <Typography variant="h5">{section.title}</Typography>
//             <Typography variant="body1">{section.content}</Typography>
//           </Box>
//         ))}
//       </Container>
//     </>
//   );
// }
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import OurServices from "./OurServices";

const sections = [
  {
    id: "manufacturing",
    title: "Manufacturing & Technology",
    content:
      "Advancing technology and automation have transformed manufacturing, increasing productivity – but also complexity. Companies now need executives to possess an advanced understanding of these complexities as well as the capabilities of the new technologies. Skilled leaders are required to navigate the manufacturing environment of increasing technology and globalization as technology experts lead the way into the ever-changing world of automation and productivity.",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_013.jpg",
  },
  {
    id: "service",
    title: "Service / Distribution",
    content:
      "In recent times, the service and distribution industries have undergone sudden and unexpected changes. Leaders in this industry must be responsive and nimble, with the ability to quickly assess the environment and make adjustments to benefit their company.",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_018.jpg",
  },
  {
    id: "accounting",
    title: "Accounting / Finance",
    content:
      "Financial expertise is more crucial than ever in today’s rapidly evolving economy. Companies require leaders who not only have a deep understanding of accounting principles but can also drive financial strategy and innovation. With the right talent, organizations can achieve financial excellence and stay ahead in an ever-changing market.",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_016.jpg"
  },
  {
    id: "banking",
    title: "Financial Services / Banking",
    content:
      "The financial services and banking sector is experiencing rapid digital transformation. Companies need leaders who can navigate regulatory complexities, drive innovation, and ensure financial security. With the right expertise, firms can thrive in a competitive and evolving market.",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_020.jpg",
  },
  { id: "equity", title: "Private Equity", content: "Content for Private Equity..." },
  {
    id: "life-sciences", title: "Life Sciences",
    content: "Technological advances have led to breakthroughs in life sciences. Evolving models of healthcare, increasing patient expectations, and global competition add complexity. Leaders require a thorough understanding of consequences and the ability to make fast decisions.",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_03.jpg",
  },
  {
    id: "healthcare", title: "Healthcare",
    content: "The healthcare industry is transforming rapidly as new delivery methods evolve due to consumer demand. Value-based healthcare is changing the face of the industry. Technology is creating an explosion of data due to the Internet of Things used in patient care and monitoring. Pair that with the ever-increasing regulation of the industry and the importance of strong executive leadership becomes clear.",
    image: "https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_05.jpg",

  },
  { id: "insurance", title: "Insurance", content: "Content for Insurance..." },
];

export default function PracticeAreas() {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const sectionId = queryParams.get("section");

    if (sectionId) {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        setTimeout(() => {
          sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // Delay to ensure DOM is loaded
      }
    }
  }, [location]);

  return (
    <>
      {/* Header Section */}
      <Box
        sx={{
          position: "relative",
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
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{ fontFamily: "serif", fontSize: { xs: "2rem", md: "2.8rem" } }}
          >
            Practice Areas
          </Typography>
        </motion.div>
      </Box>

      {/* Intro Section */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h5"
            sx={{ textAlign: "center", mt: 4, fontWeight: "bold" }}
          >
            Dedicated & Focused
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", mt: 2, maxWidth: "700px", mx: "auto" }}
          >
            We partner with you by taking the necessary time to understand your business philosophies and your unique needs, challenges, and culture. We can then share your energy and enthusiasm, and become advocates for your values, technology, and objectives.
          </Typography>
        </motion.div>
      </Container>

      <OurServices />

      {/* Manufacturing & Technology Section */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${sections[0].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          px: { xs: 2, md: 10 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "20px",
            borderRadius: "8px",
            maxWidth: "50%",
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
            {sections[0].title}
          </Typography>
          <Typography variant="body1">{sections[0].content}</Typography>
        </motion.div>
      </Box>

      {/* Service / Distribution Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          my: 6,
          px: { xs: 2, md: 10 },
        }}
      >
        {/* Image Section */}
        <Box
          component="img"
          src={sections[1].image}
          alt="Service Distribution"
          sx={{
            width: { xs: "100%", md: "50%" },
            height: "auto",
            borderRadius: "8px",
          }}
        />

        {/* Text Section */}
        <Box sx={{ width: { xs: "100%", md: "45%" }, textAlign: "left" }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, fontFamily: "serif" }}>
            {sections[1].title}
          </Typography>
          <Typography variant="body1">{sections[1].content}</Typography>
        </Box>
      </Box>

      {/* Accounting / Finance Section (Image on Right) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          alignItems: "center",
          justifyContent: "space-between",
          my: 6,
          px: { xs: 2, md: 10 },
        }}
      >
        <Box component="img" src={sections[2].image} alt="Accounting Finance" sx={{ width: { xs: "100%", md: "50%" }, height: "auto", borderRadius: "8px" }} />
        <Box sx={{ width: { xs: "100%", md: "45%" }, textAlign: "left" }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, fontFamily: "serif" }}>
            {sections[2].title}
          </Typography>
          <Typography variant="body1">{sections[2].content}</Typography>
        </Box>
      </Box>

      {/* Financial Services / Banking (Image Left, Content Right with Background Color) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch", // Ensures both elements have equal height
          justifyContent: "space-between",
          my: 6,
          px: { xs: 2, md: 10 },
        }}
      >
        {/* Image on Left */}
        <Box
          component="img"
          src={sections[3].image}
          alt="Financial Services / Banking"
          sx={{
            width: { xs: "100%", md: "50%" },
            height: { xs: "auto", md: "100%" }, // Ensures the image and content have the same height
            objectFit: "cover",
            borderRadius: "8px 0 0 8px",
          }}
        />

        {/* Content on Right with Background Color */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" }, // Matches image width
            backgroundColor: "#27445D",
            color: "white",
            padding: { xs: 3, md: 5 },
            borderRadius: "0 8px 8px 0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, fontFamily: "serif" }}>
            {sections[3].title}
          </Typography>
          <Typography variant="body1">{sections[3].content}</Typography>
        </Box>
      </Box>

      {/* Private Equity Section */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(https://managementsearchcorp.com/wp-content/uploads/2022/01/MSC_08.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        {/* Dark Overlay for Better Text Visibility */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Semi-transparent overlay
          }}
        />

        {/* Content Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            position: "relative",
            maxWidth: "60%",
            backgroundColor: "rgba(10, 25, 47, 0.8)", // Dark Blue Transparent Box
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, fontFamily: "serif" }}>
            Private Equity
          </Typography>
          <Typography variant="body1">
            Growth in this industry has come through a gradual increase in scope of investing
            from traditional buyouts to distressed funding, venture capital funding and more.
            The technology boom has brought an increase in private equity firms as companies
            move to gain funding for expansion. Rapid expansion and a volatile environment create
            a need for the best possible talent to both manage investments and manage the companies
            in which they have invested.
          </Typography>
        </motion.div>
      </Box>

      {/* Life Sciences Section (Image on Right) */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row-reverse" },
          alignItems: "center",
          justifyContent: "space-between",
          my: 6,
          px: { xs: 2, md: 10 },
        }}
      >
        <Box component="img" src={sections[5].image} alt="Life Sciences" sx={{ width: { xs: "100%", md: "50%" }, height: "auto", borderRadius: "8px" }} />
        <Box sx={{ width: { xs: "100%", md: "45%" }, textAlign: "left" }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, fontFamily: "serif" }}>
            {sections[5].title}
          </Typography>
          <Typography variant="body1">{sections[5].content}</Typography>
        </Box>
      </Box>

      {/* Healthcare Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          my: 6,
          px: { xs: 2, md: 10 },
        }}
      >
        {/* Image Section */}
        <Box
          component="img"
          src={sections[6].image}
          alt="Healthcare"
          sx={{
            width: { xs: "100%", md: "50%" },
            height: "auto",
            borderRadius: "8px",
          }}
        />

        {/* Text Section */}
        <Box sx={{ width: { xs: "100%", md: "45%" }, textAlign: "left" }}>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 2, fontFamily: "serif" }}>
            {sections[6].title}
          </Typography>
          <Typography variant="body1">{sections[6].content}</Typography>
        </Box>
      </Box>

      {/* Other Practice Areas */}
      {/* <Container>
        

        {sections.slice(3).map((section) => (
          <Box key={section.id} id={section.id} sx={{ my: 6, p: 3, border: "1px solid #ddd", borderRadius: "8px" }}>
            <Typography variant="h5">{section.title}</Typography>
            <Typography variant="body1">{section.content}</Typography>
          </Box>
        ))}
      </Container> */}

    </>
  );
}