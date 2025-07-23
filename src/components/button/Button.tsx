import React, { JSX, useEffect } from 'react';
import { useNavigate } from 'react-router';

import './Button.css'
import { COLORS } from '../../Colors';

interface RedirectButtonProps {
  text: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function RedirectButton({text, style, onClick}: RedirectButtonProps): JSX.Element {
  useEffect(() => {
    // Allows COLORS.SECONDARY to be visible as --colors-secondary variable within Button.css
    const root = document.documentElement;
    root.style.setProperty('--colors-secondary', COLORS.SECONDARY);
  }, [])
  return (
    <button className='RedirectButton' onClick={onClick} style={style}>
      {text}
    </button>
  );
}

function HomeButton(): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    // Allows COLORS.SECONDARY to be visible as --colors-secondary variable within Button.css
    const root = document.documentElement;
    root.style.setProperty('--colors-secondary', COLORS.SECONDARY);
  }, [])
  return (
    <button className='HomeButton'
    onClick={(e) => {
      navigate('/');
    }}>
       <span className="HomeButton-text">benjxia</span>
    </button>
  );
}

interface IconButtonProps {
  iconId: string; // FontAwesome icon ID fontawesome.com/
  linkAddr: string; // URL icon should link to
}

function IconButton({ iconId, linkAddr }: IconButtonProps) {
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
