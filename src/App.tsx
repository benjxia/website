import React, { JSX } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import BackgroundTiles from './components/background/BackgroundTiles';
import Collection from './pages/collection/Collection';
import Home from './pages/home/Home';
// import Resume from './pages/resume/Resume';
import About from './pages/about/About';

function App(): JSX.Element {
  return (
    <>
      <BackgroundTiles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          {/* <Route path="/résumé" element={<Resume />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
