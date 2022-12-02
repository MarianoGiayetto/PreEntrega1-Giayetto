import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import "../stylesheets/Card.css";
import "../stylesheets/CardDetail.css";
import { cartContext } from "./CartContextComponent";
import ItemCount from "./ItemCount";

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
