import { View, Text } from "react-native";

export default function MensajeConfirmacion({ texto }: { texto: string }) {
  return (
    <View style={{
      backgroundColor: "#d4edda",
      padding: 10,
      borderRadius: 8,
      marginBottom: 12,
      borderLeftWidth: 4,
      borderLeftColor: "#28a745",
    }}>
      <Text style={{ color: "#155724", fontWeight: "bold" }}>{texto}</Text>
    </View>
  );
}
