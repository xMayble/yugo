
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDx3JUmkXBdDAma1VpgOlJa2nOne5eug0c",
  authDomain: "yugo-a4b60.firebaseapp.com",
  projectId: "yugo-a4b60",
  storageBucket: "yugo-a4b60.appspot.com",
  messagingSenderId: "749198756377",
  appId: "1:749198756377:web:fdc19e22658bdf618df888"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app