import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const ProductsDetailsClient = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const baseUrl = process.env.REACT_APP_API_BASE_URL;
        const response = await fetch(`${baseUrl}/api/products/${id}`);
        if (!response.ok) {
          throw new Error("Error al obtener el producto");
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Cargando detalles del producto...</div>;
  }

  return (
    <div className="product-details-client">
      <Link to={`/`}>Volver a la tienda</Link>
      <div className="product-details-client-card">
        <img
          src={`${process.env.REACT_APP_API_BASE_URL}/public/images/${product.imagen}`}
          alt={product.nombre}
        />
        <h2>{product.nombre}</h2>
        <p>{product.descripcion}</p>
        <p>Categoría: {product.categoria}</p>
        <p>Talla: {product.talla}</p>
        <p>Precio: {product.precio}€</p>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsDetailsClient;
