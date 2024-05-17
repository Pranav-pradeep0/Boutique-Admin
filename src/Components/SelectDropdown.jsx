import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const SelectDropdown = ({ floatingLabel, label, borderd }) => {
  const [colour, setColour] = useState("");
  const theme = useTheme();

  const handleChange = (event) => {
    setColour(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "grid",
        gap: "10px",
      }}
    >
      {label && <span style={{ fontWeight: 600 }}>{label}</span>}
      <FormControl
        fullWidth
        sx={{
          backgroundColor: "#F4F4F4",
          padding: !borderd && "2px",
          borderRadius: !borderd && "10px",
        }}
      >
        {floatingLabel && (
          <InputLabel size="small" id="demo-simple-select-label">
            {floatingLabel}
          </InputLabel>
        )}
        <Select
          fullWidth
          size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={colour}
          label={floatingLabel && floatingLabel}
          onChange={handleChange}
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.button.text,
              border: !borderd && "none",
            },
            "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.button.text,
              border: !borderd && "none",
            },
            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: theme.palette.button.text,
                border: !borderd && "none",
              },
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectDropdown;
