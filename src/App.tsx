import React, { JSX, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

import BackgroundTiles from './components/background/BackgroundTiles';
import './Home.css';
import { TypingText, CycleTypingText } from './components/text/TypingText';

const TEXT_LIST_TITLE = 'benjxia'

const TEXT_LIST_SUBTITLE = [
  'i sometimes write code',
  'i do a bit of...',
  'computer vision',
  'computer graphics',
  'machine learning',
  'operating systems',
  'distributed systems'
]

function Home(): JSX.Element {
  const [displaySubtitle, setDisplaySubtitle] = useState(false);
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
        }} text={TEXT_LIST_TITLE} speed={100} callback={setDisplaySubtitle} />
        <div
          style={{
            fontSize: 20,
            lineHeight: 1,
            height: '1em',
            mixBlendMode: 'difference',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          {displaySubtitle
            ? <CycleTypingText
                style={{fontWeight: 'bold', color: 'white',}}
                text={TEXT_LIST_SUBTITLE}
                speed={50} />
            : '\u200B'}
        </div>
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
