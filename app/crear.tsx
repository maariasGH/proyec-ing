import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, ScrollView, Text, TextInput } from "react-native";
import { crearProducto } from "./api/productos";
import { colores } from "./temas";

export default function CrearProducto() {
  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const router = useRouter();

  const handleCrear = async () => {
    if (!titulo || !precio || !descripcion) return alert("Completa todos los campos");
    await crearProducto({
      title: titulo,
      price: parseFloat(precio),
      description: descripcion,
      image: "https://i.pravatar.cc",
      category: "electronics",
      id: 0
    });
    router.push("/");
  };

  

  return (
    <ScrollView style={{ padding: 16, backgroundColor: colores.fondo }}>
        <TextInput
          placeholder="Título"
          value={titulo}
          onChangeText={setTitulo}
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
        placeholder="Precio"
        value={precio}
        onChangeText={setPrecio}
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
        placeholder="Descripción"
        value={descripcion}
        onChangeText={setDescripcion}
        style={{
            borderWidth: 1,
            borderColor: colores.gris,
            borderRadius: 8,
            padding: 10,
            marginVertical: 8,
            backgroundColor: colores.blanco,
          }}
      />
      <Button title="Guardar" color={colores.primario} onPress={handleCrear} />
    </ScrollView>
  );
}
