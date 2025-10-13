import React, { JSX } from 'react';
import { RouterProvider } from 'react-router';

import {
  createBrowserRouter,
} from "react-router";

import Home from './pages/home/Home';
import About from './pages/about/About';
import Collection from './pages/collection/Collection';
import BackgroundTiles from './components/background/BackgroundTiles';

const router = createBrowserRouter([
  {
    path: "*",
    Component: Home,
  },
  {
    path: "/collection",
    Component: Collection,
  },
  {
    path: "/about",
    Component: About,
  }
]);

function App(): JSX.Element {
  return (
    <>
      <BackgroundTiles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
