






// import React from 'react';

// const About = () => {
//   return (
//     <div style={{ fontFamily: 'Arial, sans-serif', color: '#333' }}>
      
//       {/* Banner Section */}
//       <div 
//         style={{ 
//           backgroundImage: 'url(https://img.freepik.com/free-photo/business-people-shaking-hands-meeting_53876-146037.jpg)', 
//           backgroundSize: 'cover', 
//           backgroundPosition: 'center', 
//           height: '350px', 
//           width: '100%',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           color: 'white',
//           fontSize: '2.8rem',
//           fontWeight: 'bold',
//           textShadow: '2px 2px 10px rgba(0,0,0,0.7)'
//         }}
//       >
//         About Us
//       </div>
//       <div style={{ flex: '2 1 500px' }}>
//             <h2 style={{ fontSize: '2rem', marginBottom: '10px',marginLeft:"600px" }}>Meet Our Leader: Sangita Butani</h2>
//             <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.6' ,marginLeft:"100px"}}>
//               <strong>Sangita Butani</strong> is a dynamic and visionary leader with over fifteen years of experience in the staffing industry. 
//               She specializes in talent acquisition and career development, successfully leading recruitment strategies that align talent acquisition with organizational goals.
//             </p>

//             <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.6',marginLeft:"100px" }}>
//               Before joining Management and Staffing Services, she served as CEO and Director of a leading job placement firm, connecting top talent with organizations. 
//               She holds a Master of Social Work (MSW) from H. N. Shukla College and a Bachelor's degree from Saurashtra University.
//             </p>

//             <p style={{ fontSize: '1.2rem', color: '#555', lineHeight: '1.6',marginLeft:"100px" }}>
//               Her expertise spans local, national, and global organizations, ensuring businesses have access to the right talent. 
//               Her strategic leadership and market insights have been crucial in advancing the company’s progress and achieving long-term success.
//             </p>
//           </div>


//       {/* Introduction Section */}
//       <div style={{ textAlign: 'center', padding: '50px 20px', maxWidth: '900px', margin: 'auto' }}>
//         <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Who We Are</h1>
//         <p style={{ fontSize: '1.3rem', color: '#555', lineHeight: '1.6' }}>
//           We are committed to delivering the best services to our customers. Our team is dedicated to innovation, quality, and excellence.
//         </p>
//       </div>

//       {/* Mission Section */}
//       <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', gap: '30px' }}>
        
//         {/* Left Side - Image */}
//         <div style={{ flex: '1 1 500px', }}>
//           <img 
//             src="data:image/jpeg;base64,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" 
//             alt="Our Mission" 
//             style={{ width: '100%', borderRadius: '10px', transition: 'transform 0.3s ease-in-out' }} 
//             onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
//             onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
//           />
//         </div>

//         {/* Right Side - Text */}
//         <div style={{ flex: '1 1 500px' }}>
//           <h2 style={{ fontSize: '2.3rem', marginBottom: '10px',marginLeft:"90px" }}>Our Mission</h2>
//           <p style={{ fontSize: '1.3rem', color: '#555', lineHeight: '1.6',marginLeft:"50px" }}>
//             Our mission is to create an impact by providing top-notch solutions tailored to the needs of our clients. 
//             We believe in building long-term relationships and offering value-driven services.
//           </p>
//         </div>

//       </div>

//       {/* Leadership Section */}
//       <div style={{ backgroundColor: '#f8f8f8', padding: '60px 20px', marginTop: '30px' }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '30px' }}>

//           {/* Left Side - Leader Image */}
          

//           {/* Right Side - Leader Information */}
          
//         </div>
//       </div>

//     </div>
//   );
// };

// export default About;


// import React from "react";
// import { Box, Typography, Container, Grid } from "@mui/material";

// const About = () => {
//   return (
//     <Box sx={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
//       {/* Banner Section */}
//       <Box
//         sx={{
//           backgroundImage: `url(https://img.freepik.com/premium-photo/teamwork-human-resources-hr-management-technology-business-vexel_31965-321667.jpg?uid=R189548511&ga=GA1.1.1266226146.1738347964&semt=ais_hybrid)`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "350px",
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           color: "white",
//           fontSize: "2.8rem",
//           fontWeight: "bold",
//           textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
//         }}
//       >
//         About Us
//       </Box>

