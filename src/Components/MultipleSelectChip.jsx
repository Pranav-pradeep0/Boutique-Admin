import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name.id) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip({ options, onChange }) {
  const theme = useTheme();
  const [selectedValues, setSelectedValues] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const newValue = typeof value === "string" ? value.split(",") : value;
    setSelectedValues(newValue);
    onChange(newValue);
  };

  const getChipLabel = (value) => {
    const label = options.find((item) => item.id === value);
    return label ? label.value : "";
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <span style={{ fontWeight: 600 }}>Values</span>
      <FormControl fullWidth sx={{ minWidth: 120, backgroundColor: "#F4F4F4" }}>
        <Select
          size="small"
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedValues}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip size="small" key={value} label={getChipLabel(value)} />
              ))}
            </Box>
          )}
          sx={{
            boxShadow: "none",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.button.text,
            },
            "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.button.text,
            },
            "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: theme.palette.button.text,
              },
          }}
          MenuProps={MenuProps}
        >
          {options?.map((option) => (
            <MenuItem
              key={option.id}
              value={option.id}
              style={getStyles(option, selectedValues, theme)}
            >
              {option.value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
