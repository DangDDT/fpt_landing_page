import { ColorMenuContext } from "@/providers/context";
import React, { FC, useCallback, useContext, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider, { Settings } from "react-slick";
import SlideScreen from "./slide-screen";
import { useTheme, styled } from "@mui/material/styles";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { SliderArrow } from "../slider/slider-arrow";
import SliderCommon from "../slider/slider-common";
import FadeInSection from "../animations/fade-in-section";

const NavbarTopAnchor = styled("div")(() => ({
  display: "block",
  position: "absolute",
  top: "-30px",
  visibility: "hidden",
}));
const NavbarBottomAnchor = styled("div")(() => ({
  display: "block",
  position: "absolute",
  bottom: "0px",
  visibility: "hidden",
}));

const joinNow = () => {
  const { setColorMenu } = useContext(ColorMenuContext);
  const trackScrolling = useCallback(() => {
    const wrappedTopElementId = `__isTopDynamicJoinNow`;
    const wrappedBottomElementId = `__isBottomDynamicJoinNow`;
    const wrappedTopElement = document.getElementById(wrappedTopElementId);
    const wrappedBottomElement = document.getElementById(
      wrappedBottomElementId
    );
    if (isTop(wrappedTopElement)) {
      setColorMenu("black");
    } else if (isBottom(wrappedTopElement)) {
      setColorMenu("primary");
    }
    if (isTop(wrappedBottomElement)) {
      setColorMenu("primary");
    }
  }, []);
  useEffect(() => {
    document.addEventListener("scroll", trackScrolling);
    return () => {
      document.removeEventListener("scroll", trackScrolling);
    };
  }, [trackScrolling]);
  const isTop = (el: HTMLElement | null) =>
    el && el.getBoundingClientRect().top <= 15;

  const isBottom = (el: HTMLElement | null) =>
    el && el.getBoundingClientRect().bottom >= 80;

  return (
    <Box
      sx={{
        height: "103vh",
        backgroundColor: "primary.main",
        position: "relative",
      }}
    >
      <NavbarTopAnchor id="__isTopDynamicJoinNow"></NavbarTopAnchor>
      <SliderCommon>
        {Array.from({ length: 3 }, (v, k) => k).map((e, index) => (
          <SlideScreen
            textTilte={`TEN CHUONG TRINH ${index + 1}`}
            textDate={"DD/MM/YYYY"}
            textDetail={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Nisltincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum ..."
            }
          />
        ))}
      </SliderCommon>
      <NavbarBottomAnchor id="__isBottomDynamicJoinNow"></NavbarBottomAnchor>
    </Box>
  );
};
export default joinNow;
