import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const productos = [
  {
    id: 1,
    titulo: "Shampoo Meguiars NXT Generation Car Wash (1.89 L.)",
    imagen: "./Shampoo Meguiars NXT Generation Car Wash (1.89 L.).png",
    precio: "7600",
    stock: "5",
    category: "shampoos",
    descripcion:
      "PH balanceado, ideal para lavar el auto sin sacar la protección de tratamientos previos (encerado, etc).",
  },
  {
    id: 2,
    titulo: "Shampoo Mothers California Gold Car Wash (1.89 L.)",
    imagen: "./Shampoo Mothers California Gold Car Wash (1.89 L.).png",
    precio: "9500",
    stock: "5",
    category: "shampoos",
    descripcion:
      "Shampoo suficientemente fuerte como para eliminar la suciedad, residuos de las carreteras, insectos, excremento de aves, contaminantes del medio ambiente y otras suciedades, sin quitar la cera ni opacar la pintura. Al mismo tiempo, este limpiador súper espumoso, no deja manchas de agua.",
  },
  {
    id: 3,
    titulo: "Shampoo Sonax Xtreme Wash & Dry (1 L.)",
    imagen: "./Shampoo Sonax Xtreme Wash & Dry (1 L.).png",
    precio: "6000",
    stock: "6",
    category: "shampoos",
    descripcion: "Shampoo con prosecante para el lavado a mano del automóvil.",
  },
  {
    id: 4,
    titulo: "Shampoo 3D Pink Car Soap (4 L.)",
    imagen: "./Shampoo 3D Pink Car Soap (4 L.).png",
    precio: "6400",
    stock: "4",
    category: "shampoos",
    descripcion:
      "Es un shampoo viscoso súper concentrado que desprende suavemente la tierra y contaminantes sin dañar la pintura de su vehículo.",
  },
  {
    id: 5,
    titulo: "Cera Mothers California Gold Synthetic Paste Wax (311 gr.)",
    imagen: "./Cera Mothers California Gold Synthetic Paste Wax (311 gr.).png",
    precio: "6500",
    stock: "8",
    category: "ceras",
    descripcion:
      "Otorga un gran brillo, profundidad y protección sin precedentes. La fórmula esta desarrollada para una fácil aplicación y aún más fácil remoción.",
  },
  {
    id: 6,
    titulo: "Cera Rápida Sonax High Speed Wax (500 mL.)",
    imagen: "./Cera rápida Sonax High Speed Wax (500 mL.).png",
    precio: "6500",
    stock: "8",
    category: "ceras",
    descripcion:
      "Es una cera rápida que combina carnauba y emulsiones de silicona para dejar un excelente brillo y protección duradera sobre la pintura de tu auto.",
  },
  {
    id: 7,
    titulo: "Cera Meguiars NXT Generation Tech Wax (311 gr.)",
    imagen: "./Cera Meguiars NXT Generation Tech Wax (311 gr.).png",
    precio: "9000",
    stock: "4",
    category: "ceras",
    descripcion:
      "Produce un acabado profundo de color, con reflejos más intensos y claros. Su tecnología hidrofóbica ofrece protección contra marcas de agua y protege la pintura contra la oxidación, la corrosión y ayuda a protegerla de los rayos UV.",
  },
  {
    id: 8,
    titulo: "Cera rápida 3M Quick Wax (473 mL.)",
    imagen: "./Cera rápida 3M Quick Wax (473 mL.).png",
    precio: "3800",
    stock: "5",
    category: "ceras",
    descripcion:
      "Deja un acabado brillante y ayuda a prolongar el brillo de la cera de larga duración, después de cada lavado.",
  },
  {
    id: 9,
    titulo: "Cepillo 3D largo para llantas",
    imagen: "./Cepillo 3D largo para llantas.png",
    precio: "1000",
    stock: "20",
    category: "cepillos",
    descripcion:
      "Es ideal para limpiar entre los rayos de sus llantas, tanto en el frente como en la parte trasera de las mismas. Su empuñadura de madera le permite un agarre cómodo y firme.",
  },
  {
    id: 10,
    titulo: "Cepillo 3D duro para alfombras",
    imagen: "./Cepillo 3D duro para alfombras.png",
    precio: "1500",
    stock: "15",
    category: "cepillos",
    descripcion:
      "Cepillo duro de cerdas de nylon para alfombras, se puede utilizar también para la limpieza de cubre-alfombras de goma.",
  },
  {
    id: 11,
    titulo: "Cepillo 3D para pasaruedas",
    imagen: "./Cepillo 3D para pasaruedas.png",
    precio: "3000",
    stock: "12",
    category: "cepillos",
    descripcion:
      "Cepillo de cerdas blandas.  Es ideal para la limpieza interior y exterior de su vehículo",
  },
  {
    id: 12,
    titulo: "Guante de lavado premium",
    imagen: "./Guante de lavado premium.png",
    precio: "3800",
    stock: "30",
    category: "microfibras",
    descripcion: "Manopla guante hecho de microfibra.",
  },
  {
    id: 13,
    titulo: "Microfibra Waffle de secado (60x40 cm.)",
    imagen: "./Microfibra Waffle de secado (60x40 cm.).png",
    precio: "2500",
    stock: "10",
    category: "microfibras",
    descripcion:
      "Es una de las mejores microfibras para el trabajo de secado. Puede absorber más de 7 veces su peso en agua, y con una sola puede secarse todo un coche",
  },
  {
    id: 14,
    titulo: "Microfibra amarilla gold pelo corto (40x40 cm.)",
    imagen: "./Microfibra amarilla gold pelo corto (40x40 cm.).png",
    precio: "1000",
    stock: "12",
    category: "microfibras",
    descripcion:
      "Paño de microfibra overlock, de pelo corto, alto poder de limpieza de alta densidad.",
  },
  {
    id: 15,
    titulo: "Microfibra amarilla pulido (40x40 cm.)",
    imagen: "./Microfibra amarilla pulido (40x40 cm.).png",
    precio: "1400",
    stock: "22",
    category: "microfibras",
    descripcion:
      "Paño de microfibra con bordes de tela, especial para retiro de pulimento y levantar brillo debido al pelo corto.",
  },
];

export default function ItemDetailContainer() {
  const [data, setData] = useState({});

  const { itemId } = useParams();

  useEffect(() => {
    const getItem = new Promise((resolve) => {
      
        resolve(productos.find((item) => item.id === parseInt(itemId)));
     
    });
    getItem.then((res) => {
      setData(res);
    });
  }, [itemId]);

  return (
    <>
      <ItemDetail data={data} />
    </>
  );
}
