import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { obtenerProducto, Producto } from "../api/productos";

export default function DetalleProducto() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [producto, setProducto] = useState<Producto | null>(null);

  useEffect(() => {
    if (id) obtenerProducto(id).then((res) => setProducto(res.data));
  }, [id]);

  if (!producto) return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f9f9f9" }}>
      <Text style={{ fontSize: 18, color: "#888" }}>Cargando producto...</Text>
    </View>
  );

  return (
    <ScrollView style={{ padding: 20, backgroundColor: "#f9f9f9" }}>
        <Image
          source={{ uri: producto.image }}
          style={{ width: "100%", height: 280, borderRadius: 10 }}
          resizeMode="center"
        />
        <Text style={{
          fontSize: 22,
          fontWeight: "bold",
          marginTop: 16,
          color: "#1C1C1E"
        }}>
          {producto.title}
        </Text>
        <Text style={{
          fontSize: 16,
          color: "#666",
          marginVertical: 10,
          lineHeight: 16
        }}>
          {producto.description}
        </Text>
        <Text style={{
          fontSize: 22,
          fontWeight: "600",
          color: "#34C759",
          marginTop: 8
        }}>
          💲 {producto.price}
        </Text>
    </ScrollView>
  );
}
