import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: { flex: 1 },
  empty: {
    textAlign: "center",
    marginTop: 40,
  },
  card: {
    flexDirection: "row",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  price: {
    fontWeight: "bold",
  },
  remove: {
    color: "red",
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
