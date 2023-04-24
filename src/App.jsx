import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CardDetail from "./components/CardDetail/CardDetail";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import db from "../db/firebase-config";
import { getDocs, collection } from "firebase/firestore";

function App() {
  const [items, setItems] = useState([]);
  const itemsRef = collection(db, "items");

  const getItems = async () => {
    const itemsCollection = await getDocs(itemsRef);
    const items = itemsCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setItems(items);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route
          path="/tablets"
          element={<ItemListContainer productos={items} />}
        />
        <Route
          path="/celulares"
          element={<ItemListContainer productos={items} />}
        />
        <Route
          path="/notebooks"
          element={<ItemListContainer productos={items} />}
        />
        <Route path="/home" element={<ItemListContainer productos={items} />} />

        <Route path="/tablets/:id" element={<CardDetail />}></Route>

        <Route path="/404" element={<h2>404 Not Found</h2>}></Route>
      </Routes>
    </div>
  );
}

export default App;
