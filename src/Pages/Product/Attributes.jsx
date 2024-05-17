import React, { useState } from "react";
import TopBar from "../../Components/TopBar";
import AttributeTable from "../../Components/AttributeTable";
import AddAttributeModal from "../../Components/AddAttributeModal";

const Attributes = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <TopBar label={"Attributes"} onAddButtonClick={() => setOpen(true)} />
      <AttributeTable />
      <AddAttributeModal open={open} setOpen={setOpen} />
    </div>
  );
};

export default Attributes;
