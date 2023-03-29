import React, { FC } from "react";
import Box from "@mui/material/Box";
import { Link as ScrollLink } from "react-scroll";
import { navigations } from "./navigation.data";
import NextLink from "next/link";
import { Button } from "@mui/material";
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

              "& > div": { display: "none" },

              "&.current>div": { display: "block" },
              // "&:hover": {
              //   color: "primary.main",
              //   "&>div": {
              //     display: "block",
              //   },
              // },
            }}
          >
            {label}
          </Button>
        </NextLink>
      ))}
    </Box>
  );
}

export default Navigation;
