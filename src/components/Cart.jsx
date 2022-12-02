import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Card.css";
import { cartContext } from "./CartContextComponent";
import ItemCart from "./ItemCart";

export default function Cart() {
  const { cart } = useContext(cartContext);

  if (cart.length === 0) {
    return (
      <div>
        <h1>No hay elementos en el carrito</h1>
        <Link className="boton__link" to={"/"}>
          Agrega algún producto para comprar
        </Link>
      </div>
    );
  }
  return (
    <div>
      {cart.map((product) => (
        <ItemCart product={product} />
      ))}
      <Link className="m-3 boton__link" to="/">
        Seguir comprando
      </Link>
      <Link className="m-3 boton__link" to="/checkout">
        Finalizar compra
      </Link>
    </div>
  );
}
