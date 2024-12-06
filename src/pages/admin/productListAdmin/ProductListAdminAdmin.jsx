import React from "react";
import { Link } from "react-router-dom";
import ProductListAdmin from "./ProductListAdmin";
import LayoutAdmin from "../../../components/layout/layoutAdmin";

const ProductListAdminAdmin = () => {
  return (
    <div className="adminView">
      <LayoutAdmin>
        <nav>
          <Link to="/">Vista de cliente</Link>
          <Link to="/administrador/newProduct">Crear nuevo Producto</Link>
        </nav>
        <ProductListAdmin />
      </LayoutAdmin>
    </div>
  );
};

export default ProductListAdminAdmin;
