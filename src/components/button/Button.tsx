import React, { JSX } from 'react';
import { Link } from 'react-router';

import './Button.css';
import useThemeColors from '../../hooks/theme';

interface RedirectButtonProps {
  text: string;
  style?: React.CSSProperties;
  destination?: string;
}

function RedirectButton({
  text,
  destination,
}: RedirectButtonProps): JSX.Element {
  useThemeColors();

  return (
    <Link className="RedirectButton" to={destination || '/'}>
      <span data-nosnippet>{text}</span>
    </Link>
  );
}

function HomeButton(): JSX.Element {
  useThemeColors();

  return (
    <Link className="HomeButton" to="/">
      <nav className="HomeButton-text">benjxia</nav>
    </Link>
  );
}

interface IconButtonProps {
  iconId: string; // FontAwesome icon ID fontawesome.com/
  linkAddr: string; // URL icon should link to
}

function IconButton({ iconId, linkAddr }: IconButtonProps): JSX.Element {
  const handleExternalLink = () => {
    window.open(linkAddr); // Opens in a new tab
    // Or, for the same tab: window.open('https://www.example.com');
  };
  return (
    <button
      className="RedirectButton"
      onClick={handleExternalLink}
      style={{ display: 'inline-block' }}
    >
      <i className={iconId}></i>
    </button>
  );
}

interface NavProp {
  path: string;
  name: string;
}

interface NavBarProps {
  paths: NavProp[];
  activeIndex?: number;
}

function NavBar({paths, activeIndex}: NavBarProps): JSX.Element {
  return (
    <div
      className='about-body-wrapper'
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10%', // TODO: make this gap more adaptable or something idk
      }}
    >
      {paths.map((path, idx) => (
        <Link
          key={path.path}
          className={idx === activeIndex ? 'RedirectButton' + ' ActiveRedirectButton' : 'RedirectButton'}
          to={path.path || '/'}
        >
          <span data-nosnippet>{path.name}</span>
        </Link>
      ))}
    </div>
  );
}

export { RedirectButton, HomeButton, IconButton, NavBar };
