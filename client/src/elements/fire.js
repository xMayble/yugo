import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCG5DTeCKE2N9G07fwFp3fA6VNRikRRIc0",
  authDomain: "yugo-a38c4.firebaseapp.com",
  projectId: "yugo-a38c4",
  storageBucket: "yugo-a38c4.appspot.com",
  messagingSenderId: "352888634359",
  appId: "1:352888634359:web:46558fe2a9d08d40aaccf2",
  measurementId: "G-M73J2QM7GH"

}
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app