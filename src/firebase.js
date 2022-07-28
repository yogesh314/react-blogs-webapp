import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAPSAShNHJt--8n-Rufe6vQW5vVA-WZ0V0",
    authDomain: "react-blogs-webapp.firebaseapp.com",
    projectId: "react-blogs-webapp",
    storageBucket: "react-blogs-webapp.appspot.com",
    messagingSenderId: "272980683420",
    appId: "1:272980683420:web:7626a922070b63e93f1b59"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth, db, storage };