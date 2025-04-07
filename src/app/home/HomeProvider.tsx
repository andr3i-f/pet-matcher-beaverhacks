import React from 'react';
import Link from 'next/link';
import { Box, Typography, Button, Container, Grid, Paper, Stack, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';

export default function HomeProvider() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh", // Changed from fixed height to minHeight
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundImage: `url("/images/background.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: { xs: "1rem", md: "2rem" },
        overflow: "auto",
        position: "relative" 
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: { xs: 0, md: 16 },
          width: { xs: 100, sm: 150, md: 250 },
          height: "100%", // Changed from fixed height to 100%
          top: 0,
          backgroundImage: `url("/images/borderimage.png")`,
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
          display: { xs: 'none', sm: 'block' } // Hide on mobile
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={{ xs: 2, md: 4 }} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ pt: { xs: 2, md: 8 }, textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  color: "#660F81",
                  mb: 2,
                  fontFamily: `'Segoe UI', 'Comic Sans MS', cursive`,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' }
                }}
              >
                Pawfect Match
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "#555",
                  mb: 4,
                  fontFamily: `'Segoe UI', sans-serif`,
                  fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }
                }}
              >
                Answer a few questions and let us connect you with your ideal furry companion.
              </Typography>

              <Link href={"/form"} style={{ textDecoration: 'none' }}>
                <Button variant="contained"
                  sx={{
                    background: "linear-gradient(to right, #a592d6, #65548f)",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    textTransform: "none",
                    borderRadius: "24px",
                    px: { xs: 3, md: 4 },
                    py: { xs: 1, md: 1.5 },
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
            <Box sx={{ position: 'relative', mt: { xs: 4, md: 0 }, mb: { xs: 4, md: 0 } }}>
              <Paper
                elevation={6}
                sx={{
                  borderRadius: '50%',
                  overflow: 'hidden',
                  width: { xs: 200, sm: 280, md: 350, lg: 400 },
                  height: { xs: 200, sm: 280, md: 350, lg: 400 },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: '5px solid #ffc8dd',
                }}
              >
                <div style={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'flex-end'
                }}>
                  <div style={{ 
                    position: 'relative', 
                    width: isMobile ? 200 : isTablet ? 300 : 400,
                    height: isMobile ? 200 : isTablet ? 300 : 400,
                  }}>
                    <Image
                      src="/images/dogImage.png"
                      alt="Cute Dog"
                      fill
                      style={{ objectFit: "contain", objectPosition: "bottom" }}
                    />
                  </div>
                </div>
              </Paper>

              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: -10, sm: 0, md: 30 },
                  right: { xs: -80, sm: -100, md: -175 },
                  width: { xs: 150, sm: 200, md: 400 },
                  height: { xs: 150, sm: 200, md: 400 },
                  zIndex: 10,
                  display: { xs: 'none', md: 'block' } // Only show on larger screens
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

        <Grid container spacing={{ xs: 2, md: 4 }} sx={{ mt: { xs: 2, md: 6 } }}>
          <Grid item xs={12}>
            <Typography variant="h4"
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                background: "#65548f",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
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
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, md: 3 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: '1rem',
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: { xs: 'translateY(-3px) scale(1.03)', md: 'translateY(-5px) scale(1.1)' },
                  }
                }}
              >
                <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4rem' }, mb: 1 }}>
                  {step.icon}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    mb: 2,
                    color: "#d6336c",
                    fontSize: { xs: '1rem', md: '1.25rem' },
                    textAlign: 'center'
                  }}
                >
                  {step.title}
                </Typography>
                <Typography sx={{ textAlign: 'center', fontSize: { xs: '0.875rem', md: '1rem' } }}>
                  {step.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        
        {/* Added Credits Section */}
        <Box sx={{ mt: { xs: 4, md: 8 }, mb: 4, textAlign: 'center' }}>
          <Typography variant="h4"
            sx={{
              background: "#65548f",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
            }}
          >
            Made by:
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, md: 3 }}
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            useFlexGap
            sx={{ px: 2 }}
          >
            {['Musa Ahmed', 'Mujtaba Ali', 'Andrei Florea', 'Karin Ocheretny'].map((name, index) => (
              <Typography key={index} variant="h5"
                sx={{
                  background: "linear-gradient(to right, #a592d6, #65548f)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  fontWeight: "bold",
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  my: { xs: 0.5, sm: 0 }
                }}>
                {name}
              </Typography>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}