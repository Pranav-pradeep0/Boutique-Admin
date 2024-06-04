import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Button,
  useTheme,
  Divider,
  InputBase,
} from "@mui/material";
import TopLabeledInputField from "../../../Components/TopLabeledInputField";
import BackNavigatonBar from "../../../Components/BackNavigatonBar";
import { PlusCircle, Trash } from "@phosphor-icons/react";
import SelectDropdown from "../../../Components/SelectDropdown";
import InputArea from "../../../Components/InputArea";
import StyledButton from "../../../Components/StyledButton";
import AddNewOrderModal from "../../../Components/AddNewOrderModal";
import {
  addressLabel,
  paymentMethod,
  paymentStatus,
} from "../../../utils/constants";

const TAX_RATE = 0.2; // 20% tax rate
const DISCOUNT_RATE = 0.05; // 5% discount rate

const CreateOrder = ({ categories, allProducts }) => {
  const theme = useTheme();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [totals, setTotals] = useState({
    subtotal: 0,
    tax: 0,
    discount: 0,
    total: 0,
  });

  const [newOrderData, setNewOrderData] = useState();

  const [customerDetails, setCustomerDetails] = useState({
    customerName: "",
    customerPhoneNumber: "",
    customerEmailId: "",
  });

  const [address, setAddress] = useState({
    shippingAddress: "",
    phoneNumber: "",
    addressLabel: "",
  });

  const [payment, setPayment] = useState({
    paymentMethod: "",
    transactionId: "",
    paymentStatus: "",
  });

  const [customerNote, setCustomerNote] = useState("");

  const handleOpen = () => setModalOpen(true);

  const addSelectedProduct = (product) => {
    setSelectedProducts((prevProducts) => [
      ...prevProducts,
      {
        ...product,
        attributes: {
          size: "",
          quantity: "1",
          age: "",
          amount: product.sellingPrice,
        },
      },
    ]);
  };

  const handleAddAttributeSection = (index) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.map((product, i) => {
        if (i === index) {
          return {
            ...product,
            attributes: {
              ...product.attributes,
              quantity: "1",
              age: "",
              amount: product.sellingPrice,
            },
          };
        }
        return product;
      })
    );
  };

  const handleAttributeChange = (index, attribute, value) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.map((product, i) => {
        if (i === index) {
          const newAttributes = { ...product.attributes, [attribute]: value };
          if (attribute === "quantity") {
            newAttributes.amount =
              product.sellingPrice * parseFloat(value || 0);
          }
          return {
            ...product,
            attributes: newAttributes,
          };
        }
        return product;
      })
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPayment((prevPayment) => ({
      ...prevPayment,
      [name]: value,
    }));
  };

  const removeProduct = (index) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.filter((product, i) => i !== index)
    );
  };

  const calculateTotals = () => {
    let subtotal = 0;
    selectedProducts.forEach((product) => {
      const amount =
        product.sellingPrice * parseFloat(product.attributes.quantity || 0);
      subtotal += amount;
    });

    const tax = subtotal * TAX_RATE;
    const discount = subtotal * DISCOUNT_RATE;
    const total = subtotal + tax - discount;

    setTotals({ subtotal, tax, discount, total });
  };

  const getColorOptions = (product) => {
    const colorOptions = product?.compainattribute?.map((attr) => ({
      option: attr.colour,
      value: attr.colour_Value_Id,
    }));
    return [...new Set(colorOptions.map(JSON.stringify))].map(JSON.parse);
  };

  const getSizeOptions = (product) => {
    const sizeOptions = product?.compainattribute?.map((attr) => ({
      option: attr.size,
      value: attr.size_Value_Id,
    }));
    return [...new Set(sizeOptions.map(JSON.stringify))].map(JSON.parse);
  };

  const handleSubmit = () => {
    const newOrderData = {
      customerName: customerDetails.customerName,
      customerPhoneNumber: customerDetails.customerPhoneNumber,
      customerEmailId: customerDetails.customerEmailId,
      product: selectedProducts.map((product) => ({
        productId: product.id,
        categoryId: product.categoriesId,
        size_id: product.attributes.size,
        colour_id: product.attributes.colour,
        qty: product.attributes.quantity,
        amount: product.attributes.amount,
      })),
      subtotal: totals.subtotal,
      tax: totals.tax,
      discount: totals.discount,
      totalAmount: totals.total,
      address: {
        shipping_address: address.shippingAddress,
        phoneNumber: address.phoneNumber,
        addressLabel: address.addressLabel,
      },
      payment: {
        paymentMethod: payment.paymentMethod,
        transactionId: payment.transactionId,
        paymentStatus: payment.paymentStatus,
      },
      customerNote,
    };

    console.log(newOrderData);
  };

  useEffect(() => {
    calculateTotals();
  }, [selectedProducts]);

  console.log(selectedProducts);

  return (
    <Box>
      <BackNavigatonBar label={"Order"} />

      <Box sx={{ paddingInline: "40px" }}>
        <Box
          sx={{
            display: "flex",
            gap: "50px",
            marginInline: "auto",
            flexWrap: "wrap",
          }}
        >
          <TopLabeledInputField
            label={"Customer Name"}
            placeholder={"Enter Customer Name"}
            name={"customerName"}
            value={customerDetails.customerName}
            onChange={handleInputChange}
          />
          <TopLabeledInputField
            label={"Customer Phone No."}
            placeholder={"Enter Phone Number"}
            name={"customerPhoneNumber"}
            value={customerDetails.customerPhoneNumber}
            onChange={handleInputChange}
          />
          <TopLabeledInputField
            label={"Customer Email ID"}
            placeholder={"Enter Email"}
            name={"customerEmailId"}
            value={customerDetails.customerEmailId}
            onChange={handleInputChange}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBlock: "30px",
          }}
        >
          <p style={{ fontWeight: 600, fontSize: "17px" }}>Products</p>
          <Box>
            <Button
              variant="outlined"
              sx={{
                color: theme.palette.secondary.text,
                borderColor: theme.palette.button.main,
                ":hover": {
                  borderColor: theme.palette.button.main,
                },
              }}
              onClick={handleOpen}
            >
              Add New Product
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: "grid", gap: "15px" }}>
          {selectedProducts.map((product, index) => (
            <Box
              key={index}
              sx={{
                padding: "20px",
                backgroundColor: theme.palette.background.paper,
                borderRadius: "5px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "30px",
                    flexWrap: "wrap",
                  }}
                >
                  <b>{index + 1}. </b>
                  <img
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                    }}
                    src={product.image}
                    alt={product.name}
                  />
                  <span>
                    <b>Product : </b>
                    {product.name}
                  </span>
                  <span>
                    <b>Category : </b>
                    {product.category}
                  </span>
                </Box>

                <Box sx={{ marginLeft: "auto" }}>
                  <IconButton onClick={() => removeProduct(index)}>
                    <Trash weight="fill" fill={theme.palette.secondary.text} />
                  </IconButton>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: "white",
                  padding: "30px",
                  marginBlock: "25px",
                  borderRadius: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "30px",
                    flexWrap: "wrap",
                  }}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <SelectDropdown
                      label={"Colour"}
                      options={getColorOptions(product)}
                      value={product.attributes || ""}
                      onChange={(e) =>
                        handleAttributeChange(index, "colour", e.target.value)
                      }
                    />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <SelectDropdown
                      label={"Size"}
                      options={getSizeOptions(product)}
                      value={product.attributes || ""}
                      onChange={(e) =>
                        handleAttributeChange(index, "size", e.target.value)
                      }
                    />
                  </Box>
                  {/* <Box sx={{ flexGrow: 1 }}>
                    <SelectDropdown
                      label={"Age"}
                      options={product.ages}
                      value={product.attributes.age || ""}
                      onChange={(e) =>
                        handleAttributeChange(index, "age", e.target.value)
                      }
                    />
                  </Box> */}
                  <Box sx={{ flexGrow: 0 }}>
                    <InputArea
                      label={"Qty"}
                      value={product.attributes.quantity || ""}
                      onChange={(e) =>
                        handleAttributeChange(index, "quantity", e.target.value)
                      }
                    />
                  </Box>
                  <Box sx={{ flexGrow: 0 }}>
                    <InputArea
                      label={"Amount"}
                      value={(
                        product.sellingPrice *
                        parseFloat(product.attributes.quantity || 0)
                      ).toFixed(2)}
                      disabled
                    />
                  </Box>

                  {/* <IconButton
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "30px",
                    }}
                    onClick={() => handleAddAttributeSection(index)}
                  >
                    <PlusCircle color={theme.palette.button.text} size={26} />
                  </IconButton> */}
                </Box>
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            width: "250px",
            display: "grid",
            marginLeft: "auto",
            gap: "10px",
            paddingBlock: "30px",
            marginTop: "20px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ width: "190px" }}>SubTotal</span>
            <span style={{ width: "60px" }}>
              :<b>{totals.subtotal.toFixed(2)}</b>
            </span>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ width: "190px" }}>Tax (20%)</span>
            <span style={{ width: "60px" }}>
              :<b>{totals.tax.toFixed(2)}</b>
            </span>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ width: "190px" }}>Discount (5%)</span>
            <span style={{ width: "60px" }}>
              :<b>{totals.discount.toFixed(2)}</b>
            </span>
          </Box>

          <Divider />

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <span style={{ width: "190px", fontWeight: "bolder" }}>Total</span>
            <span style={{ width: "60px" }}>
              :<b>{totals.total.toFixed(2)}</b>
            </span>
          </Box>
        </Box>

        <Divider sx={{ marginBlock: "20px" }} />

        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingBlock: "40px",
            }}
          >
            <span style={{ fontWeight: 600 }}>Delivery</span>
            {/* <StyledButton label={"Add new Address"} /> */}
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ width: "300px" }}>
              <InputArea
                label={"Shipping Address"}
                name={"shippingAddress"}
                value={address.shippingAddress}
                onChange={handleAddressChange}
              />
            </Box>

            <Box sx={{ width: "300px" }}>
              <InputArea
                label={"Phone Number"}
                name={"phoneNumber"}
                value={address.phoneNumber}
                onChange={handleAddressChange}
              />
            </Box>

            <Box sx={{ width: "300px" }}>
              <SelectDropdown
                label={"Address Label"}
                name={"addressLabel"}
                options={addressLabel}
                value={address.addressLabel}
                onChange={handleAddressChange}
              />
            </Box>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              paddingBlock: "40px",
            }}
          >
            <span style={{ fontWeight: 600 }}>Payment</span>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ width: "300px" }}>
              <SelectDropdown
                label={"Payment Method"}
                name={"paymentMethod"}
                value={payment.paymentMethod}
                options={paymentMethod}
                onChange={handlePaymentChange}
              />
            </Box>
            <Box sx={{ width: "300px" }}>
              <InputArea
                label={"Transaction ID"}
                name={"transactionId"}
                value={payment.transactionId}
                onChange={handlePaymentChange}
              />
            </Box>
            <Box sx={{ width: "300px" }}>
              <SelectDropdown
                label={"Payment Status"}
                name={"paymentStatus"}
                options={paymentStatus}
                value={payment.paymentStatus}
                onChange={handlePaymentChange}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gap: "20px",
            paddingBlock: "40px",
          }}
        >
          <span style={{ fontWeight: 600 }}>Customer Note</span>
          <InputBase
            fullWidth
            multiline
            sx={{
              backgroundColor: theme.palette.background.offPaper,
              borderRadius: "10px",
              padding: "8px 10px",
              minHeight: "100px",
            }}
            onChange={(e) => setCustomerNote(e.target.value)}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "25px",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <StyledButton label={"Save Order"} onClick={handleSubmit} />
          <StyledButton label={"Cancel"} outlined />
        </Box>
      </Box>

      <AddNewOrderModal
        categories={categories}
        allProducts={allProducts}
        open={modalOpen}
        setOpen={setModalOpen}
        addSelectedProduct={addSelectedProduct}
      />
    </Box>
  );
};

export default CreateOrder;
