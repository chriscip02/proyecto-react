import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CardDetail from "./components/CardDetail/CardDetail";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import Saludo from "./components/Saludo/Saludo";

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);

  console.log(productos);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/tablets"
          element={<ItemListContainer productos={productos} />}
        />
        <Route
          path="/celulares"
          element={<ItemListContainer productos={productos} />}
        />
        <Route
          path="/notebooks"
          element={<ItemListContainer productos={productos} />}
        />
        <Route path="/home" element={<p>Estas en HOME</p>} />

        <Route path="/tablets/:id" element={<CardDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
