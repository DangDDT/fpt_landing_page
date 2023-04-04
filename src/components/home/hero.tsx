import React, { FC } from "react";
import Box from "@mui/material/Box";
import BoxWithImageBackground from "../custom_box/box_with_image_background";
import { MessengerChat } from "react-messenger-chat-plugin";
function HomeHero() {
  return (
    <>
      <Box
        id="hero"
        sx={{
          backgroundColor: "Background.paper",
          position: "relative",
          backgroundRepeat: "none",
          height: "100vh",
          background: 'url("./images/home-hero-bg.png") no-repeat',
          backgroundSize: "cover",
          filter: "alpha(opacity=40)",
        }}
      >
        <BoxWithImageBackground
          textTop={"INTERNATIONAL"}
          textBottom={"COLLABORATION"}
        ></BoxWithImageBackground>
      </Box>
      <MessengerChat
        pageId="109268111769502"
        // language="sv_SE"
        language="vi_VN"
        themeColor={"#000000"}
        bottomSpacing={300}
        loggedInGreeting="loggedInGreeting"
        loggedOutGreeting="loggedOutGreeting"
        greetingDialogDisplay={"show"}
        debugMode={true}
      />
    </>
  );
}

export default HomeHero;
