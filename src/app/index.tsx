import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { getPosts } from "../services/postApi";
import { Post } from "../types/post";

export default function Index() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await getPosts();
        setPosts(response);
      } catch (error) {
        console.error(error);
      }
    };

    load();
  }, []);

  return (
    <FlatList
      data={posts}
      keyExtractor={(item, index) => String(item.id ?? index)}
      renderItem={({ item }) => (
        <View>
          <Text>{item.title}</Text>teste
        </View>
      )}
    />
  );
}
