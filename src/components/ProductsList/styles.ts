import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginBottom: 36,
    overflow: "hidden",
    borderRadius: 8,
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
    fontSize: 22,
    fontWeight: "bold",
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
    backgroundColor: "#017bff",
    padding: 12,
    alignSelf: "flex-end",
    marginRight: 10,
    position: "relative",
    borderRadius: 8,
    top: -10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 12,
  },
});
