import React, { useState, useEffect } from "react";
/* import ItemCount from "../components/ItemCount"; */
import ItemList from "./ItemList";
import "../hojas_de_estilo/ItemListContainer.css";
import { useParams } from "react-router-dom";

const productos = [
  {
    id: 1,
    titulo: "Shampoo Meguiars NXT Generation Car Wash (1.89 L.)",
    imagen: "/Shampoo Meguiars NXT Generation Car Wash (1.89 L.).png",
    precio: "7600",
    stock: "5",
    categoria: "shampoos",
  },
  {
    id: 2,
    titulo: "Shampoo Mothers California Gold Car Wash (1.89 L.)",
    imagen: "/Shampoo Mothers California Gold Car Wash (1.89 L.).png",
    precio: "9500",
    stock: "5",
    categoria: "shampoos",
  },
  {
    id: 3,
    titulo: "Shampoo Sonax Xtreme Wash & Dry (1 L.)",
    imagen: "/Shampoo Sonax Xtreme Wash & Dry (1 L.).png",
    precio: "6000",
    stock: "6",
    categoria: "shampoos",
  },
  {
    id: 4,
    titulo: "Shampoo 3D Pink Car Soap (4 L.)",
    imagen: "/Shampoo 3D Pink Car Soap (4 L.).png",
    precio: "6400",
    stock: "4",
    categoria: "shampoos",
  },
  {
    id: 5,
    titulo: "Cera Mothers California Gold Synthetic Paste Wax (311 gr.)",
    imagen: "/Cera Mothers California Gold Synthetic Paste Wax (311 gr.).png",
    precio: "6500",
    stock: "8",
    categoria: "ceras",
  },
  {
    id: 6,
    titulo: "Cera Rápida Sonax High Speed Wax (500 mL.)",
    imagen: "/Cera rápida Sonax High Speed Wax (500 mL.).png",
    precio: "6500",
    stock: "8",
    categoria: "ceras",
  },
  {
    id: 7,
    titulo: "Cera Meguiars NXT Generation Tech Wax (311 gr.)",
    imagen: "/Cera Meguiars NXT Generation Tech Wax (311 gr.).png",
    precio: "9000",
    stock: "4",
    categoria: "ceras",
  },
  {
    id: 8,
    titulo: "Cera rápida 3M Quick Wax (473 mL.)",
    imagen: "/Cera rápida 3M Quick Wax (473 mL.).png",
    precio: "3800",
    stock: "5",
    categoria: "ceras",
  },
  {
    id: 9,
    titulo: "Cepillo 3D largo para llantas",
    imagen: "/Cepillo 3D largo para llantas.png",
    precio: "1000",
    stock: "20",
    categoria: "cepillos",
  },
  {
    id: 10,
    titulo: "Cepillo 3D duro para alfombras",
    imagen: "/Cepillo 3D duro para alfombras.png",
    precio: "1500",
    stock: "15",
    categoria: "cepillos",
  },
  {
    id: 11,
    titulo: "Cepillo 3D para pasaruedas",
    imagen: "/Cepillo 3D para pasaruedas.png",
    precio: "3000",
    stock: "12",
    categoria: "cepillos",
  },
  {
    id: 12,
    titulo: "Guante de lavado premium",
    imagen: "/Guante de lavado premium.png",
    precio: "3800",
    stock: "30",
    categoria: "microfibras",
  },
  {
    id: 13,
    titulo: "Microfibra Waffle de secado (60x40 cm.)",
    imagen: "/Microfibra Waffle de secado (60x40 cm.).png",
    precio: "2500",
    stock: "10",
    categoria: "microfibras",
  },
  {
    id: 14,
    titulo: "Microfibra amarilla gold pelo corto (40x40 cm.)",
    imagen: "/Microfibra amarilla gold pelo corto (40x40 cm.).png",
    precio: "1000",
    stock: "12",
    categoria: "microfibras",
  },
  {
    id: 15,
    titulo: "Microfibra amarilla pulido (40x40 cm.)",
    imagen: "/Microfibra amarilla pulido (40x40 cm.).png",
    precio: "1400",
    stock: "22",
    categoria: "microfibras",
  },
];

export default function ItemListContainer() {
  const [datos, setDatos] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const getDatos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });
    if (categoryId) {
      getDatos.then((res) =>
        setDatos(res.filter((producto) => producto.categoria === categoryId))
      );
    } else {
      getDatos.then((res) => setDatos(res));
    }
  }, [categoryId]);

    const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} unidades`);
  };
  return (
    <div>
      {!datos.length && "Loading..."}
      <div className="ItemListContainer">
        <ItemList datos={datos} />
      </div>
    </div>
  );
}
