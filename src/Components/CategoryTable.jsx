import React, { Fragment, useState } from "react";
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
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Check,
  CheckCircle,
  DiceThree,
  DotsThree,
} from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const CategoryTable = ({
  data,
  handleCheckboxChange,
  handleSelectAll,
  selectAll,
  onEditButtonClick,
  onDeleteButtonClick,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

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
            <TableCell>Order ID</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Status</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
            <TableRow
              onClick={() => navigate(`/products/view/${row.id}`)}
              key={row.id}
              sx={{
                ":hover": {
                  boxShadow: "1px 17px 44px 0px rgba(3, 2, 41, 0.07)",
                },
                cursor: "pointer",
              }}
            >
              <TableCell>
                <Checkbox
                  checked={row.selected}
                  onChange={() => handleCheckboxChange(row.id)}
                />
              </TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.categoriesName}</TableCell>
              <TableCell>{row.description}</TableCell>
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
                  }}
                >
                  {row.status ? "Active" : "Inactive"}
                </Typography>
              </TableCell>
              <TableCell>
                <IconButton
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? "long-menu" : undefined}
                  aria-expanded={open ? "true" : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <DotsThree size={25} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

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
    </TableContainer>
  );
};

export default CategoryTable;
