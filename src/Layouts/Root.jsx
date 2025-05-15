
import { Outlet } from 'react-router-dom';
import './Custom.css'


const Root = () => {
    return (
        <div className='poppins max-w-7xl mx-auto mt-12'>
           <Outlet></Outlet> 
        </div>
    );
};

export default Root;