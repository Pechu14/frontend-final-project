import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LayoutAdmin from "../../components/layout/layoutAdmin";

const NewProduct = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [talla, setTalla] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nombre || !descripcion || !categoria || !talla || !precio) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("descripcion", descripcion);
    formData.append("categoria", categoria);
    formData.append("talla", talla);
    formData.append("precio", precio);
    if (imagen) {
      formData.append("imagen", imagen);
    }

    try {
      const baseUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await fetch(`${baseUrl}/api/products`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Error al crear el producto");
      }

      const data = await response.json();
      navigate("/administrador");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="newProduct">
      <LayoutAdmin>
        <Link to="/administrador">Volver atrás</Link>
        <h2>Crear Nuevo Producto</h2>
        {error && <div>{error}</div>}
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
          <div>
            <label>Imagen:</label>
            <input type="file" onChange={(e) => setImagen(e.target.files[0])} />
          </div>
          <button type="submit">Crear Producto</button>
        </form>
      </LayoutAdmin>
    </div>
  );
};

export default NewProduct;
