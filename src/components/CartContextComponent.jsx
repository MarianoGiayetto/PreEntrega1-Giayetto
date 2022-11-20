import React, { createContext, useState } from "react";

export const cartContext = createContext([]);

export default function CartContextComponent({ children }) {
  
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(cart.map((product) => {
          return product.id === item.id ? { ...product, quantity: product.quantity + quantity } : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const clear = () => setCart([]);

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeItem = (id) =>
    setCart(cart.filter((product) => product.id !== id));

  const totalPrice = () =>
    cart.reduce((prev, act) => prev + act.quantity * act.price, 0);

  const totalQuantity = () =>
    cart.reduce(
      (acumulador, actualProduct) => acumulador + actualProduct.quantity,0);

  return (
    <cartContext.Provider
      value={{
        clear,
        isInCart,
        removeItem,
        addItem,
        totalPrice,
        totalQuantity,
        cart,
      }}>
      {children}
    </cartContext.Provider>
  );
}
