import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ProductCard } from "../components/ProductsList";
import { getProducts } from "../services/productsApi";
import { Product } from "../types/products";

export default function Index() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      try {
        const response = await getProducts();
        setProducts(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <View>
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            loading={loading}
            onPress={(id: number) =>
              router.push({
                pathname: "/product/[id]",
                params: { id: String(id) },
              })
            }
          />
        )}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
});
