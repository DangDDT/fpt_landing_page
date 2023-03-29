import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Container, Fade, Link as MuiLink } from "@mui/material";
import FadeInSection from "../animations/fade-in-section";

interface Props {
  textTilte?: String | null;
  textDate?: String | null;
  textDetail?: String | null;
}
function SlideScreen({ textTilte, textDate, textDetail }: Props) {
  return (
    <Box
      sx={{
        width: "85%",
        height: "100vh",
        padding: "5% 0 4% 0",
        margin: "0 auto",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {/* set left  */}
      <Box
        sx={{
          width: "60%",
          display: "flex",
          height: "100%",
          flexDirection: "column",
        }}
      >
        {/* set top content */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "10px",
            height: "30%",
          }}
        >
          <Box display={"flex"} alignItems="center" width={"100%"} gap={5}>
            <Box
              sx={{
                color: "primary.contrastText",
                fontSize: "80px",
                fontWeight: "bold",
              }}
            >
              Join Now
            </Box>
            <Box
              sx={{
                height: "1.5px",
                width: "40%",
                backgroundColor: "primary.contrastText",
              }}
            ></Box>
          </Box>
        </Box>
        {/* set bottom content */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "70%",
            width: "100%",
            justifyContent: "flex-end",
            textAlign: "left",
          }}
        >
          {/* set bottom title text */}
          <Box
            sx={{
              fontSize: "45px",
              fontWeight: "fontWeightBold",
              margin: "0",
              color: "primary.contrastText",
            }}
          >
            {textTilte}
          </Box>
          {/* set date text */}

          <Box
            sx={{
              margin: "0",
              fontSize: "30px",
              fontWeight: "fontWeightMedium",
            }}
          >
            {textDate}
          </Box>
          {/* set detail text */}

          <Box
            sx={{
              margin: "0",
              fontSize: "20px",
              fontWeight: "fontWeightBold",
            }}
          >
            {textDetail}
          </Box>
          {/* set link see detail */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Image src="/images/arrow.svg" width={180} height={30} />
            <Link href="#">
              <MuiLink
                underline="none"
                sx={{
                  fontWeight: "fontWeightRegular",
                  fontSize: "35px",
                  cursor: "pointer",
                  color: "#000",
                }}
              >
                SEE DETAIL
              </MuiLink>
            </Link>
          </Box>
        </Box>
      </Box>
      {/* set right image */}
      <Box
        sx={{
          width: "40%",
          height: "100%",
          backgroundColor: "#eaeaea",
          borderRadius: "30px",
        }}
      ></Box>
    </Box>
  );
}

export default SlideScreen;
