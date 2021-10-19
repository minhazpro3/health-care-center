import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const FirebaseInitializeApp = () =>{
    initializeApp(firebaseConfig);
}

export default FirebaseInitializeApp;