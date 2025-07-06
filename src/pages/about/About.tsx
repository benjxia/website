import React, { JSX, useEffect } from 'react';


import Layout from '../../components/layout/Layout';
import { DefaultBody } from '../../components/text/Text';

import './About.css';

import ugly from './img/ugly.png'

const ABOUT_PAGE_TITLE = 'about me :)';

function Resume(): JSX.Element {
  useEffect(() => {
    const oldTitle = document.title;
    document.title = ABOUT_PAGE_TITLE;
    return () => {
      document.title = oldTitle;
    }
  }, [])
  return (
    <Layout title="about me">
      <img className={'face'} src={ugly} alt='there should be an ugly face here'/>
      <DefaultBody>
        Pretend that I'm creative enough to create more than a generic "about me" section here. I did go out of my way to find the least appealing picture of my face I could find within a minute though.
      </DefaultBody>
      <DefaultBody>
        I graduated from UC San Diego with a Bachelor's in Computer Science in 2024, and a Master's in Computer Science in 2025. My main focuses have included a combination of
        computer vision - both classical and deep learning based, 3d graphics, (non-generative) machine learning theory, operating systems, high performance computing including GPU programming, and a bit of distributed systems for fun.
        I've also done a bit of frontend work when necessary, and it absolutely is not my forte, as is evident by this website's crappy design.
      </DefaultBody>
      <DefaultBody>
        A few people might also recognize me from my brief stints in competitive Overwatch, where I mainly played tank heroes for a few teams including UC San Diego's 2021-2022 varsity team (I think they call it "UCSD Gold" now) and reached Top 500 on the North American leaderboard a few times.
        If you are one of those people, hi! :D, it's been a while.
      </DefaultBody>
      <DefaultBody>
        In my free time I sometimes still play some shooter games, Chess, gym (irregularly), care for my pet budgies, and of course, farm chickens (for eggs! not meat!).
        After some recent events I've decided to quit computer science/programming to become a chicken farmer in New Zealand, because I'm tired of getting laid off/having offers rescinded.
      </DefaultBody>
    </Layout>
  );
}

export default Resume;
