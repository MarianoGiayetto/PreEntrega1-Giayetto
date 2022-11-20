import React, { useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import "../stylesheets/ButtonsItems.css";

export default function ItemCount({ stockProduct, onAdd }) {
   
  const [counter, setCounter] = useState(1);   

  const Decrement = () => {
    setCounter(counter - 1);
  };

  const Increment = () => {
    setCounter(counter + 1); 
  };

  return (
    <div>
      <p>Stock disponible: {stockProduct}</p>
      <Button className="botones_Items" variant="primary" disabled={counter <= 1} onClick={Decrement}> - </Button>
      <span>{counter}</span>
      <Button className="botones_Items" variant="primary" disabled={counter >= stockProduct} onClick={Increment}> + </Button>
      <div>
        <Button className="botones_Items" variant="primary" disabled={stockProduct <= 0} onClick={() => onAdd(counter)}>Agregar al carrito</Button>
      </div>
    </div>
  );
}
