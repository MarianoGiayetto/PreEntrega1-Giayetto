import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "../stylesheets/ItemListContainer.css";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import {getFirestore,collection,getDocs,query,where} from "firebase/firestore";

export default function ItemListContainer() {
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryCollection = collection(db, "products");
    if (categoryId) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", categoryId)
      );
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    }
  }, [categoryId]);

  return (
    <div>
      {!data.length && <Spinner style={{margin:"10px"}} animation="border" variant="primary"/>}
      <div className="ItemListContainer">
        <ItemList data={data} />
      </div>
    </div>
  );
}
