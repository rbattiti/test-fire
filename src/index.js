// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZfZg31SMbSeGF2iNiQmh9pT5YRHLUH0c",
  authDomain: "test-fire-8703c.firebaseapp.com",
  projectId: "test-fire-8703c",
  storageBucket: "test-fire-8703c.appspot.com",
  messagingSenderId: "12968381482",
  appId: "1:12968381482:web:7f2021a2ab2cd65fc34753"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const todosCol = collection(db, 'todos'); // no classes : tree-shaking
const snapshot = getDocs(todosCol);

onAuthStateChanged(auth, user => {
    if(user !== null)
        console.log('OK')
    else    
        console.log('NOK');
});