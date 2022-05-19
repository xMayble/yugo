import { createContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
  } from 'firebase/auth';
import { auth } from "../elements/fire";

const UserContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };


    return (
    <UserContext.Provider value={{ createUser, user, logout, signIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
    return useContext(UserContext);
  };