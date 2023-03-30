import React from "react";
import { Box, Card, Container, Fade, Slide, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/ArrowForwardIosRounded";
import NavigateBeforeIcon from "@mui/icons-material/ArrowBackIosNewRounded";

import { SwiperSlide, useSwiper } from "swiper/react";
import { SliderArrow } from "../slider/slider-arrow";
import SliderCenterMode from "../slider/slider-center-mode";
const References = () => {
  const swiper = useSwiper();
  return (
    <Container maxWidth="xl" sx={{ position: "relative" }}>
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
        <Box sx={{ height: 300 }}>
          <SliderCenterMode>
            {Array.from({ length: 8 }, (v, k) => k).map((e, index) => (
              <SwiperSlide key={index}>
                <img
                  key={index}
                  src={
                    "https://hcmuni.fpt.edu.vn/Data/Sites/1/media/2020-kim-vi/seo/campus/1-truong-dai-hoc-fpt-tphcm/truong-dai-hoc-fpt-tp-hcm-(1).jpg"
                  }
                ></img>
              </SwiperSlide>
            ))}
          </SliderCenterMode>
        </Box>
      </Box>
    </Container>
  );
};

export default References;
