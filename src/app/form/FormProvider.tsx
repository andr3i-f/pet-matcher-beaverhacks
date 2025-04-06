"use client"

import React, { useState, useEffect } from "react";
import { Box, Stepper, Step, StepLabel, Button, Typography, Grid, Paper, Stack } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7", "Step 8", "Step 9", "Step 10",];

// Replace the listImages array with more reliable image URLs
const listImages = [
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
    "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg",
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
    "https://images.pexels.com/photos/1663407/pexels-photo-1663407.jpeg",
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
    "https://images.pexels.com/photos/8036973/pexels-photo-8036973.jpeg"
];

export default function FormProvider() {
    const [activeStep, setActiveStep] = useState(0);
    const [randomizedImages, setRandomizedImages] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const shuffled = [...listImages].sort(() => 0.5 - Math.random());
        setRandomizedImages(shuffled);
    }, []);

    const handleNext = () => {
        setIsLoading(false);  
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const ImagePlaceholder = ({ imageUrl }: { imageUrl: string }) => {
        const [clicked, setClicked] = useState(false);
        const [imageLoaded, setImageLoaded] = useState(false);
        const [imageError, setImageError] = useState(false);
        const [fadeIn, setFadeIn] = useState(false);

        useEffect(() => {
            const timer = setTimeout(() => {
                setFadeIn(true);
            }, 100); 

            return () => clearTimeout(timer);
        }, []);

        const handleClick = () => {
            if (clicked) return;
            setClicked(true);

            setTimeout(() => {
                handleNext();
            }, 500);
        };

        return (
            <Paper
                onClick={handleClick}
                sx={{
                    width: 350,
                    height: 350,
                    backgroundColor: 'white',
                    backgroundImage: imageLoaded && !imageError ? `url(${imageUrl})` : 'none',
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
                    opacity: clicked ? 0 : fadeIn ? 1 : 0, 
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
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageError(true)}
                    style={{ display: 'none' }}
                />

                {!imageLoaded && !imageError && (
                    <CircularProgress color="secondary" />
                )}

                {imageError && (
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="body2" color="error">
                            Image could not be loaded
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
                            Click to continue anyway
                        </Typography>
                    </Box>
                )}
            </Paper>
        );
    };

    const getCurrentImages = () => {
        if (randomizedImages.length === 0) return [];

        const startIndex = (activeStep * 4) % randomizedImages.length;

        return Array(4).fill(null).map((_, index) => {
            const imgIndex = (startIndex + index) % randomizedImages.length;
            return randomizedImages[imgIndex];
        });
    };

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
                position: "relative"  
            }}
        >
            {isLoading && (
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 10000,  // Very high z-index
                    }}
                >
                    <CircularProgress
                        size={100}
                        thickness={5}
                        sx={{
                            color: '#FFEFFD',
                            filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.5))'
                        }}
                    />
                </Box>
            )}

            <Box sx={{ width: '100%', maxWidth: '1000px', mb: 4, mt: 4 }}>
                <Stepper
                    activeStep={activeStep}
                    sx={{
                        '& .MuiStepIcon-root': {
                            color: '#FFFFFF',
                            '&.Mui-active': {
                                color: '#FFEFFD',
                            },
                            '&.Mui-completed': {
                                color: '#660F81',
                            },
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

            <Box
                sx={{
                    width: '100%',
                    maxWidth: '800px', // Reduced max width to make the 2x2 grid more compact
                    display: 'flex',
                    justifyContent: 'center',
                    mt: 8,
                }}
            >
                {activeStep === steps.length ? (
                    <Box sx={{ mt: 2, textAlign: 'center' }}>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            Done !
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', pt: 2 }}>
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
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
                                xs={6}  // Each item takes half the width (2 columns per row)
                                key={index}
                                sx={{ display: 'flex', justifyContent: 'center' }}
                            >
                                <ImagePlaceholder imageUrl={imageUrl} />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Box>

        </Box>
    );
}