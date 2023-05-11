import { doc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import db from "../../../db/firebase-config";
import { getDoc } from "firebase/firestore";
import { CartContext } from "../../contexts/ShoppingCartContext";

const CardDetail = (agregarAlCarrito) => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getItem = async () => {
    const itemDoc = doc(db, "items", id);
    const item = await getDoc(itemDoc);
    if (item.exists()) {
      setItem(item.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  //Estado para agregar productos al carrito
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  const handleClick = () => {
    const agregarAlCarrito = (item) => {
      setCarrito([...carrito, item]);
      console.log(carrito);
    };
  };

  return (
    <div>
      <h3>{item.title}</h3>
      <img src={item.image} alt={item.title} />
      <p>$ {item.price}</p>
      <p>{item.description}</p>
      <p>Categoría: {item.category}</p>
      <p>Stock: {item.stock}</p>
      <button onClick={handleClick}>Agregar al carrito</button>
    </div>
  );
};

export default CardDetail;
