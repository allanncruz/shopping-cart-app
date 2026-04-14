import { Product } from "@/types/products";
import { createContext, ReactNode, useContext, useState } from "react";

type CartContextType = {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  count: number;
};

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);

  const addItem = (product: Product) => {
    setItems((prev) => [...prev, product]);
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        count: items.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
