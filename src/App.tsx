import React, { JSX, useState } from 'react';
import { RouterProvider } from 'react-router';

import { createBrowserRouter } from 'react-router';

import BackgroundTiles from './components/background/BackgroundTiles';

import { GlEnabledContext } from './theme/GlEnabledContext';
import { PATHS } from './routes';

const router = createBrowserRouter(PATHS);

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
