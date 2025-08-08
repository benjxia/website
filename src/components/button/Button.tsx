import React, { JSX } from 'react';
import { Link } from 'react-router';

import './Button.css'
import useThemeColors from '../../hooks/theme';

interface RedirectButtonProps {
  text: string;
  style?: React.CSSProperties;
  destination?: string;
}

function RedirectButton({text, style, destination}: RedirectButtonProps): JSX.Element {
  useThemeColors();

  return (
    <Link className='RedirectButton' to={destination || '/'} viewTransition>
      {text}
    </Link>
  );
}

function HomeButton(): JSX.Element {
  useThemeColors();

  return (
    <Link className='HomeButton' to='/' viewTransition>
      <span className="HomeButton-text">benjxia</span>
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
    <button className='RedirectButton' onClick={handleExternalLink} style={{display: 'inline-block'}}>
      <i className={iconId}></i>
    </button>
  );
}

export { RedirectButton, HomeButton, IconButton };
