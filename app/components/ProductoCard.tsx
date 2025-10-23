import { Link } from "expo-router";
import { Button, Image, Text, View } from "react-native";
import { Producto } from "../api/productos";
import { colores, sombras } from "../temas";

interface Props {
  producto: Producto;
}

export default function ProductoCard({ producto }: Props) {
  return (
    <View style={{
      backgroundColor: colores.blanco,
      marginVertical: 10,
      padding: 15,
      borderRadius: 20,
      ...sombras.sombra,
    }}>
      <Image
        source={{ uri: producto.image }}
        style={{ width: "100%", height: 250, borderRadius: 10 }}
        resizeMode="center"
      />
      <Text style={{ fontSize: 20, fontWeight: "600", marginTop: 10, color: colores.texto }}>
        {producto.title}
      </Text>
      <Text style={{ fontSize: 16, color: colores.gris }}>${producto.price}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 12}}>
        <Link href={`/producto/${producto.id}`} asChild>
          <Button title="Ver"  color={colores.primario}  />
        </Link>
        <Link href={`/editar/${producto.id}`} asChild>
          <Button title="Editar" color={colores.secundario} />
        </Link>
        <Link href={`/eliminar/${producto.id}`} asChild>
          <Button title="Eliminar" color={colores.peligro} />
        </Link>
      </View>
    </View>
  );
}