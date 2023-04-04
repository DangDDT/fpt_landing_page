import React, { FC } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.dark",
        color: "primary.contrastText",
        padding: "10px 5%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          src="/images/Logo_Đại_học_FPT.png"
          width={100}
          height={50}
          quality={100}
        />

        <Box sx={{ fontSize: { lg: "12px", sm: "10px", xs: "10px" } }}>
          <p>Copyright @ 2023 International Collaboration</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
