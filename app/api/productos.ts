import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

export interface Producto {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export const obtenerProductos = () => axios.get<Producto[]>(API_URL);

export const obtenerProducto = (id: string | number) => axios.get<Producto>(`${API_URL}/${id}`);

export const crearProducto = (producto: Producto) => axios.post(API_URL, producto);

export const editarProducto = (id: string | number, producto: Producto) =>
  axios.put(`${API_URL}/${id}`, producto);

export const eliminarProducto = (id: string | number) => axios.delete(`${API_URL}/${id}`);
