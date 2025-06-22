import React, { JSX } from 'react';
import { HomeButton } from '../button/RedirectButton';
import { DefaultTitle, TypingText } from '../text/Text';

import './Layout.css';

interface LayoutProps {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

function Layout({title, children}: LayoutProps): JSX.Element {
  return (
    <>
      <HomeButton />
      <header className='Collection-header'>
        <div className='Collection-div'>
          <DefaultTitle>
            benjxia
          </DefaultTitle>
          <TypingText text={title} hideCarat={false} />
          {children}
        </div>
      </header>
    </>
  );
}

export default Layout;
