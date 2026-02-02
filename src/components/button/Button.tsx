import React, { JSX, MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import './Button.css';
import useThemeColors from '../../hooks/theme';

interface RedirectButtonProps {
  text: string;
  destination?: string;
  clickCallback?: React.MouseEventHandler<HTMLDivElement>;
  style?: React.CSSProperties;
}

function RedirectButtonNavBar({
  text,
  destination,
  clickCallback
}: RedirectButtonProps): JSX.Element {
  const navigate = useNavigate();
  useThemeColors();

  const handleLinkClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    clickCallback?.(event);
    navigate(destination || '/');
  };

  return (
    <div style={{marginTop: 'min(5vw, 36px)'}}>
      <div className="redirect-button redirect-navbar-button" onClick={handleLinkClick}>
        <span data-nosnippet>{text}</span>
      </div>
    </div>
  );
}

function RedirectButton({
  text,
  destination,
  clickCallback,
  style,
}: RedirectButtonProps): JSX.Element {
  const navigate = useNavigate();
  useThemeColors();

  const handleLinkClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    clickCallback?.(event);
    navigate(destination || '/');
  };

  return (
    <div className="redirect-button" style={style} onClick={handleLinkClick}>
      <span data-nosnippet>{text}</span>
    </div>
  );
}

function HomeButton(): JSX.Element {
  useThemeColors();

  return (
    <Link className="home-button" to="/">
      <nav className="home-button-text">benjxia</nav>
    </Link>
  );
}

interface MenuButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

// TODO: add functionality to this thing
function MenuButton({handleClick}: MenuButtonProps): JSX.Element {
  return (
    <button className="redirect-button" onClick={handleClick}>
      <i className="fa-solid fa-bars"></i>
    </button>
  );
}

function ExitMenuButton({handleClick}: MenuButtonProps): JSX.Element {
  return (
    <button className="redirect-button" onClick={handleClick} style={{marginTop: '20px'}}>
      <i className="fa-solid fa-x"></i>
    </button>
  );
}

interface IconButtonProps {
  iconId: string; // FontAwesome icon ID fontawesome.com/
  linkAddr: string; // URL icon should link to
}

function IconButton({ iconId, linkAddr }: IconButtonProps): JSX.Element {
  const handleExternalLink = () => {
    window.open(linkAddr); // Opens in a new tab
    // Or, for the same tab: window.open('https://www.example.com');
  };
  return (
    <button
      className="redirect-button"
      onClick={handleExternalLink}
      style={{ display: 'inline-block' }}
    >
      <i className={iconId}></i>
    </button>
  );
}

interface NavProp {
  path: string;
  name: string;
}

interface NavBarProps {
  paths: NavProp[];
  activeIndex?: number;
}

function NavBar({paths, activeIndex}: NavBarProps): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10%', // TODO: make this gap more adaptable or something idk
      }}
    >
      {paths.map((path, idx) => (
        <Link
          key={path.path}
          className={idx === activeIndex ? 'redirect-button' + ' active-redirect-button' : 'redirect-button'}
          to={path.path || '/'}
        >
          <span data-nosnippet>{path.name}</span>
        </Link>
      ))}
    </div>
  );
}

export { MenuButton, ExitMenuButton, RedirectButtonNavBar, RedirectButton, HomeButton, IconButton, NavBar };
