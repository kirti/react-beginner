import React from "react";
import { Typography, Container, Box, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { Link } from "react-router-dom";

const Home = () => {
  const cards = [
    { id: 1, title: "Card 1", image: "https://picsum.photos/400/300?random=1", link: "/page1" },
    { id: 2, title: "Card 2", image: "https://picsum.photos/400/300?random=2", link: "/page2" },
    { id: 3, title: "Card 3", image: "https://picsum.photos/400/300?random=3", link: "/page3" },
    { id: 4, title: "Card 4", image: "https://picsum.photos/400/300?random=4", link: "/page4" },
    { id: 5, title: "Card 5", image: "https://picsum.photos/400/300?random=5", link: "/page5" },
  ];

  return (
    <>
      <Header />
      <Box
        sx={{
          width: "100%",
          height: "300px",
          backgroundImage: "url('https://picsum.photos/1600/900?random=10)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold",color: "white", }}>
          Welcome to Our Website
        </Typography>
      </Box>
      <Container sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Discover Our Services
        </Typography>
        <Typography variant="body1" paragraph>
          We provide innovative solutions to help businesses grow and succeed. Explore our services and find out how we can assist you in achieving your goals.
        </Typography>
      </Container>
      <Container sx={{ my: 4 }}>
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.id}>
              <Card>
                <CardMedia component="img" height="200" image={card.image} alt={card.title} />
                <CardContent>
                  <Typography variant="h6">{card.title}</Typography>
                  <Button component={Link} to={card.link} variant="contained" sx={{ mt: 1 }}>
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
