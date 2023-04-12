import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Prototype from '../pages/Prototype';
import Mobile from '../pages/Mobile';
import Website from '../pages/Website';
import Overview from '../pages/prototype/Overview';
import Personas from '../pages/prototype/Personas';
import Research from '../pages/prototype/Research';
import Haptics from '../pages/mobile/Haptics';
import Module3 from '../pages/Module3';
import Module4 from '../pages/Mobile';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/prototype', name: 'Prototype', Component: Prototype },
  { path: '/mobile', name: 'Mobile', Component: Mobile },
  { path: '/website', name: 'Website', Component: Website },

  { path: '/prototype/overview', name: 'Overview', Component: Overview },
  { path: '/prototype/personas', name: 'Personas', Component: Personas },
  { path: '/prototype/research', name: 'Research', Component: Research },

  { path: '/mobile/haptics', name: 'Haptics', Component: Haptics },

  { path: '/module3', name: 'Module3', Component: Module3 },
  { path: '/module4', name: 'Module4', Component: Module4 },
];

const routeComponents = routes.map(({ path, Component }) => (
  <Route path={path} element={<Component />} />
));

export default function Main() {
  const location = useLocation();
  return (
    <main className='flex items-center justify-center w-full -ml-2'>
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          {routeComponents}
        </Routes>
      </AnimatePresence>
    </main>
  );
}
