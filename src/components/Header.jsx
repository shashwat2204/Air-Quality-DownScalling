import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="fadeIn">Air Quality Downscaling</h1>
        <nav className="fadeIn">
          <a href="#overview">Overview</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
