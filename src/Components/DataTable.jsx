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
import { Check, CheckCircle, PlusCircle } from "@phosphor-icons/react";

const dummyData = [
  {
    id: 1,
    name: "John Doe",
    product: "White dress",
    selected: false,
    rate: "1500",
    category: "Baptism",
    date: "10-04-2024",
    status: "Delivered",
  },
  {
    id: 2,
    name: "Jane Smith",
    product: "White dress",
    selected: false,
    rate: "1500",
    category: "Baptism",
    date: "10-04-2024",
    status: "Cancelled",
  },
  {
    id: 3,
    name: "Bob Johnson",
    product: "White dress",
    selected: false,
    rate: "1500",
    category: "Baptism",
    date: "10-04-2024",
    status: "Delivered",
  },
];

const DataTable = ({ data, onAddButtonClick }) => {
  const [selectAll, setSelectAll] = useState(false);
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
            <TableCell>Product</TableCell>
            <TableCell>Rate</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Attributes</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((row) => (
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
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.sellingPrice}</TableCell>
              <TableCell>{row.categoriesId}</TableCell>
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
                  {row.status ? "Available" : "Out of Stock"}
                </Typography>
              </TableCell>
              <TableCell>
                <IconButton onClick={() => onAddButtonClick(row.id)}>
                  <PlusCircle size={26} color={theme.palette.secondary.text} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
