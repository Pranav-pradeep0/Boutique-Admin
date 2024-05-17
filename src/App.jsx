import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Pages/Sidebar";
import { Box, Grid, Paper, useTheme } from "@mui/material";
import Dashboard from "./Pages/Dashboard";
import Header from "./Pages/Header";
import Products from "./Pages/Product/Products";
import Orders from "./Pages/Order/Orders";
import Categories from "./Pages/Product/Categories";
import Attributes from "./Pages/Product/Attributes";
import Interests from "./Pages/Order/Interests";
import PreBookings from "./Pages/Order/PreBooking/PreBookings";
import PreBookingDetails from "./Pages/Order/PreBooking/PreBookingDetails";
import PreBookinPages from "./Pages/Order/PreBooking";

const App = () => {
  const theme = useTheme();

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
          }}
        >
          <Box style={{ padding: "20px" }}>
            <Sidebar />
          </Box>
        </Grid>

        <Grid item xs={12} md={12} style={{ marginLeft: "20%" }}>
          <Header />
          <Box style={{ padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />

              <Route path="/products/*" element={<Products />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/attributes" element={<Attributes />} />

              <Route path="/orders/*" element={<Orders />} />
              <Route path="/interests/*" element={<Interests />} />
              <Route path="/prebookings/*" element={<PreBookinPages />} />

            </Routes>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
