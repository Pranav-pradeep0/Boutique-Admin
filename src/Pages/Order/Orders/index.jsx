import React from "react";
import Orders from "./Orders";
import OrderDetails from "./OrderDetails";
import { Route, Routes } from "react-router-dom";

const OrderPages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Orders />} />
        <Route path="/order-details" element={<OrderDetails />} />
      </Routes>
    </div>
  );
};

export default OrderPages;
