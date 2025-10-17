import React, { JSX } from 'react';
import { HomeButton } from '../button/Button';
import { TypingText } from '../text/Text';
import PageWrapper from '../wrappers/Wrapper';

import './Layout.css';
import '../../theme/transition.css';

interface LayoutProps {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
}

function Layout({title, children}: LayoutProps): JSX.Element {
  return (
    <PageWrapper>
      <header className='Layout-header'>
        <div className='Layout-div' style={{position: 'relative'}}>
          <div className="transition">
            <HomeButton />
            <TypingText text={title} style={{fontSize: '24px', marginTop: '24px', marginBottom: '24px'}}/>
          </div>
          {children}
        </div>
      </header>
    </PageWrapper>
  );
}

export default Layout;
