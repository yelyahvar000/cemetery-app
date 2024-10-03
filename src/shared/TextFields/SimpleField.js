import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { TextField, Box } from "@mui/material";

export const SimpleField = ({onChange, label}) => {
  return (
    <Box
      component="form"
      sx={{ "& > :not(style)": { width: "100%" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        size="small"
        onChange={onChange}
        id="outlined-basic"
        label={label}
        variant="outlined"
      />
    </Box>
  );
};
