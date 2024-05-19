import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Pages/Sidebar";
import {
  Box,
  Button,
  Drawer,
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Dashboard from "./Pages/Dashboard";
import Header from "./Pages/Header";
import Products from "./Pages/Product/Products";
import Categories from "./Pages/Product/Categories";
import Attributes from "./Pages/Product/Attributes";
import Interests from "./Pages/Order/Interests";
import PreBookinPages from "./Pages/Order/PreBooking";
import OrderPages from "./Pages/Order/Orders";
import InterestsPages from "./Pages/Order/Interests";
import { useState } from "react";
import { List } from "@phosphor-icons/react";

const App = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:800px)");
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: "white",
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            zIndex: 1,
            overflowY: "auto",
            width: "20%",
            display: !matches && "none",
          }}
        >
          <Box style={{ padding: "20px" }}>
            <Sidebar />
          </Box>
        </Grid>

        <Drawer
          sx={{
            display: matches && "none",
          }}
          open={open}
          onClose={toggleDrawer(false)}
        >
          <Box
            sx={{
              paddingInline: "20px",
              paddingInlineEnd: "80px",
              backgroundColor: theme.palette.primary.main,
              height: "100vh",
              color: "white",
              paddingBlock: "30px",
            }}
          >
            <Sidebar />
          </Box>
        </Drawer>

        <Grid item xs={12} md={12} style={{ marginLeft: matches && "20%" }}>
          <Box sx={{ position: "relative" }}>
            <Header />
            <Button
              sx={{
                position: "absolute",
                top: "30px",
                left: "20px",
                display: matches && "none",
              }}
              onClick={toggleDrawer(true)}
            >
              <List size={28} />
            </Button>
          </Box>

          <Box style={{ padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/products/*" element={<Products />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/attributes" element={<Attributes />} />

              <Route path="/orders/*" element={<OrderPages />} />
              <Route path="/interests/*" element={<InterestsPages />} />
              <Route path="/prebookings/*" element={<PreBookinPages />} />
            </Routes>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
