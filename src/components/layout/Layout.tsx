import React, { JSX } from 'react';
import { Outlet } from 'react-router';
import { HomeButton } from '../button/Button';

import './Layout.css';
import '../../theme/transition.css';

function Layout(): JSX.Element {
  return (
    <header className="Layout-header">
      <div className="Layout-div" style={{ position: 'relative' }}>
        <div className="transition">
          <HomeButton />
        </div>
        {/*
          Outlet is basically {children} for React router, this lets us do shit
          like nested routes https://reactrouter.com/start/data/routing
        */}
        <Outlet />
      </div>
    </header>
  );
}

export default Layout;
