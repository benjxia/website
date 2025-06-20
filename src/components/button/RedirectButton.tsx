import React, { JSX, useEffect } from 'react';

import './Button.css'
import { COLORS } from '../../Colors';

interface RedirectButtonProps {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function RedirectButton({text, onClick}: RedirectButtonProps): JSX.Element {
  useEffect(() => {
    // Allows COLORS.SECONDARY to be visible as --colors-secondary variable within Button.css
    const root = document.documentElement;
    root.style.setProperty('--colors-secondary', COLORS.SECONDARY);
  }, [])
  return (
    <button className={'RedirectButton'} onClick={onClick}>
      {text}
    </button>
  );
}

export default RedirectButton;
