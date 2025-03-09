import React from "react";
import { Typography, Container, Box } from "@mui/material";
import Footer from "../common/Footer";
import Header from "../common/Header";

const About = () => {
  return (
    <>
      <Header />
      <Box
        sx={{
          width: "100%",
          height: "300px",
          backgroundImage: "url('https://picsum.photos/1600/900?random=12')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
          About Us
        </Typography>
      </Box>
      <Container sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Welcome to Our Company
        </Typography>
        <Typography variant="body1" paragraph>
          We are committed to delivering the best services to our customers. Our team of experts
          ensures quality and excellence in every project we undertake. 
        </Typography>
      </Container>
      <Container sx={{ my: 4 }}>
        <Typography variant="body1" paragraph>
          Our mission is to provide innovative solutions and outstanding customer service. Join us on
          our journey to make the world a better place.
        </Typography>
      </Container>
      <Footer />
    </>
  );
};

export default About;