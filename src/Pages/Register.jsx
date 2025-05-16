import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Layouts/AuthProvider";


const Register = () => {
    const {registerWithEmail}=useContext(AuthContext)
    


    const handleRegister=(e)=>{
          e.preventDefault()
          const email=e.target.email.value
          const password=e.target.password.value
          const name=e.target.name.value
          const photoUrl=e.target.photoUrl.value
          console.log(email,password,photoUrl,name)

          registerWithEmail(email,password)
          .then(result=>{
            console.log(result.user)
          })
          .catch(error=>{
            console.log(error)
          })

          
         

    }



    return (
         <div >
         <Navbar></Navbar>   
       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto mt-20">
       <h2 className="text-2xl font-semibold text-center mb-6">Register your account</h2>
       <form onSubmit={handleRegister} >
         <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" >Name</label>
        <input name="name" type="text" placeholder="Enter your name" className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-3 focus:ring-blue-500 "/>
      </div>
       <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" >Photo URL</label>
        <input name="photoUrl" type="text" placeholder="Enter your Photo URL" className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-3 focus:ring-blue-500 "/>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1" >Email address</label>
        <input name="email" type="email" placeholder="Enter your email address" className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-3 focus:ring-blue-500 "/>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1" >Password</label>
        <input name="password" type="password" placeholder="Enter your password" className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-3 focus:ring-blue-500"/>
      </div>
      <button   type="submit" className="w-full py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition btn">Login</button>
    </form>
    <p className="text-center text-sm text-gray-600 mt-6">
      Already Have An Account ?
      <Link to={'/login'} className="text-primary ml-2 font-medium hover:underline">Login</Link>
    </p>
  </div>

        </div>
    );
};

export default Register;