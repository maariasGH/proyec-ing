import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { crearProducto } from "../../app/api/productos";

export default function CrearProducto() {
  const [form, setForm] = useState({ title: "", price: "", description: "", image: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    crearProducto(form).then(() => navigate("/"));
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-3 max-w-md mx-auto">
      <h2 className="text-2xl font-bold">Crear Producto</h2>
      <input type="text" placeholder="Título" className="border p-2 w-full"
             onChange={(e) => setForm({ ...form, title: e.target.value })} />
      <input type="number" placeholder="Precio" className="border p-2 w-full"
             onChange={(e) => setForm({ ...form, price: e.target.value })} />
      <textarea placeholder="Descripción" className="border p-2 w-full"
                onChange={(e) => setForm({ ...form, description: e.target.value })}></textarea>
      <input type="text" placeholder="URL de la imagen" className="border p-2 w-full"
             onChange={(e) => setForm({ ...form, image: e.target.value })} />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Guardar</button>
    </form>
  );
}
