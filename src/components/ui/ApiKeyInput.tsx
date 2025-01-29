import Box from "@mui/material/Box";
import React from "react";
import TextField from "@mui/material/TextField";

interface ApiKeyInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ value, onChange }) => {
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="API Key"
        variant="outlined"
        fullWidth
        value={value}
        onChange={onChange}
        placeholder="Enter OpenAI API Key"
        required
      />
    </Box>
  );
};

export default ApiKeyInput;
