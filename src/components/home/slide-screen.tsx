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
        width: { lg: "85%", sm: "90%", xs: "100%" },
        height: "100vh",
        padding: { lg: "5% 0 4% 0", sm: "2% 0 1% 0", xs: "5% 0 5% 0" },
        margin: "0 auto",
        display: "flex",
        flexDirection: { lg: "row", sm: "column", xs: "column" },
      }}
    >
      {/* set left  */}
      <Box
        sx={{
          width: { lg: "60%", sm: "100%", xs: "100%" },
          padding: { lg: "0", sm: "0 4%", xs: " 0 2%" },
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
                fontSize: { lg: "80px", sm: "40px", xs: "40px" },
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
            justifyContent: { lg: "flex-end", sm: "left", xs: "left" },
            textAlign: "left",
          }}
        >
          {/* set bottom title text */}
          <Box
            sx={{
              fontSize: { lg: "45px", sm: "35px", xs: "25px" },
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
              fontSize: { lg: "30px", sm: "20px", xs: "20px" },
              fontWeight: "fontWeightMedium",
            }}
          >
            {textDate}
          </Box>
          {/* set detail text */}

          <Box
            sx={{
              margin: "0",
              fontSize: { lg: "20px", sm: "15px", xs: "15px" },
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
              justifyContent: { lg: "left", sm: "center", xs: "right" },
              marginTop: "20px",
              margin: { sm: "30px" },
            }}
          >
            <Image src="/images/arrow.svg" width={180} height={30} />
            <Link href="#">
              <MuiLink
                underline="none"
                sx={{
                  fontWeight: "fontWeightRegular",
                  fontSize: { lg: "35px", sm: "25px", xs: "25px" },
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
          width: { lg: "40%", sm: "100%", xs: "100%" },
          display: { lg: "block", sm: "block", xs: "block" },
          marginTop: { lg: 0, sm: "20px", xs: "20px" },
          textAlign: "center",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#eaeaea",
            height: "100%",
            width: { lg: "100%", sm: "80%", xs: "80%" },
            margin: "0px auto",
            borderRadius: "30px",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default SlideScreen;
