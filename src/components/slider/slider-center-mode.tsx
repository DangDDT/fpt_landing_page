import { Box, useMediaQuery, useTheme } from "@mui/material";
import { FC, ReactNode } from "react";
import Slider, { Settings } from "react-slick";
import { SliderArrow } from "./slider-arrow";

interface Props {
  children: ReactNode;
}

const SliderCenterMode: FC<Props> = ({ children }: Props) => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));
  const sliderConfig: Settings = {
    className: "center",
    centerMode: true,
    centerPadding: "40px",
    infinite: false,
    slidesToShow: matchMobileView ? 1 : 3,
    speed: 500,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
  };
  return <Slider {...sliderConfig}>{children}</Slider>;
};
export default SliderCenterMode;
