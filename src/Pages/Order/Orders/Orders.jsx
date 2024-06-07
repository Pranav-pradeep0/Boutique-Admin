import React, { useEffect, useState } from "react";
import TopBar from "../../../Components/TopBar";
import DataTable from "../../../Components/DataTable";
import { useNavigate } from "react-router-dom";
import OrderDataTable from "../../../Components/OrderDataTable";
import { getAllOrders } from "../../../Service/allApi";

const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState();

  const fetchAllOrders = async () => {
    const response = await getAllOrders();
    setOrders(response.data);
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div>
      <TopBar
        label={"Orders"}
        onAddButtonClick={() => navigate("create-order")}
      />
      <OrderDataTable data={orders} setData={setOrders} />
    </div>
  );
};

export default Orders;
