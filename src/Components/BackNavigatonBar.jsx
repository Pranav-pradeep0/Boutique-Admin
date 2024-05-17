import { Box, IconButton } from "@mui/material";
import { ArrowLeft } from "@phosphor-icons/react";
import React from "react";

const BackNavigatonBar = ({label, onClick}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <IconButton onClick={onClick}>
        <ArrowLeft />
      </IconButton>
      <p style={{ fontWeight: 700, fontSize: "23px", marginLeft: "10px" }}>
        {label}
      </p>
    </Box>
  );
};

export default BackNavigatonBar;
