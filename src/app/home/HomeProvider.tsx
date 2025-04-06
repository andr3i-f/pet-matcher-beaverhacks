import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function HomeProvider() {
    return (
        <Box
          sx={{
            width: "100vw",
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
          <Box
            sx={{
              position: "absolute", 
              bottom: 16,          
              left: 16,            
              width: 350,          
              height: 220, 
              backgroundImage: `url("/images/poweredByGemini.png")`,  
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"     
            }}
          />
          <Stack
            direction={"column"}
            alignItems={"center"}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              width={"100%"}
              height={"100%"}
            >
              <Typography variant="h1" sx={{
            background: "linear-gradient(to right, #a592d6, #65548f)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: "bold",
               }}>Pawfect Match</Typography>
               <img
                src="/images/pawImage.png"
                style={{ width: 180, height: 160 }}
               />
            </Stack>
            <Link href={"/form"}>
                <Button variant="contained"
                  sx={{
                    mt: 10,
                    background: "linear-gradient(to right, #a592d6, #65548f)",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    textTransform: "none",
                    borderRadius: "24px",
                    paddingX: 3,
                    paddingY: 1,
                    '&:hover': {
                      background: "linear-gradient(to right, #baa7eb, #7f6dab)",
                      color: "#40207a"
                    }
                  }}
                >find my fur friend</Button>
            </Link>
          </Stack>
        </Box>
      )
}