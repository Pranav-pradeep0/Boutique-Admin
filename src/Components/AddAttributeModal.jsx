import {
  Box,
  Button,
  IconButton,
  InputBase,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import { PlusCircle, XCircle } from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { createAttribute } from "../Service/allApi";
import { capitalizeFirstLetter } from "../utils/utils";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "30px",
};

const AddAttributeModal = ({ open, setOpen, editData }) => {
  const [attributeName, setAttributeName] = useState("");
  const [attributeValues, setAttributeValues] = useState([""]);

  const theme = useTheme();

  const handleClose = () => setOpen(false);

  const handleAddValueField = () => {
    setAttributeValues((value) => [...value, ""]);
  };

  const handleAttributeNameFieldChange = (e) => {
    setAttributeName(capitalizeFirstLetter(e.target.value));
  };

  const handleRemoveValueField = (indexToRemove) => {
    if (indexToRemove < 1) {
      setAttributeValues((values) =>
        values.map((value, index) => (index === indexToRemove ? "" : value))
      );
    } else {
      setAttributeValues((values) =>
        values.filter((_, index) => index !== indexToRemove)
      );
    }
  };

  const handleChangeValue = (index, event) => {
    const { value } = event.target;
    setAttributeValues((values) =>
      values.map((v, i) => (i === index ? capitalizeFirstLetter(value) : v))
    );
  };

  const handleAttributeAdd = async () => {
    const data = {
      attributeName,
      value: attributeValues,
    };
    const response = await createAttribute(data);
    if (response.status === 200) {
      handleClose();
      setAttributeValues([""]);
      setAttributeName("");
      window.location.reload();
    }
    console.log(response);
  };

  // useEffect(() => {
  //   if (editData) {
  //     setAttributeName(editData.attribute);
  //     setAttributeValues(editData.values);
  //   } else {
  //     setAttributeName("");
  //     setAttributeValues([""]);
  //   }
  // }, [editData]);

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
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Typography
              sx={{ fontWeight: 700, textAlign: "center" }}
              variant="h5"
              color="initial"
            >
              Add New Attribute
            </Typography>

            <InputBase
              fullWidth
              value={attributeName}
              onChange={handleAttributeNameFieldChange}
              placeholder="Enter Attribute Name"
              sx={{
                backgroundColor: theme.palette.background.offPaper,
                padding: "5px 15px",
                borderRadius: "10px",
                textTransform: "capitalize",
              }}
            />

            <Typography
              variant="body1"
              fontWeight={600}
              textAlign={"center"}
              color="initial"
            >
              Values
            </Typography>

            <Box>
              {attributeValues?.map((value, ind) => (
                <Box
                  sx={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "5px",
                  }}
                  key={ind}
                >
                  <InputBase
                    placeholder="Enter Value"
                    onChange={(event) => handleChangeValue(ind, event)}
                    value={attributeValues[ind]}
                    sx={{
                      backgroundColor: theme.palette.background.offPaper,
                      padding: "5px 15px",
                      borderRadius: "10px",
                    }}
                  />
                  <IconButton onClick={handleAddValueField}>
                    <PlusCircle
                      weight="fill"
                      fill={theme.palette.secondary.text}
                      size={25}
                    />
                  </IconButton>
                  <IconButton onClick={() => handleRemoveValueField(ind)}>
                    <XCircle
                      weight="fill"
                      fill={theme.palette.error.text}
                      size={25}
                    />
                  </IconButton>
                </Box>
              ))}
            </Box>

            <Button
              variant="text"
              sx={{
                width: "max-content",
                textTransform: "none",
                backgroundColor: theme.palette.button.text,
                color: "white",
                marginInline: "auto",
                borderRadius: "10px",
                ":hover": {
                  backgroundColor: theme.palette.button.text,
                },
              }}
              onClick={handleAttributeAdd}
            >
              Add Attribute
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default AddAttributeModal;
