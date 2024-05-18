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
} from "@mui/material";
import { Check, CheckCircle } from "@phosphor-icons/react";

const dummyData = [
  {
    id: 1,
    productName:'White dress',
    quantity:'1',
    attribute: ["White", "Small", "0 - 3 Months",],
    amount: "1200",
  },
  {
    id: 2,
    productName:'Pink dress',
    quantity:'4',
    attribute: ["Pink", "Small", "0 - 3 Months",],
    amount: "1200",
  },
];

const OrderProductDetailTable = () => {
  const [data, setData] = useState(dummyData);
  const theme = useTheme();

  return (
    <TableContainer
      sx={{
        backgroundColor: theme.palette.background.offPaper,
        borderRadius: "5px",
      }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sl No</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Attributes</TableCell>
            <TableCell>Amount</TableCell>
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
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.productName}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>
                <Box sx={{ display: "flex", gap: "5px", alignItems: "center" }}>
                  {row.attribute?.map((item, ind) => (
                    <Chip
                      sx={{
                        backgroundColor: theme.palette.button.main,
                        color: theme.palette.secondary.text,
                        fontWeight: 550,
                      }}
                      label={item}
                    />
                  ))}
                </Box>
              </TableCell>
              <TableCell>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderProductDetailTable;
