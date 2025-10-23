import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, ScrollView, Text, TextInput } from "react-native";
import { editarProducto, obtenerProducto, Producto } from "../api/productos";
import { colores } from "../temas";

export default function EditarProducto() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [producto, setProducto] = useState<Producto>({
    title: "",
    price: 0,
    description: "",
    image: "",
    category: "",
    id: 0,
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
    <ScrollView style={{ padding: 16, backgroundColor: colores.fondo}}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Editar producto</Text>
      <TextInput
        value={producto.title}
        onChangeText={(t) => setProducto({ ...producto, title: t })}
        style={{
            borderWidth: 1,
            borderColor: colores.gris,
            borderRadius: 8,
            padding: 10,
            marginVertical: 8,
            backgroundColor: colores.blanco,
          }}
      />
      <TextInput
        value={producto.price.toString()}
        onChangeText={(t) =>
          setProducto({ ...producto, price: parseFloat(t) || 0 })
        }
        keyboardType="numeric"
        style={{
            borderWidth: 1,
            borderColor: colores.gris,
            borderRadius: 8,
            padding: 10,
            marginVertical: 8,
            backgroundColor: colores.blanco,
          }}
      />
      <TextInput
        value={producto.description}
        onChangeText={(t) => setProducto({ ...producto, description: t })}
        style={{
            borderWidth: 1,
            borderColor: colores.gris,
            borderRadius: 8,
            padding: 10,
            marginVertical: 8,
            backgroundColor: colores.blanco,
          }}
      />
      <Button title="Guardar cambios" color={colores.primario} onPress={handleGuardar} />
    </ScrollView>
  );
}
