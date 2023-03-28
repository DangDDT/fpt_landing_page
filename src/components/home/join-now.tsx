import { ColorMenuContext } from "@/providers/context";
import { Box } from "@mui/system";
import React, { FC, useCallback, useContext, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider, { Settings } from "react-slick";
import SlideScreen from "./slide-screen";
import { useTheme, styled } from "@mui/material/styles";
import { IconButton, useMediaQuery } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/ArrowForwardIosRounded";
import NavigateBeforeIcon from "@mui/icons-material/ArrowBackIosNewRounded";
const NavbarTopAnchor = styled("div")(() => ({
  display: "block",
  position: "absolute",
  top: "0px",
  visibility: "hidden",
}));
const NavbarBottomAnchor = styled("div")(() => ({
  display: "block",
  position: "absolute",
  bottom: "0px",
  visibility: "hidden",
}));

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
interface SliderArrowArrow {
  onClick?: () => void;
  type: "next" | "prev";
  className?: "string";
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type } = props;
  return (
    <IconButton
      sx={{
        position: "absolute",
        bottom: "30%",
        right: type === "next" ? "10px !important " : "unset !important",
        left: type === "prev" ? "10px !important " : "unset !important",
        zIndex: 10,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
    >
      {type === "next" ? (
        <NavigateNextIcon sx={{ fontSize: 50 }} />
      ) : (
        <NavigateBeforeIcon sx={{ fontSize: 50 }} />
      )}
    </IconButton>
  );
};
const joinNow = () => {
  const { breakpoints } = useTheme();
  // const matchMobileView = useMediaQuery(breakpoints.down("sm"));
  const { colorMenu, setColorMenu } = useContext(ColorMenuContext);

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
  };
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
    <Box
      sx={{
        height: "103vh",
        backgroundColor: "orange",
        position: "relative",
      }}
    >
      <NavbarTopAnchor id="__isTopDynamicJoinNow"></NavbarTopAnchor>

      <Slider {...sliderConfig}>
        <SlideScreen
          textTilte={"TEN CHUONG TRINH 1"}
          textDate={"DD/MM/YYYY"}
          textDetail={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Nisltincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum ..."
          }
        />

        <SlideScreen
          textTilte={"TEN CHUONG TRINH 2"}
          textDate={"DD/MM/YYYY"}
          textDetail={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Nisltincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum ..."
          }
        />
        <SlideScreen
          textTilte={"TEN CHUONG TRINH 3"}
          textDate={"DD/MM/YYYY"}
          textDetail={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Nisltincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum ..."
          }
        />
      </Slider>
      <NavbarBottomAnchor id="__isBottomDynamicJoinNow"></NavbarBottomAnchor>
    </Box>
  );
};
export default joinNow;
