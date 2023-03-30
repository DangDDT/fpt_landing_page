import { Box, useMediaQuery, useTheme } from "@mui/material";
import { FC, ReactNode } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { Pagination, Navigation } from "swiper";
import React from "react";
import { SliderArrow } from "./slider-arrow";
interface Props {
  children: ReactNode;
}
const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return (
    <SliderArrow onClick={() => swiper.slidePrev()} type={"prev"}></SliderArrow>
  );
};
const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <SliderArrow onClick={() => swiper.slideNext()} type={"next"}></SliderArrow>
  );
};
const SliderCenterMode: FC<Props> = ({ children }: Props) => {
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={60}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperButtonPrev />
        {children}
        <SwiperButtonNext />
      </Swiper>
    </>
  );
};
export default SliderCenterMode;
