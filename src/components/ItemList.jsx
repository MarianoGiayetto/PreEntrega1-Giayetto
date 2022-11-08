import React from "react";
import Item from "./Item";

export default function ItemList({ datos = [] }) {
  return datos.map((producto) => <Item key={producto.id} info={producto} />);
}
