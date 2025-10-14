import React, { JSX, useState } from 'react';

import Layout from '../../components/layout/Layout';
import { DefaultBody } from '../../components/text/Text';

import './About.css';

import ugly from './img/IMG_4099.png'
import useThemeColors from '../../hooks/theme';
import usePageTitle from '../../hooks/pageTitle';

const ABOUT_PAGE_TITLE = 'about me :)';

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
      <div className='summary-text'>
        <DefaultBody noSelect>
          Benjamin Xia//夏博伦
          <br/>
          <span>me</span>&#64;<span>benjxia.dev</span>
          <br/>
          <br/>
          San Diego<br/>
          ↓<br/>
          South Bay<br/>
          ↓<br/>
          San Diego<br/>
          ↓<br/>
          Auckland
        </DefaultBody>
      </div>
    </div>
  );
}

function Body(): JSX.Element {
  return (
    <div className="about-body-wrapper">
      <DefaultBody>
        Pretend that I&apos;m creative enough to write something more than a generic &quot;about me&quot; section. I wrote this when I was tired.
      </DefaultBody>
      <DefaultBody>
        I graduated from Westview High School in 2021, and from UC San Diego with a Bachelor&apos;s in Computer Science in 2024, and a Master&apos;s in Computer Science in 2025. My main focuses have included a combination of
        computer vision - both classical and deep learning based, 3d graphics, (non-generative) machine learning theory, operating systems, high performance computing including GPU programming, and a bit of distributed systems for fun.
        I&apos;ve also done a bit of frontend work when necessary, and it absolutely is not my forte, as is evident by this website&apos;s simple, and crappy design.
      </DefaultBody>
      <DefaultBody>
        A few people might also recognize me from my brief stints in competitive Overwatch, where I mainly played tank heroes for a few teams including UC San Diego&apos;s 2021-2022 varsity team (aka &quot;UCSD Gold&quot;) and reached Top 500 on the North American leaderboard a few times.
        If you are one of those people, hi! :D, it&apos;s been a while.
      </DefaultBody>
      <DefaultBody>
        In my free time I sometimes still play some shooter games, chess, gym, care for my pet budgies, and of course, farm chickens (for eggs).
      </DefaultBody>
      <DefaultBody>
        After some layoffs and rescinded offers, I&apos;ve decided to use my savings to start my own chicken farm near Auckland, New Zealand, as the human body simply isn&apos;t built to sit in front of a computer all day.
        If you happen to be in the Auckland area, feel free to contact me for some affordable, ethically sourced, organic chicken eggs :). We&apos;ve also recently expanded our operations under a new banner: Eggs4Less!
      </DefaultBody>
    </div>
  );
}

function About(): JSX.Element {
  usePageTitle(ABOUT_PAGE_TITLE);

  return (
    <Layout title="about me">
      <div className="about-page-wrapper">
        <Summary />
        <Body />
      </div>
    </Layout>
  );
}

export default About;
