import { Link } from "expo-router";
import { Button, Image, Text, View } from "react-native";
import { Producto } from "../api/productos";

interface Props {
  producto: Producto;
}

export default function ProductoCard({ producto }: Props) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        marginVertical: 10,
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
      }}
    >
      <Image
        source={{ uri: producto.image }}
        style={{ width: "100%", height: 200, borderRadius: 8 }}
        resizeMode="contain"
      />
      <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 8 }}>
        {producto.title}
      </Text>
      <Text style={{ fontSize: 16, color: "gray" }}>${producto.price}</Text>

      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 8 }}>
        <Link href={`/producto/${producto.id}`} asChild>
          <Button title="Ver" />
        </Link>
        <Link href={`/editar/${producto.id}`} asChild>
          <Button title="Editar" color="green" />
        </Link>
        <Link href={`/eliminar/${producto.id}`} asChild>
          <Button title="Eliminar" color="red" />
        </Link>
      </View>
    </View>
  );
}