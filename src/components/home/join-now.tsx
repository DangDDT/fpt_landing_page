import { ColorMenuContext } from "@/providers/context";
import { styled } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useContext, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const NavbarTopAnchor = styled("div")(() => ({
  display: "block",
  position: "relative",
  top: "-30px",
  visibility: "hidden",
}));
const NavbarBottomAnchor = styled("div")(() => ({
  display: "block",
  position: "relative",
  top: "0px",
  visibility: "hidden",
}));
const joinNow = () => {
  const { colorMenu, setColorMenu } = useContext(ColorMenuContext);
  const trackScrolling = useCallback(() => {
    const wrappedTopElementId = `__isTopDynamicJoinNow`;
    const wrappedTopElement = document.getElementById(wrappedTopElementId);
    if (isTop(wrappedTopElement)) {
      setColorMenu("black");
    } else if (isBottom(wrappedTopElement)) {
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
    <>
      <NavbarTopAnchor id="__isTopDynamicJoinNow">aaa</NavbarTopAnchor>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "background.light",
        }}
      ></Box>
      <NavbarBottomAnchor id="__isBottomDynamicJoinNow">aaa</NavbarBottomAnchor>
    </>
  );
};

export default joinNow;
