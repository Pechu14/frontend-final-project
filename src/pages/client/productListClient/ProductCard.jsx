import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={`${process.env.REACT_APP_API_BASE_URL}/public/images/${product.imagen}`}
        alt={product.nombre}
      />
      <h2>{product.nombre}</h2>
      <p>{product.precio}€</p>
      <Link to={`/products/${product._id}`}>Ver detalle</Link>
    </div>
  );
};

export default ProductCard;
