import firebase from "firebase/app";
import "@firebase/firestore";


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyA6GkS-7Addvak13mFdthnwl_gSwX_i6Ow",
    authDomain: "decuadros-de873.firebaseapp.com",
    projectId: "decuadros-de873",
    storageBucket: "decuadros-de873.appspot.com",
    messagingSenderId: "58951076185",
    appId: "1:58951076185:web:d1967b8f6b20df7baf6448"
  });

  const getFirebase = () => {
   return firebaseConfig
  }

// Funciones de Firebase

export const getFirestore = () => {
    return firebase.firestore(firebaseConfig);
}

