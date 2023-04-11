import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  const mainClassName =
    'list-item list-none text-xl font-bold mt-4 pl-1 hover:border-l-4 hover:border-[#f0ab56] focus:border-[#f0ab56] focus:border-l-4 ';

  const subClassName =
    'list-item list-none text-base font-medium pl-4 hover:border-l-2 hover:border-[#f0ab56] focus:border-l-2 focus:border-[#f0ab56]';

  return (
    <header className='bg-[#f7f3e3] w-[23vw] max-w-xs h-[96vh] border'>
      <NavLink to='/'>
        <img src='/img/logo-tp.png' alt='logo' className='py-5' />
      </NavLink>
      <nav className='mx-6'>
        <ul>
          <NavLink to='/general' className={mainClassName}>
            General
          </NavLink>
          <NavLink to='/general/contrast' className={subClassName}>
            Contrast
          </NavLink>
          <NavLink to='/general/fontsize' className={subClassName}>
            Font Size
          </NavLink>
          <NavLink to='/general/linkbutton' className={subClassName}>
            Link & Button
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
