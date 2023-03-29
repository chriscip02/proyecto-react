import React from "react";
import Card from "../Card/Card";

const ItemListContainer = ({ productos }) => {
  return (
    <div>
      {productos.map((producto) => (
        <Card key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

export default ItemListContainer;
