import { createContext } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";



const AuthContext=createContext(null)

const AuthProvider = ({children}) => {

    
     const auth =getAuth(app);

     const registerWithEmail=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
     }







    const authCollection ={ registerWithEmail   }
    return (
        <AuthContext value={authCollection}>
              {children}
        </AuthContext>

           
       
    );
};

export {AuthProvider ,AuthContext}  ;