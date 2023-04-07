import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

export default function Root() {
  return (
    <div className='w-full h-screen flex m-5'>
      <Nav />
      <Outlet />
    </div>
  );
}
