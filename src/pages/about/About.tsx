import React, { JSX, useState } from 'react';
import { Outlet, useLocation } from 'react-router';

import { DefaultBody } from '../../components/text/Text';

import './About.css';
import '../../theme/transition.css';

import ugly from './img/IMG_4099.png';
import useThemeColors from '../../hooks/theme';
import usePageTitle from '../../hooks/pageTitle';
import Layout from '../../components/layout/Layout';
import { NavBar } from '../../components/button/Button';

const ABOUT_PAGE_TITLE = 'about me :)';

function Summary(): JSX.Element {
  const [imageLoaded, setImageLoad] = useState<boolean>(false);

  useThemeColors();

  return (
    <div className="summary">
      <div className="summary-content">
        <div className='perspective-shift-left'>
          <div className="transition">
            {!imageLoaded && <div className="face face-placeholder"></div>}
            <img
              className="face face-image"
              src={ugly}
              alt="there should be an ugly face here"
              style={imageLoaded ? {} : { display: 'none' }}
              onLoad={() => setImageLoad(true)}
            />
          </div>
        </div>
        <div className="summary-text transition perspective-shift-left blur-tile">
          <DefaultBody transition noSelect style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <span>Benjamin Xia//夏博伦</span>
            <span><span>me</span>&#64;<span>benjxia.dev</span></span>
            <br />
            <span>San Diego</span>
            <span>↓</span>
            <span>Bay</span>
            <span>↓</span>
            <span>San Diego</span>
            <span>↓</span>
            <span>Auckland</span>
          </DefaultBody>
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
          <div className='about-body-content'>
            <Outlet />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
