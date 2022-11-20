import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default function ItemDetailContainer() {
  const [data, setData] = useState({});

  const { itemId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryDoc = doc(db, "products", itemId);
    getDoc(queryDoc).then((res) => setData({ id: res.id, ...res.data() }));
  }, [itemId]);

  return (
    <>
      <ItemDetail data={data} />
    </>
  );
}
