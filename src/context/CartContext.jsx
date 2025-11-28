import React, { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // [{id,title,price,image,qty,size}]

  const addItem = (product, qty = 1, extra = {}) => {
    setItems((prev) => {
      const index = prev.findIndex(
        (i) => i.id === product.id && i.size === extra.size
      );
      if (index >= 0) {
        const copy = [...prev];
        copy[index] = { ...copy[index], qty: copy[index].qty + qty };
        return copy;
      }
      return [
        ...prev,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          qty,
          size: extra.size || null,
        },
      ];
    });
  };

  const updateQty = (id, size, qty) => {
    setItems((prev) =>
      prev
        .map((i) =>
          i.id === id && i.size === size ? { ...i, qty: Math.max(1, qty) } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  const removeItem = (id, size) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.size === size)));
  };

  const clearCart = () => setItems([]);

  const info = useMemo(() => {
    const totalItems = items.reduce((acc, i) => acc + i.qty, 0);
    const subtotal = items.reduce((acc, i) => acc + i.price * i.qty, 0);
    return { totalItems, subtotal };
  }, [items]);

  const value = {
    items,
    addItem,
    updateQty,
    removeItem,
    clearCart,
    ...info,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("Error Carrito");
  return ctx;
}
