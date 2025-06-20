import React, { JSX, useState } from 'react';

import './Home.css';
import { TypingText, CycleTypingText } from '../../components/text/TypingText';
import RedirectButton from '../../components/button/RedirectButton';
import Column from '../../components/format/Column';

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
        }} text={TITLE_TEXT} speed={100} callback={setDisplaySubtitle} />
      </div>
      <div
        style={{
          height: '2em',
          marginBottom: '2em',
        }}
      >
        {displayBody
          ? <CycleTypingText
              style={{
                fontSize: 36,
              }}
              text={TEXT_LIST_SUBTITLE}
              speed={50} />
          : '\u200B'}
      </div>
      <Column>
        <RedirectButton text="the collection"/>
        <RedirectButton text="résumé"/>
        <RedirectButton text="projects"/>
        <RedirectButton text="about"/>
      </Column>
    </header>
  );
}

export default Home;
