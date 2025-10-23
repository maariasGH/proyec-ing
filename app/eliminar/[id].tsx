import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, ScrollView, Text, View } from "react-native";
import { eliminarProducto } from "../api/productos";
import { colores } from "../temas";
import MensajeConfirmacion from "../components/MensajeConfirmacion";
import { useState } from "react";

export default function EliminarProducto() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [mensaje, setMensaje] = useState<string | null>(null);

  const handleEliminar = async () => {
    if (id) await eliminarProducto(id);
    router.push({
      pathname: "/",
      params: { mensaje: "✅ Producto eliminado correctamente" },
    });
  };

  return (
    <ScrollView style={{ padding: 16, backgroundColor: colores.fondo }}>
      {mensaje && <MensajeConfirmacion texto={mensaje} />}
      <Text style={{ fontSize: 24, fontWeight: "bold", color: colores.texto, marginBottom: 20 }}>
        ¿Seguro que deseas eliminar este producto?
      </Text>
      <Button title="Sí, eliminar" color={colores.peligro} onPress={handleEliminar} />
      <Button title="Cancelar" color={colores.gris} onPress={() => router.push("/")} />
    </ScrollView>

  );
}
