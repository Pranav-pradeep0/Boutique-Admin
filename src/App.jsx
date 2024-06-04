import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
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
import { Fragment, useEffect, useState } from "react";
import { List } from "@phosphor-icons/react";
import AddNewProduct from "./Pages/Product/Add New/AddNewProduct";
import AddAttributeToProduct from "./Pages/Product/Add New/AddAttributeToProduct";
import Login from "./Pages/Login";
import {
  getAllCategories,
  getProducts,
  getProductsWithAttributes,
} from "./Service/allApi";
import CreateOrder from "./Pages/Order/Orders/CreateOrder";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const theme = useTheme();
  const matches = useMediaQuery("(min-width:800px)");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const [categoryData, setCategoryData] = useState();
  const [products, setProducts] = useState();

  const handleFetchCategories = async () => {
    const response = await getAllCategories();
    const { data } = response;
    setCategoryData(data);
  };

  const fetchProductData = async () => {
    const response = await getProductsWithAttributes();
    const products = response.data;
    setProducts(products);
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const loggedIn = localStorage.getItem("loggedIn");

  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
  }, [loggedIn]);

  useEffect(() => {
    handleFetchCategories();
    fetchProductData();
  }, []);

  return (
    <Fragment>
      <Routes>
        <Route
          path="/login"
          element={loggedIn ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
      {loggedIn ? (
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
                  <Route
                    path="/categories"
                    element={
                      <Categories
                        data={categoryData}
                        setData={setCategoryData}
                      />
                    }
                  />
                  <Route path="/attributes" element={<Attributes />} />

                  <Route path="/orders/*" element={<OrderPages />} />
                  <Route
                    path="/orders/create-order"
                    element={
                      <CreateOrder
                        categories={categoryData}
                        allProducts={products}
                      />
                    }
                  />

                  <Route path="/interests/*" element={<InterestsPages />} />
                  <Route path="/prebookings/*" element={<PreBookinPages />} />

                  <Route
                    path="/products/add-new"
                    element={<AddNewProduct categories={categoryData} />}
                  />
                  <Route
                    path="/products/add-attribute/:id"
                    element={<AddAttributeToProduct />}
                  />
                </Routes>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Navigate to="/login" />
      )}
    </Fragment>
  );
};

export default App;
