import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { actualizarProducto, obtenerProductoPorId } from "../../app/api/productos";

export default function EditarProducto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", price: "", description: "", image: "" });

  useEffect(() => {
    obtenerProductoPorId(id).then((res) => setForm(res.data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    actualizarProducto(id, form).then(() => navigate("/"));
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-3 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Editar Producto</h2>
      <input value={form.title} type="text" className="border p-2 w-full"
             onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <input value={form.price} type="number" className="border p-2 w-full"
             onChange={(e) => setForm({ ...form, price: e.target.value })} />
      <textarea value={form.description} className="border p-2 w-full"
                onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
      <input value={form.image} type="text" className="border p-2 w-full"
             onChange={(e) => setForm({ ...form, image: e.target.value })} />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Actualizar</button>
    </form>
  );
}
