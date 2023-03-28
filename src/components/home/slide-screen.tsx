import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Link as MuiLink } from "@mui/material";

interface Props {
  textTilte?: String | null;
  textDate?: String | null;
  textDetail?: String | null;
}
function slideScreen({ textTilte, textDate, textDetail }: Props) {
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
          <Box
            sx={{
              color: "primary.contrastText",
              fontSize: "40px",
              fontWeight: "fontWeightBold",
            }}
          >
            JOIN NOW
          </Box>
          <div
            style={{ height: "1.5px", width: "40%", backgroundColor: "#fff" }}
          ></div>
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
              fontWeight: "fontWeightBold",
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
                  fontWeight: "fontWeightBold",
                  fontSize: "35px",
                  cursor: "pointer",
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
          padding: "5% 0 0 8%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#eaeaea",
            borderRadius: "30px",
          }}
        ></Box>
      </Box>
    </Box>
  );
}

export default slideScreen;
