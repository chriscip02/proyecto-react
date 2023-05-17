import { createContext, useState, useEffect } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/firebase-config";

export const ItemContext = createContext(null);

const ItemProvider = (props) => {
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState("");
  const itemsRef = collection(db, "items");

  const getItems = async () => {
    const q = query(itemsRef, where("category", "==", category));
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
  }, [category]);

  return (
    <ItemContext.Provider value={{ items, setCategory }}>
      {props.children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;
