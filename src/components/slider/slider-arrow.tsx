import { IconButton } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/ArrowForwardIosRounded";
import NavigateBeforeIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { FC } from "react";

interface SliderArrowArrow {
  onClick?: () => void;
  type: "next" | "prev";
  className?: "string";
}

export const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type } = props;
  return (
    <IconButton
      sx={{
        position: "absolute",
        bottom: "30%",
        right: type === "next" ? "10px !important " : "unset !important",
        left: type === "prev" ? "10px !important " : "unset !important",
        zIndex: 10,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
    >
      {type === "next" ? (
        <NavigateNextIcon sx={{ fontSize: 50 }} />
      ) : (
        <NavigateBeforeIcon sx={{ fontSize: 50 }} />
      )}
    </IconButton>
  );
};
