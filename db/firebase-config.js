import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC3jwE_TLn1IwEoCOsbV0i4rzfBK9sJ3ME",
  authDomain: "e-commerce-e7e26.firebaseapp.com",
  projectId: "e-commerce-e7e26",
  storageBucket: "e-commerce-e7e26.appspot.com",
  messagingSenderId: "728514091691",
  appId: "1:728514091691:web:695e6ad8842a638e79f5ee",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
