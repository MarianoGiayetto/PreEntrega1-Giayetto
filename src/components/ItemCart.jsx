import React, { useContext } from "react";
import { cartContext } from "./CartContextComponent";
import Button from "react-bootstrap/Button";
import '../stylesheets/ItemCart.css'


export default function ItemCart({ product }) {
  const { removeItem } = useContext(cartContext);

  return (
    <div className="itemCart">
      <img className="itemCart__imagen" src={product.image} alt="imagen_card"/>
      <h4>{product.title}</h4>      
      <p className="itemCart__precio">${product.price}</p>
      <p className="itemCart__cantidad">Cantidad: {product.quantity}</p>
      <p className="itemCart__subtotal">Subtotal: ${product.quantity * product.price}</p>
      <Button onClick={() => removeItem(product.id)}>Eliminar</Button>
    </div>
  );
}
