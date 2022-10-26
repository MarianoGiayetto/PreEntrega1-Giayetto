import React from "react";
import { BsCart4 } from "react-icons/bs";

export default function CartWidget() {
  return (
    <a href="#">
      <BsCart4 style={{ marginRight: 20, width: 40, height: 40, color: "#ccc" }} />
    </a>
  );
}
