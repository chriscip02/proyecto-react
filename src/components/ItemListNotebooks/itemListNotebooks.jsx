import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import db from "../../../db/firebase-config";
import Card from "../Card/Card";

const ItemListNotebooks = () => {
  const [items, setItems] = useState([]);
  const itemsRef = collection(db, "items");

  const getItems = async () => {
    const q = query(itemsRef, where("category", "==", "notebooks"));
    const itemsCollection = await getDocs(q);
    const items = itemsCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setItems(items);
    console.log(items);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemListNotebooks;
