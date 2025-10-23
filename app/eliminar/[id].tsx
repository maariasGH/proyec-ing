import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, ScrollView, Text, View } from "react-native";
import { eliminarProducto } from "../api/productos";
import { colores } from "../temas";

export default function EliminarProducto() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const handleEliminar = async () => {
    if (id) await eliminarProducto(id);
    router.push("/");
  };

  return (
    <ScrollView style={{ padding: 16, backgroundColor: colores.fondo }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", color: colores.texto, marginBottom: 20 }}>
        ¿Seguro que deseas eliminar este producto?
      </Text>
      <Button title="Sí, eliminar" color={colores.peligro} onPress={handleEliminar} />
      <Button title="Cancelar" color={colores.gris} onPress={() => router.push("/")} />
    </ScrollView>

  );
}
