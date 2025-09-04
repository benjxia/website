import { JSX, useState, ReactNode } from 'react';


import Layout from '../../components/layout/Layout';
import { DefaultBody } from '../../components/text/Text';

import './About.css';

import ugly from './img/ugly2.png'
import useThemeColors from '../../hooks/theme';
import usePageTitle from '../../hooks/page-title';

const ABOUT_PAGE_TITLE = 'about me :)';

interface SummaryTextProps {
  children: ReactNode;
}

function SummaryText({children}: SummaryTextProps): JSX.Element {
  return (
    <p className='SummaryText'>
      {children}
    </p>
  );
}

function Summary(): JSX.Element {
  const [imageLoaded, setImageLoad] = useState<boolean>(false);

  useThemeColors();

  return (
    <div className='summary'>
      {/* Image placeholder */}
      {!imageLoaded && <div className='face face-placeholder'></div>}
      <img
        className='face face-image'
        src={ugly}
        alt='there should be an ugly face here'
        style={imageLoaded ? {} : {display: 'none'}}
        onLoad={() => setImageLoad(true)}
      />
      <SummaryText>
        Benjamin Xia//夏博伦
        <br/>
        <span>benjxia</span>&#64;<span>benjxia.dev</span>
        <br/>
        <br/>
        San Diego<br/>
        ↓<br/>
        Bay<br/>
        ↓<br/>
        San Diego<br/>
        ↓<br/>
        New Zealand
      </SummaryText>
    </div>
  );
}

function About(): JSX.Element {
  usePageTitle(ABOUT_PAGE_TITLE);

  return (
    <Layout title="about me">
      <Summary />
      <DefaultBody>
        Pretend that I'm creative enough to create more than a generic "about me" section here. I did go out of my way to find the least appealing picture of my face saved on my computer though.
      </DefaultBody>
      <DefaultBody>
        I graduated from Westview High School in 2021, and from UC San Diego with a Bachelor's in Computer Science in 2024, and a Master's in Computer Science in 2025. My main focuses have included a combination of
        computer vision - both classical and deep learning based, 3d graphics, (non-generative) machine learning theory, operating systems, high performance computing including GPU programming, and a bit of distributed systems for fun.
        I've also done a bit of frontend work when necessary, and it absolutely is not my forte, as is evident by this website's crappy design.
      </DefaultBody>
      <DefaultBody>
        A few people might also recognize me from my brief stints in competitive Overwatch, where I mainly played tank heroes for a few teams including UC San Diego's 2021-2022 varsity team (aka "UCSD Gold") and reached Top 500 on the North American leaderboard a few times.
        If you are one of those people, hi! :D, it's been a while.
      </DefaultBody>
      <DefaultBody>
        In my free time I sometimes still play some shooter games, Chess, gym, care for my pet budgies, and of course, farm chickens (for eggs).
      </DefaultBody>
    </Layout>
  );
}

export default About;
