import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, TextInput, View } from "react-native";
import { ProductCard } from "../components/ProductsList";
import { getProducts } from "../services/productsApi";
import { Product } from "../types/products";

export default function Index() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setFiltered(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filteredData = products.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase()),
      );

      setFiltered(filteredData);
    }, 300);

    return () => clearTimeout(timeout);
  }, [search, products]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar produtos..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      <FlatList
        data={filtered}
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
        contentContainerStyle={{ padding: 3 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
});
