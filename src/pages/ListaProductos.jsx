import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { obtenerProductos } from "../../app/api/productos";
import ProductoCard from "../../app/components/ProductoCard";

export default function ListaProductos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProductos().then((res) => setProductos(res.data));
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Productos</h1>
        <Link to="/crear" className="bg-blue-600 text-white px-4 py-2 rounded">
          Crear Producto
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {productos.map((p) => (
          <ProductoCard key={p.id} producto={p} />
        ))}
      </div>
    </div>
  );
}
