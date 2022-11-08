import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function ItemCount({ initial, stock, onAdd }) {
  const [counter, setCounter] = useState(initial);

  const decrementar = () => {
    setCounter(counter - 1);
  };

  const incrementar = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="botones_Items">
      <Button variant="primary" disabled={counter <= 1} onClick={decrementar}>
        -
      </Button>
      <span>{counter}</span>
      <Button
        variant="primary"
        disabled={counter >= stock}
        onClick={incrementar}
      >
        +
      </Button>
      <div>
        <Button
          variant="primary"
          disabled={stock <= 0}
          onClick={() => onAdd(counter)}
        >
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
}
