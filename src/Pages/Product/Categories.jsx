import React from "react";
import TopBar from "../../Components/TopBar";
import CategoryTable from "../../Components/CategoryTable";

const Categories = () => {
  return (
    <div>
      <TopBar label={"Categories"} />
      <CategoryTable/>
    </div>
  );
};

export default Categories;