//       {/* Leader Section */}
//       <Container sx={{ mt: 4, textAlign: "center" }}>
//         <Typography variant="h4" sx={{ mb: 2 }}>
//           Meet Our Leader: Sangita Butani
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.6 }}>
//           <strong>Sangita Butani</strong> is a dynamic and visionary leader with over fifteen years of experience in the staffing industry. She specializes in talent acquisition and career development, successfully leading recruitment strategies that align talent acquisition with organizational goals.
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.6 }}>
//           Before joining Management and Staffing Services, she served as CEO and Director of a leading job placement firm, connecting top talent with organizations. She holds a Master of Social Work (MSW) from H. N. Shukla College and a Bachelor's degree from Saurashtra University.
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.6 }}>
//           Her expertise spans local, national, and global organizations, ensuring businesses have access to the right talent. Her strategic leadership and market insights have been crucial in advancing the company’s progress and achieving long-term success.
//         </Typography>
//       </Container>

//       {/* Introduction Section */}
//       <Container sx={{ textAlign: "center", py: 5 }}>
//         <Typography variant="h3" sx={{ mb: 2 }}>
//           Who We Are
//         </Typography>
//         <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.6 }}>
//           We are committed to delivering the best services to our customers. Our team is dedicated to innovation, quality, and excellence.
//         </Typography>
//       </Container>

//       {/* Mission Section */}
//       <Container sx={{ py: 5 }}>
//         <Grid container spacing={4} alignItems="center">
//           {/* Image */}
//           <Grid item xs={12} md={6}>
//             <img
//               src="https://img.freepik.com/free-photo/executive-touching-icon-social-network_1232-158.jpg?uid=R189548511&ga=GA1.1.1266226146.1738347964&semt=ais_hybrid"
//               alt="Mission"
//               style={{ width: "100%", borderRadius: "10px" }}
//             />
//           </Grid>

//           {/* Text Content */}
//           <Grid item xs={12} md={6}>
//             <Typography variant="h4" sx={{ mb: 2,marginLeft:"100px" }}>
//               Our Mission
//             </Typography>
//             <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.6,marginLeft:"70px" }}>
//               Our mission is to provide world-class staffing solutions that help businesses grow and individuals thrive in their careers.
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default About;

// import React from "react";
// import { Box, Typography, Container, Grid, Button } from "@mui/material";

// const About = () => {
//   return (
//     <Box sx={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
//       {/* Banner Section */}
//       <Box
//         sx={{
//           backgroundImage: `url(https://img.freepik.com/premium-photo/teamwork-human-resources-hr-management-technology-business-vexel_31965-321667.jpg?uid=R189548511&ga=GA1.1.1266226146.1738347964&semt=ais_hybrid)`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "350px",
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           color: "white",
//           fontSize: "2.8rem",
//           fontWeight: "bold",
//           textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
//         }}
//       >
//         About Us
//       </Box>

//       {/* New "Each Search is Unique" Section */}
//       <Box sx={{ width: "100%", overflow: "hidden", position: "relative", my: 5 }}>
//         <Grid container>
//           {/* Left Section (Text & Overlay) */}
//           <Grid
//             item
//             xs={12}
//             md={6}
//             sx={{
//               position: "relative",
//               backgroundImage:
//                 "url(https://img.freepik.com/free-photo/business-people-shaking-hands-meeting_53876-146037.jpg)",
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               height: { xs: "400px", md: "500px" },
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               padding: { xs: 2, md: 6 },
//             }}
//           >
//             {/* Dark Overlay */}
//             <Box
//               sx={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "100%",
//                 backgroundColor: "rgba(0, 20, 50, 0.6)",
//               }}
//             />
//             {/* Text Content */}
//             <Box
//               sx={{
//                 position: "relative",
//                 color: "white",
//                 textAlign: "left",
//                 maxWidth: "80%",
//                 zIndex: 2,
//               }}
//             >
//               <Typography
//                 variant="h3"
//                 sx={{
//                   fontWeight: "bold",
//                   fontSize: { xs: "2rem", md: "2.8rem" },
//                   mb: 2,
//                 }}
//               >
//                 Each Search is{" "}
//                 <Typography component="span" sx={{ color: "#F7C948" }}>
//                   Unique.
//                 </Typography>
//               </Typography>
//               <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
//                 We take care delivering your message directly to high-potential
//                 professionals with your brand in mind. We specialize in
//                 overcoming objections/perceptions in telling your unique story
//                 so we capture the interest of capable talent.
//               </Typography>
//               <Button
//                 variant="contained"
//                 sx={{
//                   backgroundColor: "white",
//                   color: "black",
//                   "&:hover": { backgroundColor: "#ddd" },
//                 }}
//               >
//                 CONTACT US
//               </Button>
//             </Box>
//           </Grid>

