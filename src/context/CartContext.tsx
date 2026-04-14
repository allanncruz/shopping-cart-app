import { createContext, useContext, useState, ReactNode } from "react";

type CartContextType = {
  items: number[];
  addItem: (id: number) => void;
  count: number;
};

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<number[]>([]);

  const addItem = (id: number) => {
    setItems((prev) => [...prev, id]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        count: items.length,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);