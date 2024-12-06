import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "./productListClient/ProductCard";
import Footer from "../../components/footer/Footer";

const ProductListByCategory = () => {
  const { categoria } = useParams();
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const baseUrl = process.env.REACT_APP_API_BASE_URL;
        const response = await fetch(`${baseUrl}/api/products`);
        if (!response.ok) {
          throw new Error("Error al obtener productos");
        }

        const data = await response.json();
        setAllProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = allProducts.filter(
      (product) => product.categoria === categoria
    );
    setFilteredProducts(filtered);
  }, [categoria, allProducts]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Cargando productos...</div>;
  }

  return (
    <div>
      <Link to="/">Volver a la página principal</Link>
      <h2>{categoria}</h2>
      <div className="product-list-by-category">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p>No hay productos disponibles en esta categoría.</p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ProductListByCategory;
