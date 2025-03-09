import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import Footer from "../common/Footer";
import Header from "../common/Header";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We will get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <>
      <Header />
      <Container sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Contact us
        </Typography>
       
      </Container>
    
      <Container sx={{ my: 5 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField label="Name" name="name" variant="outlined" fullWidth required value={formData.name} onChange={handleChange} />
        <TextField label="Email" name="email" type="email" variant="outlined" fullWidth required value={formData.email} onChange={handleChange} />
        <TextField label="Message" name="message" multiline rows={4} variant="outlined" fullWidth required value={formData.message} onChange={handleChange} />
        <Button type="submit" variant="contained">Submit</Button>
      </Box>
    </Container>
      <Footer />
    </>
  );
};

export default Contact;