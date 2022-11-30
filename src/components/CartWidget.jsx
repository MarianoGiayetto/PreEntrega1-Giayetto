import React, { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';
import { cartContext } from "./CartContextComponent";

export default function CartWidget() {
  
  const {totalQuantity} = useContext (cartContext)
  
  return (
    <div>
      <Badge style={{marginRight:10, fontSize:15}} bg="primary" text="light">{totalQuantity() || ''}</Badge>
      <BsCart4 style={{ marginRight: 20, width: 40, height: 40, color: "#ccc" }} />
    </div>
  );
}
