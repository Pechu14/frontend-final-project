import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import LayoutAdmin from "../../components/layout/layoutAdmin";

const EditProduct = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [talla, setTalla] = useState("");
  const [precio, setPrecio] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const baseUrl = process.env.REACT_APP_API_BASE_URL;
        const response = await fetch(`${baseUrl}/api/products/${id}`);
        if (!response.ok) {
          throw new Error("Error al obtener el producto");
        }
        const data = await response.json();
        setNombre(data.nombre);
        setDescripcion(data.descripcion);
        setCategoria(data.categoria);
        setTalla(data.talla);
        setPrecio(data.precio);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchProductData();
  }, [id]);

  const handleSubmit = async (e) => {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
    e.preventDefault();

    if (!nombre || !descripcion || !categoria || !talla || !precio) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    try {
      const body = {
        nombre,
        descripcion,
        categoria,
        talla,
        precio,
      };

      const response = await fetch(`${baseUrl}/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar el producto");
      }

      alert("Producto actualizado");
      navigate("/administrador");
    } catch (err) {
      setError(err.message);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="editProduct">
      <LayoutAdmin>
        <Link to="/administrador">Volver atrás</Link>
        <h2>Editar Producto</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label>Descripción:</label>
            <textarea
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
          <div>
            <label>Categoría:</label>
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="">Seleccione una categoría</option>
              <option value="Camisetas">Camisetas</option>
              <option value="Pantalones">Pantalones</option>
              <option value="Zapatos">Zapatos</option>
              <option value="Accesorios">Accesorios</option>
            </select>
          </div>
          <div>
            <label>Talla:</label>
            <select value={talla} onChange={(e) => setTalla(e.target.value)}>
              <option value="">Seleccione una talla</option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div>
            <label>Precio:</label>
            <input
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
            />
          </div>
          <button type="submit">Actualizar Producto</button>
        </form>
      </LayoutAdmin>
    </div>
  );
};

export default EditProduct;
