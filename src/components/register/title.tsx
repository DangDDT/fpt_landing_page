import { Box } from "@mui/system";
import React from "react";

interface props {
  number: string;
  title: string;
}
const Title = ({ number, title }: props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "5px",
        color: "primary.main",
        marginTop: "20px",
      }}
    >
      <p style={{ fontWeight: "500", fontSize: "20px" }}>{number}.</p>
      <p style={{ fontWeight: "500", fontSize: "20px" }}>{title} :</p>
    </Box>
  );
};

export default Title;
