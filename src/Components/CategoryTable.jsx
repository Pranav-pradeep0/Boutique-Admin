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
import { Check, CheckCircle, DiceThree } from "@phosphor-icons/react";

const CategoryTable = ({
  data,
  handleCheckboxChange,
  handleSelectAll,
  selectAll,
}) => {
  const theme = useTheme();

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
              <TableCell>{row.categoriesName}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>
                <Typography
                  sx={{
                    backgroundColor: row.status
                      ? theme.palette.secondary.main
                      : theme.palette.error.main,
                    color:
                      row.status
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
                <DiceThree/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CategoryTable;
