import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDHVXOCuU2RItXy_Qtn6hIE9EUHj-I5Pj4",
  authDomain: "guzzi-16525.firebaseapp.com",
  projectId: "guzzi-16525",
  storageBucket: "guzzi-16525.appspot.com",
  messagingSenderId: "933734979159",
  appId: "1:933734979159:web:192f4c2d8d3e0fca677512"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;