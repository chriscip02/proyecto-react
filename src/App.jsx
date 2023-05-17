import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemListTablets from "./components/ItemListTablets/ItemListTablets";
import ItemListCelulares from "./components/ItemListCelulares/ItemListCelulares";
import ItemListNotebooks from "./components/ItemListNotebooks/itemListNotebooks";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CardDetail from "./components/CardDetail/CardDetail";
import Navbar from "./components/Navbar/Navbar";
import db from "../db/firebase-config";
import { getDocs, collection } from "firebase/firestore";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import CartProvider from "./contexts/ShoppingCartContext";
import ItemProvider from "./contexts/ItemContext";

function App() {
  //Estado para traer los productos de firebase
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
      <CartProvider>
        <ItemProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route
              path="/category/tablets"
              element={<ItemListTablets items={items} />}
            />
            <Route
              path="/category/celulares"
              element={<ItemListCelulares items={items} />}
            />
            <Route
              path="/category/notebooks"
              element={<ItemListNotebooks items={items} />}
            />
            <Route path="/home" element={<ItemListContainer items={items} />} />

            <Route path="/home/:id" element={<CardDetail />} />

            <Route
              path="/category/tablets/:id"
              element={<CardDetail />}
            ></Route>

            <Route
              path="/category/celulares/:id"
              element={<CardDetail />}
            ></Route>

            <Route
              path="/category/notebooks/:id"
              element={<CardDetail />}
            ></Route>

            <Route path="/cart" element={<ShoppingCart />}></Route>

            <Route path="/404" element={<h2>404 Not Found</h2>}></Route>
          </Routes>
        </ItemProvider>
      </CartProvider>
    </div>
  );
}

export default App;
