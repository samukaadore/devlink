
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDkUzrrheG-VrzA5JSFTR-S0D_wGpGBI08",
  authDomain: "reatlinks.firebaseapp.com",
  projectId: "reatlinks",
  storageBucket: "reatlinks.firebasestorage.app",
  messagingSenderId: "929367361778",
  appId: "1:929367361778:web:0268b456e424c157f3a86b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export {auth, db};