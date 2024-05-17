import React from "react";
import { Route, Routes } from "react-router-dom";
import Interests from "./Interests";
import InterestDeatils from "./InterestDeatils";

const InterestsPages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Interests />} />
        <Route path="/interests-detail" element={<InterestDeatils />} />
      </Routes>
    </div>
  );
};

export default InterestsPages;
