import React from 'react';

export default function Navbar({ menuOpen, onToggleMenu, theme, onToggleTheme }) {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">
          <a href="#home">
            <span className="logo-icon"><i className="fa-solid fa-code"></i></span>
            <span className="logo-text">Tehesh.dev </span>
          </a>
        </div>
        <div className={`nav-menu ${menuOpen ? "show" : ""}`}>
          <ul className="nav-links">
            <li><a href="#home" className="nav-link" onClick={menuOpen ? onToggleMenu : undefined}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={menuOpen ? onToggleMenu : undefined}>About</a></li>
            <li><a href="#skills" className="nav-link" onClick={menuOpen ? onToggleMenu : undefined}>Skills</a></li>
            <li><a href="#projects" className="nav-link" onClick={menuOpen ? onToggleMenu : undefined}>Projects</a></li>
            <li><a href="#blogs" className="nav-link" onClick={menuOpen ? onToggleMenu : undefined}>Blog</a></li>
            <li><a href="#contact" className="nav-link" onClick={menuOpen ? onToggleMenu : undefined}>Contact</a></li>
          </ul>
        </div>
        <div className="nav-right" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <button
            id="theme-toggle"
            className="theme-toggle-btn"
            aria-label="Toggle dark/light mode"
            onClick={onToggleTheme}
          >
            <i className={`fa-solid ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
          </button>
          <div className="nav-actions">
            <a href="#contact" className="btn btn-primary">Hire Me</a>
          </div>
        </div>
        <button
          className={`nav-toggle ${menuOpen ? 'active' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={onToggleMenu}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}

