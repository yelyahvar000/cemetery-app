import * as React from "react";
import { TextField, Box, InputLabel } from "@mui/material";

export const SimpleField = ({onChange, label, type}) => {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { width: "100%" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        type={type}
        size="small"
        onChange={onChange}
        id="outlined-basic"
        label={label}
        variant="outlined"
      />
    </Box>
  );
};

export const TextFieldWithLabelOnTop = ({ onChange, label, type }) => {
  return (
    <Box fullWidth>
      <InputLabel shrink htmlFor="bootstrap-input">
        {label}
      </InputLabel>
      <TextField size="small" fullWidth id="bootstrap-input"></TextField>
    </Box>
  );
};
