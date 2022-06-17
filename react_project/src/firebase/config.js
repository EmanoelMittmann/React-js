
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyCVrA17CKMEc6qmnTUHLGHNyZ6y1lbPPjY",
  authDomain: "miniblog-78f68.firebaseapp.com",
  projectId: "miniblog-78f68",
  storageBucket: "miniblog-78f68.appspot.com",
  messagingSenderId: "783125656067",
  appId: "1:783125656067:web:d7e873df35691331db9436"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};