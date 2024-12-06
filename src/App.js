import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
/////////rutas para clientes/////////////////////////////////////////////////////////////////////////////
import ProductListClient from "./pages/client/productListClient/ProductListClient";
import ProductsDetailsClient from "./pages/client/ProductsDetailsClient";
import ProductListByCategory from "./pages/client/ProductListByCategory";

//////rutas para administrador////////////////////////////////////////////////////////////////////////////
import ProductListAdminAdmin from "./pages/admin/productListAdmin/ProductListAdminAdmin";
import NewProduct from "./pages/admin/NewProductAdmin";
import EditProduct from "./pages/admin/EditProduct";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListClient />} />
        <Route path="/products/:id" element={<ProductsDetailsClient />} />
        <Route
          path="/products/categoria/:categoria"
          element={<ProductListByCategory />}
        />
        {/*rutas para el administrador*/}
        <Route path="/administrador" element={<ProductListAdminAdmin />} />
        <Route path="/administrador/newProduct" element={<NewProduct />} />
        <Route path="/api/products/:id" element={<EditProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
