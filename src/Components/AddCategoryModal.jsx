import { Box, InputBase, Modal, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import InputArea from "./InputArea";
import { Plus } from "@phosphor-icons/react";
import StyledButton from "./StyledButton";
import { createCategory } from "../Service/allApi";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  borderRadius: "18px",
};

const AddCategoryModal = ({ open, setOpen }) => {
  const [image, setImage] = useState();
  const [data, setData] = useState({
    categoriesName: "",
    description: "",
    status: true,
  });

  const theme = useTheme();
  const handleClose = () => setOpen(false);

  const handleImageChange = (e) => {
    const img = e.target.files[0];
    setImage(img);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
  };

  const handleAddCategory = async () => {
    const formdata = new FormData();
    formdata.append("categoriesName", data.categoriesName);
    formdata.append("description", data.description);
    formdata.append("image", image);
    formdata.append("status", data.status);

    const response = await createCategory(formdata);

    if (response.status === 201) {
      setData({
        categoriesName: "",
        description: "",
        status: true,
      });
      setImage(null);
      handleClose();
      window.location.reload();
    } else {
      alert('Please Fill all fields')
    }
  };

  console.log(data, image);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <span style={{ fontWeight: 700, fontSize: "22px" }}>
              Add New Category
            </span>
            <Box
              sx={{
                backgroundColor: "#D9D9D9",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
              }}
            >
              <input
                style={{ display: "none" }}
                type="file"
                name="image"
                id="category-file-input"
                onChange={handleImageChange}
              />
              <label
                style={{
                  marginTop: "8px",
                  marginLeft: "2px",
                  cursor: "pointer",
                }}
                htmlFor="category-file-input"
              >
                <Plus color={theme.palette.button.text} size={28} />
              </label>
            </Box>
            <Box
              sx={{ flexGrow: 1, width: "100%", display: "grid", gap: "20px" }}
            >
              <InputArea
                placeholder={"Enter Category Name"}
                name={"categoriesName"}
                onChange={handleFieldChange}
              />
              <InputBase
                name="description"
                placeholder="Enter Description"
                onChange={handleFieldChange}
                multiline
                rows={3}
                sx={{
                  backgroundColor: theme.palette.background.offPaper,
                  borderRadius: "10px",
                  padding: "8px 10px",
                  flexGrow: 1,
                  width: "100%",
                  "& ::placeholder": {
                    fontSize: "12.5px",
                  },
                }}
              />
            </Box>
            <StyledButton label={"Add"} onClick={handleAddCategory} />
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddCategoryModal;
