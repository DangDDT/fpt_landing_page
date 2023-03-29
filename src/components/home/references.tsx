import React from "react";
import SliderCenterMode from "../slider/slider-center-mode";
import { Box, Card, Container, Fade, Slide, Typography } from "@mui/material";
import SlideScreen from "./slide-screen";
import FadeInSection from "../animations/fade-in-section";
import MentorCardItem from "../mentor/mentor-card-item";
const References = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "background.light",
        position: "relative",
      }}
    >
      <Box textAlign={"center"} pt={10}>
        <Typography
          sx={{
            fontSize: { lg: "80px", sm: "40px" },
            color: "primary.main",
            fontWeight: "bold",
          }}
        >
          {"Reference"}
        </Typography>
      </Box>
      <SliderCenterMode>
        {Array.from({ length: 8 }, (v, k) => k).map((e, index) => (
          <div className="reference">
            <Card sx={{ width: 300, height: 300, bgcolor: "#FFFFFF" }}></Card>
          </div>
        ))}
      </SliderCenterMode>
    </Box>
  );
};

export default References;
