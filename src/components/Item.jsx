import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Card.css";
import Card from 'react-bootstrap/Card';

export default function Item({ info }) {  
  return (    
      <Card style={{ width: '18rem', justifyContent:'space-around'}} className="card">
        <Card.Text>{info.title}</Card.Text>
        <Card.Img variant="top"
          /* className="card__imagen" */
          src={info.image}
          alt="imagen_card"
        />
        <Card.Text >${info.price}</Card.Text>
        <Link className="boton__link" to={`/item/${info.id}`}>Ver detalle</Link>
      </Card> 
        
  );
}
