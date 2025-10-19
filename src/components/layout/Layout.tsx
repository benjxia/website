import React, { JSX } from 'react';
import { HomeButton } from '../button/Button';

import './Layout.css';
import '../../theme/transition.css';
import { TypingText } from '../text/Text';

interface LayoutProps {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
}

function Layout({ title, children }: LayoutProps): JSX.Element {
  return (
    <header className="layout-header">
      <div className="layout-div" style={{ position: 'relative' }}>
        <div className="transition">
          <HomeButton />
          <TypingText
            text={title}
            style={{
              fontSize: '24px',
              marginTop: '24px',
              marginBottom: '24px',
            }}
          />
        </div>
        {children}
      </div>
    </header>
  );
}

export default Layout;
