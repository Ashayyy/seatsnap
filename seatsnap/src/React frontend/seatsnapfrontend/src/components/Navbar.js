// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

function Navbar() {
  return (
    <header className="site-header">
      <div className="container">
        <a href="index.html" id="branding">
          <img src={logo} alt="" className="logo" />
          <div className="logo-copy">
            <h1 className="site-title">Seatsnap</h1>
            <small className="site-description">Snap the glimpse</small>
          </div>
        </a>
        <div className="main-navigation">
          <button type="button" className="menu-toggle">
            <i className="fa fa-bars"></i>
          </button>
          <ul className="menu">
            <li className="menu-item"><Link to="/">Home</Link></li>
            <li className="menu-item"><Link to="/about">About</Link></li>
            <li className="menu-item"><Link to="/reviews">Movie reviews</Link></li>
            <li className="menu-item"><Link to="/contact">Contact</Link></li>
            <li className="menu-item"><Link to="/register">Join us</Link></li>
            <li className="menu-item"><Link to="/login">Login</Link></li>
          </ul>
          <form action="#" className="search-form">
            <input type="text" placeholder="Search..." />
            <button><i className="fa fa-search"></i></button>
          </form>
        </div>
        <div className="mobile-navigation"></div>
      </div>
    </header>
  );
}

export default Navbar;
