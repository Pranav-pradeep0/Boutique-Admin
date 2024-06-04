import React, { useState, useEffect } from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { MagnifyingGlass, PlusCircle } from "@phosphor-icons/react";
import Products from "../Pages/Product/Products";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "800px",
  bgcolor: "white",
  borderRadius: "14px",
  boxShadow: 24,
  p: 4,
};

const AddNewOrderModal = ({
  categories,
  allProducts,
  open,
  setOpen,
  addSelectedProduct,
}) => {
  const theme = useTheme();

  const handleClose = () => setOpen(false);

  const [category, setCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (category) {
      const filtered = allProducts.map((product) => {
        const categoryInfo = categories?.find(
          (cat) => cat.id === product.categoriesId
        );
        return { ...product, categoryInfo };
      });
      const sortedProducts = filtered?.filter(
        (product) => product.categoriesId === category
      );
      setFilteredProducts(sortedProducts);
    } else {
      const randomProducts = allProducts
        ?.sort(() => 0.5 - Math.random())
        .slice(0, 5);
      const sortedRandomProducts = randomProducts?.map((product) => {
        const categoryInfo = categories.find(
          (cat) => cat.id === product.categoriesId
        );
        return { ...product, categoryInfo };
      });
      setFilteredProducts(sortedRandomProducts);
    }
  }, [category, allProducts, categories]);

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddProduct = (product) => {
    addSelectedProduct(product);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              marginBottom: "25px",
            }}
          >
            <InputBase
              fullWidth
              placeholder="Search"
              sx={{
                backgroundColor: "#F4F4F4",
                paddingLeft: "10px",
                marginRight: "5px",
                borderRadius: "10px",
              }}
              endAdornment={
                <IconButton>
                  <MagnifyingGlass size={"22"} color="#666666" />
                </IconButton>
              }
            />
            <Box sx={{ minWidth: 120 }}>
              <FormControl size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={handleChange}
                >
                  {categories?.map((cat) => (
                    <MenuItem key={cat.id} value={cat.id}>
                      {cat.categoriesName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Typography
            variant="h6"
            sx={{
              marginBlock: "10px",
            }}
          >
            Products
          </Typography>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Rate</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProducts?.map((product) => (
                  <TableRow
                    key={product.id}
                    sx={{
                      ":hover": {
                        boxShadow: "1px 17px 44px 0px rgba(3, 2, 41, 0.07)",
                      },
                    }}
                  >
                    <TableCell>{product.id}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>
                      {product?.categoryInfo?.categoriesName}
                    </TableCell>
                    <TableCell>{product?.sellingPrice}</TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleAddProduct(product)}>
                        <PlusCircle size={22} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
    </div>
  );
};

export default AddNewOrderModal;
