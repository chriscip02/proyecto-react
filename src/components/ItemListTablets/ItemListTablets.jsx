import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect, useContext } from "react";
import db from "../../../db/firebase-config";
import Card from "../Card/Card";
import { ItemContext } from "../../contexts/ItemContext";

const ItemListTablets = () => {
  const { items, setCategory } = useContext(ItemContext);

  useEffect(() => {
    setCategory("tablets");
  }, [setCategory]);

  return (
    <div>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemListTablets;
