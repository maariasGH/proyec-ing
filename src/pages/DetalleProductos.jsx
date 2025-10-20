import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { obtenerProductoPorId } from "../../app/api/productos";

export default function DetalleProductos() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    obtenerProductoPorId(id).then((res) => setProducto(res.data));
  }, [id]);

  if (!producto) return <p>Cargando...</p>;

  return (
    <div className="p-6">
      <img src={producto.image} alt={producto.title} className="h-60 mx-auto" />
      <h2 className="text-2xl font-bold mt-3">{producto.title}</h2>
      <p className="mt-2">{producto.description}</p>
      <p className="mt-2 text-lg font-semibold">${producto.price}</p>
      <Link to="/" className="text-blue-600 mt-4 inline-block">Volver</Link>
    </div>
  );
}
