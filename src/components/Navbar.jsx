import React, { useEffect, useState } from 'react';
import Logo from '../assets/images/solid.svg';
import MenuIcon from '../assets/images/Menyknapp.png';
import UserIcon from '../assets/images/logingubbe.svg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedThemeMode = localStorage.getItem('themeMode');
    return storedThemeMode === 'dark' || (!storedThemeMode && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('themeMode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('themeMode', 'light');
    }
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="main-nav" aria-label="main navigation">
      <a href="#main" className="skip-link">Skip to main content</a>
      <div className="container">
        <a href="/">
          <img src={Logo} alt="Silicon logotype" />
        </a>
        
        {}
        <div className="darkmode-toggle">
          <p>Dark Mode</p>
          <label className="toggle">
            <input
              id="darkmode-switch"
              type="checkbox"
              checked={isDarkMode}
              onChange={handleThemeToggle}
            />
            <span className="slider"></span>
          </label>
        </div>

        <button
          className="menu-btn"
          aria-controls="main-menu"
          aria-expanded={isMenuOpen}
          aria-label="toggle navigation"
          onClick={toggleMenu}
        >
          <img src={MenuIcon} alt="Menu Button" />
        </button>
        <ul id="main" className={`main-menu ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#features" className="nav-link">Features</a></li>
          <li>
            <a href="#signin" className="btn btn-primary">
              <img className="user-icon" src={UserIcon} alt="User icon" />
              <span>Sign in / Up</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;