//           {/* Right Section (Image) */}
//           <Grid item xs={12} md={6} sx={{ position: "relative" }}>
//             <Box
//               component="img"
//               src="https://img.freepik.com/free-photo/occupations-career-employment-recruitment-position-concept_53876-64962.jpg?t=st=1741723380~exp=1741726980~hmac=a3d7ef64b9d8eec729f5ac8e6ea09c74996c036d6d86d42af7b71edd9e85fd52&w=1800"
//               alt="Business Meeting"
//               sx={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "contain",
//               }}
//             />
//             <Box
//               sx={{
//                 position: "absolute",
//                 bottom: "10px",
//                 right: "20px",
//                 width: "100px",
//                 height: "6px",
//                 backgroundColor: "#F7C948",
//               }}
//             />
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Leader Section */}
//       <Container sx={{ mt: 4, textAlign: "center" }}>
//         <Typography variant="h4" sx={{ mb: 2 }}>
//           Meet Our Leader: Sangita Butani
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.6 }}>
//           <strong>Sangita Butani</strong> is a dynamic and visionary leader with over fifteen years of experience in the staffing industry. She specializes in talent acquisition and career development, successfully leading recruitment strategies that align talent acquisition with organizational goals.
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.6 }}>
//           Before joining Management and Staffing Services, she served as CEO and Director of a leading job placement firm, connecting top talent with organizations. She holds a Master of Social Work (MSW) from H. N. Shukla College and a Bachelor's degree from Saurashtra University.
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.6 }}>
//           Her expertise spans local, national, and global organizations, ensuring businesses have access to the right talent. Her strategic leadership and market insights have been crucial in advancing the company’s progress and achieving long-term success.
//         </Typography>
//       </Container>

//       {/* Introduction Section */}
//       <Container sx={{ textAlign: "center", py: 5 }}>
//         <Typography variant="h3" sx={{ mb: 2 }}>
//           Who We Are
//         </Typography>
//         <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.6 }}>
//           We are committed to delivering the best services to our customers. Our team is dedicated to innovation, quality, and excellence.
//         </Typography>
//       </Container>

//       {/* Mission Section */}
//       <Container sx={{ py: 5 }}>
//         <Grid container spacing={4} alignItems="center">
//           {/* Image */}
//           <Grid item xs={12} md={6}>
//             <img
//               src="https://img.freepik.com/free-photo/executive-touching-icon-social-network_1232-158.jpg?uid=R189548511&ga=GA1.1.1266226146.1738347964&semt=ais_hybrid"
//               alt="Mission"
//               style={{ width: "100%", borderRadius: "10px" }}
//             />
//           </Grid>

//           {/* Text Content */}
//           <Grid item xs={12} md={6}>
//             <Typography variant="h4" sx={{ mb: 2 }}>
//               Our Mission
//             </Typography>
//             <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.6 }}>
//               Our mission is to provide world-class staffing solutions that help businesses grow and individuals thrive in their careers.
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default About;

// import React from "react";
// import { Box, Typography, Container, Grid, Button } from "@mui/material";


// const About = () => {
//   return (
    
//     <Box sx={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
//       {/* Banner Section */}
//       <Box
//         sx={{
//           backgroundImage: `url(https://img.freepik.com/premium-photo/teamwork-human-resources-hr-management-technology-business-vexel_31965-321667.jpg?uid=R189548511&ga=GA1.1.1266226146.1738347964&semt=ais_hybrid)`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           height: "350px",
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           color: "white",
//           fontSize: "2.8rem",
//           fontWeight: "bold",
//           textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
//         }}
//       >
//         About Us
//       </Box>

