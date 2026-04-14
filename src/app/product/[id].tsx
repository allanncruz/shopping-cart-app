import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useCart } from "../../context/CartContext";
import { getProductById } from "../../services/productsApi";
import { Product } from "../../types/products";

export default function ProductDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { addItem } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) loadProduct();
  }, [id]);

  return (
    <>
      <Stack.Screen
        options={{
          title: product?.title,
        }}
      />

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" />
          <Text>Carregando produto...</Text>
        </View>
      ) : !product ? (
        <View style={styles.center}>
          <Text>Produto não encontrado</Text>
        </View>
      ) : (
        <View style={styles.container}>
          <Image source={{ uri: product.image }} style={styles.image} />

          <Text style={styles.title}>{product.title}</Text>

          <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>

          <Text style={styles.category}>{product.category}</Text>

          <Text style={styles.description}>{product.description}</Text>

          <Text style={styles.rating}>
            ⭐ {product.rating.rate} ({product.rating.count} avaliações)
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => addItem(product)}
          >
            <Text style={styles.buttonText}>🛒 Adicionar</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginBottom: 8,
  },
  category: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    marginBottom: 16,
  },
  rating: {
    fontSize: 14,
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#017bff",
    padding: 12,
    marginBottom: 10,
    marginTop: 40,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
});
