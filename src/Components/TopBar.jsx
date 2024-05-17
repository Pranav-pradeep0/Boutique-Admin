import { Box, Button, IconButton, InputBase, useTheme } from "@mui/material";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react";
import React from "react";

const TopBar = ({ label, onAddButtonClick }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 30px",
      }}
    >
      <Box>
        <p style={{ fontWeight: 700, fontSize: "26px", margin: 0, padding: 0 }}>
          {label}
        </p>
      </Box>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <InputBase
          placeholder="Search"
          sx={{
            border: "#F2F2F2 1px solid",
            padding: "0px 10px",
            borderRadius: "10px",
          }}
          endAdornment={
            <IconButton>
              <MagnifyingGlass size={"22"} color="#666666" />
            </IconButton>
          }
        />
        <Button
        onClick={onAddButtonClick}
          sx={{
            backgroundColor: theme.palette.button.main,
            color: "white",
            " :hover": {
              backgroundColor: theme.palette.button.main,
            },
            borderRadius:'10px',
            paddingInline:'15px'
          }}
        >
          <Plus size={18} />
          <span
            style={{
              textTransform: "none",
              fontSize: "14px",
              marginLeft: "5px",
            }}
          >
            Add New
          </span>
        </Button>
      </Box>
    </Box>
  );
};

export default TopBar;
