import React from "react";
import TopBar from "../../../Components/TopBar";
import DataTable from "../../../Components/DataTable";
import { useNavigate } from "react-router-dom";

const PreBookings = () => {
  const navigate = useNavigate();

  return (
    <div>
      <TopBar
        label={"PreBookings"}
        onAddButtonClick={() => navigate("prebooking-detail")}
      />
      <DataTable />
    </div>
  );
};

export default PreBookings;
