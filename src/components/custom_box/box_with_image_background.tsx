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
        width: "100%",
        height: "300px",
        position: "absolute",
        bottom: "0",
        backgroundImage: "linear-gradient(#ff000000, #F27024)",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: "50px",
        }}
      >
        <Typography
          sx={{
            lineHeight: "1",
            fontSize: "60px",
            fontWeight: "700",
            color: "primary.contrastText",
          }}
        >
          {textTop ?? "TextTop"}
        </Typography>
        <Typography
          sx={{
            lineHeight: "1",
            fontSize: "70px",
            fontWeight: "700",
            opacity: ".9",
            color: "primary.contrastText",
          }}
        >
          {textBottom ?? "TextBottom"}
        </Typography>
      </Container>
    </Box>
  );
}

export default BoxWithImageBackground;
