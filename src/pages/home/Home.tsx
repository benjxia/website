import React, { JSX, useState } from 'react';
import { useNavigate } from 'react-router';

import './Home.css';
import { TypingText, CycleTypingText } from '../../components/text/Text';
import { IconButton, RedirectButton } from '../../components/button/Button';
import { Row, Column } from '../../components/format/Format';

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
        {/* <RedirectButton text="résumé" onClick={(e) => {navigate('/résumé')}}/> */}
        {/* <RedirectButton text="projects"/> */}
        <RedirectButton text="about" onClick={(e) => {navigate('/about')}}/>
      </Column>
      <Row>
        <IconButton iconId='fa-brands fa-github' linkAddr='https://github.com/benjxia'/>
        <IconButton iconId='fa-brands fa-linkedin' linkAddr='https://www.linkedin.com/in/benjxia/'/>
        <IconButton iconId='fa-brands fa-instagram' linkAddr='https://www.instagram.com/benjxia/'/>
      </Row>
    </header>
  );
}

export default Home;
