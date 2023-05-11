import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.scss";
import { CartContext } from "../../contexts/ShoppingCartContext";

const Card = ({ item }) => {
  const cartContext = useContext(CartContext); //aqui traigo la data del context
  const { cart, addToCart } = cartContext; //aqui estoy desestructurando la data

  return (
    <div className={styles.container}>
      <Link to={`${item.id}`}>
        <h3>{item.title}</h3>
        <img src={item.image} alt={item.title} />
        <p>{item.description}</p>
        <p>$ {item.price}</p>
        <p>Categoría: {item.category}</p>
        <p>Stock: {item.stock}</p>
      </Link>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default Card;
