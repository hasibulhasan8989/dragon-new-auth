import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const[loading,setLoading]=useState(true)

  const auth = getAuth(app);

  const registerWithEmail = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      console.log("state changed", user);
      setLoading(false)
    });
    return () => unSubscribe();
  }, [auth]);

  const logInWithEmail = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
   };

   const logOut=()=>{
      setLoading(true)
     return  signOut(auth)
   }

  const authCollection = {
    registerWithEmail,
    currentUser,
    logInWithEmail,
    logOut,
    loading

  };
  return <AuthContext value={authCollection}>{children}</AuthContext>;
};

export { AuthProvider, AuthContext };
