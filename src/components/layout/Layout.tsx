import React, { JSX } from 'react';
import { HomeButton, RedirectButtonNavBar } from '../button/Button';

import './Layout.css';
import '../../theme/transition.css';
import { TypingText } from '../text/Text';
import { ROUTES } from '../../routes';

interface LayoutProps {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
}

function TopNavBar(): JSX.Element {
  // TODO: Popout menu when screen width < some threshold
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100%', gap: '1em', fontSize: '1em'}}>
      <HomeButton />
      {
        ROUTES.map(p => <RedirectButtonNavBar key={p.navBarText} text={p.navBarText} destination={p.routeObject.path}/>)
      }
    </div>
  );
}

function Layout({ title, children }: LayoutProps): JSX.Element {
  return (
    <header className="layout-header">
      <div className="layout-div" style={{ position: 'relative' }}>
        <div className="transition">
          <TopNavBar />
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
