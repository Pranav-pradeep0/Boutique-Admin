import React, { useEffect, useState } from "react";
import TopBar from "../../Components/TopBar";
import DataTable from "../../Components/DataTable";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../Service/allApi";

const Products = () => {
  const [products, setProducts] = useState();
  const navigate = useNavigate();

  const fetchProductData = async () => {
    const response = await getProducts();
    const { products } = response.data;
    setProducts(products);
  };

  console.log(products);

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      <TopBar
        label={"Products"}
        onAddButtonClick={() => navigate("/products/add-new")}
      />
      <Box>
        <DataTable
          data={products}
          onAddButtonClick={(id) => navigate(`add-attribute/${id}`)}
        />
      </Box>
    </div>
  );
};

export default Products;
