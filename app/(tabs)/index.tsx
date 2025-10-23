import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Button, ScrollView, Text } from "react-native";
import { obtenerProductos, Producto } from "../api/productos";
import ProductoCard from "../components/ProductoCard";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { colores } from "../temas";
import { useLocalSearchParams } from "expo-router";
import MensajeConfirmacion from "../components/MensajeConfirmacion";

export default function ListaProductos() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const { mensaje } = useLocalSearchParams();

  useEffect(() => {
    obtenerProductos().then((res) => setProductos(res.data));
  }, []);


  return (
    <ScrollView style={{ padding: 16, backgroundColor: colores.fondo }}>
      {mensaje && <MensajeConfirmacion texto={mensaje as string} />}
      <Text style={{ fontSize: 28, fontWeight: "bold", color: colores.texto, marginBottom: 10 }}>
        🛒 Lista de Productos
      </Text>
      
      <Link href="/crear" asChild>
        <Button title="➕ Crear nuevo producto" color={colores.primario} />
      </Link>

      {productos.map((p) => (
        <ProductoCard key={p.id} producto={p} />
      ))}
    </ScrollView>
  );
}