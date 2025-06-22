import React, { JSX, useState } from 'react';
import { useNavigate } from 'react-router';

import './Home.css';
import { TypingText, CycleTypingText } from '../../components/text/Text';
import { RedirectButton } from '../../components/button/RedirectButton';
import Column from '../../components/format/Column';

const TITLE_TEXT = 'benjxia'

const TEXT_LIST_SUBTITLE = [
  "i sometimes write readable code",
  "not completely useless at...",
  "computer vision",
  "graphics (the 3d kind)",
  "machine learning, but the machine aint learnin'",
  "operating systems",
  "(creating) race conditions",
  "distributed systems",
  "frontend stuff (but i'll be actively resisting)",
  "web stuff in general (again, when i'm forced to)",
  "my brain is page faulting...",
  "fixing other people's merge conflicts",
  "sleeping for 12 hours",
  "decent at fps games too i guess?",
  "pls hire me",
  "out of ideas, looping this text"
]

function Home(): JSX.Element {
  const [displayBody, setDisplaySubtitle] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="Home-header">
      <div style={{height: '2em', marginBottom: '2em'}}>
        <TypingText style={{
            fontSize: 48,
        }} text={TITLE_TEXT} speed={50} callback={setDisplaySubtitle} />
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
              speed={25} />
          : '\u200B'}
      </div>
      <Column>
        <RedirectButton text="the collection" onClick={(e) => {navigate('/collection')}}/>
        <RedirectButton text="résumé"/>
        <RedirectButton text="projects"/>
        <RedirectButton text="about"/>
      </Column>
    </header>
  );
}

export default Home;
