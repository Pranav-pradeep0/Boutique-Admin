import { InputBase, useTheme, Typography } from "@mui/material";
import React from "react";

const TopLabeledInputField = ({ label, placeholder, onChange }) => {
  const theme = useTheme();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", flexGrow:1 }}>
      <span
        style={{
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        {label}
      </span>
      <InputBase
        onChange={onChange}
        fullWidth
        placeholder={placeholder}
        sx={{
          backgroundColor: theme.palette.background.offPaper,
          padding: "5px 15px",
          borderRadius: "10px",
        }}
      />
    </div>
  );
};

export default TopLabeledInputField;
