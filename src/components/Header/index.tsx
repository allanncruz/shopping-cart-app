import { useCart } from "@/context/CartContext";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export function Header() {
  const { count } = useCart();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Shopping Cart</Text>

      <TouchableOpacity
        style={styles.cart}
        onPress={() => router.push("/cart")}
      >
        <Text style={styles.cartText}>🛒 {count}</Text>
      </TouchableOpacity>
    </View>
  );
}
