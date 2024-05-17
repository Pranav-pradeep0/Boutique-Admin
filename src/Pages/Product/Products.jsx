import React from "react";
import TopBar from "../../Components/TopBar";
import DataTable from "../../Components/DataTable";
import { Box } from "@mui/material";

const Products = () => {
  return (
    <div>
      <TopBar label={"Products"} />
      <Box>
        <DataTable />
      </Box>
    </div>
  );
};

export default Products;
