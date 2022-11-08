import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"


const firebaseConfig = {

    apiKey: "AIzaSyALdMy0VfuZMMWNhrybbbJkQJqIt55B_1g",
  
    authDomain: "signup-login-2901f.firebaseapp.com",
  
    projectId: "signup-login-2901f",
  
    storageBucket: "signup-login-2901f.appspot.com",
  
    messagingSenderId: "390303693929",
  
    appId: "1:390303693929:web:56f31e40fee4148b6eb6f8",
  
    measurementId: "G-HN2ZG2MKLQ"
  
  };

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app);
  