import { Box } from "@mui/material";
import MatchCelebration from "./matchPopup";

export default function Page() {
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
        backgroundRepeat: "no-repeat",
      }}
    >
      <MatchCelebration
        petName="Fluffy"
        image="https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_1280.jpg"
      />
    </Box>
  );
}
