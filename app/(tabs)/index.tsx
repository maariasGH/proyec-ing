import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Button, ScrollView, Text } from "react-native";
import { obtenerProductos, Producto } from "../api/productos";
import ProductoCard from "../components/ProductoCard";

export default function ListaProductos() {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    obtenerProductos().then((res) => setProductos(res.data));
  }, []);

  return (
    <ScrollView style={{ padding: 16, backgroundColor: "#f2f2f2" }}>
      <Text style={{ fontSize: 28, fontWeight: "bold", marginBottom: 10 }}>
        🛒 Lista de Productos
      </Text>

      <Link href="/crear" asChild>
        <Button title="➕ Crear nuevo producto" />
      </Link>

      {productos.map((p) => (
        <ProductoCard key={p.id} producto={p} />
      ))}
    </ScrollView>
  );
}