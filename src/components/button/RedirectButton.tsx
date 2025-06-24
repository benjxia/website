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
    <button className={'RedirectButton'} onClick={onClick} style={style}>
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
    <button className={'HomeButton'}
    onClick={(e) => {
      navigate('/');
    }}>
       <span className="HomeButton-text">benjxia</span>
    </button>
  );
}

export { RedirectButton, HomeButton };
