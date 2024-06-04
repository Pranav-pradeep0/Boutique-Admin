import { InputBase, TextField, useTheme } from "@mui/material";
import React from "react";

const InputArea = ({
  label,
  placeholder,
  varient,
  onChange,
  name,
  value,
  disabled,
}) => {
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
        disabled={disabled}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        fullWidth
        size="small"
        sx={{
          backgroundColor:
            varient === "light"
              ? theme.palette.background.default
              : theme.palette.background.offPaper,
          borderRadius: "10px",
          padding: "8px 10px",
          "& ::placeholder": {
            fontSize: "12.5px",
          },
        }}
      />
    </div>
  );
};

export default InputArea;
