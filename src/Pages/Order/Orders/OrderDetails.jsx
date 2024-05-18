import {
  Box,
  ButtonBase,
  Divider,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import BackNavigatonBar from "../../../Components/BackNavigatonBar";
import OrderProductDetailTable from "../../../Components/OrderProductDetailTable";
import StyledButton from "../../../Components/StyledButton";

const OrderDetails = () => {
  const [tooltipText, setTooltipText] = useState("Click to Copy");
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:800px)");

  const handleCopy = (text) => {
    const textToCopy = text;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setTooltipText("Copied");
        setTimeout(() => {
          setTooltipText("Click to Copy");
        }, 3000);
      })
      .catch((err) => {
        console.log("Failed to copy text: ", err);
      });
  };

  return (
    <div>
      <Box>
        <Box>
          <BackNavigatonBar label={"Order"} />
          <Box
            sx={{
              paddingInline: "40px",
              display: "grid",
              gap: "40px",
            }}
          >
            <Box>
              <Box sx={{ display: "grid", gap: "30px" }}>
                <span style={{ fontWeight: 700, fontSize: "18px" }}>
                  Customer
                </span>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", md: "space-between" },
                    flexWrap: "wrap",
                    gap: "20px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: "15px",
                      flexWrap: "wrap",
                      backgroundColor: theme.palette.background.offPaper,
                      padding: "10px 18px",
                      borderRadius: "10px",
                    }}
                  >
                    <span>
                      <span style={{ fontWeight: 600, fontSize: "14px" }}>
                        Name{" "}
                      </span>
                      : Sophie
                    </span>

                    <span>
                      <span style={{ fontWeight: 600, fontSize: "14px" }}>
                        Phone Number{" "}
                      </span>
                      : +91 9567926936
                    </span>

                    <span>
                      <span style={{ fontWeight: 600, fontSize: "14px" }}>
                        Email ID{" "}
                      </span>
                      : sophieturner@gmail.com
                    </span>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      alignItems: "end",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <span style={{ fontWeight: 600, fontSize: "14px" }}>
                        Billing Date :
                      </span>
                      <span style={{ fontSize: "14px" }}> 20-04-2024</span>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <span style={{ fontWeight: 600, fontSize: "14px" }}>
                        Delivery Date :
                      </span>
                      <span style={{ fontSize: "14px" }}> 20-04-2024</span>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Divider />

            <Box
              sx={{
                display: "grid",
                gap: "30px",
                width: { xs: "100%", md: "50%" },
              }}
            >
              <span style={{ fontWeight: 700, fontSize: "18px" }}>Payment</span>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "30px",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gap: "20px",
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Payment Method</span>
                  <Box
                    sx={{
                      backgroundColor: theme.palette.background.offPaper,
                      padding: "10px",
                      borderRadius: "10px",
                      width: "180px",
                    }}
                  >
                    Google Pay
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      width: "max-content",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          fontWeight: 600,
                          fontSize: "14px",
                          width: "110px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span>Transaction ID</span>
                        <span> :</span>
                      </Box>
                      <span style={{ fontSize: "14px" }}>000001-TXHSFD</span>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <Box
                        sx={{
                          fontWeight: 600,
                          fontSize: "14px",
                          width: "110px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <span>Amount</span>
                        <span> :</span>
                      </Box>

                      <span style={{ fontWeight: 600, fontSize: "14px" }}>
                        ₹1200
                      </span>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "grid",
                    gap: "20px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>Payment Status</span>
                    <span
                      style={{
                        backgroundColor: theme.palette.button.main,
                        color: theme.palette.button.text,
                        padding: "10px",
                        borderRadius: "10px",
                        width: "180px",
                      }}
                    >
                      Complete
                    </span>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>Order Status</span>
                    <span
                      style={{
                        backgroundColor: theme.palette.button.main,
                        color: theme.palette.button.text,
                        padding: "10px",
                        borderRadius: "10px",
                        width: "180px",
                      }}
                    >
                      Complete
                    </span>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Divider />

            <Box
              sx={{
                display: "grid",
                gap: "30px",
                width: { xs: "100%", md: "70%" },
              }}
            >
              <span style={{ fontWeight: 700, fontSize: "18px" }}>
                Delivery Address
              </span>

              <Box
                sx={{
                  display: "flex",
                  gap: "40px",
                  flexWrap: "wrap",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        fontWeight: 600,
                        fontSize: "14px",
                        width: "110px",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span>Address</span>
                      <span> :</span>
                    </Box>
                    <span style={{ fontSize: "14px", maxWidth: "200px" }}>
                      Green Bay Gardens, B 904 Elite Road, Kakkanad
                    </span>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        fontWeight: 600,
                        fontSize: "14px",
                        width: "110px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span>Phone No </span>
                      <span> :</span>
                    </Box>
                    <span style={{ fontSize: "14px" }}>+91 95679876545</span>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gap: "15px",
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Order tracking ID</span>
                  <Box
                    sx={{
                      backgroundColor: theme.palette.background.offPaper,
                      padding: "10px",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <Tooltip title={tooltipText} placement="left" arrow>
                      <span
                        onClick={() => handleCopy("BZ3431413434-434XD")}
                        style={{ cursor: "pointer" }}
                      >
                        BZ3431413434-434XD
                      </span>
                    </Tooltip>
                    <ButtonBase
                      sx={{
                        backgroundColor: "white",
                        borderRadius: "5px",
                        padding: "5px",
                        color: theme.palette.button.text,
                        fontWeight: 600,
                      }}
                    >
                      Track now
                    </ButtonBase>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Divider />

            <Box
              sx={{
                display: "grid",
                gap: "30px",
              }}
            >
              <span style={{ fontWeight: 700, fontSize: "18px" }}>
                Product Details
              </span>

              <OrderProductDetailTable />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: matches ? "space-between" : "center",
                  flexWrap: "wrap",
                  alignItems: matches ? "flex-end" : "center",
                  gap:'30px',
                  marginBottom: "50px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "25px",
                    alignItems: "center",
                  }}
                >
                  <StyledButton label={"Edit Order"} />
                  <StyledButton label={"Cancel"} outlined />
                </Box>

                <Box
                  sx={{
                    width: "250px",
                    display: "grid",
                    marginLeft: matches && "auto",
                    gap: "10px",
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span style={{ width: "190px" }}>SubTotal</span>
                    <span style={{ width: "60px" }}>
                      :<b> ₹1200</b>
                    </span>
                  </Box>

                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span style={{ width: "190px" }}>Tax (20%)</span>
                    <span style={{ width: "60px" }}>
                      :<b> ₹1240</b>
                    </span>
                  </Box>

                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span style={{ width: "190px" }}>Discount (5%)</span>
                    <span style={{ width: "60px" }}>
                      :<b> ₹160</b>
                    </span>
                  </Box>

                  <Divider />

                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span style={{ width: "190px", fontWeight: "bolder" }}>
                      Total
                    </span>
                    <span style={{ width: "60px" }}>
                      :<b> ₹1800</b>
                    </span>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default OrderDetails;
