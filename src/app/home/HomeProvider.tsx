import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function HomeProvider() {
    return (
      <Box
      sx={{
        width: "100vw",
        minHeight: "200vh",
        backgroundImage: `url("/images/longBackground.png")`,
        backgroundSize: "cover",
        top: 0,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
        px: 2,
        pt: 30,
      }}
    >
          <Box
      sx={{
        position: "absolute",
        left: 16,
        width: 250,
        height: "200vh",
        top: 0,
        backgroundImage: `url("/images/borderimage.png")`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    />
    <Box
      sx={{
        position: "absolute",
        right: 16,
        width: 250,
        height: "200vh",
        top: 0,
        backgroundImage: `url("/images/borderimage.png")`,
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
      }}
    />
          <Stack
            direction={"column"}
            alignItems={"center"}
          >
              <Typography variant="h1" sx={{
            background: "linear-gradient(to right, #a592d6, #65548f)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontWeight: "bold",
               }}>Pawfect Match</Typography>
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
            <Box
            sx={{           
              mt: 20,
              width: 350,          
              height: 220, 
              backgroundImage: `url("/images/poweredByGemini.png")`,  
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"     
            }}
          />
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
          maxWidth: "45%",
          mt: 3,
        }}
      >
        Pawfect Match works by building a user profile from selecting preferred pets.
        The user profile is then utilized to find local sheltered pets.
      </Typography>

      <Typography variant="h4"
        sx={{
          justifySelf: "start",
          background: "#65548f",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontWeight: "bold",
          mt: 40
        }}
      >
        Made by:
      </Typography>
      <Stack
        direction={"row"}
        spacing={3}
        mt={2}
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
          </Stack>
        </Box>
      )
}