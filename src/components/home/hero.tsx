import React, { FC } from "react";
import Box from "@mui/material/Box";
import BoxWithImageBackground from "../custom_box/box_with_image_background";
function HomeHero() {
  return (
    <Box
      id="hero"
      sx={{
        backgroundColor: "Background.paper",
        position: "relative",
        backgroundRepeat: "none",
        height: "100vh",
        background: 'url("./images/home-hero-bg.png") no-repeat',
        backgroundSize: "cover",
        filter: "alpha(opacity=40)",
      }}
    >
      <BoxWithImageBackground
        textTop={"INTERNATIONAL"}
        textBottom={"COLLABORATION"}
      ></BoxWithImageBackground>
    </Box>
  );
}

export default HomeHero;
