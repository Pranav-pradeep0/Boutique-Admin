import React from "react";
import TopBar from "../../../Components/TopBar";
import DataTable from "../../../Components/DataTable";
import { useNavigate } from "react-router-dom";
import OrderDataTable from "../../../Components/OrderDataTable";

const Orders = () => {
  const navigate = useNavigate();

  return (
    <div>
      <TopBar
        label={"Orders"}
        onAddButtonClick={() => navigate("create-order")}
      />
      <OrderDataTable />
    </div>
  );
};

export default Orders;
