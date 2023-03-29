import React from "react";
import { Link } from "react-router-dom";
import styles from "./card.module.scss";
const Card = ({ producto }) => {
  return (
    <div className={styles.container}>
      <Link to={`${producto.id}`}>
        <h3>{producto.title}</h3>
        <img src={producto.image} alt={producto.title} />
        <p>{producto.description}</p>
        <p>$ {producto.price}</p>
      </Link>
    </div>
  );
};

export default Card;