//       {/* "Each Search is Unique" Section */}
//       <Box sx={{ width: "100%", my: 5, px: { xs: 2, md: 5 } }}>
//         <Grid container spacing={4} alignItems="center">
//           {/* Left Section - Text */}
//           <Grid item xs={12} md={6}>
//             <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
//               <Typography
//                 variant="h3"
//                 sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "2rem", md: "2.5rem" } }}
//               >
//                 Each Search is{" "}
//                 <Typography component="span" sx={{ color: "#F7C948" }}>
//                   Unique.
//                 </Typography>
//               </Typography>
//               <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
//                 We take care delivering your message directly to high-potential
//                 professionals with your brand in mind. We specialize in
//                 overcoming objections/perceptions in telling your unique story
//                 so we capture the interest of capable talent.
//               </Typography>
//               <Button
//                 variant="contained"
//                 sx={{
//                   backgroundColor: "#F7C948",
//                   color: "black",
//                   fontWeight: "bold",
//                   "&:hover": { backgroundColor: "#E6B800" },
//                 }}
//               >
//                 CONTACT US
//               </Button>
//             </Box>
//           </Grid>

//           {/* Right Section - Image */}
//           <Grid item xs={12} md={6}>
//             <Box
//               sx={{
//                 position: "relative",
//                 display: "flex",
//                 justifyContent: "center",
//               }}
//             >
//               <Box
//                 component="img"
//                 src="https://img.freepik.com/free-photo/occupations-career-employment-recruitment-position-concept_53876-64962.jpg?t=st=1741723380~exp=1741726980~hmac=a3d7ef64b9d8eec729f5ac8e6ea09c74996c036d6d86d42af7b71edd9e85fd52&w=1800"
//                 alt="Business Meeting"
//                 sx={{
//                   width: "100%",
//                   maxWidth: "500px",
//                   borderRadius: "12px",
//                   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//                 }}
//               />
//               <Box
//                 sx={{
//                   position: "absolute",
//                   bottom: "-10px",
//                   right: "20px",
//                   width: "80px",
//                   height: "6px",
//                   backgroundColor: "#F7C948",
//                 }}
//               />
//             </Box>
//           </Grid>
//         </Grid>
//       </Box>

//       {/* Leader Section */}
//       <Container sx={{ mt: 4, textAlign: "center" }}>
//         <Typography variant="h4" sx={{ mb: 2 }}>
//           Meet Our Leader: Sangita Butani
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.6 }}>
//           <strong>Sangita Butani</strong> is a dynamic and visionary leader with over fifteen years of experience in the staffing industry. She specializes in talent acquisition and career development, successfully leading recruitment strategies that align talent acquisition with organizational goals.
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.6 }}>
//           Before joining Management and Staffing Services, she served as CEO and Director of a leading job placement firm, connecting top talent with organizations. She holds a Master of Social Work (MSW) from H. N. Shukla College and a Bachelor's degree from Saurashtra University.
//         </Typography>
//         <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.6 }}>
//           Her expertise spans local, national, and global organizations, ensuring businesses have access to the right talent. Her strategic leadership and market insights have been crucial in advancing the company’s progress and achieving long-term success.
//         </Typography>
//       </Container>

//       {/* Introduction Section */}
//       <Container sx={{ textAlign: "center", py: 5 }}>
//         <Typography variant="h3" sx={{ mb: 2 }}>
//           Who We Are
//         </Typography>
//         <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.6 }}>
//           We are committed to delivering the best services to our customers. Our team is dedicated to innovation, quality, and excellence.
//         </Typography>
//       </Container>

//       {/* Mission Section */}
//       <Container sx={{ py: 5 }}>
//         <Grid container spacing={4} alignItems="center">
//           {/* Image */}
//           <Grid item xs={12} md={6}>
//             <img
//               src="https://img.freepik.com/free-photo/executive-touching-icon-social-network_1232-158.jpg?uid=R189548511&ga=GA1.1.1266226146.1738347964&semt=ais_hybrid"
//               alt="Mission"
//               style={{ width: "100%", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
//             />
//           </Grid>

//           {/* Text Content */}
//           <Grid item xs={12} md={6}>
//             <Typography variant="h4" sx={{ mb: 2 }}>
//               Our Mission
//             </Typography>
//             <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.6 }}>
//               Our mission is to provide world-class staffing solutions that help businesses grow and individuals thrive in their careers.
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>
      
//     </Box>
//   );
// };

// export default About;
import React from "react";
import { Box, Typography, Container, Grid, Button, Card, CardContent } from "@mui/material";

