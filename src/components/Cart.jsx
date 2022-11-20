import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/ItemListContainer.css";
import { cartContext } from "./CartContextComponent";
import ItemCart from "./ItemCart";
import "../stylesheets/ItemCart.css"

const Cart = () => {
  const { cart, totalPrice } = useContext(cartContext);

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to={"/"}>Agrega algun producto para comprar</Link>
      </>
    );
  }
  return (
    <div >
      {cart.map((product) => (<ItemCart product={product} />))}
      <h1 >Total: ${totalPrice()}</h1>
    </div>
  );
};

export default Cart;
