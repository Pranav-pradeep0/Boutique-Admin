import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

const SelectDropdown = ({
  onChange,
  floatingLabel,
  label,
  borderd,
  variant,
  options,
  disabled
  // value
}) => {
  // const [selectedValue, setSelectedValue] = useState("");
  const theme = useTheme();

  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };

  return (
    <Box sx={{ display: "grid", gap: "10px" }}>
      {label && <span style={{ fontWeight: 600 }}>{label}</span>}
      <FormControl
        fullWidth
        sx={{
          backgroundColor: variant === "light" ? "white" : "#F4F4F4",
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
          disabled={disabled}
          size="small"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={value}
          label={floatingLabel && floatingLabel}
          onChange={onChange}
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
            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.button.text,
              border: !borderd && "none",
            },
          }}
        >
          {options?.map((item, ind) => (
            <MenuItem key={ind} value={item.value ? item.value : item}>
              {item.option ? item.option : item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectDropdown;
