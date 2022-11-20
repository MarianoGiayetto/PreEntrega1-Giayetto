import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Card.css";

export default function Item({ info }) {  
  return (    
      <div className="card">
        <h3>{info.title}</h3>
        <img
          className="card__imagen"
          src={info.image}
          alt="imagen_card"
        />
        <p className="card__precio">${info.price}</p>
        <Link className="card__link" to={`/item/${info.id}`}>Ver detalle</Link>
      </div>    
  );
}
