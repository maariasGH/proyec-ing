import { useLocalSearchParams, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { eliminarProducto } from "..//api/productos";

export default function EliminarProducto() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  const handleEliminar = async () => {
    if (id) await eliminarProducto(id);
    router.push("/");
  };

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        ¿Seguro que deseas eliminar este producto?
      </Text>
      <Button title="Sí, eliminar" color="red" onPress={handleEliminar} />
      <Button title="Cancelar" onPress={() => router.push("/")} />
    </View>
  );
}
