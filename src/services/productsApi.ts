import { Product } from "../types/products";
import { api } from "./config";

export const getProducts = async (): Promise<Product[]> => {
  return api("/products");
};
