// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => (
  <header className="site-header">
    <div className="container">
      <a href="index.html" id="branding">
        <img src={logo} alt="" className="logo" />
        <div className="logo-copy">
          <h1 className="site-title">Seatsnap</h1>
          <small className="site-description">Snap the glimpse</small>
        </div>
      </a>
      {/* Rest of your navigation code */}
    </div>
  </header>
);

export default Header;
