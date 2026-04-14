import { Product } from "@/types/products";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../../context/CartContext";

type Props = {
  item: Product;
  loading?: boolean;
  onPress: (id: number) => void;
};

export const ProductCard = ({ item, loading, onPress }: Props) => {
  const { addItem } = useCart();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress?.(item.id)}
      activeOpacity={0.8}
    >
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.category}>{item.category}</Text>

        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>

        <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => addItem(item.id)}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 16,
    overflow: "hidden",
    elevation: 3, // Android
    shadowColor: "#000", // iOS
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  image: {
    width: "100%",
    height: 180,
    resizeMode: "contain",
    backgroundColor: "#f5f5f5",
  },
  content: {
    padding: 12,
  },
  category: {
    fontSize: 12,
    color: "#888",
    marginBottom: 4,
    textTransform: "capitalize",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2e7d32",
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 14,
    fontWeight: "600",
    marginRight: 4,
  },
  count: {
    fontSize: 12,
    color: "#777",
  },
  button: {
    backgroundColor: "#111",
    padding: 8,
    borderRadius: 6,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#fff",
  },
});
