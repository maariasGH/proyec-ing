import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { eliminarProducto, obtenerProductoPorId } from "../../app/api/productos";

export default function EliminarProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    obtenerProductoPorId(id).then((res) => setProducto(res.data));
  }, [id]);

  const handleDelete = () => {
    eliminarProducto(id).then(() => navigate("/"));
  };

  if (!producto) return <p>Cargando...</p>;

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold">Eliminar Producto</h2>
      <p>¿Estás seguro de eliminar <strong>{producto.title}</strong>?</p>
      <div className="mt-4 flex justify-center gap-3">
        <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded">Eliminar</button>
        <Link to="/" className="bg-gray-400 text-white px-4 py-2 rounded">Cancelar</Link>
      </div>
    </div>
  );
}
