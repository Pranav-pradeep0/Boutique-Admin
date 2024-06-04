import { Box, InputBase, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import BackNavigatonBar from "../../../Components/BackNavigatonBar";
import InputArea from "../../../Components/InputArea";
import SelectDropdown from "../../../Components/SelectDropdown";
import StyledButton from "../../../Components/StyledButton";
import { newProduct } from "../../../Service/allApi";
import { statusOptions } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "../../../utils/utils";

const AddNewProduct = ({ categories }) => {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:800px)");
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [productData, setProductData] = useState({
    name: "",
    code: "",
    categoriesId: "",
    description: "",
    sellingPrice: "",
    status: true,
    minimumQuantity: "",
    discountPercentage: "",
    gstTaxPercentage: "",
    minimumQuantityWholesale: "",
    wholesalePrice: "",
  });

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setProductData((data) => ({
      ...data,
      [name]: capitalizeFirstLetter(value),
    }));
  };

  const handleDropdownChange = (name, value) => {
    setProductData((data) => ({ ...data, [name]: value }));
  };

  const handleImageChange = (e) => {
    const img = e.target.files[0];
    setImage(img);
  };

  const categoryOptions = categories?.map((item) => ({
    option: item.categoriesName,
    value: item.id,
  }));

  const handleAddNewProduct = async () => {
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("code", productData.code);
    formData.append("categoriesId", productData.categoriesId);
    formData.append("description", productData.description);
    formData.append("sellingPrice", productData.sellingPrice);
    formData.append("status", productData.status);
    formData.append("minimumQuantity", productData.minimumQuantity);
    formData.append("discountPercentage", productData.discountPercentage);
    formData.append("gstTaxPercentage", productData.gstTaxPercentage);
    formData.append(
      "minimumQuantityWholesale",
      productData.minimumQuantityWholesale
    );
    formData.append("wholesalePrice", productData.wholesalePrice);

    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await newProduct(formData);
      console.log(response);
      if (response.status === 201) {
        setProductData({
          name: "",
          code: "",
          categoriesId: "",
          description: "",
          sellingPrice: "",
          status: true,
          minimumQuantity: "",
          discountPercentage: "",
          gstTaxPercentage: "",
          minimumQuantityWholesale: "",
          wholesalePrice: "",
        });
        setImage(null);
        navigate("/products");
      }
    } catch (error) {
      console.error("Failed to add new product", error);
    }
  };

  console.log(productData);

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
                  value={productData.name}
                  onChange={handleFieldChange}
                />
              </Box>

              <Box sx={{ width: "350px" }}>
                <InputArea
                  placeholder={"Enter Product Code"}
                  label={"Code"}
                  name={"code"}
                  onChange={handleFieldChange}
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
                  value={productData.description}
                  onChange={handleFieldChange}
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
                  minHeight: !matches && "300px",
                }}
              >
                <input
                  type="file"
                  style={{ display: "none" }}
                  id="product-image-input"
                  onChange={handleImageChange}
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
              <SelectDropdown
                label={"Category"}
                options={categoryOptions}
                name={"categoriesId"}
                onChange={(event) =>
                  handleDropdownChange("categoriesId", event.target.value)
                }
              />
            </Box>
            <Box sx={{ width: matches ? "330px" : "100%" }}>
              <InputArea
                label={"Selling Price"}
                name={"sellingPrice"}
                onChange={handleFieldChange}
              />
            </Box>
            <Box sx={{ width: matches ? "330px" : "100%" }}>
              <SelectDropdown
                label={"Status"}
                name={"status"}
                options={statusOptions}
                onChange={(event) =>
                  handleDropdownChange("status", event.target.value)
                }
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
                label={"Discount %"}
                placeholder={"Enter Discount Percentage %"}
                name={"discountPercentage"}
                onChange={handleFieldChange}
              />
            </Box>
            <Box sx={{ width: matches ? "330px" : "100%" }}>
              <InputArea
                label={"Wholesale Option"}
                placeholder={"Enter Minimum Quantity for Wholesale"}
                name={"minimumQuantityWholesale"}
                onChange={handleFieldChange}
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
                onChange={handleFieldChange}
              />
            </Box>
            <Box sx={{ width: matches ? "330px" : "100%" }}>
              <InputArea
                placeholder={"Enter Wholesale Price"}
                label={"Wholesale Price"}
                name={"wholesalePrice"}
                onChange={handleFieldChange}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
            marginTop: "10px",
            marginBottom: "40px",
            justifyContent: "flex-end",
          }}
        >
          <StyledButton label={"Cancel"} outlined />
          <StyledButton label={"Save Product"} onClick={handleAddNewProduct} />
        </Box>
      </Box>
    </Box>
  );
};

export default AddNewProduct;
