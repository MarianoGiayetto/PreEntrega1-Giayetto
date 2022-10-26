import React from "react";
import Card from "react-bootstrap/Card";

export default function Main() {
  return (
    <>
      <Card className="mx-auto" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="./logo512.png" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
      <Card className="mx-auto" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="./logo512.png" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
