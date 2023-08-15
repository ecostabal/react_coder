import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWzLkhF99i0OjbqXEPC-doXVd-t0jOAwE",
  authDomain: "react-coder-9b57f.firebaseapp.com",
  projectId: "react-coder-9b57f",
  storageBucket: "react-coder-9b57f.appspot.com",
  messagingSenderId: "858900159622",
  appId: "1:858900159622:web:734c2915454db3e9008507"
};

const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);

async function getData() {
  const productsRef = collection(db, "products");
  const documentsSnapshot = await getDocs(productsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map((item) => ({
    ...item.data(),
    id: item.id
  }));
  return docsData;
}

async function getProductData(id) {
  const docRef = doc(db, "products", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id};
  } else {
    throw new Error("No encontramos ese producto.");
  }
}

async function getCategoryData(category) {
  const productsRef = collection(db, "products");
  const q = query(productsRef, where("category", "==", category));
  const documentsSnapshot = await getDocs(q);

  const documents = documentsSnapshot.docs;
  const docsData = documents.map((item) => ({
    ...item.data(),
    id: item.id
  }));

  return docsData;
}

export { getData, getProductData, getCategoryData };
