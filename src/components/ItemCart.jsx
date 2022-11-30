import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../stylesheets/Card.css";
import { cartContext } from "./CartContextComponent";

export default function ItemCart({ product }) {
  const { removeItem } = useContext(cartContext);

  return (
    <Card border="dark"style={{width:'60%',margin:'20px auto', alignItems:'center' }} >
      <Card.Body>
      <Card.Img style={{width:'60%'}} src={product.image} alt="imagen_card"/>
      
      <Card.Title>{product.title}</Card.Title>      
      <Card.Text >${product.price}</Card.Text>
      <Card.Text >Cantidad: {product.quantity}</Card.Text>
      <Card.Text >Subtotal: ${product.quantity * product.price}</Card.Text>
      </Card.Body>
      
      <Link className="boton__link" onClick={() => removeItem(product.id)}>Eliminar</Link >
    </Card>
  );
}
