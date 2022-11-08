import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../hojas_de_estilo/CardDetail.css";

export default function ItemDetail({ data }) {
  return (
    <Card className="mx-auto card__detail" >
      <Card.Img variant="top" src={`.${data.imagen}`} />
      <Card.Text>{data.titulo}</Card.Text>
      <Card.Text>${data.precio}</Card.Text>
      <Card.Text>{data.descripcion}</Card.Text>
      <Link to={`/`}>Volver</Link>
    </Card>
  );
}
