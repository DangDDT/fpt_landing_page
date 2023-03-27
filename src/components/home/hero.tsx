import React, { FC } from "react";
import Box from "@mui/material/Box";
import BoxWithImageBackground from "../custom_box/box_with_image_background";
import HeroImg from "../../../public/images/home-feature.png";

function HomeHero() {
  return (
    <Box
      id="hero"
      sx={{
        backgroundColor: "Background.paper",
        position: "relative",
        height: "100vh",
        backgroundImage: `url(${HeroImg})`,
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
