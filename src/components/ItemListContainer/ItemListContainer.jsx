import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "../../../db/firebase-config";
import Card from "../Card/Card";

const ItemListContainer = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ItemListContainer;
