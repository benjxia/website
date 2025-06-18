import React, { JSX, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import BackgroundTiles from './components/background/BackgroundTiles';
import Home from './Home';

function App(): JSX.Element {
  return (
    <>
      <BackgroundTiles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
