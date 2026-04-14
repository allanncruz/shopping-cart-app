import { Stack } from "expo-router";
import { Header } from "../components/Header";
import { CartProvider } from "../context/CartContext";

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack
        screenOptions={{
          header: () => <Header />,
        }}
      />
    </CartProvider>
  );
}
