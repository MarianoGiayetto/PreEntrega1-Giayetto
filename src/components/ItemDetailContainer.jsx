import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

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
