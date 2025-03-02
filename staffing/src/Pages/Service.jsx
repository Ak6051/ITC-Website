import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <Container style={{ padding: "40px", textAlign: "center" }}>
      <Typography variant="h3" gutterBottom>Our Services</Typography>
      <Grid container spacing={3} justifyContent="center">
        {["Permanent Recruitment", "Contract Staffing", "Executive Search"].map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Card elevation={5}>
                <CardContent>
                  <Typography variant="h6">{service}</Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;