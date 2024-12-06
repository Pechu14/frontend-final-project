import React from "react";
import Layout from "../../../components/layout/Layout";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import Button from "@mui/material/Button";

const ProductListClient = () => {
  return (
    <Layout>
      <div className="up">
        <nav>
          <Button
            variant="contained"
            color=""
            component={Link}
            to="/products/categoria/Camisetas"
            sx={{
              backgroundColor: "grey",
              color: "black",
              "&:hover": {
                color: "blue",
              },
            }}
          >
            Camisetas
          </Button>
          <Button
            variant="contained"
            color=""
            component={Link}
            to="/products/categoria/Pantalones"
            sx={{
              backgroundColor: "grey",
              color: "black",
              "&:hover": {
                color: "blue",
              },
            }}
          >
            Pantalones
          </Button>
          <Button
            variant="contained"
            color=""
            component={Link}
            to="/products/categoria/Zapatos"
            sx={{
              backgroundColor: "grey",
              color: "black",
              "&:hover": {
                color: "blue",
              },
            }}
          >
            Zapatos
          </Button>
          <Button
            variant="contained"
            color=""
            component={Link}
            to="/products/categoria/Accesorios"
            sx={{
              backgroundColor: "grey",
              color: "black",
              "&:hover": {
                color: "blue",
              },
            }}
          >
            Accesorios
          </Button>
        </nav>
      </div>
      <div className="product-list-client">
        <ProductList />
      </div>
    </Layout>
  );
};

export default ProductListClient;
