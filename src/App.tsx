import React, { JSX, useState } from 'react';
import { RouterProvider } from 'react-router';

import { createBrowserRouter } from 'react-router';

import Home from './pages/home/Home';
import About from './pages/about/About';
import Collection from './pages/collection/Collection';
import BackgroundTiles from './components/background/BackgroundTiles';

import { GlEnabledContext } from './theme/GlEnabledContext';
import Resume from './pages/about/resume/Resume';
import Layout from './components/layout/Layout';

const router = createBrowserRouter([
  {
    path: '*',
    Component: Home,
  },
  {
    path: '/collection',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Collection
      }
    ]
  },
  {
    path: '/about',
    Component: Layout,
    children: [
      {
        index: true,
        Component: About
      },
      {
        path: 'résumé',
        Component: Resume
      }
    ]
  },
]);

function App(): JSX.Element {
  const [glEnabled, setGlEnabled] = useState<boolean>(false);
  return (
    <>
      <BackgroundTiles setGlEnabled={setGlEnabled} />
      <GlEnabledContext value={glEnabled}>
        <RouterProvider router={router} />
      </GlEnabledContext>
    </>
  );
}

export default App;
