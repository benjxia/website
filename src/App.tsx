import React, { JSX } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BackgroundTiles from './components/background/BackgroundTiles';
import logo from './logo.svg';
import './App.css';

function Demo(): JSX.Element {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function App(): JSX.Element {
  return (
    <>
      <BackgroundTiles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Demo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
