import React from "react";
import TopBar from "../../../Components/TopBar";
import DataTable from "../../../Components/DataTable";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();

  return (
    <div>
      <TopBar
        label={"Orders"}
        onAddButtonClick={() => navigate("order-details")}
      />
      <DataTable />
    </div>
  );
};

export default Orders;
