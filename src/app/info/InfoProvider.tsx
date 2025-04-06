import { Box, Button, Link, Stack, Typography } from "@mui/material";

export default function InfoProvider() {
    return <Box
    sx={{
      width: "100vw",
      minHeight: "100vh",
      display: "flex",
      alignItems: "start", // changed from "start" ✅
      justifyContent: "center",
      backgroundImage: `url("/images/background.png")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative" // so children with position: absolute work
    }}
  >
    <Box
      sx={{
        position: "absolute",
        left: 16,
        width: 250,
        height: "100vh",
        backgroundImage: `url("/images/borderimage.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
    <Box
      sx={{
        position: "absolute",
        right: 16,
        width: 250,
        height: "100vh",
        backgroundImage: `url("/images/borderimage.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
    
    {/* Centered Content */}
    <Stack
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"} // ensures children like button and text are centered
      sx={{ textAlign: "center", px: 2, height: "100vh" }}
    >
      <Typography
        variant="h3"
        sx={{
          justifySelf: "start",
          background: "linear-gradient(to right, #a592d6, #65548f)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontWeight: "bold",
          mt: 15
        }}
      >
        How does Pawfect Match work?
      </Typography>
      
      <Typography
        sx={{
          color: "rgb(77, 64, 108)",
          maxWidth: "60%",
          mt: 3,
        }}
      >
        Pawfect Match works by building a user profile from selecting preferred pets.
        The user profile is then utilized to find local sheltered pets.
      </Typography>
  
      <Link href="/form" underline="none">
        <Button
          variant="contained"
          sx={{
            mt: 10,
            background: "linear-gradient(to right, #a592d6, #65548f)",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textTransform: "none",
            borderRadius: "24px",
            px: 3,
            py: 1,
            '&:hover': {
              background: "linear-gradient(to right, #baa7eb, #7f6dab)",
              color: "#40207a"
            }
          }}
        >
          find my fur friend
        </Button>
      </Link>
    </Stack>
  </Box>
}