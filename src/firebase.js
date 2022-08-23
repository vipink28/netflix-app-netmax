import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBU3__YCoLQUfllNfb4UW434B_bafWbmNM",
    authDomain: "netflix-app-netmax.firebaseapp.com",
    projectId: "netflix-app-netmax",
    storageBucket: "netflix-app-netmax.appspot.com",
    messagingSenderId: "545506776078",
    appId: "1:545506776078:web:abf29f53c006e3a76ad85f"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth();

  export {auth};
  export default db;