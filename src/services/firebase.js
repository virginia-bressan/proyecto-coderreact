import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  doc,
  collection,
  getDocs,
  where,
  query,
  addDoc,
  writeBatch
} from "firebase/firestore";

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

export async function getSingleItems(itemid) {

  const docRef = doc(db, "products", itemid);
  const snapshot = await getDoc(docRef);
  return { ...snapshot.data(), id: snapshot.id };

};

export async function getItems() {
  const productsCollectionRef = collection(db, "products")
  const querySnapshot = await getDocs(productsCollectionRef);

  const dataDocs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataDocs;
};

export async function getCategoryItems(categoryid) {
  const productsCollectionRef = collection(db, "products");
  const q = query(productsCollectionRef, where("category", "==", categoryid))
  const querySnapshot = await getDocs(q);
  const dataDocs = querySnapshot.docs.map((doc) => ({
    ...doc.data(), id: doc.id,
  }));
  return dataDocs;
  
}

export async function createBuyOrder (order){
  const ordersCollection = collection( db, "orders");
  
  const orderDoc = await addDoc (ordersCollection, order)
  return (orderDoc.id);
}


export async function exportData(){
  const productsCollectionRef = collection(db, "products");
  const products = [
    {
        title: "Mochila wilson",
        price: 7000,
        detail: "la calidad reconocida durante años",
        imgurl: "/assets/img/mochila.webp",
        category: "mochila",
        stock: 8,
        discount: 30,
        id: 1,
    },
    {
        title: "Canopla Arte",
        price: 4000,
        detail: "la canopla mas canchera",
        imgurl: "/assets/img/canopla.jpg",
        category: "canopla",
        stock: 9,
        id: 2,
    },
    {
        title: "Marcador Mooving",
        price: 3000,
        detail: "marcadores trabi punta pincel los mas lindos",
        imgurl: "/assets/img/marcadorM.webp",
        category: "fibronesMarcadores",
        stock: 12,
        id: 3,
    },
    {
        title: "Fibron Trabi",
        price: 2900,
        detail: "fibrones mas pedidos y hermosos",
        imgurl: "/assets/img/fibrontrabi.jpg",
        category: "fibronesMarcadores",
        stock: 10,
        id: 4,
        discount: 20,
    },
    {
        title: "Cuadernillo Triunfante ",
        price: 3500,
        detail: "Cuadernillo tapa dura, excelente calidad de hoja, los mas pedidos",
        imgurl: "/assets/img/cuadernillo.jpg",
        category: "cuadernillo",
        stock: 14,
        id: 5,
        discount: 20,
    },
    {
        title: "canopla mooving 1",
        price: 5000,
        detail: "primera calidad, linda y canchera",
        imgurl: "/assets/img/canoplaa.jpg",
        category: "canopla",
        stock: 6,
        id: 6,
    },
    {
        title: "canopla mooving 2",
        price: 5500,
        detail: "exceltente calidad, tamaño y super linda",
        imgurl: "/assets/img/cartuchera.webp",
        category: "canopla",
        stock: 8,
        id: 7,
        discount: 20,
    },
    {
        title: "mochila Lsyd",
        price: 7000,
        detail: "los mas pedidos por adolescentes super cancheras",
        imgurl: "/assets/img/mochilalsyd.jpg",
        category: "mochila",
        stock: 8,
        id: 8,
    },
    {
        title: "Cuadernillo Triunfante T/d",
        price: 3500,
        detail: "Cuadernillo tapa dura, excelente calidad, los mas cancheros",
        imgurl: "/assets/img/cuadernilloM.jpg",
        category: "cuadernillo",
        stock: 10,
        id: 9,
    },
];

for (let item of products){
  delete(item.id);
  addDoc(productsCollectionRef, item).then(
    res => console.log("documento creado", res.id)
  )
}
}

export async function exportDataWithBatch(){
  const productsCollectionRef = collection(db, "products");
  const basth = writeBatch(db);
  const products = [
    {
        title: "Mochila wilson",
        price: 7000,
        detail: "la calidad reconocida durante años",
        imgurl: "/assets/img/mochila.webp",
        category: "mochila",
        stock: 8,
        discount: 30,
        id: 1,
    },
    {
        title: "Canopla Arte",
        price: 4000,
        detail: "la canopla mas canchera",
        imgurl: "/assets/img/canopla.jpg",
        category: "canopla",
        stock: 9,
        id: 2,
    },
    {
        title: "Marcador Mooving",
        price: 3000,
        detail: "marcadores trabi punta pincel los mas lindos",
        imgurl: "/assets/img/marcadorM.webp",
        category: "fibronesMarcadores",
        stock: 12,
        id: 3,
    },
    {
        title: "Fibron Trabi",
        price: 2900,
        detail: "fibrones mas pedidos y hermosos",
        imgurl: "/assets/img/fibrontrabi.jpg",
        category: "fibronesMarcadores",
        stock: 10,
        id: 4,
        discount: 20,
    },
    {
        title: "Cuadernillo Triunfante ",
        price: 3500,
        detail: "Cuadernillo tapa dura, excelente calidad de hoja, los mas pedidos",
        imgurl: "/assets/img/cuadernillo.jpg",
        category: "cuadernillo",
        stock: 14,
        id: 5,
        discount: 20,
    },
    {
        title: "canopla mooving 1",
        price: 5000,
        detail: "primera calidad, linda y canchera",
        imgurl: "/assets/img/canoplaa.jpg",
        category: "canopla",
        stock: 6,
        id: 6,
    },
    {
        title: "canopla mooving 2",
        price: 5500,
        detail: "exceltente calidad, tamaño y super linda",
        imgurl: "/assets/img/cartuchera.webp",
        category: "canopla",
        stock: 8,
        id: 7,
        discount: 20,
    },
    {
        title: "mochila Lsyd",
        price: 7000,
        detail: "los mas pedidos por adolescentes super cancheras",
        imgurl: "/assets/img/mochilalsyd.jpg",
        category: "mochila",
        stock: 8,
        id: 8,
    },
    {
        title: "Cuadernillo Triunfante T/d",
        price: 3500,
        detail: "Cuadernillo tapa dura, excelente calidad, los mas cancheros",
        imgurl: "/assets/img/cuadernilloM.jpg",
        category: "cuadernillo",
        stock: 10,
        id: 9,
    },
];

for (let item of products){
  delete(item.id);
  const newDoc = doc(productsCollectionRef)
  basth.set(newDoc, item)
}
const commitDone = await basth.commit();
console.log("--->", commitDone)
}