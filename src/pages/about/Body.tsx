import React, { JSX } from 'react';
import { DefaultBody } from '../../components/text/Text';

import './About.css';
import '../../theme/transition.css';

import chicken from './img/chicken.jpg';

function Body(): JSX.Element {

  return (
    <div className="transition">
      <div className="about-body-text transition blur-tile">
        <DefaultBody>
          (Probably) The one and only CS student turned chicken farmer.
        </DefaultBody>
        <DefaultBody>
          I graduated from Westview High School in 2021, and from UC San Diego
          with a Bachelor&apos;s in Computer Science in 2024, and a
          Master&apos;s in Computer Science in 2025. My main focuses have
          included a combination of computer vision - both classical and deep
          learning based, 3d graphics, (non-generative) machine learning theory,
          operating systems, high performance computing including GPU
          programming, and a bit of distributed systems for fun. I&apos;ve also
          done a bit of frontend work when necessary, and it absolutely is not
          my forte, as is evident by this website&apos;s simple, crappy design,
          and general lack of code quality.
        </DefaultBody>
        <DefaultBody>
          A few people might also recognize me from my brief stints in
          competitive Overwatch, where I mainly played tank heroes for a few
          teams including UC San Diego&apos;s 2021-2022 varsity team (aka
          &quot;UCSD Gold&quot;) and reached Top 500 on the North American
          leaderboard a few times. If you are one of those people, hi! :D,
          it&apos;s been a while.
        </DefaultBody>
        <DefaultBody>
          In my free time I sometimes still play some shooter games, chess, gym,
          care for my pet budgies, and of course, farm chickens (for eggs).
        </DefaultBody>
        <DefaultBody>
          After some layoffs and rescinded offers, I&apos;ve decided to use my
          savings to start my own chicken farm near Auckland, New Zealand, as
          the human body simply isn&apos;t built to sit in front of a computer
          all day. If you happen to be in the Auckland area, feel free to
          contact me for some affordable, ethically sourced, organic chicken
          eggs :). We&apos;ve also recently expanded our operations under a new
          banner: Eggs4Less!
        </DefaultBody>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <img
            src={chicken}
            style={{
              width: 'min(75%, 1000px)',
              /*
            We *know* the aspect ratio because we have the img source
            This also prevents the scrollbar from jumping around before the
            image has fully loaded
            */
              aspectRatio: 4 / 3,
              borderRadius: '25px',
              alignSelf: 'center',
              marginBottom: '16px',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
