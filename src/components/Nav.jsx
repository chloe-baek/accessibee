import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { NavLink } from 'react-router-dom';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function Nav() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const mainClassName =
    'list-item list-none text-xl font-bold mt-4 pl-1 hover:border-l-4 hover:border-[#f0ab56] focus:border-[#f0ab56] focus:border-l-4 ';

  const subClassName =
    'list-item list-none text-base font-medium pl-4 hover:border-l-2 hover:border-[#f0ab56] focus:border-l-2 focus:border-[#f0ab56]';

  const changeImg = darkMode ? 'blue' : 'yellow';
  const imgUrl = `/img/magjay_${changeImg}.png`;
  return (
    <header className='bg-[#deefb7] dark:bg-[#970C0C] w-[23vw] max-w-xs h-[95vh] rounded-xl dark:text-gray-100 z-10'>
      <button onClick={toggleDarkMode} className='text-2xl pl-3 pt-3'>
        {!darkMode && <HiMoon />}
        {darkMode && <HiSun />}
      </button>
      <NavLink to='/'>
        <img src={imgUrl} alt='logo' className='py-5' />
      </NavLink>
      <nav className='mx-6'>
        <ul>
          <NavLink to='/prototype' className={mainClassName}>
            Prototype
          </NavLink>
          <NavLink to='/prototype/overview' className={subClassName}>
            Overview
          </NavLink>
          <NavLink to='/prototype/personas' className={subClassName}>
            Personas
          </NavLink>
          <NavLink to='/prototype/research' className={subClassName}>
            Research
          </NavLink>

          <NavLink to='/mobile' className={mainClassName}>
            Mobile
          </NavLink>
          <NavLink to='/mobile/haptics' className={subClassName}>
            Haptics
          </NavLink>
          <NavLink to='/module2' className={subClassName}>
            Module2
          </NavLink>
          <NavLink to='/module2' className={subClassName}>
            Module2
          </NavLink>
          <NavLink to='/module2' className={subClassName}>
            Module2
          </NavLink>

          <NavLink to='/website' className={mainClassName}>
            Website
          </NavLink>
          <NavLink to='/module2' className={subClassName}>
            Module2
          </NavLink>
          <NavLink to='/module2' className={subClassName}>
            Module2
          </NavLink>
          <NavLink to='/module2' className={subClassName}>
            Module2
          </NavLink>
          <NavLink to='/module2' className={subClassName}>
            Module2
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
