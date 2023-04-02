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
      <Box
        key={index}
        data-slick-index={index}
        className="slide-item-cover"
        style={{ borderRadius: "20px", height: "100%", width: "100%" }}
      >
        {num}
        <a href="http://localhost:3000/register">
          <Image
            src="/images/reference-img.png"
            width={200}
            height={300}
          ></Image>
        </a>
        <div className="cover"></div>
      </Box>
    ));
  const customSlider = React.createRef<Slider>();
  const goNext = () => {
    customSlider.current?.slickNext();
  };
  const goPrev = () => {
    customSlider.current?.slickPrev();
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        paddingTop: { lg: "11%", sm: "8%", xs: "5%" },
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: { lg: "60px", sm: "50px", xs: "40px" },
            color: "primary.main",
            fontWeight: "700",
          }}
        >
          REFERENCE
        </Typography>
      </Box>
      <IconButton
        onClick={() => goNext()}
        disableRipple
        sx={{
          display: { lg: "block", sm: "block", xs: "none" },
          position: "absolute",
          right: { lg: "10px", sm: "5px", xs: "0px" },
          bottom: { lg: "25%", sm: "25%", xs: "35%" },
          color: "primary.main",
        }}
      >
        <NavigateNextIcon sx={{ fontSize: 50 }} />
      </IconButton>
      <Box
        sx={{
          padding: "0% 5%",
          height: "auto",
          margin: { lg: "40px 0", sm: "40px 0", xs: "20px 0" },
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
          pauseOnHover={true}
          responsive={[
            {
              breakpoint: 1900,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false,
              },
            },
          ]}
        >
          {renderSlides()}
        </Slider>
      </Box>
      <IconButton
        onClick={() => goPrev()}
        disableRipple
        sx={{
          display: { lg: "block", sm: "block", xs: "none" },
          position: "absolute",
          left: "10px",
          bottom: { lg: "25%", sm: "25%", xs: "35%" },
          color: "primary.main",
        }}
      >
        <NavigateBeforeIcon sx={{ fontSize: 50 }} />
      </IconButton>
    </Box>
  );
};

export default ReferancesInter;
