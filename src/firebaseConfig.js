
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAo7DYa1_gPYRTW7G4I5ex-Bb2VmGWnxIE",
  authDomain: "basic-51758.firebaseapp.com",
  projectId: "basic-51758",
  storageBucket: "basic-51758.appspot.com",
  messagingSenderId: "647469002187",
  appId: "1:647469002187:web:9db604253238c56807da4e",
  measurementId: "G-1P7PVBQWJE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db};