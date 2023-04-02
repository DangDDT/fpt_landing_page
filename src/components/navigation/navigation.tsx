import React, { FC } from "react";
import Box from "@mui/material/Box";
import { Link as ScrollLink } from "react-scroll";
import { navigations } from "./navigation.data";
import NextLink from "next/link";
import { Button, Fade } from "@mui/material";
import { useRouter } from "next/router";
import { ColorMenuContext } from "@/providers/context";

function Navigation({ onClick }: { onClick: VoidFunction }) {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: "40px",
      }}
    >
      {navigations.map(({ path: destination, label }) => (
        <NextLink key={destination} href={destination} passHref>
          <Button
            onClick={onClick}
            key={destination}
            disableRipple
            sx={{
              position: "relative",
              color: "primary.contrastText",
              cursor: "pointer",
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              px: { xs: 0, md: 3 },
              mb: { xs: 3, md: 0 },
              fontSize: { xs: "1.2rem", md: "inherit" },
              ...(destination === router.pathname && {
                fontWeight: "bold",
              }),
              ...(destination === "/logo" && {
                fontSize: "1.5rem",
                fontWeight: "bold",
              }),
              "& > div": { display: "none" },

              "&.current>div": { opacity: 0 },

              "&:hover": {
                fontWeight: "bold",
                "&>div": {
                  top: -5,
                  left: -10,
                  display: "block",
                  opacity: 1,
                  position: "absolute",
                  transform: "rotate(-20deg)",
                  transition: "1s all",
                },
              },
            }}
          >
            <Fade
              in={true}
              style={{ transformOrigin: "0 0 0" }}
              {...(true ? { timeout: 1000 } : {})}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 12,
                  transform: "rotate(3deg)",
                  "& img": { width: 44, height: "auto" },
                }}
              >
                {/* eslint-disable-next-line */}

                <img src="/images/airplane.png" alt="Headline curve" />
              </Box>
            </Fade>
            {label}
          </Button>
        </NextLink>
      ))}
    </Box>
  );
}

export default Navigation;
