import React from "react";
import { Route, Routes } from "react-router-dom";
import PreBookings from "./PreBookings";
import PreBookingDetails from "./PreBookingDetails";

const PreBookinPages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PreBookings />} />
        <Route path="/prebooking-detail" element={<PreBookingDetails />} />
      </Routes>
    </div>
  );
};

export default PreBookinPages;
