
// import React from "react";
// import { Box, Typography, Container, Grid, Button, Card, CardContent, Divider } from "@mui/material";

// const advantages = [
//   { id: 1, title: "Reduce Hiring Risks", description: "Minimize risks with effective recruitment strategies." },
//   { id: 2, title: "Increase Efficiencies", description: "Streamline your hiring process with expert solutions." },
//   { id: 3, title: "Deeper Talent Pools", description: "Access a wider and more qualified candidate network." },
//   { id: 4, title: "Onboarding Support", description: "Ensure smooth transitions for new hires." },
//   { id: 5, title: "Effective Employer Branding", description: "Enhance your brand’s reputation in the job market." },
//   { id: 6, title: "Deep Industry Knowledge", description: "Leverage insights from industry experts." }
// ];

// const AdvantageCard = ({ advantage }) => {
//   return (
//     <Card sx={{ p: 3, borderLeft: "6px solid #F7C948", transition: "0.3s", '&:hover': { transform: "scale(1.05)" } }}>
//       <CardContent>
//         <Typography variant="h5" sx={{ color: "#003366", fontWeight: "bold" }}>{advantage.title}</Typography>
//         <Typography sx={{ mt: 1, color: "#555" }}>{advantage.description}</Typography>
//       </CardContent>
//     </Card>
//   );
// };

// const About = () => {
//   return (
//     <Box sx={{ fontFamily: "Arial, sans-serif", color: "#333" }}>
//       {/* Banner Section */}
//       <Box sx={{ backgroundImage: `url(https://img.freepik.com/premium-photo/teamwork-human-resources-hr-management-technology-business-vexel_31965-321667.jpg?uid=R189548511&ga=GA1.1.1266226146.1738347964&semt=ais_hybrid)`, backgroundSize: "cover", backgroundPosition: "center", height: "350px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "2.8rem", fontWeight: "bold", textShadow: "2px 2px 10px rgba(0,0,0,0.7)" }}>About Us</Box>
      
//       {/* "Each Search is Unique" Section */}
//       <Container sx={{ my: 5 }}>
//         <Grid container spacing={4} alignItems="center">
          
//           <Grid item xs={12} md={6} marginLeft="-70px">
//             <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>Each Search is <span style={{ color: "#F7C948" }}>Unique.</span></Typography>
//             <Typography variant="body1" sx={{ mb: 3 }}>We take care delivering your message directly to high-potential professionals with your brand in mind.</Typography>
//             <Button variant="contained" sx={{ backgroundColor: "#F7C948", color: "black", fontWeight: "bold", '&:hover': { backgroundColor: "#E6B800" } }}>CONTACT US</Button>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Box component="img" src="https://img.freepik.com/free-photo/occupations-career-employment-recruitment-position-concept_53876-64962.jpg?t=st=1741723380~exp=1741726980~hmac=a3d7ef64b9d8eec729f5ac8e6ea09c74996c036d6d86d42af7b71edd9e85fd52&w=1800" alt="Business Meeting" sx={{ width: "100%", borderRadius: "12px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", marginLeft:"90px"}} />
//           </Grid>
//         </Grid>
//       </Container>

//       <Divider/>

//       {/* Leader Section */}
//       <Container sx={{ textAlign: "center", py: 5 }}>
//         <Typography variant="h4" sx={{ mb: 2 }}>Meet Our Leader: Sangita Butani</Typography>
//         <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.6 }}>Sangita Butani is a visionary leader with over fifteen years of experience in the staffing industry.</Typography>
//         <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.6 }}>
//           Before joining Management and Staffing Services, she served as CEO and Director of a leading job placement firm, connecting top talent with organizations. She holds a Master of Social Work (MSW) from H. N. Shukla College and a Bachelor's degree from Saurashtra University.</Typography>
//           <Typography variant="body1" sx={{ mb: 2, color: "#555", lineHeight: 1.6 }}>
//            Her expertise spans local, national, and global organizations, ensuring businesses have access to the right talent. Her strategic leadership and market insights have been crucial in advancing the company’s progress and achieving long-term success.
//        </Typography>
//       </Container>

