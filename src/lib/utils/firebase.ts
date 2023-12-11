import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAwcJpNIHUttpH-V28kNjumug4SoJBEvGc",
  authDomain: "chris-list-6c52e.firebaseapp.com",
  projectId: "chris-list-6c52e",
  storageBucket: "chris-list-6c52e.appspot.com",
  messagingSenderId: "147228654479",
  appId: "1:147228654479:web:ac5266d34f89248f7229fa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }
