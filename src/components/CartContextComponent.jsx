import React, { createContext, useEffect, useState } from "react";

export const cartContext = createContext([]);

export default function CartContextComponent({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("Cart")) || []);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const clearCart = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeItem = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  const totalPrice = () =>
    cart.reduce((prev, act) => prev + act.quantity * act.price, 0);

  const totalQuantity = () =>
    cart.reduce(
      (acumulador, actualProduct) => acumulador + actualProduct.quantity,
      0
    );

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <cartContext.Provider
      value={{
        clearCart,
        isInCart,
        removeItem,
        addItem,
        totalPrice,
        totalQuantity,
        cart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
