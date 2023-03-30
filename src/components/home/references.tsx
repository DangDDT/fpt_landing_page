import React, { useRef } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Fade,
  Slide,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/ArrowForwardIosRounded";
import NavigateBeforeIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { Swiper, useSwiper, SwiperSlide } from "swiper/react";
import { SliderArrow } from "../slider/slider-arrow";
import SliderCenterMode from "../slider/slider-center-mode";

// const SwiperButtonPrev = () => {
//   const swiper = useSwiper();
//   return (
//     <SliderArrow onClick={() => swiper.slidePrev} type={"prev"}></SliderArrow>
//   );
// };
// const SwiperButtonNext = () => {
//   const swiper = useSwiper();
//   return (
//     <SliderArrow onClick={() => swiper.slideNext} type={"next"}></SliderArrow>
//   );
// };

const References = () => {
  const swiper = useSwiper();
  const swiperRef = useRef();
  return (
    <Box sx={{ position: "relative", height: "100vh" }}>
      {/* <SwiperButtonPrev /> */}

      <Container
        sx={{
          height: "300px",
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

        <Button onClick={() => swiper.slidePrev()}>Prev</Button>

        <SliderCenterMode>
          <Swiper>
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
          </Swiper>
        </SliderCenterMode>
      </Container>
      {/* <SwiperButtonNext /> */}
    </Box>
  );
};

export default References;
