import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text } from "react-native";
import { obtenerProducto, Producto } from "../api/productos";

export default function DetalleProducto() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [producto, setProducto] = useState<Producto | null>(null);

  useEffect(() => {
    if (id) obtenerProducto(id).then((res) => setProducto(res.data));
  }, [id]);

  if (!producto) return <Text>Cargando...</Text>;

  return (
    <ScrollView style={{ padding: 16 }}>
      <Image
        source={{ uri: producto.image }}
        style={{ width: "100%", height: 300 }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 10 }}>
        {producto.title}
      </Text>
      <Text style={{ fontSize: 18, marginVertical: 8 }}>
        {producto.description}
      </Text>
      <Text style={{ fontSize: 22, color: "green" }}>💲 {producto.price}</Text>
    </ScrollView>
  );
}
