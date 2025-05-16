import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
           <h1 className="text-5xl mb-10">
             Content Coming Soon.....
           </h1>
           <Link to={'/'}><button className='btn btn-secondary'>Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;