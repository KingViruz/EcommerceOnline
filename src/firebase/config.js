import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "",
  authDomain: "mensajeria.firebaseapp.com",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);