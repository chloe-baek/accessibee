import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import RightV from './pages/RightV';
import LeftV from './components/LeftV';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Main /> },
      {
        path: '/module1',
        element: (
          <RightV
            h3='Module1'
            p=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          harum laudantium, necessitatibus beatae eaque ipsam illum molestiae
          laborum commodi enim explicabo dicta doloribus nulla aspernatur quae
          architecto asperiores sequi. Quaerat. Sequi veritatis consequatur
          exercitationem placeat aliquid vero minima quod vitae cumque,
          inventore iure voluptas cupiditate voluptatum incidunt ab dolor
          modi, nobis repellendus ullam? Ea voluptates ipsum accusantium
          delectus, voluptatem nostrum. Iure, vero nihil. Magni enim cumque
          repudiandae consectetur nemo totam autem consequatur soluta
          obcaecati sit incidunt reiciendis aperiam, amet quibusdam
          accusantium. Quasi ab nihil eveniet asperiores qui aliquid
          architecto voluptatibus?'
            video='video/sample.mp4'
          />
        ),
      },
      {
        path: '/module1-1',
        element: (
          <RightV
            h3='Module1-1'
            p=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          harum laudantium, necessitatibus beatae eaque ipsam illum molestiae
          laborum commodi enim explicabo dicta doloribus nulla aspernatur quae
          architecto asperiores sequi. Quaerat. Sequi veritatis consequatur
          exercitationem placeat aliquid vero minima quod vitae cumque,
          inventore iure voluptas cupiditate voluptatum incidunt ab dolor
          modi, nobis repellendus ullam? Ea voluptates ipsum accusantium
          delectus, voluptatem nostrum. Iure, vero nihil. Magni enim cumque
          repudiandae consectetur nemo totam autem consequatur soluta
          obcaecati sit incidunt reiciendis aperiam, amet quibusdam
          accusantium. Quasi ab nihil eveniet asperiores qui aliquid
          architecto voluptatibus?'
            video='video/sample.mp4'
          />
        ),
      },
      {
        path: '/module1-2',
        element: (
          <LeftV
            h3='Module1-2'
            p=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          harum laudantium, necessitatibus beatae eaque ipsam illum molestiae
          laborum commodi enim explicabo dicta doloribus nulla aspernatur quae
          architecto asperiores sequi. Quaerat. Sequi veritatis consequatur
          exercitationem placeat aliquid vero minima quod vitae cumque,
          inventore iure voluptas cupiditate voluptatum incidunt ab dolor
          modi, nobis repellendus ullam? Ea voluptates ipsum accusantium
          delectus, voluptatem nostrum. Iure, vero nihil. Magni enim cumque
          repudiandae consectetur nemo totam autem consequatur soluta
          obcaecati sit incidunt reiciendis aperiam, amet quibusdam
          accusantium. Quasi ab nihil eveniet asperiores qui aliquid
          architecto voluptatibus?'
            video='video/sample.mp4'
          />
        ),
      },
      {
        path: '/module1-3',
        element: (
          <LeftV
            h3='Module1-3'
            p=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          harum laudantium, necessitatibus beatae eaque ipsam illum molestiae
          laborum commodi enim explicabo dicta doloribus nulla aspernatur quae
          architecto asperiores sequi. Quaerat. Sequi veritatis consequatur
          exercitationem placeat aliquid vero minima quod vitae cumque,
          inventore iure voluptas cupiditate voluptatum incidunt ab dolor
          modi, nobis repellendus ullam? Ea voluptates ipsum accusantium
          delectus, voluptatem nostrum. Iure, vero nihil. Magni enim cumque
          repudiandae consectetur nemo totam autem consequatur soluta
          obcaecati sit incidunt reiciendis aperiam, amet quibusdam
          accusantium. Quasi ab nihil eveniet asperiores qui aliquid
          architecto voluptatibus?'
            video='video/sample.mp4'
          />
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
