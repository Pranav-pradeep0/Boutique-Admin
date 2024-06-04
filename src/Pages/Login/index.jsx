import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import React, { useState } from "react";
import Banner from "../../assets/LoginBanner.png";
import Logo from "../../assets/LoginLogo.png";
import StyledButton from "../../Components/StyledButton";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import "./login.css";
import { login } from "../../Service/allApi";
import { Slide, ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [showPassword, setShopPassword] = useState(false);
  const [loginDetails, setLoginDetails] = useState({
    emailId: "admin@gmail.com",
    password: "admin@123",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const prevData = loginDetails;
    setLoginDetails({ ...prevData, [name]: value });
  };

  const handleLogin = async () => {
    const response = await login(loginDetails);
    const { message } = response.data;
    if (response.status === 200) {
      localStorage.setItem("loggedIn", true);
      toast.success(`${message}`, {
        autoClose: 1000,
        transition: Slide,
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        overflow: "hidden",
      }}
    >
      <Box className="login-banner-container">
        <img
          className="login-banner"
          src={Banner}
          style={{ height: "100%", filter: "brightness(75%)" }}
        />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <img
            src={Logo}
            style={{
              width: "180px",
              pointerEvents: "none",
            }}
          />
          <span
            style={{
              fontWeight: 700,
              fontSize: "17px",
            }}
          >
            Log In To Admin
          </span>
          <Box
            sx={{
              display: "grid",
              gap: "20px",
              width: "350px",
            }}
          >
            <InputBase
              fullWidth
              name="emailId"
              value={loginDetails.emailId}
              onChange={handleInputChange}
              sx={{
                backgroundColor: theme.palette.background.offPaper,
                borderRadius: "10px",
                padding: "8px 10px",
                "& ::placeholder": {
                  fontWeight: 500,
                  textAlign: "center",
                },
              }}
              placeholder="Enter Email"
            />
            <InputBase
              fullWidth
              name="password"
              onChange={handleInputChange}
              value={loginDetails.password}
              type={showPassword ? "text" : "password"}
              sx={{
                backgroundColor: theme.palette.background.offPaper,
                borderRadius: "10px",
                padding: "8px 10px",
                "& ::placeholder": {
                  fontWeight: 500,
                  textAlign: "center",
                },
              }}
              placeholder="Enter Password"
              endAdornment={
                <IconButton onClick={() => setShopPassword(!showPassword)}>
                  {showPassword ? <Eye size={20} /> : <EyeSlash size={20} />}
                </IconButton>
              }
            />
          </Box>
          <StyledButton onClick={handleLogin} label={"Login"} />
          <ToastContainer position="top-center" transition={"Slide"} />
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
