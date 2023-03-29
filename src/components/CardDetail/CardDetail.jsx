import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetail = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();
  console.log(id);

  const getProducto = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProducto(data);
    } catch (error) {}
  };

  useEffect(() => {
    getProducto();
  }, []);

  if (!producto) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h3>{producto.title}</h3>
      <img src={producto.image} alt={producto.title} />
      <p>{producto.description}</p>
      <p>$ {producto.price}</p>
      <p>{producto.category}</p>
    </div>
  );
};

export default CardDetail;