const advantages = [
  { id: 1, title: "Reduce Hiring Risks", description: "Minimize risks with effective recruitment strategies." },
  { id: 2, title: "Increase Efficiencies", description: "Streamline your hiring process with expert solutions." },
  { id: 3, title: "Deeper Talent Pools", description: "Access a wider and more qualified candidate network." },
  { id: 4, title: "Onboarding Support", description: "Ensure smooth transitions for new hires." },
  { id: 5, title: "Effective Employer Branding", description: "Enhance your brand’s reputation in the job market." },
  { id: 6, title: "Deep Industry Knowledge", description: "Leverage insights from industry experts." }
];

const AdvantageCard = ({ advantage }) => {
  return (
    <Card sx={{ p: 3, borderLeft: "6px solid #F7C948", transition: "0.3s", '&:hover': { transform: "scale(1.05)" } }}>
      <CardContent>
        <Typography variant="h5" sx={{ color: "#003366", fontWeight: "bold" }}>{advantage.title}</Typography>
        <Typography sx={{ mt: 1, color: "#555" }}>{advantage.description}</Typography>
      </CardContent>
    </Card>
  );
};

const About = () => {
  return (
    <Box sx={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
      {/* Banner Section */}
      <Box sx={{ backgroundImage: `url(https://img.freepik.com/premium-photo/teamwork-human-resources-hr-management-technology-business-vexel_31965-321667.jpg?uid=R189548511&ga=GA1.1.1266226146.1738347964&semt=ais_hybrid)`, backgroundSize: "cover", backgroundPosition: "center", height: "350px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "2.8rem", fontWeight: "bold", textShadow: "2px 2px 10px rgba(0,0,0,0.7)" }}>About Us</Box>
      
      {/* "Each Search is Unique" Section */}
      <Container sx={{ my: 5 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>Each Search is <span style={{ color: "#F7C948" }}>Unique.</span></Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>We take care delivering your message directly to high-potential professionals with your brand in mind.</Typography>
            <Button variant="contained" sx={{ backgroundColor: "#F7C948", color: "black", fontWeight: "bold", '&:hover': { backgroundColor: "#E6B800" } }}>CONTACT US</Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component="img" src="https://img.freepik.com/free-photo/occupations-career-employment-recruitment-position-concept_53876-64962.jpg?t=st=1741723380~exp=1741726980~hmac=a3d7ef64b9d8eec729f5ac8e6ea09c74996c036d6d86d42af7b71edd9e85fd52&w=1800" alt="Business Meeting" sx={{ width: "100%", borderRadius: "12px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }} />
          </Grid>
        </Grid>
      </Container>

      {/* Leader Section */}
      <Container sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>Meet Our Leader: Sangita Butani</Typography>
        <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.6 }}>Sangita Butani is a visionary leader with over fifteen years of experience in the staffing industry.</Typography>
        <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.6 }}>
          Before joining Management and Staffing Services, she served as CEO and Director of a leading job placement firm, connecting top talent with organizations. She holds a Master of Social Work (MSW) from H. N. Shukla College and a Bachelor's degree from Saurashtra University.</Typography>
          <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.6 }}>
           Her expertise spans local, national, and global organizations, ensuring businesses have access to the right talent. Her strategic leadership and market insights have been crucial in advancing the company’s progress and achieving long-term success.
       </Typography>
      </Container>

      <Container sx={{ py: 5 }}>
         <Grid container spacing={4} alignItems="center">
           {/* Image */}
           <Grid item xs={12} md={6}>
             <img
               src="https://img.freepik.com/free-photo/executive-touching-icon-social-network_1232-158.jpg?uid=R189548511&ga=GA1.1.1266226146.1738347964&semt=ais_hybrid"
               alt="Mission"
               style={{ width: "100%", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
             />
           </Grid>
           {/* Text Content */}
           <Grid item xs={12} md={6}>
             <Typography variant="h4" sx={{ mb: 2 }}>
               Our Mission
             </Typography>
             <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.6 }}>
               Our mission is to provide world-class staffing solutions that help businesses grow and individuals thrive in their careers.
             </Typography>
           </Grid>
         </Grid>
 
      </Container>

      {/* Advantages Section */}
      <Box sx={{ backgroundColor: "#003366", color: "white", py: 6, textAlign: "center" }}>
        <Container>
          <Typography variant="h3" sx={{ mb: 4 }}>Advantages of Working With Us</Typography>
          <Grid container spacing={3}>
            {advantages.map((adv) => (
              <Grid item xs={12} sm={6} md={4} key={adv.id}>
                <AdvantageCard advantage={adv} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;