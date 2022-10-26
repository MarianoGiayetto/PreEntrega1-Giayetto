import React from "react";

export default function ItemListContainer({ greeting, color }) {
  return (
    <div 
      style={{ color: color, fontSize: 50 }}>{greeting}
    </div>
  )
}
