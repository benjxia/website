import React, { JSX } from 'react';

import './Button.css'

interface RedirectButtonProps {
    text: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function RedirectButton({text, onClick}: RedirectButtonProps): JSX.Element {
    // vec3(0.2784, 0.7765, 0.757)
    return (
        <button className={'RedirectButton'} onClick={onClick}>
            {text}
        </button>
    );
}

export default RedirectButton;
