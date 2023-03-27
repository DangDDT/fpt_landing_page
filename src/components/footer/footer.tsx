import React, { FC } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { FooterNavigation, FooterSocialLinks } from "@/components/footer";

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "primary.main",
        py: { xs: 6, md: 10 },
        color: "primary.contrastText",
      }}
    >
      <Container>
        <Box></Box>
      </Container>
    </Box>
  );
};

export default Footer;
