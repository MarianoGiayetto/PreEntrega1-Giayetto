import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "../stylesheets/CardDetail.css";
import ItemCount from "./ItemCount";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { cartContext } from "./CartContextComponent";
import "../stylesheets/Card.css";

export default function ItemDetail({ data }) {
  const [goToCart, setGoToCart] = useState(false);
  const { addItem } = useContext(cartContext);
  const onAdd = (quantity) => {
    setGoToCart(true);
    addItem(data, quantity);
  };

  return (
    <Container className="card__detail">
      <Row>
        <Col>
          <Card.Title>{data.title}</Card.Title>
          <img className="card__detail__imagen" src={data.image} />
        </Col>
        <Col
          style={{ marginTop: "5%", textAlign: "justify", textAlign: "center" }}
        >
          <Card.Text>{data.description}</Card.Text>
          <Card.Text>${data.price}</Card.Text>
          {goToCart ? (
            <Link className="boton__link" to="/Cart">
              Terminar compra
            </Link>
          ) : (
            <ItemCount stockProduct={data.stock} onAdd={onAdd} />
          )}
        </Col>
      </Row>
      <Row>
        <Col>
          <Link className="boton__link" to={`/`}>
            Volver
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
