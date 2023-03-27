import { Box } from "@mui/system";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const joinNow = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "background.light",
      }}
    >
      <Carousel>
        <Box sx={{ height: "100vh", padding: "0 20%" }}></Box>
        <div>asd</div>
        <div>asd</div>
        <div>asd</div>
      </Carousel>
    </Box>
  );
};

export default joinNow;
