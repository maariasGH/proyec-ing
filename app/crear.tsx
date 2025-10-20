import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, ScrollView, Text, TextInput } from "react-native";
import { crearProducto } from "./api/productos";

export default function CrearProducto() {
  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const router = useRouter();

  const handleCrear = async () => {
    await crearProducto({
      title: titulo,
      price: parseFloat(precio),
      description: descripcion,
      image: "https://i.pravatar.cc",
      category: "electronics",
    });
    router.push("/");
  };

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Crear nuevo producto
      </Text>
      <TextInput
        placeholder="Título"
        value={titulo}
        onChangeText={setTitulo}
        style={{ borderWidth: 1, marginVertical: 8, padding: 8 }}
      />
      <TextInput
        placeholder="Precio"
        value={precio}
        onChangeText={setPrecio}
        keyboardType="numeric"
        style={{ borderWidth: 1, marginVertical: 8, padding: 8 }}
      />
      <TextInput
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
        style={{ borderWidth: 1, marginVertical: 8, padding: 8 }}
      />
      <Button title="Guardar" onPress={handleCrear} />
    </ScrollView>
  );
}
