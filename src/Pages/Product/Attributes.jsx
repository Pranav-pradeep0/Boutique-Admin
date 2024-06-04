import React, { useEffect, useState } from "react";
import TopBar from "../../Components/TopBar";
import AttributeTable from "../../Components/AttributeTable";
import AddAttributeModal from "../../Components/AddAttributeModal";
import { getAttributes } from "../../Service/allApi";

const Attributes = () => {
  const [open, setOpen] = useState(false);
  const [attributeData, setAttributeData] = useState([]);
  const [editData, setEditData] = useState();

  const handleGetAttributes = async () => {
    const response = await getAttributes();
    const { data } = response;
    setAttributeData(data);
  };

  const handleEditButtonClick = (data) => {
    setEditData(data);
    setOpen(true)
  };

  useEffect(() => {
    handleGetAttributes();
  }, []);

  console.log(attributeData);

  return (
    <div>
      <TopBar label={"Attributes"} onAddButtonClick={() => setOpen(true)} />
      <AttributeTable
        tabledata={attributeData}
        onEditButtonClick={(data) => handleEditButtonClick(data)}
      />
      <AddAttributeModal open={open} setOpen={setOpen} editData={editData} />
    </div>
  );
};

export default Attributes;
