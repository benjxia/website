import React, { JSX, useState } from 'react';

import './Home.css';
import { TypingText, CycleTypingText } from './components/text/TypingText';
import HomePageRedirectButton from './components/button/HomePageRedirectButton';

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
  const [displayBody, setDisplaySubtitle] = useState(false);
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
          {displayBody
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

export default Home;
