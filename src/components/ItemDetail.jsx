import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../hojas_de_estilo/CardDetail.css";
import ItemCount from "./ItemCount";

const onAdd = (cantidad) => {
  console.log(`Agregaste ${cantidad} unidades`);
};

export default function ItemDetail({ data }) {
  return (
    <Card className="mx-auto card__detail">
      <Card.Img variant="top" src={`.${data.imagen}`} />
      <Card.Text>{data.titulo}</Card.Text>
      <Card.Text>${data.precio}</Card.Text>
      <Card.Text>{data.descripcion}</Card.Text>
      <Card.Text>Unidades en stock: {data.stock}</Card.Text>
      <ItemCount initial={1} stock={data.stock} onAdd={onAdd} />
      <Link to={`/`}>Volver</Link>
    </Card>
  );
}
