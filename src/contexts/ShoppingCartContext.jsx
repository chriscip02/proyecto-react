import { createContext, useState } from "react";

export const CartContext = createContext(null);

const CartProvider = (props) => {
  //estado inicial del carrito
  const [cart, setCart] = useState([]);

  const addToCart = (item, qty) => {
    let product = { ...item, qty };
    setCart([...cart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
