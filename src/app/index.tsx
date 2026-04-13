import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { ProductCard } from "../components/ProductsList";
import { getProducts } from "../services/productsApi";
import { Product } from "../types/products";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";

type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "ProductList"
>;

export default function Index() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation<NavigationProps>();

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
    <FlatList
      data={products}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <ProductCard
          item={item}
          loading={loading}
          onPress={(id) => navigation.navigate("ProductDetail", { id })}
        />
      )}
      contentContainerStyle={{ padding: 16 }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
