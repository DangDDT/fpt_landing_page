import React from "react";
import {
  MessengerChat,
  showMessenger,
  hideMessenger,
  showDialog,
  hideDialog,
} from "react-messenger-chat-plugin";

const ChatBox = () => {
  return (
    <>
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
};

export default ChatBox;
