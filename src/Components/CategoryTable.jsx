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
} from "@mui/material";
import { Check, CheckCircle } from "@phosphor-icons/react";

const dummyData = [
  {
    id: 1,
    category: "Baptism",
    description: "Lorem ipsum dolor sit amet consectetur.",
    status: "Active",
  },
  {
    id: 2,
    category: "Holy Communal",
    description: "Lorem ipsum dolor sit amet consectetur.",
    status: "Inactive",
  },
];

const CategoryTable = () => {
  const [selectAll, setSelectAll] = useState(false);
  const [data, setData] = useState(dummyData);
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
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
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
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>
                <Typography
                  sx={{
                    backgroundColor:
                      row.status === "Inactive"
                        ? theme.palette.error.main
                        : theme.palette.secondary.main,
                    color:
                      row.status === "Inactive"
                        ? theme.palette.error.text
                        : theme.palette.secondary.text,
                    padding: "8px",
                    borderRadius: "22px",
                    textAlign: "center",
                    textTransform: "capitalize",
                  }}
                >
                  {row.status}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CategoryTable;
