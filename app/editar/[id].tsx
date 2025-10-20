import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, ScrollView, Text, TextInput } from "react-native";
import { editarProducto, obtenerProducto, Producto } from "..//api/productos";

export default function EditarProducto() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [producto, setProducto] = useState<Producto>({
    title: "",
    price: 0,
    description: "",
    image: "",
    category: "",
  });
  const router = useRouter();

  useEffect(() => {
    if (id) obtenerProducto(id).then((res) => setProducto(res.data));
  }, [id]);

  const handleGuardar = async () => {
    if (!id) return;
    await editarProducto(id, producto);
    router.push("/");
  };

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Editar producto</Text>
      <TextInput
        value={producto.title}
        onChangeText={(t) => setProducto({ ...producto, title: t })}
        style={{ borderWidth: 1, marginVertical: 8, padding: 8 }}
      />
      <TextInput
        value={producto.price.toString()}
        onChangeText={(t) =>
          setProducto({ ...producto, price: parseFloat(t) || 0 })
        }
        keyboardType="numeric"
        style={{ borderWidth: 1, marginVertical: 8, padding: 8 }}
      />
      <TextInput
        value={producto.description}
        onChangeText={(t) => setProducto({ ...producto, description: t })}
        style={{ borderWidth: 1, marginVertical: 8, padding: 8 }}
      />
      <Button title="Guardar cambios" onPress={handleGuardar} />
    </ScrollView>
  );
}
