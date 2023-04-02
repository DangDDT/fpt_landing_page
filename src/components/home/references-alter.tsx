import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import SliderCommon from "../slider/slider-common";
import SlideScreen from "./slide-screen";
import Slider from "react-slick";
import SlickSliderCenter from "../slider/slick-slider-center-mode";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderArrow } from "../slider/slider-arrow";
import NavigateNextIcon from "@mui/icons-material/ArrowForwardIosRounded";
import NavigateBeforeIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Image from "next/image";

const ReferancesInter = () => {
  const renderSlides = () =>
    Array.from({ length: 8 }, (v, k) => k).map((num, index) => (
      <div
        key={index}
        data-slick-index={index}
        className="slide-item-cover"
        style={{ borderRadius: "20px", height: "100%", width: "100%" }}
      >
        {num}
        <a href="http://localhost:3000/register">
          <Image
            src="/images/reference-img.png"
            width={220}
            height={300}
          ></Image>
        </a>
        <div className="cover"></div>
      </div>
    ));
  const customSlider = React.createRef<Slider>();
  const goNext = () => {
    customSlider.current?.slickNext();
  };
  const goPrev = () => {
    customSlider.current?.slickPrev();
  };

  return (
    <Box sx={{ position: "relative", height: "100vh", paddingTop: "11%" }}>
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{ fontSize: "60px", color: "primary.main", fontWeight: "700" }}
        >
          REFERENCE
        </Typography>
      </Box>
      <IconButton
        onClick={() => goNext()}
        disableRipple
        sx={{
          position: "absolute",
          right: "10px",
          bottom: "25%",
          color: "primary.main",
        }}
      >
        <NavigateNextIcon sx={{ fontSize: 50 }} />
      </IconButton>
      <Box
        sx={{
          padding: "0% 5%",
          height: "auto",
          margin: "40px 0",
          textAlign: "center",
        }}
      >
        <Slider
          className="refer-slide"
          ref={customSlider}
          slidesToShow={5}
          slidesToScroll={1}
          arrows={false}
          dots={false}
          focusOnSelect={true}
          centerMode={true}
          infinite={true}
          centerPadding={"0px"}
          autoplay={false}
          speed={500}
          // lazyLoad={"progressive"}
          pauseOnHover={true}
        >
          {renderSlides()}
        </Slider>
      </Box>
      <IconButton
        onClick={() => goPrev()}
        disableRipple
        sx={{
          position: "absolute",
          left: "10px",
          bottom: "25%",
          color: "primary.main",
        }}
      >
        <NavigateBeforeIcon sx={{ fontSize: 50 }} />
      </IconButton>
    </Box>
  );
};

export default ReferancesInter;
