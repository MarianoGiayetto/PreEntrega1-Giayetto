import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "../stylesheets/ButtonsItems.css";

export default function ItemCount({ stockProduct, onAdd }) {
  const [counter, setCounter] = useState(1);

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>Stock disponible: {stockProduct}</p>
      <Button
        variant="outline-primary"
        className="botones_Items"
        disabled={counter <= 1}
        onClick={handleDecrement}
      >
        -
      </Button>
      <span>{counter}</span>
      <Button
        variant="outline-primary"
        className="botones_Items"
        disabled={counter >= stockProduct}
        onClick={handleIncrement}
      >
        +
      </Button>
      <div>
        <Button
          variant="outline-primary"
          className="botones_Items"
          disabled={stockProduct <= 0}
          onClick={() => onAdd(counter)}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}
