import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { NavLink } from 'react-router-dom';
import { HiMoon, HiSun } from 'react-icons/hi';

export default function Nav() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const mainClassName = 'list-item list-none text-xl font-bold mt-4 pl-1 py-1';

  const subClassName =
    'list-item list-none text-base font-medium pl-4 my-2 hover:border-l-2 hover:border-[#f0ab56] focus:border-l-2 focus:border-[#f0ab56]';

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

      <nav className='mx-1 px-4 overflow-y-auto h-4/5'>
        <ul>
          <h2 className={mainClassName}>Prototype</h2>
          <NavLink to='/prototype/overview' className={subClassName}>
            Overview
          </NavLink>
          <NavLink to='/prototype/personas' className={subClassName}>
            Personas
          </NavLink>
          <NavLink to='/prototype/research' className={subClassName}>
            Research
          </NavLink>

          <h2 className={mainClassName}>Mobile</h2>
          <NavLink to='/mobile/instanttext' className={subClassName}>
            Instant Text Resize
          </NavLink>
          <NavLink to='/mobile/general' className={subClassName}>
            General Usability
          </NavLink>
          <NavLink to='/mobile/customizable' className={subClassName}>
            Customizable AI Preview
          </NavLink>
          <NavLink to='/mobile/search' className={subClassName}>
            Search Chat History
          </NavLink>
          <NavLink to='/mobile/community' className={subClassName}>
            Community
          </NavLink>
          <NavLink to='/mobile/settings' className={subClassName}>
            Accessiblity Settings
          </NavLink>
          <NavLink to='/mobile/macrobutton' className={subClassName}>
            Accessibility Macro Button
          </NavLink>
          <NavLink to='/mobile/darkmode' className={subClassName}>
            Dark Mode
          </NavLink>

          <h2 className={mainClassName}>Website</h2>
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
