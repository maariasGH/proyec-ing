import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CrearProducto from "./pages/CrearProducto";
import DetalleProductos from "./pages/DetalleProductos";
import EditarProducto from "./pages/EditarProducto";
import EliminarProducto from "./pages/EliminarProducto";
import ListaProductos from "./pages/ListaProductos";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListaProductos />} />
        <Route path="/productos/:id" element={<DetalleProductos />} />
        <Route path="/crear" element={<CrearProducto />} />
        <Route path="/editar/:id" element={<EditarProducto />} />
        <Route path="/eliminar/:id" element={<EliminarProducto />} />
      </Routes>
    </Router>
  );
}
