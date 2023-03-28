import React from "react";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";
import { Breadcrumbs, Link as MuiLink } from "@mui/material";

interface Props {
  previousLink: { href: string; name: string }[];
  currentLink: string;
}
function BaseBreadCrumbs({ previousLink, currentLink }: Props) {
  return (
    <Breadcrumbs
      separator={
        <NavigateNextIcon fontSize="small" sx={{ color: "text.primary" }} />
      }
      aria-label="breadcrumb"
      sx={{ my: 3 }}
    >
      {previousLink.map((e) => (
        <Link href={e.href} passHref>
          <MuiLink underline="hover" color="text.primary" fontWeight={600}>
            {e.name}
          </MuiLink>
        </Link>
      ))}
      <Typography color="primary.main" fontWeight={"bold"}>
        {currentLink}
      </Typography>
    </Breadcrumbs>
  );
}
export default BaseBreadCrumbs;
