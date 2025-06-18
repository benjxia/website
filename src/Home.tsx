import React, { JSX, useState } from 'react';

import './Home.css';
import { TypingText, CycleTypingText } from './components/text/TypingText';
import RedirectButton from './components/button/RedirectButton';

const TITLE_TEXT = 'benjxia'

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
  const [displayBody, setDisplaySubtitle] = useState(false);
  return (
    <header className="Home-header">
      <div style={{height: '2em', marginBottom: '2em'}}>
      <TypingText style={{
          fontSize: 48,
          fontWeight: 'bold',
          color: 'white',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          userSelect: 'none',
      }} text={TITLE_TEXT} speed={100} callback={setDisplaySubtitle} />
      </div>
      <div
        style={{
          lineHeight: 1,
          height: '2em',
          marginBottom: '2em',
          display: 'flex',
          mixBlendMode: 'difference',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        {displayBody
          ? <CycleTypingText
              style={{
                fontSize: 36,
                fontWeight: 'bold',
                color: 'white'
              }}
              text={TEXT_LIST_SUBTITLE}
              speed={50} />
          : '\u200B'}
      </div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <RedirectButton text="the collection"/>
        <RedirectButton text="resume"/>
        <RedirectButton text="projects"/>
        <RedirectButton text="about"/>
      </div>

    </header>
  );
}

export default Home;
