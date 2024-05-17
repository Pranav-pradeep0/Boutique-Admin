import { ButtonBase, useTheme } from "@mui/material";
import React from "react";

const StyledButton = ({ label, onClick, outlined }) => {
  const theme = useTheme();

  return (
    <ButtonBase
      sx={{
        backgroundColor: outlined
          ? theme.palette.background.default
          : theme.palette.secondary.text,
        color: outlined
          ? theme.palette.secondary.text
          : theme.palette.background.default,
        borderColor: outlined && theme.palette.secondary.text,
        border: outlined && "2px solid",
        padding: "10px 20px",
        borderRadius: "10px",
        minWidth: "120px",
        fontWeight:600
      }}
      onClick={onClick}
    >
      {label}
    </ButtonBase>
  );
};

export default StyledButton;
