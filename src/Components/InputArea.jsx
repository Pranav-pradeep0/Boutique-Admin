import { InputBase, TextField, useTheme } from "@mui/material";
import React from "react";

const InputArea = ({ label }) => {
  const theme = useTheme();
  return (
    <div
      style={{
        display: "grid",
        gap: "10px",
      }}
    >
      <span style={{ fontWeight: 600 }}>{label}</span>
      <InputBase
        fullWidth
        size="small"
        sx={{
          backgroundColor: theme.palette.background.offPaper,
          borderRadius: "10px",
          padding: "8px 10px",
        }}
      />
    </div>
  );
};

export default InputArea;
