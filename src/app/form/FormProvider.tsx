import React, { useState, useEffect, useContext } from "react";
import { Box, Stepper, Step, StepLabel, Button, Typography, Grid, Paper, Stack } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { submitSelectedImages } from "../api/form";
import { LocationContext } from "../../../context/LocationProvider";
import { useRouter } from 'next/navigation';
import { MatchContext } from "../../../context/MatchContext";
const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6", "Step 7", "Step 8", "Step 9", "Step 10"];

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
    "https://vetsonparker.com.au/wp-content/uploads/2015/04/Rabbit-Facts.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/baby-rabbit-in-meadow-royalty-free-image-1717078659.jpg?crop=0.88763xw:1xh;center,top&resize=1200:*",
    "https://hips.hearstapps.com/hmg-prod/images/rabbit-breeds-american-white-1553635287.jpg?crop=0.976xw:0.651xh;0.0242xw,0.291xh&resize=980:*",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8WOy3YTgmDw82nqVguwLV9HbN7oe32E8dRyUji-HsEWDUfitfbky5SHtwnjR7z8EaKxM&usqp=CAU",
    "https://www.omlet.us/images/originals/rabbit_breeds_angora.jpg",
    "https://img.hobbyfarms.com/tan-rabbits-scaled.jpeg",
    "https://www.bluecross.org.uk/sites/default/files/d8/styles/theme_feature_extra_large/public/assets/images/Rabbit%20-%20Landscape.jpg.webp?itok=9VTeKfQg",
    "https://cdn.pixabay.com/photo/2021/11/07/17/55/hamster-6777533_640.jpg",
    "https://media.istockphoto.com/id/675804830/photo/beige-hamster.jpg?s=612x612&w=0&k=20&c=e4P9Z3U3PVwtNEMZUCkoDkBrHr9E0XDxk9fZdDKZHZ4=",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1quRrPGeu4wyqbjEEr8VgqteyGw4MVCqiw&s",
    "https://t4.ftcdn.net/jpg/05/14/30/79/360_F_514307915_qsytMylApHJYvOn8f40Gk9ebuApHE8Pr.jpg",
    "https://cdn.mos.cms.futurecdn.net/BbHAUpLzTgPJm7zNAKd69T-1200-80.png",
    "https://www.safehavenforcats.org/images/pet_images/15861-0.jpg",
    "https://www.safehavenforcats.org/wp-content/uploads/2024/07/Kitty-in-a-Shelter.jpg",
    "https://preview.redd.it/making-a-feral-shelter-for-the-winter-and-need-guidance-v0-9bixu6c1z43c1.png?width=714&format=png&auto=webp&s=74aa95183424e2aea8fff298a6fe2ae5d8a79d60",
    "https://www.boredpanda.com/blog/wp-content/uploads/2023/03/64085c5101ac3_3mf58dr6aqz91__700.jpg",
    "https://images.squarespace-cdn.com/content/v1/5a70dd5580bd5e479fef8b8f/1633706802573-TRFEP1BM1X8BVO4DUTFX/21-cat-welfare-ohio-h3-copy5.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQQGwX5sfJGCMeEOKFRar7-DNkAto8-jYkXw&s",
    "https://s3-media0.fl.yelpcdn.com/bphoto/Zg_nrIuCoiO3-TX7f1nCXg/348s.jpg",
    "https://static.wixstatic.com/media/f4a573_428ef741e3844c81bf49be2a3bc3c68c~mv2.png/v1/fill/w_640,h_270,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f4a573_428ef741e3844c81bf49be2a3bc3c68c~mv2.png",
    "https://assets3.thrillist.com/v1/image/2717842/792x792/scale;webp=auto;jpeg_quality=60.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZ2-mmpirQ5FfvjM51XsvDBWK4ADdx6p_bQ&s"

]
    ;

