import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAmdPa4kHI86_i2u2b4c3jI_ahD5LZee_Y",
  authDomain: "boiler-plate-1.firebaseapp.com",
  projectId: "boiler-plate-1",
  storageBucket: "boiler-plate-1.appspot.com",
  messagingSenderId: "673923079503",
  appId: "1:673923079503:web:5bbc5b4dad8962542ef93a",
  measurementId: "G-3YB5T416FR"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export {db, auth};