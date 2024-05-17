import React from "react";
import TopBar from "../../../Components/TopBar";
import DataTable from "../../../Components/DataTable";

const Orders = () => {
  return (
    <div>
      <TopBar label={"Orders"} />
      <DataTable />
    </div>
  );
};

export default Orders;
