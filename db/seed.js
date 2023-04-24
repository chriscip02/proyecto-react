//Sedear la base de datos (db)
import { collection, addDoc } from "firebase/firestore";
import db from "./firebase-config.js";
import products from "../src/products.js";

const itemsRef = collection(db, "items");

const promises = products.map((product) => addDoc(itemsRef, product));

Promise.all(promises).then(() => {
  console.log("done");
  process.exit(0);
});