export default function FormProvider() {
    const router = useRouter();
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
    const { location } = useContext(LocationContext);
    const { matches, setMatches } = useContext(MatchContext);
    console.log("Location from context:", location);

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
            setSelectedImages(prev => [...prev, imageUrl]);
            handleNext();
        }, 500);
    };

    useEffect(() => {
        const shuffled = [...listImages].sort(() => 0.5 - Math.random());
        console.log(shuffled)
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
        setLoadedImages(prev => ({ ...prev, [imageUrl]: true }));
    };

    const handleImageError = (imageUrl: string) => {
        setErrorImages(prev => ({ ...prev, [imageUrl]: true }));
    };

    const getCurrentImages = () => {
        if (randomizedImages.length === 0) return [];

        const startIndex = (activeStep * 4) % randomizedImages.length;
        const endIndex = startIndex + 4;

        return randomizedImages.slice(startIndex, endIndex);

    };

    const handleSubmitImages = async () => {
        setIsLoading(true);
        try {
            const result = await submitSelectedImages(selectedImages, location);
            if (result.success) {
                setMatches(result.data);
                console.log("Matches set to context:", result.data);
                router.push('/match');
            } else {
                console.log('Failed to submit images:', result.error);
            }
        } catch (error) {
            console.log('Error submitting images:', error);
        } finally {
            setIsLoading(false);
        }
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
                        zIndex: 10000,
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

            <Box sx={{ width: '100%', maxWidth: '1000px'}}>
                <Stepper
                    activeStep={activeStep}
                    sx={{
                        padding: '15px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px',
                        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
                        '& .MuiStepIcon-root': {
                            color: '#FFFFFF',
                            filter: 'drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.3))',
                            '&.Mui-active': {
                                color: '#FFEFFD',
                                filter: 'drop-shadow(0px 3px 5px rgba(102, 15, 129, 0.5))',
                            },
                            '&.Mui-completed': {
                                color: '#660F81',
                                filter: 'drop-shadow(0px 2px 4px rgba(255, 255, 255, 0.3))',
                            },
                        },
                        '& .MuiStepConnector-line': {
                            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
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
                <Box
                    sx={{
                        width: '100%',
                        height: '70vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                    }}>
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: '800px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                mb: 4
                            }}
                        >

                        </Box>

                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 90,
                                right: 10,
                                width: 420,
                                height: 290,
                                backgroundImage: `url("/images/pixel-speech-bubble.png")`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                zIndex: 2
                            }}
                        >
                        </Box>
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: -23,
                                lef: 0,
                                width: 400,
                                height: 270,
                                backgroundImage: `url("/images/dogImage.png")`,
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                zIndex: 1
                            }}
                        />
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

                            {matches && matches.length > 0 && (
                                <Box sx={{ mt: 4 }}>
                                    <Typography variant="h6" sx={{ mb: 2, color: "#660F81" }}>
                                        Matched Pets
                                    </Typography>
                                    <Grid container spacing={2} justifyContent="center">
                                        {matches.slice(0, 4).map((pet, idx) => (
                                            <Grid item xs={6} sm={3} key={idx}>
                                                <Paper
                                                    sx={{
                                                        width: 100,
                                                        height: 100,
                                                        backgroundImage: `url(${pet?.photos?.[0]?.small || pet?.primary_photo_cropped?.small || '/images/pet-placeholder.png'})`,
                                                        backgroundSize: "cover",
                                                        backgroundPosition: "center",
                                                        borderRadius: 2,
                                                        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                                                    }}
                                                />
                                                <Typography variant="caption" sx={{ display: 'block', mt: 1 }}>
                                                    {pet?.name || 'Pet'}
                                                </Typography>
                                            </Grid>
                                        ))}
                                    </Grid>
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
                                            //mb: 2,
                                            cursor: 'pointer',
                                            transition: 'opacity 0.5s ease, transform 0.3s ease, box-shadow 0.3s ease',
                                            opacity: clicked ? 0 : fadeIn ? 1 : fadeOut ? 0 : 1,
                                            '&:hover': {
                                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                                transform: 'scale(1.1)',
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

                                        {!loadedImages[imageUrl] && !errorImages[imageUrl] && (
                                            <CircularProgress color="secondary" />
                                        )}

                                        {errorImages[imageUrl] && (
                                            <Typography variant="body2" color="textSecondary">Error loading image</Typography>
                                        )}
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    )}
                </Box>
            )}

            {!showIntro && activeStep !== steps.length && (
                <>
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 100,  // Increased from 120 to move up
                            right: 100,   // Increased from 80 to move left
                            width: 320,
                            height: 190,
                            backgroundImage: `url("/images/pixel-speech-bubble.png")`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            zIndex: 2
                        }}
                    >
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: 300,
                            height: 170,
                            backgroundImage: `url("/images/dogImage.png")`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            zIndex: 1
                        }}
                    />
                </>
            )}
        </Box>
    );
}