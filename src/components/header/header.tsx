import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Logo } from "@/components/logo";
import { Navigation, AuthNavigation } from "@/components/navigation";
import { useTheme } from "@mui/material/styles";
import { Menu, Close } from "@mui/icons-material";

const Header: FC = () => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);
  const { breakpoints } = useTheme();
  const matchMobileView = useMediaQuery(breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "30px",
      }}
    >
      <Box sx={{ ml: "auto", display: { xs: "inline-flex", md: "none" } }}>
        <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
          <Menu />
        </IconButton>
      </Box>
      <Box
        sx={{
          width: "fit-content",
          display: "flex",
          padding: "5px 10px",
          //tạm
          backgroundColor: "#FE6603",
          borderRadius: "20px",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          flexDirection: { xs: "column", md: "row" },

          transition: (theme) => theme.transitions.create(["top"]),
          ...(matchMobileView && {
            py: 6,
            backgroundColor: "background.paper",
            zIndex: "appBar",
            position: "fixed",
            height: { xs: "100vh", md: "auto" },
            top: visibleMenu ? 0 : "-120vh",
            left: 0,
          }),
        }}
      >
        <Box /> {/* Magic space */}
        <Logo />
        <Navigation />
        {/* <AuthNavigation /> */}
        {visibleMenu && matchMobileView && (
          <IconButton
            sx={{
              position: "fixed",
              top: 10,
              right: 10,
            }}
            onClick={() => setVisibleMenu(!visibleMenu)}
          >
            <Close />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Header;
