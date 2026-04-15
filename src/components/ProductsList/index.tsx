import { Product } from "@/types/products";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../../context/CartContext";
import { styles } from "./styles"

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
      <TouchableOpacity style={styles.button} onPress={() => addItem(item)}>
        <Text style={styles.buttonText}>🛒 Adicionar</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
