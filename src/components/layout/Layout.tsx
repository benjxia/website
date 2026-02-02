import React, { JSX, MouseEventHandler, useState } from 'react';
import {
  ExitMenuButton,
  HomeButton,
  MenuButton,
  RedirectButton,
  RedirectButtonNavBar,
} from '../button/Button';

import './Layout.css';
import '../../theme/transition.css';
import { TypingText } from '../text/Text';
import { ROUTES } from '../../routes';

interface TopNavBarProps {
  toggleMenu: MouseEventHandler;
}

function SideNavButtonMenu({ toggleMenu }: TopNavBarProps): JSX.Element {
  return (
    <div className="transition">
      <div className="fullscreen-menu-container blur-tile">
        <div className="transition">
          <ExitMenuButton handleClick={toggleMenu} />
          <div className="fullscreen-nav-menu-button-container transition">
            <RedirectButton text="home" destination="/" />
            {
              // Home page nav links
              ROUTES.map((p) => (
                <RedirectButton
                  key={p.navBarText}
                  text={p.navBarText}
                  destination={p.routeObject.path}
                  clickCallback={toggleMenu}
                  style={{
                    marginTop: '10px',
                  }}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

function TopNavBar({ toggleMenu: handleClick }: TopNavBarProps): JSX.Element {
  // TODO: Popout menu when screen width < some threshold
  return (
    <>
      <div
        className="top-navbar"
        style={{
          flexDirection: 'row',
          width: '100%',
          gap: '1em',
          fontSize: '1em',
        }}
      >
        <div className="menu-button">
          {' '}
          {/* Only shown in low screen width */}
          <MenuButton handleClick={handleClick} />
        </div>
        {/* Only shown on wider screens */}
        <div
          className="top-navbar-buttons"
          style={{
            flexDirection: 'row',
            width: '100%',
            gap: '1em',
            fontSize: '1em',
          }}
        >
          <HomeButton />
          {ROUTES.map((p) => (
            <RedirectButtonNavBar
              key={p.navBarText}
              text={p.navBarText}
              destination={p.routeObject.path}
            />
          ))}
        </div>
      </div>
    </>
  );
}

interface LayoutProps {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
}

function Layout({ title, children }: LayoutProps): JSX.Element {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const handleNavMenuClick = () => {
    setSideMenuOpen(!sideMenuOpen);
  };
  return (
    <header className="layout-header">
      <div className="layout-div" style={{ position: 'relative' }}>
        {sideMenuOpen && <SideNavButtonMenu toggleMenu={handleNavMenuClick} />}
        <div className="transition">
          <TopNavBar toggleMenu={handleNavMenuClick} />
          <TypingText
            text={title}
            style={{
              fontSize: '24px',
              marginTop: '24px',
              marginBottom: '24px',
            }}
          />
        </div>
        {children}
      </div>
    </header>
  );
}

export default Layout;
