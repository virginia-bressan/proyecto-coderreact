import { initializeApp } from "firebase/app";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRKGxFIMWxFjuXS9exxa1iyC_dTNiZbPY",
  authDomain: "afrodita-libreria.firebaseapp.com",
  projectId: "afrodita-libreria",
  storageBucket: "afrodita-libreria.appspot.com",
  messagingSenderId: "644556493078",
  appId: "1:644556493078:web:034b592c5c932c11d50037",
  measurementId: "G-5KE7F0MWE7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function testApp() {
    console.log("conectandonos .... ", app)
}

export async function getSingleItems (itemid) {

    const docRef = doc(db, "products", itemid);
    const snapshot = await getDoc(docRef);
    return snapshot.data();
   
};