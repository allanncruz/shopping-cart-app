import { Products } from "../types/products";
import { api } from "./config";

export const getProducts = async (): Promise<Products[]> => {
  return api("/products");
};
