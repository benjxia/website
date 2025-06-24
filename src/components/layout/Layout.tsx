import React, { JSX } from 'react';
import { HomeButton } from '../button/Button';
import { TypingText } from '../text/Text';

import './Layout.css';

interface LayoutProps {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
}

function Layout({title, children}: LayoutProps): JSX.Element {
  return (
    <>
      <header className='Layout-header'>
      <div className='Layout-div' style={{position: 'relative'}}>
        <HomeButton />
        <TypingText text={title} hideCarat={false} />
        {children}
      </div>
    </header>
    </>

  );
}

export default Layout;
