import React from 'react';
import { Link, useRouteError } from 'react-router-dom';


const ErrorPage = () => {
    const {error, status} = useRouteError()
    return (
      // error page 
        <div>
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
      <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
        <img className='W-96 h-52' src= 'https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1' alt="" />
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-extrabold text-4xl text-blue-900'>
            <span className='sr-only'>Error</span>
            {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-3xl text-green-700 mb-8'>
            {error?.message}
          </p>
          <Link to='/' className='rounded-md button-primary p-3 text-white'>
            Back to Home
          </Link>
        </div>
      </div>
    </section>
            
        </div>
    );
};

export default ErrorPage;