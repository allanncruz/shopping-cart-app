import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { useCart } from "../../context/CartContext";
import { styles } from "./styles";

export default function CartScreen() {
  const { items, removeItem } = useCart();

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        ListEmptyComponent={<Text style={styles.empty}>Carrinho vazio</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.info}>
              <Text numberOfLines={1}>{item.title}</Text>
              <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
            </View>

            <TouchableOpacity onPress={() => removeItem(item.id)}>
              <Text style={styles.remove}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <View style={styles.footer}>
        <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>
      </View>
    </View>
  );
}
