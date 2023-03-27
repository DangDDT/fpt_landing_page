import React, { FC } from "react";
import Box from "@mui/material/Box";
import { Link as ScrollLink } from "react-scroll";
import { navigations } from "./navigation.data";
import NextLink from "next/link";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
const Navigation: FC = () => {
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
        <NextLink href={destination} passHref>
          <Button
            key={destination}
            sx={{
              position: "relative",
              color: "primary.contrastText",
              cursor: "pointer",
              fontWeight: 300,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              px: { xs: 0, md: 3 },
              mb: { xs: 3, md: 0 },
              fontSize: { xs: "1.2rem", md: "inherit" },
              ...(destination === router.pathname && {
                color: "primary.main",
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
};

export default Navigation;
