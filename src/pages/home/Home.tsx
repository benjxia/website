import React, { JSX, useState, useContext } from 'react';

import './Home.css';
import '../../theme/transition.css';
import { TypingText, CycleTypingText } from '../../components/text/Text';
import { IconButton, RedirectButton } from '../../components/button/Button';
import { Row, Column } from '../../components/format/Format';

import { GlEnabledContext } from '../../theme/GlEnabledContext';

const TITLE_TEXT = 'benjxia';

// Avoid making each string too long or it'll overflow off the page on mobile
// const TEXT_LIST_SUBTITLE = [
//   "i sometimes write readable code",
//   "code monke",
//   "not completely useless at...",
//   "computer vision",
//   "3d graphics",
//   "the machine ain't learnin'",
//   "operating systems",
//   "(creating) race conditions",
//   "distributed systems",
//   "frontend stuff (against my will)",
//   "sleeping for 12 hours",
//   "out of ideas, looping this text"
// ];

const TEXT_LIST_SUBTITLE = [
  'fulltime chicken farmer',
  'i sometimes wrote readable code',
  'rage quit computer science',
  'escaped the united states',
  "now farmin' chickens elsewhere",
  'reject technology, touch grass',
  'birds are very fluffy',
];

const GL_DISABLED_TEXT_LIST_SUBTITLE = [
  'pls enable hardware acceleration',
  'in your browser',
  "you can't see the background :(",
];

function Home(): JSX.Element {
  const [displayBody, setDisplaySubtitle] = useState<boolean>(false);
  const glEnabled = useContext(GlEnabledContext);

  return (
    <header className="Home-header transition">
      <TypingText
        style={{
          fontSize: '48px',
          lineHeight: '48px',
          margin: 0,
        }}
        text={TITLE_TEXT}
        speed={50}
        callback={setDisplaySubtitle}
        hideCarat
      />
      <CycleTypingText
        text={glEnabled ? TEXT_LIST_SUBTITLE : GL_DISABLED_TEXT_LIST_SUBTITLE}
        speed={25}
        pause={!displayBody}
        style={{
          display: 'block',
          fontSize: 'min(5vw, 36px)',
          lineHeight: '36px',
          height: '36px',
          margin: '36px',
        }}
      />
      <Column>
        <RedirectButton text="the collection" destination="/collection" />
        <RedirectButton text="notable projects" destination="/projects" />
        <RedirectButton text="photos" destination="/photos" />
        <RedirectButton text="about" destination="/about" />
      </Column>
      <Row>
        <IconButton
          iconId="fa-brands fa-github"
          linkAddr="https://github.com/benjxia"
        />
        <IconButton
          iconId="fa-brands fa-linkedin"
          linkAddr="https://www.linkedin.com/in/benjxia/"
        />
        <IconButton
          iconId="fa-brands fa-instagram"
          linkAddr="https://www.instagram.com/benjxia/"
        />
      </Row>
    </header>
  );
}

export default Home;
