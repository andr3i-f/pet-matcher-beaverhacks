import { Box, Button, Stack, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center", 
        justifyContent: "center",
        backgroundImage: `url("/images/background.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Stack
        direction={"column"}
        alignItems={"center"}
      >
        <Typography variant="h1" sx={{ color: 
          "#660F81",
          fontWeight: "bold"
         }}>Pawfect Match</Typography>
        <Button variant="contained" sx={{
          width: "40%",
          backgroundColor: "#65548f",
          color: "#fff",      
          '&:hover': {
            backgroundColor: "#7965ab"
          }
        }} >find my fur friend</Button>
      </Stack>
    </Box>
  );
}
