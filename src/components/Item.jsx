import React from "react";
import { Link } from "react-router-dom";
import "../hojas_de_estilo/Card.css";

export default function Item({ info }) {
  return (
    <div className="card">
      <h3>{info.titulo}</h3>
      <img className="card__imagen" variant="top" src={info.imagen} alt="imagen_card" />
      <p className="card__precio">${info.precio}</p>
      <p>Stock: {info.stock}</p>
      <Link to={`/item/${info.id}`}>Ver detalle</Link>
    </div>
  );
}
