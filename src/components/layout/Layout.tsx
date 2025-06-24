import React, { JSX } from 'react';
import { useNavigate } from 'react-router';
import { HomeButton, RedirectButton } from '../button/RedirectButton';
import { DefaultTitle, TypingText } from '../text/Text';

import './Layout.css';

interface LayoutProps {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}

function Layout({title, children}: LayoutProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <>
      <header className='Layout-header'>
      <RedirectButton text={'benjxia'} onClick={(e) => navigate("/")} style={{top: '10px'}}/>
      <TypingText text={title} hideCarat={false} style={{}}/>
      <div className='Layout-div' style={{position: 'relative'}}>
        {children}
      </div>
    </header>
    </>

  );
}

export default Layout;
