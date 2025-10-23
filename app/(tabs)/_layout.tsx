import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Productos" }} />
      <Stack.Screen name="producto/[id]" options={{ title: "Producto ${route.params?.id ?? " }} />
      <Stack.Screen name="crear" options={{ title: "Crear" }} />
      <Stack.Screen name="editar/[id]" options={{ title: "Editar" }} />
      <Stack.Screen name="eliminar/[id]" options={{ title: "Eliminar" }} />
    </Stack>
  );
}
