import { useCart } from "@/context/CartContext";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    height: 60,
    backgroundColor: "#111",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  logo: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  cart: {
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  cartText: {
    fontWeight: "bold",
  },
});
