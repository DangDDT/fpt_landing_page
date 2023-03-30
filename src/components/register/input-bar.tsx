import { Input, makeStyles, TextField, Typography } from "@mui/material";
import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface props {
  name: string;
  value: any;
  width?: string | null;
  helperText?: ReactNode;
  error?: boolean;
  require: boolean;
}

const InputBar = ({
  width,
  name,
  value,
  helperText,
  error,
  require,
  ...props
}: props) => {
  const placeholderText = "Enter your answer here";

  return (
    <Box sx={{ margin: " 10px 0 0 20px" }}>
      <TextField
        {...props}
        name={name}
        required={require}
        value={value}
        error={error}
        placeholder={placeholderText}
        variant="standard" // <== changed this
        InputProps={{
          disableUnderline: true, // <== change this
        }}
        sx={{
          backgroundColor: "background.grey",
          width: width ? width : "100%",
          height: "50px",
          borderRadius: "25px",
          fontSize: "25px",
          justifyContent: "center",
          padding: " 0 20px",
        }}
      ></TextField>
      {helperText && error && (
        <Typography color={"red"}>{helperText}</Typography>
      )}
    </Box>
  );
};

export default InputBar;
