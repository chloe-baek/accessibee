import React from 'react';
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header className='w-full h-screen'>
      <nav className='flex justify-between mx-12'>
        <img
          src='img/logo.png'
          alt='logo'
          className='w-2/6 max-w-[230px] h-auto py-5'
        />

        <ul className='flex items-center justify-between'>
          <li className='text-2xl font-semibold cursor-pointer ml-7 p-4'>
            <Link
              to='right1'
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Module1
            </Link>
          </li>
          <li className='text-2xl font-semibold cursor-pointer ml-7 p-4'>
            <Link
              to='module2'
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              Module2
            </Link>
          </li>
          <li className='text-2xl font-semibold cursor-pointer ml-7 p-4'>
            <Link
              to='module3'
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              Module3
            </Link>
          </li>
          <li className='text-2xl font-semibold cursor-pointer ml-7 p-4'>
            <Link
              to='left1'
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              Module4
            </Link>
          </li>
        </ul>
      </nav>
      <div className='bg-[#f0ab56] h-3/6 py-36 flex items-center absolute top-0 translate-y-2/4'>
        <div className='flex justify-between mx-auto w-3/4'>
          <div className='basis-6/12 pr-8'>
            <h1 className='text-6xl font-semibold pb-8'>
              <div className='text-2xl pb-6'>small heading</div>
              Heading
            </h1>
            <p className='leading-relaxed text-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              minima ut enim saepe iure recusandae obcaecati dolores! Maxime
              assumenda debitis at ad, deleniti ducimus illo ipsum dolore?
            </p>
          </div>
          <div className='basis-6/12'>
            <video autoPlay muted loop>
              <source src='video/sample.mp4' type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
    </header>
  );
}
