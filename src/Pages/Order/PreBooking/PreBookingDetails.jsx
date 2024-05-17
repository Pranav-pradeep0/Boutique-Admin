import {
  Box,
  IconButton,
  Button,
  useTheme,
  Paper,
  Divider,
  ButtonBase,
  TextField,
  InputBase,
} from "@mui/material";
import React from "react";
import TopLabeledInputField from "../../../Components/TopLabeledInputField";
import BackNavigatonBar from "../../../Components/BackNavigatonBar";
import DressRound from "../../../assets/DressRound.jpg";
import { Plus, Trash } from "@phosphor-icons/react";
import SelectDropdown from "../../../Components/SelectDropdown";
import MultipleSelectChip from "../../../Components/MultipleSelectChip";
import InputArea from "../../../Components/InputArea";
import StyledButton from "../../../Components/StyledButton";

const PreBookingDetails = () => {
  const theme = useTheme();

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
            label={"Custromer Name"}
            placeholder={"Enter Product Name"}
          />
          <TopLabeledInputField
            label={"Customer Phone No."}
            placeholder={"Enter Phone Number"}
          />
          <TopLabeledInputField
            label={"Customer Email ID"}
            placeholder={"Enter Email"}
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
            >
              Add New Product
            </Button>
          </Box>
        </Box>

        <Paper sx={{ padding: "20px" }}>
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
              <b>1. </b>
              <img
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                src={DressRound}
              />
              <span>
                <b>Product : </b>#12345 Princess Dress
              </span>
              <span>
                <b>Category : </b>Baptism
              </span>
            </Box>

            <Box sx={{ marginLeft: "auto" }}>
              <IconButton>
                <Trash weight="fill" fill={theme.palette.secondary.text} />
              </IconButton>
            </Box>
          </Box>

          <Box>
            <p style={{ fontWeight: 600 }}>Attribute</p>
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "10px",
                display: "grid",
                paddingBottom: "25px",
              }}
            >
              <Box
                sx={{
                  display: "grid",
                  gap: "20px",
                  padding: "40px 20px",
                }}
              >
                <SelectDropdown floatingLabel={"Colour"} borderd />
                <MultipleSelectChip />
              </Box>

              <Divider />

              <Box
                sx={{
                  display: "grid",
                  gap: "20px",
                  padding: "40px 20px",
                }}
              >
                <SelectDropdown floatingLabel={"Size"} borderd />
                <MultipleSelectChip />
              </Box>

              <ButtonBase
                sx={{
                  backgroundColor: theme.palette.button.main,
                  color: theme.palette.button.text,
                  borderRadius: "10px",
                  width: "max-content",
                  padding: "10px 20px",
                  marginLeft: "auto",
                  marginRight: "20px",
                }}
              >
                <Plus size={18} />
                <span style={{ fontWeight: 550, marginLeft: "5px" }}>
                  Add Attributes
                </span>
              </ButtonBase>
            </Box>
          </Box>

          <Box
            sx={{
              paddingBlock: "30px",
              display: "flex",
              justifyContent: "space-between",
              paddingInline: "5px",
              gap: "5px",
            }}
          >
            <Box
              sx={{
                display: "grid",
                gap: "15px",
              }}
            >
              <span style={{ fontWeight: 600 }}>Quantity</span>

              <TextField
                size="small"
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
                inputProps={{ type: "number", min: 1, defaultValue: 1 }}
              />
            </Box>

            <Box
              sx={{
                display: "grid",
                gap: "15px",
              }}
            >
              <span style={{ fontWeight: 600 }}>Amount</span>

              <TextField
                size="small"
                sx={{ backgroundColor: "white", borderRadius: "10px" }}
              />
            </Box>
          </Box>

          <div
            style={{ backgroundColor: "white", width: "100%", height: "2px" }}
          />

          <Box
            sx={{
              width: "250px",
              display: "grid",
              marginLeft: "auto",
              gap: "10px",
              paddingBlock: "30px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ width: "190px" }}>SubTotal</span>
              <span style={{ width: "60px" }}>
                :<b> ₹1200</b>
              </span>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ width: "190px" }}>Tax (20%)</span>
              <span style={{ width: "60px" }}>
                :<b> ₹1240</b>
              </span>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ width: "190px" }}>Discount (5%)</span>
              <span style={{ width: "60px" }}>
                :<b> ₹160</b>
              </span>
            </Box>

            <Divider />

            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ width: "190px", fontWeight: "bolder" }}>
                Total
              </span>
              <span style={{ width: "60px" }}>
                :<b> ₹1800</b>
              </span>
            </Box>
          </Box>
        </Paper>

        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingBlock: "40px",
            }}
          >
            <span style={{ fontWeight: 600 }}>Delivery</span>
            <StyledButton label={"Add new Address"} />
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
              <InputArea label={"Shipping Address"} />
            </Box>

            <Box sx={{ width: "300px" }}>
              <InputArea label={"Phone Number"} />
            </Box>

            <Box sx={{ width: "300px" }}>
              <SelectDropdown label={"Address Label"} />
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
              <SelectDropdown label={"Payment Method"} />
            </Box>
            <Box sx={{ width: "300px" }}>
              <InputArea label={"Transaction ID"} />
            </Box>

            <Box sx={{ width: "300px" }}>
              <SelectDropdown label={"Payment Status"} />
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
          />
        </Box>

        <Box sx={{
          display:'flex',
          gap:'25px',
          alignItems:'center',
          marginBottom:'40px'
        }}>
          <StyledButton label={"Edit Order"} />
          <StyledButton label={"Cancel"} outlined />
        </Box>
      </Box>
    </Box>
  );
};

export default PreBookingDetails;
