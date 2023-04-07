import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    //  w-1/4 h-screen fixed
    <header className='bg-[#f0ab56] w-full max-w-xs h-[96vh] '>
      <nav className='mx-12'>
        <img src='img/logo.png' alt='logo' className='py-5' />
        <Link to='/' className='list-item list-none'>
          Main
        </Link>
        <Link
          to='/module1'
          className='list-item list-none text-2xl font-bold mt-4 pl-1 hover:border-l-4'
        >
          Module1
        </Link>
        <Link
          to='/module1-1'
          className='list-item list-none text-base font-medium pl-3 hover:border-l-2'
        >
          Module1-1
        </Link>
        <Link
          to='/module1-2'
          className='list-item list-none text-base font-medium pl-3 hover:border-l-2'
        >
          Module1-2
        </Link>
        <Link
          to='/module1-3'
          className='list-item list-none text-base font-medium pl-3 hover:border-l-2'
        >
          Module1-3
        </Link>

        <Link
          to='/right'
          className='list-item list-none text-2xl font-bold pt-4'
        >
          Module2
        </Link>
        <Link
          to='/right'
          className='list-item list-none text-2xl font-bold pt-4'
        >
          Module3
        </Link>
        <Link
          to='/right'
          className='list-item list-none text-2xl font-bold pt-4'
        >
          Module4
        </Link>
        {/* <ul className=''>
          <li className='text-2xl font-semibold cursor-pointer ml-7 p-4'>
            <Link
            
            >
              Module1
            </Link>
          </li>
          <li className='text-2xl font-semibold cursor-pointer ml-7 p-4'>
            <Link
            
            >
              Module2
            </Link>
          </li>
          <li className='text-2xl font-semibold cursor-pointer ml-7 p-4'>
            <Link
            
            >
              Module3
            </Link>
          </li>
          <li className='text-2xl font-semibold cursor-pointer ml-7 p-4'>
            <Link
         
            >
              Module4
            </Link>
          </li>
        </ul> */}
      </nav>
    </header>
  );
}
