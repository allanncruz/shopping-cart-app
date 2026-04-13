import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ProductsList } from "../components/ProductsList";
import { getProducts } from "../services/productsApi";
import { Products } from "../types/products";

export default function Index() {
  const [posts, setPosts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await getProducts();
        setPosts(response);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return (
    <View style={styles.container}>
      <ProductsList data={posts} loading={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
