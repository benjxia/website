import React, { JSX, useState } from 'react';
import { useNavigate } from 'react-router';

import './Home.css';
import { TypingText, CycleTypingText } from '../../components/text/Text';
import { RedirectButton } from '../../components/button/RedirectButton';
import Column from '../../components/format/Column';

const TITLE_TEXT = 'benjxia';

// Avoid making each string too long or it'll overflow off the page on mobile
const TEXT_LIST_SUBTITLE = [
  "i sometimes write readable code",
  "code monke",
  "not completely useless at...",
  "computer vision",
  "graphics (the 3d kind)",
  "the machine ain't learnin'",
  "operating systems",
  "(creating) race conditions",
  "distributed systems",
  "frontend stuff (against my will)",
  "my brain is page faulting...",
  "fixing others' merge conflicts",
  "sleeping for 12 hours",
  "decent at fps games too i guess?",
  "pls hire me",
  "out of ideas, looping this text"
];

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
      <CycleTypingText text={TEXT_LIST_SUBTITLE} speed={25} pause={!displayBody} />
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
