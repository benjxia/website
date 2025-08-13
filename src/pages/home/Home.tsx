import { JSX, useState } from 'react';

import './Home.css';
import { TypingText, CycleTypingText } from '../../components/text/Text';
import { IconButton, RedirectButton } from '../../components/button/Button';
import { Row, Column } from '../../components/format/Format';
import PageWrapper from '../../components/wrappers/Wrapper';

const TITLE_TEXT = 'benjxia';

// Avoid making each string too long or it'll overflow off the page on mobile
// const TEXT_LIST_SUBTITLE = [
//   "i sometimes write readable code",
//   "code monke",
//   "not completely useless at...",
//   "computer vision",
//   "graphics (the 3d kind)",
//   "the machine ain't learnin'",
//   "operating systems",
//   "(creating) race conditions",
//   "distributed systems",
//   "frontend stuff (against my will)",
//   "my brain is page faulting...",
//   "fixing others' merge conflicts",
//   "sleeping for 12 hours",
//   "decent at fps games too i guess?",
//   "pls hire me",
//   "out of ideas, looping this text"
// ];

const TEXT_LIST_SUBTITLE = [
  "fulltime chicken farmer",
  "i sometimes wrote readable code",
  "rage quit computer science",
  "escaped the united states",
  "now farmin' chickens elsewhere",
  "reject technology, touch grass",
  "birds are very fluffy",
];


function Home(): JSX.Element {
  const [displayBody, setDisplaySubtitle] = useState<boolean>(false);

  const HomeContent = (
    <header className="Home-header">
      <div style={{height: '2em', marginBottom: '2em'}}>
        <TypingText style={{
            fontSize: 48,
        }} text={TITLE_TEXT} speed={50} callback={setDisplaySubtitle} />
      </div>
      <CycleTypingText text={TEXT_LIST_SUBTITLE} speed={25} pause={!displayBody} />
      <Column>
        <RedirectButton text='the collection' destination='/collection' />
        {/* <RedirectButton text='presentations' destination='/presentations' /> */}
        {/* <RedirectButton text='résumé' destination='/résumé' /> */}
        <RedirectButton text='about' destination='/about'/>
      </Column>
      <Row>
        <IconButton iconId='fa-brands fa-github' linkAddr='https://github.com/benjxia'/>
        <IconButton iconId='fa-brands fa-linkedin' linkAddr='https://www.linkedin.com/in/benjxia/'/>
        <IconButton iconId='fa-brands fa-instagram' linkAddr='https://www.instagram.com/benjxia/'/>
      </Row>
    </header>
  );

  return (
    <PageWrapper>
      {HomeContent}
    </PageWrapper>
  );
}

export default Home;
