import { Box, IconButton, Button, useTheme, Paper } from "@mui/material";
import React from "react";
import TopLabeledInputField from "../../../Components/TopLabeledInputField";
import BackNavigatonBar from "../../../Components/BackNavigatonBar";
import DressRound from "../../../assets/DressRound.jpg";
import { Trash } from "@phosphor-icons/react";

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
          <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
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

            <Box>
              <IconButton>
                <Trash weight="fill" fill={theme.palette.secondary.text} />
              </IconButton>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default PreBookingDetails;
