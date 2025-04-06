<<<<<<< HEAD
import React, { useState, useEffect, useContext } from "react";
import { Box, Stepper, Step, StepLabel, Button, Typography, Grid, Paper, Stack } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { submitSelectedImages } from "../api/form";
import { LocationContext } from "../../../context/LocationProvider";
const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7", "Step 8", "Step 9", "Step 10"];
=======
import React, { useState, useEffect } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Grid,
  Paper,
  Stack,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const steps = [
  "Step 1",
  "Step 2",
  "Step 3",
  "Step 4",
  "Step 5",
  "Step 6",
  "Step 7",
  "Step 8",
  "Step 9",
  "Step 10",
];
>>>>>>> 77e55a154e9dd523539778f41159c7a04a36882f

const listImages = [
  "https://images.pexels.com/photos/126407/pexels-photo-126407.jpeg",
  "https://images.pexels.com/photos/320014/pexels-photo-320014.jpeg",
  "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg",
  "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg",
  "https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg",
  "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg",
  "https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg",
  "https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg",
  "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg",
  "https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg",
  "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg",
  "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg",
  "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
  "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg",
  "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg",
  "https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg",
  "https://images.pexels.com/photos/350428/pexels-photo-350428.jpeg",
  "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg",
  "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg",
  "https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg",
  "https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg",
  "https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg",
  "https://images.pexels.com/photos/164446/pexels-photo-164446.jpeg",
  "https://images.pexels.com/photos/235805/pexels-photo-235805.jpeg",
  "https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg",
  "https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg",
  "https://images.pexels.com/photos/825947/pexels-photo-825947.jpeg",
  "https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg",
  "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg",
  "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg",
  "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg",
  "https://images.pexels.com/photos/551628/pexels-photo-551628.jpeg",
  "https://images.pexels.com/photos/374906/pexels-photo-374906.jpeg",
  "https://images.pexels.com/photos/350428/pexels-photo-350428.jpeg",
  "https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg",
  "https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg",
  "https://dgicdplf3pvka.cloudfront.net/2698517/dachshund-mini-puppy-picture-8e2bd2f2-b22f-4596-84f3-cd43eee252e5.jpg",
  "https://dgicdplf3pvka.cloudfront.net/2594341/malti-poo-maltipoo-puppy-picture-c3847620-2c08-446f-a274-a27fae23b849.jpg",
  "https://dgicdplf3pvka.cloudfront.net/2690762/poodle-miniature-puppy-picture-f7535fb7-024b-4f9f-8831-bcce741712db.jpg",
  "https://dgicdplf3pvka.cloudfront.net/579246/welsh-corgi-pembroke-puppy-picture-56e1c722-0d48-4157-a503-d5bdc2c74f4a.jpg",
  "https://dgicdplf3pvka.cloudfront.net/2656271/american-bully-puppy-picture-d2eef674-0d61-4092-9fa8-22bd1c068a09.jpg",
  "https://dgicdplf3pvka.cloudfront.net/2544308/boxer-puppy-picture-25504cab-0556-44dd-bb3f-a88dc2b9bf78.jpg",
  "https://dgicdplf3pvka.cloudfront.net/2662088/french-bulldog-puppy-picture-5c283a1e-0606-4d2d-a1d8-cebcf9bd5c98.jpg",
  "https://dgicdplf3pvka.cloudfront.net/2594341/malti-poo-maltipoo-puppy-picture-6b20ef97-1f2e-4db5-a279-13c82f214f49.jpg",
  "https://dbw3zep4prcju.cloudfront.net/animal/35313a67-7113-4e57-bff8-b1300e5bd0b5/image/aeb094ac-c8cd-467b-8442-62c531255a99.jpeg?versionId=E.K6C9ksBXvt5tWKHvjIu8LiB8ygXw9s&bust=1712468584&width=450",
  "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/73856027/1/?bust=1743218087&width=450",
  "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75292188/1/?bust=1743871099&width=450",
  "https://dbw3zep4prcju.cloudfront.net/animal/c0bd749d-171e-4178-9932-c61c42623377/image/2066418c-c96f-4a5f-9b58-a4d833993d6d.jpg?versionId=392zKb0ZdM6abEQbLZX2WdkXYtFvlSm2&bust=1712633629&width=450",
  "https://www.petfinder.com/dog/emily-75862563/or/salem/4-all-muttkind-animal-rescue-or447/",
  "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75929026/1/?bust=1743922717&width=450",
  "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75928963/1/?bust=1743922617&width=450",
  "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75928941/1/?bust=1743922588&width=450",
  "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75925578/1/?bust=1743892093&width=450",
  "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75922935/1/?bust=1743870798&width=450",
  "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75922163/1/?bust=1743867943&width=450",
  "https://dbw3zep4prcju.cloudfront.net/animal/0043cd16-5638-4ab9-832f-c726e2cfc581/image/ca6921a2-4fa5-11e7-8fa0-128319cd1c5a.jpg?versionId=T50N64U6xPuhuXoHsb71E.4WkH0OklIL&bust=1712597287&width=450",
  "https://dbw3zep4prcju.cloudfront.net/animal/808f9dd3-e4af-4ead-8e76-10cda2f30388/image/4434db1f-4fa3-11e7-8fa0-128319cd1c5a.jpg?versionId=GWjJvJh_sKVWCXYFJqgIk41VJK6ifbJp&bust=1713281096&width=450",
  "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75929030/1/?bust=1743922695&width=450",
  "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75928946/1/?bust=1743922600&width=450",
  "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75922167/1/?bust=1743867945&width=450",
  "https://dbw3zep4prcju.cloudfront.net/animal/1760c75b-e55b-4f19-acd5-9e6b912226db/image/48c2f8b4-c751-45e7-a74f-64b6c0039302.jpg?versionId=nRf8PDhb7JqWRfhI1RZ7i_h0S4Mq.Vig&bust=1743818783&width=450",
  "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75916917/1/?bust=1743815393&width=450",
  "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75916460/1/?bust=1743812743&width=450",
  "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75914592/1/?bust=1743802211&width=450",
  "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75911786/1/?bust=1743786147&width=450",
  "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75909303/1/?bust=1743772982&width=450",
  "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75908073/1/?bust=1743762163&width=450",
  "https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/75922834/1/?bust=1743870705&width=450",
];
export default function FormProvider() {
<<<<<<< HEAD
    const [activeStep, setActiveStep] = useState(0);
    const [randomizedImages, setRandomizedImages] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [clicked, setClicked] = useState(false);
    const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
    const [errorImages, setErrorImages] = useState<Record<string, boolean>>({});
    const [fadeIn, setFadeIn] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [showIntro, setShowIntro] = useState(true);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [matchedPets, setMatchedPets] = useState(null);

    const { location, setLocation } = useContext(LocationContext);
    console.log("Location from context:", location);

=======
  const [activeStep, setActiveStep] = useState(0);
  const [randomizedImages, setRandomizedImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [clicked, setClicked] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [errorImages, setErrorImages] = useState<Record<string, boolean>>({});
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
>>>>>>> 77e55a154e9dd523539778f41159c7a04a36882f

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleContinue = () => {
    setShowIntro(false);
  };

  const handleClick = (imageUrl: string) => {
    if (clicked) return;
    setClicked(true);
    setFadeOut(true);

    setTimeout(() => {
      setSelectedImages((prev) => [...prev, imageUrl]);
      handleNext();
    }, 500);
  };

  useEffect(() => {
    const shuffled = [...listImages].sort(() => 0.5 - Math.random());
    setRandomizedImages(shuffled);
  }, []);

  const handleNext = () => {
    setIsLoading(false);
    setFadeOut(false);
    setClicked(false);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setFadeIn(false);

    setTimeout(() => {
      setFadeIn(true);
    }, 750);
  };

  const handleReset = () => {
    setActiveStep(0);
    setSelectedImages([]);
  };

  const handleImageLoad = (imageUrl: string) => {
    setLoadedImages((prev) => ({ ...prev, [imageUrl]: true }));
  };

  const handleImageError = (imageUrl: string) => {
    setErrorImages((prev) => ({ ...prev, [imageUrl]: true }));
  };

  const getCurrentImages = () => {
    if (randomizedImages.length === 0) return [];

    const startIndex = (activeStep * 4) % randomizedImages.length;

    return Array(4)
      .fill(null)
      .map((_, index) => {
        const imgIndex = (startIndex + index) % randomizedImages.length;

        return randomizedImages[imgIndex];
      });
  };

<<<<<<< HEAD
    const handleSubmitImages = async () => {
        setIsLoading(true);
        try {
            const result = await submitSelectedImages(selectedImages, location);
        
            if (result.success) {
                setMatchedPets(result.data);
            } else {
                console.error('Failed to submit images:', result.error);
            }
        } catch (error) {
            console.error('Error submitting images:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
=======
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundImage: `url("/images/background.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "2rem",
        position: "relative",
      }}
    >
      {isLoading && (
>>>>>>> 77e55a154e9dd523539778f41159c7a04a36882f
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10000,
          }}
        >
          <CircularProgress
            size={100}
            thickness={5}
            sx={{
              color: "#FFEFFD",
              filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))",
            }}
          />
        </Box>
      )}

      <Box sx={{ width: "100%", maxWidth: "1000px", mb: 4, mt: 2 }}>
        <Stepper
          activeStep={activeStep}
          sx={{
            padding: "15px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "8px",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
            "& .MuiStepIcon-root": {
              color: "#FFFFFF",
              filter: "drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.3))",
              "&.Mui-active": {
                color: "#FFEFFD",
                filter: "drop-shadow(0px 3px 5px rgba(102, 15, 129, 0.5))",
              },
              "&.Mui-completed": {
                color: "#660F81",
                filter: "drop-shadow(0px 2px 4px rgba(255, 255, 255, 0.3))",
              },
            },
            "& .MuiStepConnector-line": {
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>

      {showIntro ? (
        <Stack
          sx={{
            width: "100%",
            height: "70vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: "800px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                mb: 4,
              }}
            ></Box>
            <Box
              sx={{
                width: 475,
                height: 325,
                backgroundImage: `url("/images/yappingDogImage.png")`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />
            <Button
              variant="contained"
              onClick={handleContinue}
              sx={{
                background: "linear-gradient(to right, #a592d6, #65548f)",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.2rem",
                textTransform: "none",
                borderRadius: "24px",
                top: 50,
                paddingX: 3,
                paddingY: 1,
                "&:hover": {
                  background: "linear-gradient(to right, #baa7eb, #7f6dab)",
                  color: "#40207a",
                },
              }}
            >
              Continue
            </Button>
          </Box>
        </Stack>
      ) : (
        <Box
          sx={{
            width: "100%",
            maxWidth: "800px",
            display: "flex",
            justifyContent: "center",
            mt: 8,
          }}
        >
          {activeStep === steps.length ? (
            <Box sx={{ mt: 2, textAlign: "center", width: "100%" }}>
              <Typography variant="h5" sx={{ mt: 2, mb: 3, color: "#660F81" }}>
                Your Selected Pets
              </Typography>
              <Grid container spacing={2} justifyContent="center">
                {selectedImages.map((url, index) => (
                  <Grid item xs={6} sm={4} md={3} key={index}>
                    <Paper
                      sx={{
                        width: 140,
                        height: 140,
                        backgroundImage: `url(${url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: 2,
                        boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                        border: "2px solid #FFEFFD",
                        transition: "transform 0.2s ease",
                        "&:hover": {
                          transform: "scale(1.05)",
                        },
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ display: "flex", justifyContent: "center", pt: 4 }}>
                <Button
                  variant="contained"
                  onClick={handleReset}
                  sx={{
                    bgcolor: "#660F81",
                    "&:hover": {
                      bgcolor: "#4a0b5c",
                    },
                    boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
                  }}
                >
                  Start Again
                </Button>
              </Box>
            </Box>
          ) : (
            <Grid
              container
              spacing={3}
              justifyContent="center"
              alignItems="center"
              sx={{
                transition: "opacity 0.3s ease-in-out",
              }}
            >
              {getCurrentImages().map((imageUrl, index) => (
                <Grid
                  item
                  xs={6}
                  key={index}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Paper
                    onClick={() => handleClick(imageUrl)}
                    sx={{
                      width: "25vw",
                      height: "29vh",
                      backgroundColor: "white",
                      backgroundImage:
                        loadedImages[imageUrl] && !errorImages[imageUrl]
                          ? `url(${imageUrl})`
                          : "none",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      border: "1px solid #e0e0e0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 2,
                      mb: 2,
                      cursor: "pointer",
                      transition:
                        "opacity 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease",
                      opacity: clicked ? 0 : fadeIn ? 1 : fadeOut ? 0 : 1,
                      "&:hover": {
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        transform: "scale(1.02)",
                      },
                    }}
                    elevation={2}
                  >
                    <img
                      src={imageUrl}
                      alt="Pet"
                      onLoad={() => handleImageLoad(imageUrl)}
                      onError={() => handleImageError(imageUrl)}
                      style={{ display: "none" }}
                    />
<<<<<<< HEAD
                        <Button variant="contained"
                            onClick={handleContinue}
                            sx={{
                                background: "linear-gradient(to right, #a592d6, #65548f)",
                                color: "white",
                                fontWeight: "bold",
                                fontSize: "1.2rem",
                                textTransform: "none",
                                borderRadius: "24px",
                                top: 50,
                                paddingX: 3,
                                paddingY: 1,
                                '&:hover': {
                                    background: "linear-gradient(to right, #baa7eb, #7f6dab)",
                                    color: "#40207a"
                                }
                            }}
                        >Continue</Button>
                    </Box>
                </Box>
            ) : (
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '800px',
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 8,
                    }}
                >
                    {activeStep === steps.length ? (
                        <Box sx={{ mt: 2, textAlign: 'center', width: '100%' }}>
                            <Typography variant="h5" sx={{ mt: 2, mb: 3, color: "#660F81" }}>
                                Your Selected Pets
                            </Typography>
                            <Grid container spacing={2} justifyContent="center">
                                {selectedImages.map((url, index) => (
                                    <Grid item xs={6} sm={4} md={3} key={index}>
                                        <Paper
                                            sx={{
                                                width: 140,
                                                height: 140,
                                                backgroundImage: `url(${url})`,
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                borderRadius: 2,
                                                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                                                border: '2px solid #FFEFFD',
                                                transition: 'transform 0.2s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.05)'
                                                }
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                            <Box sx={{ display: 'flex', justifyContent: 'center', pt: 4, gap: 2 }}>
                                <Button
                                    variant="contained"
                                    onClick={handleReset}
                                    sx={{
                                        bgcolor: '#660F81',
                                        '&:hover': {
                                            bgcolor: '#4a0b5c'
                                        },
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    Start Again
                                </Button>
                                
                                <Button
                                    variant="contained"
                                    onClick={handleSubmitImages}
                                    disabled={isLoading || submitStatus === 'success'}
                                    sx={{
                                        bgcolor: '#660F81',
                                        '&:hover': {
                                            bgcolor: '#4a0b5c'
                                        },
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
                                    }}
                                >
                                    {isLoading ? 'Submitting...' : submitStatus === 'success' ? 'Submitted' : 'Find My Match'}
                                </Button>
                            </Box>
                            
                            {submitStatus === 'error' && (
                                <Typography color="error" sx={{ mt: 2 }}>
                                    There was an error submitting your selections. Please try again.
                                </Typography>
                            )}
                            
                            {matchedPets && (
                                <Box sx={{ mt: 4 }}>
                                    <Typography variant="h6" sx={{ mb: 2, color: "#660F81" }}>
                                        Matched Pets
                                    </Typography>
                                    {/* Display matched pets here */}
                                </Box>
                            )}
                        </Box>
                    ) : (
                        <Grid
                            container
                            spacing={3}
                            justifyContent="center"
                            alignItems="center"
                            sx={{
                                transition: 'opacity 0.3s ease-in-out',
                            }}
                        >
                            {getCurrentImages().map((imageUrl, index) => (
                                <Grid
                                    item
                                    xs={6}
                                    key={index}
                                    sx={{ display: 'flex', justifyContent: 'center' }}
                                >
                                    <Paper
                                        onClick={() => handleClick(imageUrl)}
                                        sx={{
                                            width: 350,
                                            height: 350,
                                            backgroundColor: 'white',
                                            backgroundImage: loadedImages[imageUrl] && !errorImages[imageUrl] ? `url(${imageUrl})` : 'none',
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                            border: '1px solid #e0e0e0',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 2,
                                            mb: 2,
                                            cursor: 'pointer',
                                            transition: 'opacity 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease',
                                            opacity: clicked ? 0 : fadeIn ? 1 : fadeOut ? 0 : 1,
                                            '&:hover': {
                                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                                transform: 'scale(1.02)',
                                            }
                                        }}
                                        elevation={2}
                                    >
                                        <img
                                            src={imageUrl}
                                            alt="Pet"
                                            onLoad={() => handleImageLoad(imageUrl)}
                                            onError={() => handleImageError(imageUrl)}
                                            style={{ display: 'none' }}
                                        />
=======
>>>>>>> 77e55a154e9dd523539778f41159c7a04a36882f

                    {!loadedImages[imageUrl] && !errorImages[imageUrl] && (
                      <CircularProgress color="secondary" />
                    )}

                    {errorImages[imageUrl] && (
                      <Typography variant="body2" color="textSecondary">
                        Error loading image
                      </Typography>
                    )}
                  </Paper>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      )}
    </Box>
  );
}
