import React from "react";
import styles from "./Cartwidget.module.scss";
import { Link } from "react-router-dom";

const Cartwidget = (carrito) => {
  return (
    <Link className={styles.cartLink} to="/cart">
      <i className="bi bi-cart3"></i>
      <span>0</span>
    </Link>
  );
};

export default Cartwidget;
