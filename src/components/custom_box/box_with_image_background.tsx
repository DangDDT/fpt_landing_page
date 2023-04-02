import React, { FC } from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";

interface Props {
  textTop?: String | null;
  textBottom?: String | null;
  imageUrl?: String | null;
}

function BoxWithImageBackground({ textTop, textBottom, imageUrl }: Props) {
  return (
    <Box
      sx={{
        display: { maxWidth: 1500 },
        width: "100%",
        height: "300px",
        position: "absolute",
        bottom: "0",
        backgroundImage: "linear-gradient(#ff000000, #F27024)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: "50px",
          pl: "5%",
        }}
      >
        <Typography
          sx={{
            lineHeight: "1",
            fontSize: "95px",
            fontWeight: "bold",
            color: "primary.contrastText",
          }}
        >
          {textTop ?? "TextTop"}
        </Typography>
        <Typography
          sx={{
            lineHeight: "1",
            fontSize: "115px",
            fontWeight: "bold",
            opacity: ".9",
            color: "primary.contrastText",
          }}
        >
          {textBottom ?? "TextBottom"}
        </Typography>
      </Box>
    </Box>
  );
}

export default BoxWithImageBackground;
