import React from 'react';
import Link from 'next/link';
import { Box, Typography, Button, Container, Grid, Paper, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function HomeProvider() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "calc(100vh - 64px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url("/images/background.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: { xs: "1rem", md: "2rem" },
        overflow: "auto",
        position: "relative" // Added position relative for absolute positioning of border
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: 16,
          width: 250,
          height: "160vh",
          top: 0,
          backgroundImage: `url("/images/borderimage.png")`,
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      />



      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ pt: { xs: 2, md: 8 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  color: "#660F81",
                  mb: 2,
                  fontFamily: `'Segoe UI', 'Comic Sans MS', cursive`,
                  fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}
              >
                Find Your Perfect Pet Match
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#555",
                  mb: 4,
                  fontFamily: `'Segoe UI', sans-serif`,
                }}
              >
                Answer a few questions and let us connect you with your ideal furry companion.
              </Typography>


              <Link href={"/form"}>
                <Button variant="contained"
                  sx={{
                    //mt: 10,
                    background: "linear-gradient(to right, #a592d6, #65548f)",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    textTransform: "none",
                    borderRadius: "24px",
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      background: "linear-gradient(to right, #baa7eb, #7f6dab)",
                      color: "#40207a"
                    }
                  }}
                >Find my fur friend!</Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ position: 'relative' }}>
              <Paper
                elevation={6}
                sx={{
                  borderRadius: '50%',
                  overflow: 'hidden',
                  width: { xs: 280, sm: 350, md: 400 },
                  height: { xs: 280, sm: 350, md: 400 },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '5px solid #ffc8dd',
                }}
              >
                <div style={{ position: 'relative', width: 500, height: 500, top: 100 }}>
                  <Image
                    src="/images/dogImage.png"
                    alt="Cute Dog"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </Paper>

              <Box
                sx={{
                  position: 'absolute',
                  top: 30,
                  right: -175,
                  width: 400,
                  height: 400,
                  zIndex: 10
                }}
              >
                <Image
                  src="/images/byGemini.png"
                  alt="Powered by Gemini"
                  width={400}
                  height={400}
                  layout="responsive"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 6 }}>
          <Grid item xs={12}>
          <Typography variant="h4"
            sx={{
              justifySelf: "start",
              background: "#65548f",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
              mb: 2
            }}
          >
            How it works:
          </Typography>
          </Grid>

          {[
            {
              title: '1. Tell Us What You Like',
              description: 'Choose pet images that appeal to you to help us understand your preferences.',
              icon: '🔍'
            },
            {
              title: '2. Get Matched',
              description: 'Our algorithm finds pets available for adoption that match your style.',
              icon: '❤️'
            },
            {
              title: '3. Meet Your New Friend',
              description: 'Connect with shelters to meet your perfectly matched pet companion.',
              icon: '🐾'
            }
          ].map((step, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: '1rem',
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease'
                  }
                }}
              >
                <Typography variant="h1" sx={{ fontSize: '4rem', mb: 1 }}>
                  {step.icon}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    color: "#d6336c"
                  }}
                >
                  {step.title}
                </Typography>
                <Typography sx={{ textAlign: 'center' }}>
                  {step.description}
                </Typography>

      
              </Paper>



            </Grid>
            
          ))}
        </Grid>
        
        {/* Added Credits Section */}
        <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
          <Typography variant="h4"
            sx={{
              justifySelf: "start",
              background: "#65548f",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
              mb: 2
            }}
          >
            Made by:
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            justifyContent="center"
            flexWrap="wrap"
          >
            <Typography variant="h5"
              sx={{
                justifySelf: "start",
                background: "linear-gradient(to right, #a592d6, #65548f)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontWeight: "bold",
              }}>
              Musa Ahmed
            </Typography>
            <Typography variant="h5"
              sx={{
                justifySelf: "start",
                background: "linear-gradient(to right, #a592d6, #65548f)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontWeight: "bold",
              }}>
              Mujtaba Ali
            </Typography>
            <Typography variant="h5"
              sx={{
                justifySelf: "start",
                background: "linear-gradient(to right, #a592d6, #65548f)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontWeight: "bold",
              }}>
              Andrei Florea
            </Typography>
            <Typography variant="h5"
              sx={{
                justifySelf: "start",
                background: "linear-gradient(to right, #a592d6, #65548f)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontWeight: "bold",
              }}>
              Karin Ocheretny
            </Typography>
          </Stack>
        </Box>
      </Container>
    </Box>

  )
}