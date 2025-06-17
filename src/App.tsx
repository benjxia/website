import React, { JSX } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import BackgroundTiles from './components/background/BackgroundTiles';
import './Home.css';
import TypingText from './components/text/TypingText';

function Home(): JSX.Element {
  return (
    <div>
      <header className="Home-header">
        <TypingText style={{
            fontSize: 48,
            fontWeight: 'bold',
            color: 'white',
            mixBlendMode: 'difference',
            pointerEvents: 'none',
            userSelect: 'none',
        }} text='benjxia' speed={100}/>
      </header>
    </div>
  );
}

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
