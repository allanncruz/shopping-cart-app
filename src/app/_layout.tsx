import { Stack } from "expo-router";
import { Text } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitle: () => (
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Shopping Cart
          </Text>
        ),
        headerTitleAlign: "center",
      }}
    />
  );
}