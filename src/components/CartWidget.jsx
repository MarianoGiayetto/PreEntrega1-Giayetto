import React from "react";
import { BsCart4 } from "react-icons/bs";
import Badge from 'react-bootstrap/Badge';

export default function CartWidget() {
  return (
    <div href="#">
      <Badge style={{marginRight:10}} bg="primary">1</Badge>
      <BsCart4 style={{ marginRight: 20, width: 40, height: 40, color: "#ccc" }} />
    </div>
  );
}
