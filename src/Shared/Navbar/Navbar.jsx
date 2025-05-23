import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import  defaultUser from '../../assets/pictures/user.png'
import { AuthContext } from '../../Layouts/AuthProvider';

const Navbar = () => {

    const navLinks =<>
     <li><NavLink to={'/'}>Home</NavLink></li>
     <li><NavLink to={'/about'}>About</NavLink></li>
     <li><NavLink to={'/career'}>Career</NavLink></li>
 
    </>

    const navigate=useNavigate()
     const{currentUser,logOut}=useContext(AuthContext)

    return (
        <div className="navbar mt-4 mb-16">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#706F6F]">
            {navLinks}
        
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1  text-[#706F6F] text-lg">
        {navLinks}
     
    </ul>
  </div>
  <div className="navbar-end">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar mr-3">
        <div className="w-10 rounded-full">
          <img
            alt="user"
            src={defaultUser} />
        </div>
        </div>
        {
          currentUser ?  <button  onClick={()=>logOut()} className='btn bg-[#9b2f2f] text-lg text-white px-8'>Signout</button>  :  <button  onClick={()=>navigate('/login')} className='btn bg-[#403F3F] text-lg text-white px-8'>Login</button>
        }
   
  </div>
</div>
    );
};

export default Navbar;