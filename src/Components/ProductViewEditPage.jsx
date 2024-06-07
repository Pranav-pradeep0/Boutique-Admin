import React from "react";
import BackNavigatonBar from "./BackNavigatonBar";
import { Accordion, AccordionDetails, AccordionSummary, Box, ButtonBase, Divider, InputBase, InputLabel, useMediaQuery, useTheme } from "@mui/material";
import InputArea from "./InputArea";
import SelectDropdown from "./SelectDropdown";
import StyledButton from "./StyledButton";
import { useNavigate } from "react-router-dom";
import MultipleSelectChip from "./MultipleSelectChip";
import { CaretDown } from "@phosphor-icons/react";

const ProductViewEditPage = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:800px)");
  const navigate = useNavigate();

  return (
    <Box>
      <BackNavigatonBar label={"Add New Product"} />
      <Box
        sx={{
          display: "grid",
          gap: "40px",
          paddingInline: matches && "40px",
        }}
      >
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
          <Box sx={{ display: "grid", gap: "15px", flexGrow: 1 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ width: "350px" }}>
                <InputArea
                  placeholder={"Enter Product Name"}
                  label={"Name"}
                  name={"name"}
                />
              </Box>

              <Box sx={{ width: "350px" }}>
                <InputArea
                  placeholder={"Enter Product Code"}
                  label={"Code"}
                  name={"code"}
                />
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  justifyContent: "space-between",
                  flexGrow: 1,
                }}
              >
                <span style={{ fontWeight: 600 }}>Description</span>
                <InputBase
                  name="description"
                  multiline
                  sx={{
                    backgroundColor: theme.palette.background.offPaper,
                    borderRadius: "10px",
                    padding: "8px 10px",
                    height: "135px",
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "grid", flexGrow: !matches && 1 }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                flexGrow: 1,
              }}
            >
              <span style={{ fontWeight: 600 }}>Upload Image</span>
              <Box
                sx={{
                  backgroundColor: theme.palette.background.offPaper,
                  borderRadius: "10px",
                  padding: "8px 10px",
                  height: "100%",
                  display: "flex",
                  width: matches ? "310px" : "95%",
                  marginInline: "auto",
                  flexGrow: 1,
                  minHeight: "200px",
                }}
              >
                <input
                  type="file"
                  style={{ display: "none" }}
                  id="product-image-input"
                />
                <label
                  htmlFor="product-image-input"
                  style={{
                    display: "flex",
                    marginInline: "auto",
                    marginTop: "auto",
                    marginBottom: "15px",
                    backgroundColor: "white",
                    padding: "8px 15px",
                    fontSize: "12px",
                    borderRadius: "8px",
                  }}
                >
                  Browse Image
                </label>
              </Box>
            </div>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            flexGrow: 1,
            gap: "30px",
            marginInline: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              flexGrow: 1,
            }}
          >
            <Box sx={{ width: matches ? "330px" : "100%" }}>
              <SelectDropdown label={"Category"} name={"categoriesId"} />
            </Box>
            <Box sx={{ width: matches ? "330px" : "100%" }}>
              <InputArea label={"Selling Price"} name={"sellingPrice"} />
            </Box>
            <Box sx={{ width: matches ? "330px" : "100%" }}>
              <SelectDropdown label={"Status"} name={"status"} />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              flexGrow: 1,
              marginBottom: "auto",
            }}
          >
            <Box sx={{ width: matches ? "330px" : "100%" }}>
              <InputArea
                label={"Discount %"}
                placeholder={"Enter Discount Percentage %"}
                name={"discountPercentage"}
              />
            </Box>
            <Box sx={{ width: matches ? "330px" : "100%" }}>
              <InputArea
                label={"Wholesale Option"}
                placeholder={"Enter Minimum Quantity for Wholesale"}
                name={"minimumQuantityWholesale"}
              />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              flexGrow: 1,
              marginBottom: "auto",
            }}
          >
            <Box sx={{ width: matches ? "330px" : "100%" }}>
              <InputArea
                label={"Tax %"}
                placeholder={"Enter Tax Percentage %"}
                name={"gstTaxPercentage"}
              />
            </Box>
            <Box sx={{ width: matches ? "330px" : "100%" }}>
              <InputArea
                placeholder={"Enter Wholesale Price"}
                label={"Wholesale Price"}
                name={"wholesalePrice"}
              />
            </Box>
          </Box>
        </Box>
      </Box>



      <Box>
        <Box
          sx={{
            paddingInline: "40px",
            display: "grid",
            gap: "40px",
            marginTop:'60px'
          }}
        >
          {/* {variations.map((variation, index) => ( */}
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
                <MultipleSelectChip/>
                {/* {validationErrors.some(
                  (error) =>
                    error.index === index && error.field === "colour_Value_Id"
                ) && <span style={{ color: "red" }}>Colour is required</span>} */}
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
                />
                {/* {validationErrors.some(
                  (error) =>
                    error.index === index && error.field === "size_Value_Id"
                ) && <span style={{ color: "red" }}>Size is required</span>} */}
              </Box>
              <Divider />
            </Box>
          {/* ))} */}

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
            />
            <StyledButton
              label={"Save Attribute"}
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
            >
              <span>Create Variations from all attributes</span>
              {/* {createVariationLoading && (
                <CircularProgress size={14} sx={{ marginLeft: "12px" }} />
              )} */}
            </ButtonBase>
          </Box>

          <Box>
            {/* {allAttribteVariations?.map((item, ind) => ( */}
              <Accordion disableGutters>
                <AccordionSummary
                  expandIcon={<CaretDown size={24} color="black" />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <span style={{ marginBlock: "auto", marginRight: "15px" }}>
                    #{1}
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
                      placeholder={"Colour"}
                      disabled
                    />
                    <InputArea
                      varient={"light"}
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
                            <InputLabel
                            //   htmlFor={`input-${ind}`}
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
                          />
                          {/* {validationErrors.some(error => error.index === ind && error.field === 'image') && (
                            <span style={{ color: 'red' }}>Image is required</span>
                          )} */}
                        </Box>
                      </Box>
                      <InputArea
                        label={"Variation Price"}
                      />
                      {/* {validationErrors.some(error => error.index === ind && error.field === 'variationPrice') && (
                        <span style={{ color: 'red' }}>Variation Price is required</span>
                      )} */}
                    </Box>
                  </Box>
                </AccordionDetails>
              </Accordion>
            {/* ))} */}
          </Box>

        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "25px",
          alignItems: "center",
          marginTop: "60px",
          marginBottom: "40px",
          justifyContent: "flex-end",
        }}
      >
        <StyledButton label={"Cancel"} outlined />
        <StyledButton label={"Save"} />
      </Box>
    </Box>
  );
};

export default ProductViewEditPage;
