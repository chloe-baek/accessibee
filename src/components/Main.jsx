import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/Home';
import Overview from '../pages/prototype/Overview';
import Personas from '../pages/prototype/Personas';
import Research from '../pages/prototype/Research';
import InstantText from '../pages/mobile/InstantText';
import General from '../pages/mobile/General';
import Customizable from '../pages/mobile/Cutomizable';
import Search from '../pages/mobile/Search';
import Community from '../pages/mobile/Community';
import Settings from '../pages/mobile/Settings';
import MacroButton from '../pages/mobile/MacroButton';
import DarkMode from '../pages/mobile/DarkMode';
import Team from '../pages/prototype/Team';
import Chat from '../pages/website/Chat';
import Color from '../pages/website/Color';
import Notepad from '../pages/website/Notepad';
import Screen from '../pages/website/Screen';
import SearchWeb from '../pages/website/SearchWeb';

const routes = [
  { path: '/', name: 'Home', Component: Home },

  { path: '/prototype/overview', name: 'Overview', Component: Overview },
  { path: '/prototype/team', name: 'Team', Component: Team },
  { path: '/prototype/personas', name: 'Personas', Component: Personas },
  { path: '/prototype/research', name: 'Research', Component: Research },

  { path: '/mobile/instanttext', name: 'InstantText', Component: InstantText },
  { path: '/mobile/general', name: 'General', Component: General },
  {
    path: '/mobile/customizable',
    name: 'Customizable',
    Component: Customizable,
  },
  { path: '/mobile/search', name: 'Search', Component: Search },
  { path: '/mobile/community', name: 'Community', Component: Community },
  { path: '/mobile/settings', name: 'Settings', Component: Settings },
  { path: '/mobile/macrobutton', name: 'MacroButton', Component: MacroButton },
  { path: '/mobile/darkmode', name: 'DarkMode', Component: DarkMode },

  { path: '/website/chat', name: 'Chat', Component: Chat },
  { path: '/website/colorscheme', name: 'Color', Component: Color },
  { path: '/website/notepad', name: 'Notepad', Component: Notepad },
  { path: '/website/screenorientation', name: 'Screen', Component: Screen },
  { path: '/website/search', name: 'SearchWeb', Component: SearchWeb },
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
