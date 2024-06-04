import React, { useEffect, useState } from "react";
import TopBar from "../../Components/TopBar";
import CategoryTable from "../../Components/CategoryTable";
import { getAllCategories } from "../../Service/allApi";
import AddCategoryModal from "../../Components/AddCategoryModal";

const Categories = ({ data, setData }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const [selectAll, setSelectAll] = useState(false);

  const handleCheckboxChange = (id) => {
    const updatedData = data?.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setData(updatedData);
    setSelectAll(updatedData.every((item) => item?.selected));
  };

  const handleSelectAll = () => {
    const updatedData = data?.map((item) => ({
      ...item,
      selected: !selectAll,
    }));
    setData(updatedData);
    setSelectAll(!selectAll);
  };

  return (
    <div>
      <TopBar
        label={"Categories"}
        onAddButtonClick={() => setModalOpen(true)}
      />
      <CategoryTable
        data={data}
        handleCheckboxChange={handleCheckboxChange}
        handleSelectAll={handleSelectAll}
        selectAll={selectAll}
      />
      <AddCategoryModal open={modalOpen} setOpen={setModalOpen} />
    </div>
  );
};

export default Categories;
