import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCardAdmin = ({ product, onDelete }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const baseUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await fetch(`${baseUrl}/api/products/${product._id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Error al eliminar el producto");
      }

      if (onDelete) {
        onDelete(product._id);
      }

      alert("Producto eliminado exitosamente");
    } catch (err) {
      alert(`Error al eliminar el producto: ${err.message}`);
    }
  };

  const handleEdit = () => {
    navigate(`/api/products/${product._id}`);
  };

  return (
    <div className="product-item">
      <img
        src={`${process.env.REACT_APP_API_BASE_URL}/public/images/${product.imagen}`}
        alt={product.nombre}
      />
      <h2>{product.nombre}</h2>
      <p>{product.descripcion}</p>
      <p>Precio: {product.precio}€</p>
      <p>Talla: {product.talla}</p>
      <p>Categoría: {product.categoria}</p>
      <p>ID: {product._id}</p>
      <button className="editar" onClick={handleEdit}>
        EDITAR
      </button>
      <button className="eliminar" onClick={handleDelete}>
        ELIMINAR
      </button>
    </div>
  );
};

export default ProductCardAdmin;
