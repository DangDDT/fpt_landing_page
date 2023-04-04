import { Input, makeStyles, TextField, Typography } from "@mui/material";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface props {
  name: string;
  value: any;
  mobile: boolean;
  width?: string | null;
  helperText?: ReactNode;
  placeholderText?: string | null;
  error?: boolean;
  require: boolean;
}

const InputBar = ({
  width,
  name,
  value,
  mobile,
  helperText,
  error,
  require,
  placeholderText,
  ...props
}: props) => {
  mobile = false;
  return (
    <Box sx={{ margin: " 10px 0 0 20px" }}>
      <TextField
        {...props}
        name={name}
        required={require}
        value={value}
        style={{ fontWeight: "bold" }}
        error={error}
        placeholder={placeholderText ?? "Enter your answer here"}
        variant="standard"
        InputProps={{
          disableUnderline: true,
        }}
        sx={{
          backgroundColor: "background.grey",
          width: { lg: "90%", sm: "100%", xs: "100%" },
          height: "50px",
          borderRadius: "25px",
          fontSize: "25px",
          justifyContent: "center",
          padding: " 0 20px",
          fontWeight: "bold",
        }}
      ></TextField>
      {helperText && error && (
        <Typography color={"red"}>{helperText}</Typography>
      )}
    </Box>
  );
};

export default InputBar;
