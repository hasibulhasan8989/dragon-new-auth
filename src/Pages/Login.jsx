import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Layouts/AuthProvider";


const Login = () => {

 

  const{logInWithEmail}=useContext(AuthContext)
  const location=useLocation()
  console.log(location)
   const navigate=useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    logInWithEmail(email,password)
    .then(result=>{
      console.log(result)
      e.target.reset()
      navigate(location.state?location.state:'/')
      
      
      
    })
    .catch(error=>{
       console.log(error)
    })
    

  };

  return (
    <div className="">
      <Navbar></Navbar>

      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto mt-40">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Login your account
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-3 focus:ring-blue-500 "
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-3 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition btn"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t Have An Account ?
          <Link
            to={"/register"}
            className="text-red-500  ml-2 font-medium hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