//       <Container sx={{ py: 5 }}>
//          <Grid container spacing={4} alignItems="center">
//            {/* Image */}
//            <Grid item xs={12} md={6}>
//              <img
//                src="https://img.freepik.com/free-photo/executive-touching-icon-social-network_1232-158.jpg?uid=R189548511&ga=GA1.1.1266226146.1738347964&semt=ais_hybrid"
//                alt="Mission"
//                style={{ width: "100%", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
//              />
//            </Grid>
//            {/* Text Content */}
//            <Grid item xs={12} md={6}>
//              <Typography variant="h4" sx={{ mb: 2 }}>
//                Our Mission
//              </Typography>
//              <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.6 }}>
//                Our mission is to provide world-class staffing solutions that help businesses grow and individuals thrive in their careers.
//              </Typography>
//            </Grid>
//          </Grid>
 
//       </Container>

//       {/* Advantages Section */}
//       <Box sx={{ backgroundColor: "#003366", color: "white", py: 6, textAlign: "center" }}>
//         <Container>
//           <Typography variant="h3" sx={{ mb: 4 }}>Advantages of Working With Us</Typography>
//           <Grid container spacing={3}>
//             {advantages.map((adv) => (
//               <Grid item xs={12} sm={6} md={4} key={adv.id}>
//                 <AdvantageCard advantage={adv} />
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default About;



import React from "react";
import { Box, Typography, Container, Grid, Button, Card, CardContent, Divider } from "@mui/material";

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
      <Box sx={{ backgroundImage: `url(https://img.freepik.com/premium-photo/teamwork-human-resources-hr-management-technology-business-vexel_31965-321667.jpg)`, backgroundSize: "cover", backgroundPosition: "center", height: "350px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: { xs: "2rem", md: "2.8rem" }, fontWeight: "bold", textShadow: "2px 2px 10px rgba(0,0,0,0.7)" }}>About Us</Box>
      
      <Container sx={{ my: 5 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}>Each Search is <span style={{ color: "#F7C948" }}>Unique.</span></Typography>
            <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: "1rem", md: "1.25rem" } }}>We take care delivering your message directly to high-potential professionals with your brand in mind.</Typography>
            <Button variant="contained" sx={{ backgroundColor: "#F7C948", color: "black", fontWeight: "bold", '&:hover': { backgroundColor: "#E6B800" } }}>CONTACT US</Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box component="img" src="https://img.freepik.com/free-photo/occupations-career-employment-recruitment-position-concept_53876-64962.jpg" alt="Business Meeting" sx={{ width: "100%", borderRadius: "12px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }} />
          </Grid>
        </Grid>
      </Container>

      <Divider />

      <Container sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: "2rem", md: "2.5rem" } }}>Meet Our Leader: Sangita Butani</Typography>
        <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.6, fontSize: { xs: "1rem", md: "1.25rem" } }}>Sangita Butani is a visionary leader with over fifteen years of experience in the staffing industry.</Typography>
      </Container>

      <Container sx={{ py: 5 }}>
         <Grid container spacing={4} alignItems="center">
           <Grid item xs={12} md={6}>
             <img src="https://img.freepik.com/free-photo/executive-touching-icon-social-network_1232-158.jpg" alt="Mission" style={{ width: "100%", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }} />
           </Grid>
           <Grid item xs={12} md={6}>
             <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: "2rem", md: "2.5rem" } }}>Our Mission</Typography>
             <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.6, fontSize: { xs: "1rem", md: "1.25rem" } }}>Our mission is to provide world-class staffing solutions that help businesses grow and individuals thrive in their careers.</Typography>
           </Grid>
         </Grid>
      </Container>

      <Box sx={{ backgroundColor: "#003366", color: "white", py: 6, textAlign: "center" }}>
        <Container>
          <Typography variant="h3" sx={{ mb: 4, fontSize: { xs: "2rem", md: "3rem" } }}>Advantages of Working With Us</Typography>
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
