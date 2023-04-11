import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import General from '../pages/General';
import Mobile from '../pages/Mobile';
import Website from '../pages/Website';
import Contrast from '../pages/general/Contrast';
import FontSize from '../pages/general/FontSize';
import LinkButton from '../pages/general/LinkButton';
import Haptics from '../pages/mobile/Haptics';
import Module3 from '../pages/Module3';
import Module4 from '../pages/Mobile';

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/general', name: 'General', Component: General },
  { path: '/mobile', name: 'Mobile', Component: Mobile },
  { path: '/website', name: 'Website', Component: Website },

  { path: '/general/contrast', name: 'Contrast', Component: Contrast },
  { path: '/general/fontsize', name: 'FontSize', Component: FontSize },
  { path: '/general/linkbutton', name: 'LinkButton', Component: LinkButton },

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
    <main className='flex items-center justify-center w-full'>
      <AnimatePresence mode='wait'>
        <Routes key={location.pathname} location={location}>
          {routeComponents}
        </Routes>
      </AnimatePresence>
    </main>
  );
}
