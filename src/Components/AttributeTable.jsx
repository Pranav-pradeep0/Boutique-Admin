import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  IconButton,
  useTheme,
  Typography,
  Chip,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { CheckCircle, DotsThreeVertical } from "@phosphor-icons/react";

const dummyData = [
  {
    id: 1,
    attribute: "Colour",
    values: ["White", "Pink", "Blue", "Grey"],
    status: "Active",
  },
  {
    id: 2,
    category: "Size",
    values: ["Small", "Medium", "Large"],
    status: "Inactive",
  },
];

const AttributeTable = ({
  tabledata,
  onEditButtonClick,
  onDeleteButtonClick,
}) => {

  const [selectAll, setSelectAll] = useState(false);
  const [data, setData] = useState(dummyData);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();

  const handleCheckboxChange = (id) => {
    const updatedData = data.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setData(updatedData);
    setSelectAll(updatedData.every((item) => item.selected));
  };

  const handleSelectAll = () => {
    const updatedData = data.map((item) => ({ ...item, selected: !selectAll }));
    setData(updatedData);
    setSelectAll(!selectAll);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <IconButton onClick={handleSelectAll}>
                {selectAll ? <CheckCircle weight="fill" /> : <CheckCircle />}
              </IconButton>
            </TableCell>
            <TableCell>Id</TableCell>
            <TableCell>Attribute</TableCell>
            <TableCell>Values</TableCell>
            <TableCell>Status</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tabledata?.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                ":hover": {
                  boxShadow: "1px 17px 44px 0px rgba(3, 2, 41, 0.07)",
                },
              }}
            >
              <TableCell>
                <Checkbox
                  checked={row.selected}
                  onChange={() => handleCheckboxChange(row.id)}
                />
              </TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.attribute}</TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    flexWrap: "wrap",
                    maxWidth: "100%",
                  }}
                >
                  {row.values?.map((item, ind) => (
                    <Chip
                      key={ind}
                      sx={{
                        backgroundColor: theme.palette.secondary.main,
                        color: theme.palette.secondary.text,
                        fontWeight: 550,
                      }}
                      label={item.value}
                    />
                  ))}
                </Box>
              </TableCell>
              <TableCell>
                <Typography
                  sx={{
                    backgroundColor: row.status
                      ? theme.palette.secondary.main
                      : theme.palette.error.main,
                    color: row.status
                      ? theme.palette.secondary.text
                      : theme.palette.error.text,
                    padding: "8px",
                    borderRadius: "22px",
                    textAlign: "center",
                    textTransform: "capitalize",
                    width: "130px",
                    fontWeight: 550,
                  }}
                >
                  {row.status ? "Active" : "Inactive"}
                </Typography>
              </TableCell>
              <TableCell>
                <div>
                  <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={open ? "long-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <DotsThreeVertical size={26} />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      "aria-labelledby": "long-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem
                      onClick={() => {
                        onEditButtonClick(row);
                        handleClose();
                      }}
                    >
                      Edit
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        onDeleteButtonClick(row.id);
                        handleClose();
                      }}
                    >
                      Delete
                    </MenuItem>
                  </Menu>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AttributeTable;
