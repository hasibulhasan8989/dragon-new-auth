import { useContext } from "react";
import { AuthContext } from "../Layouts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location=useLocation()
    
    const {currentUser,loading}=useContext(AuthContext)


    if(loading){
      return  <div className="min-h-screen flex items-center justify-center">
         <span class="loading   loading-spinner loading-xl"></span>
      </div>

    }

    if(currentUser){
      return children;  
    }

    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;