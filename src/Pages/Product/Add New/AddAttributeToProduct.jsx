import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  ButtonBase,
  CircularProgress,
  Divider,
  InputBase,
  InputLabel,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import BackNavigatonBar from "../../../Components/BackNavigatonBar";
import MultipleSelectChip from "../../../Components/MultipleSelectChip";
import SelectDropdown from "../../../Components/SelectDropdown";
import { CaretDown } from "@phosphor-icons/react";
import StyledButton from "../../../Components/StyledButton";
import InputArea from "../../../Components/InputArea";
import {
  createAttributeVariations,
  createCompainAttribute,
  getAttributeVariations,
  getColourAttributes,
  getSizeAttributes,
} from "../../../Service/allApi";
import { useNavigate, useParams } from "react-router-dom";
import { Slide, ToastContainer, toast } from "react-toastify";

const AddAttributeToProduct = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const { id } = useParams();

  const [colours, setColours] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [variations, setVariations] = useState([{ ColourId: [], SizeId: [] }]);
  const [createVariationLoading, setCreateVariationLoading] = useState(false);
  const [allAttribteVariations, setAllAttribteVariations] = useState([]);
  const [variationData, setVariationData] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);

  const handleFetchAttributes = async () => {
    const colour = await getColourAttributes();
    const size = await getSizeAttributes();

    setColours(colour.data);
    setSizes(size.data);
  };

  const handleAddAttribute = () => {
    setVariations([...variations, { ColourId: [], SizeId: [] }]);
    setVariationData([
      ...variationData,
      {
        colour_Value_Id: "",
        size_Value_Id: "",
        stock: true,
        pcs: "",
        image: "",
        description: "",
        variationPrice: "",
      },
    ]);
  };

  const handleVariationChange = (index, type, selectedOptions) => {
    const updatedVariations = variations.map((variation, i) =>
      i === index ? { ...variation, [type]: selectedOptions } : variation
    );
    setVariations(updatedVariations);
  };

  const validateFields = () => {
    let errors = [];
    variationData.forEach((data, index) => {
      if (!data.colour_Value_Id) {
        errors.push({
          index,
          field: "colour_Value_Id",
          message: "Colour is required",
        });
      }
      if (!data.size_Value_Id) {
        errors.push({
          index,
          field: "size_Value_Id",
          message: "Size is required",
        });
      }
      if (!data.pcs) {
        errors.push({ index, field: "pcs", message: "Pcs is required" });
      }
      if (!data.variationPrice) {
        errors.push({
          index,
          field: "variationPrice",
          message: "Variation Price is required",
        });
      }
      if (!data.image) {
        errors.push({ index, field: "image", message: "Image is required" });
      }
    });
    setValidationErrors(errors);
    return errors.length === 0;
  };

  const handleSaveAttribute = async () => {
    if (validateFields()) {
      const data = { variations: variations, variationData: variationData };
      const response = await createAttributeVariations(id, data);
      console.log(response);
    } else {
      alert("Please correct the validation errors.");
    }
  };

  const handleFetchVariations = async () => {
    setCreateVariationLoading(true);
    const response = await getAttributeVariations(id);
    if (response.status === 200) {
      setCreateVariationLoading(false);
      setAllAttribteVariations(response.data);
      const initialVariationData = response.data.map((item) => ({
        colour_Value_Id: item.colourId,
        size_Value_Id: item.sizeId,
        stock: true,
        pcs: "",
        image: "",
        description: "",
        variationPrice: "",
      }));
      setVariationData(initialVariationData);
    }
  };

  const handleFetchColourLabel = (value) => {
    const label = colours?.find((item) => item.id === value);
    return label ? label.value : "";
  };

  const handleFetchSizeLabel = (value) => {
    const label = sizes?.find((item) => item.id === value);
    return label ? label.value : "";
  };

  const handleInputChange = (index, field, value) => {
    const updatedVariationData = variationData.map((data, i) =>
      i === index ? { ...data, [field]: value } : data
    );
    setVariationData(updatedVariationData);
  };

  const handleSaveProductAttribute = async () => {
    if (validateFields()) {
      const combinedFormData = new FormData();

      if (variationData.length > 0) {
        variationData.forEach((data, index) => {
          combinedFormData.append(
            `variations[${index}][colour_Value_Id]`,
            data.colour_Value_Id
          );
          combinedFormData.append(
            `variations[${index}][size_Value_Id]`,
            data.size_Value_Id
          );
          combinedFormData.append(`variations[${index}][stock]`, data.stock);
          combinedFormData.append(`variations[${index}][pcs]`, data.pcs);
          combinedFormData.append(
            `variations[${index}][description]`,
            data.description
          );
          combinedFormData.append(
            `variations[${index}][variationPrice]`,
            data.variationPrice
          );
          combinedFormData.append(`variations[${index}][image]`, data.image);
        });

        const response = await createCompainAttribute(id, combinedFormData);

        if (response.status === 201) {
          navigate("/products");
          toast.success(`${response.message}`, {
            autoClose: 1000,
            transition: Slide,
          });
        }
        console.log(response);
      } else {
        alert("No Changes Made");
      }
    } else {
      toast.error("Please Fill all the fields", {
        autoClose: 1000,
        transition: Slide,
      });
    }
  };

  useEffect(() => {
    handleFetchAttributes();
  }, []);

  console.log(variationData);

  return (
    <Box>
      <BackNavigatonBar label={"Add Attribute"} />

      <Box>
        <Box
          sx={{
            paddingInline: "40px",
            display: "grid",
            gap: "40px",
          }}
        >
          {variations.map((variation, index) => (
            <Box
              sx={{
                display: "grid",
                gap: "40px",
                paddingTop: "20px",
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gap: "20px",
                }}
              >
                <SelectDropdown floatingLabel={"Colour"} borderd disabled />
                <MultipleSelectChip
                  options={colours}
                  onChange={(selectedOptions) =>
                    handleVariationChange(index, "ColourId", selectedOptions)
                  }
                />
                {validationErrors.some(
                  (error) =>
                    error.index === index && error.field === "colour_Value_Id"
                ) && <span style={{ color: "red" }}>Colour is required</span>}
              </Box>

              <Divider />

              <Box
                sx={{
                  display: "grid",
                  gap: "20px",
                }}
              >
                <SelectDropdown floatingLabel={"Size"} borderd disabled />
                <MultipleSelectChip
                  options={sizes}
                  onChange={(selectedOptions) =>
                    handleVariationChange(index, "SizeId", selectedOptions)
                  }
                />
                {validationErrors.some(
                  (error) =>
                    error.index === index && error.field === "size_Value_Id"
                ) && <span style={{ color: "red" }}>Size is required</span>}
              </Box>
              <Divider />
            </Box>
          ))}

          <Box
            sx={{
              display: "flex",
              gap: "25px",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <StyledButton
              label={"Add Attribute"}
              outlined
              onClick={handleAddAttribute}
            />
            <StyledButton
              label={"Save Attribute"}
              onClick={handleSaveAttribute}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ButtonBase
              sx={{
                borderRadius: "8px",
                border: "black 1px solid",
                padding: "10px 20px",
              }}
              onClick={handleFetchVariations}
            >
              <span>Create Variations from all attributes</span>
              {createVariationLoading && (
                <CircularProgress size={14} sx={{ marginLeft: "12px" }} />
              )}
            </ButtonBase>
          </Box>

          <Box>
            {allAttribteVariations?.map((item, ind) => (
              <Accordion disableGutters>
                <AccordionSummary
                  expandIcon={<CaretDown size={24} color="black" />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <span style={{ marginBlock: "auto", marginRight: "15px" }}>
                    #{ind + 1}
                  </span>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: "20px",
                      marginBottom: "10px",
                      flexWrap: "wrap",
                      marginRight: "10px",
                    }}
                  >
                    <InputArea
                      varient={"light"}
                      value={handleFetchColourLabel(item.colourId)}
                      placeholder={"Colour"}
                      disabled
                    />
                    <InputArea
                      varient={"light"}
                      value={handleFetchSizeLabel(item.sizeId)}
                      placeholder={"Size"}
                      disabled
                    />
                  </Box>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    backgroundColor: "white",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "30px",
                      flexGrow: 1,
                      paddingBlock: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "grid",
                        gap: "20px",
                        flexGrow: 1,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "20px",
                          flexWrap: "wrap",
                        }}
                      >
                        <Box
                          sx={{
                            flexGrow: 1,
                          }}
                        >
                          <SelectDropdown
                            floatingLabel={"Stock"}
                            label={"Stock"}
                            value={variationData[ind].stock}
                            onChange={(e) =>
                              handleInputChange(ind, "stock", e.target.value)
                            }
                          />
                        </Box>

                        <Box
                          sx={{
                            flexGrow: 1,
                          }}
                        >
                          <InputArea
                            placeholder={" "}
                            label={"Pcs"}
                            value={variationData[ind].pcs}
                            onChange={(e) =>
                              handleInputChange(ind, "pcs", e.target.value)
                            }
                          />
                          {/* {validationErrors.some(error => error.index === ind && error.field === 'pcs') && (
                            <span style={{ color: 'red' }}>Pcs is required</span>
                          )} */}
                        </Box>
                      </Box>

                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            justifyContent: "space-between",
                          }}
                        >
                          <span style={{ fontWeight: 600 }}>Description</span>
                          <InputBase
                            multiline
                            sx={{
                              backgroundColor:
                                theme.palette.background.offPaper,
                              borderRadius: "10px",
                              padding: "8px 10px",
                            }}
                            value={variationData[ind].description}
                            onChange={(e) =>
                              handleInputChange(
                                ind,
                                "description",
                                e.target.value
                              )
                            }
                          />
                        </Box>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        flexGrow: 0.2,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: "20px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "grid",
                          gap: "10px",
                        }}
                      >
                        <span style={{ fontWeight: 600 }}>Upload Image</span>
                        <Box>
                          <Box
                            sx={{
                              backgroundColor:
                                theme.palette.background.offPaper,
                              borderRadius: "10px",
                              padding: "8px 10px",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              fontSize: "14px",
                            }}
                          >
                            {variationData[ind]?.image.name}
                            <InputLabel
                              htmlFor={`input-${ind}`}
                              sx={{
                                backgroundColor: "white",
                                marginLeft: "auto",
                                padding: "6px 5px",
                                borderRadius: "8px",
                                fontSize: "14px",
                              }}
                            >
                              Browse Image
                            </InputLabel>
                          </Box>
                          <InputBase
                            type="file"
                            id={`input-${ind}`}
                            sx={{
                              display: "none",
                            }}
                            onChange={(e) =>
                              handleInputChange(ind, "image", e.target.files[0])
                            }
                          />
                          {/* {validationErrors.some(error => error.index === ind && error.field === 'image') && (
                            <span style={{ color: 'red' }}>Image is required</span>
                          )} */}
                        </Box>
                      </Box>
                      <InputArea
                        label={"Variation Price"}
                        value={variationData[ind].variationPrice}
                        onChange={(e) =>
                          handleInputChange(
                            ind,
                            "variationPrice",
                            e.target.value
                          )
                        }
                      />
                      {/* {validationErrors.some(error => error.index === ind && error.field === 'variationPrice') && (
                        <span style={{ color: 'red' }}>Variation Price is required</span>
                      )} */}
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>

          {allAttribteVariations?.length > 0 && (
            <Box
              sx={{
                display: "flex",
                gap: "25px",
                alignItems: "center",
                marginBottom: "30px",
                justifyContent: "flex-end",
              }}
            >
              <StyledButton label={"Cancel"} outlined />
              <StyledButton
                label={"Save"}
                onClick={handleSaveProductAttribute}
              />
            </Box>
          )}
        </Box>
      </Box>
      <ToastContainer position="top-center" transition={"Slide"} />
    </Box>
  );
};

export default AddAttributeToProduct;
