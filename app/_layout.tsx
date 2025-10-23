import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ title: "Productos" }} />
      <Stack.Screen name="producto/[id]" options={{ title: "Detalle" }} />
      <Stack.Screen name="crear" options={{ title: "Crear producto" }} />
      <Stack.Screen name="editar/[id]" options={{ title: "Editar producto" }} />
      <Stack.Screen name="eliminar/[id]" options={{ title: "Eliminar producto" }} />
    </Stack>
  );
}
