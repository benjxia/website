import React, { JSX, useState } from 'react';
import { Outlet, useLocation } from 'react-router';

import useThemeColors from '../../hooks/theme';
import usePageTitle from '../../hooks/pageTitle';
import Layout from '../../components/layout/Layout';
import { IconButton, NavBar } from '../../components/button/Button';
import { DefaultBody } from '../../components/text/Text';

import './About.css';
import '../../theme/transition.css';
import ugly from './img/IMG_4099.png';
import { Row } from '../../components/format/Format';

const ABOUT_PAGE_TITLE = 'about me :)';

function Summary(): JSX.Element {
  const [imageLoaded, setImageLoad] = useState<boolean>(false);

  useThemeColors();

  return (
    <div className="summary">
      {/*
      We bake the position: sticky into face-container and summary-text
      because of some bugs on different browsers
      ex. on FireFox, the extra stacking context from a parent div having
      position: sticky causes the background blur to disappear for some
      fucking reason i dont understand

      We also bake transition onto the same level as blur-tile for similar
      reasons, for some reason the extra stacking context from tile-blur breaks
      the backdrop filter from blur-tile (ONLY ON CHROME! IT WORKS FOR THE OTHER
      BROWSERS). But it only breaks when the stacking context is created by a
      transform, other ways of creating stacking context such as position:
      sticky or setting z-index doesn't break it for some reason.
      */}
      <div className="transition face-container perspective-shift-left">
        {!imageLoaded && <div className="face face-placeholder"></div>}
        <img
          className="face face-image"
          src={ugly}
          alt="there should be an ugly face here"
          style={imageLoaded ? {} : { display: 'none' }}
          onLoad={() => setImageLoad(true)}
        />
      </div>
      <div className='transition perspective-shift-left'>
        <div className="summary-text blur-tile">
          <DefaultBody
            transition
            noSelect
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <span>Benjamin Xia//夏博伦</span>
            <span>
              <span>me</span>&#64;<span>benjxia.dev</span>
            </span>
            <br />
            <span>San Diego</span>
            <span>↓</span>
            <span>Bay</span>
            <span>↓</span>
            <span>San Diego</span>
            <span>↓</span>
            <span>Auckland</span>
          </DefaultBody>
          <Row style={{animationDelay: '1.1s'}}>
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
        </div>
      </div>
    </div>
  );
}

function About(): JSX.Element {
  usePageTitle(ABOUT_PAGE_TITLE);

  const location = useLocation();
  const path = location.pathname;
  // Avoid bug where nav bar index is fucked by page refreshes
  const navBarIdx = path === '/about' || path === '/about/' ? 0 : 1;

  return (
    <Layout title="about me">
      <div className="about-page-wrapper">
        <Summary />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            className="transition"
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: 'max(25%, 200px)',
              alignSelf: 'center',
              marginBottom: '10px',
            }}
          >
            <NavBar
              paths={[
                {
                  path: '/about',
                  name: 'about',
                },
                {
                  path: '/about/résumé',
                  name: 'résumé',
                },
              ]}
              activeIndex={navBarIdx}
            />
          </div>
          <Outlet />
        </div>
      </div>
    </Layout>
  );
}

export default About;
