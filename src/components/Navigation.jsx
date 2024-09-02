// src/components/Navigation.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';
import myLogo from '../images/logo.png'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-bar">
      <div className="nav-section nav-left">
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/services" activeClassName="active">Services</NavLink>
      </div>
      <div className="nav-section nav-center">
        <NavLink to="/" className="logo"> <img src={myLogo} alt="logo" className='navLogo'/> </NavLink>
      </div>
      <div className="nav-section nav-right">
        <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
        <NavLink to="/packages" activeClassName="active">Packages</NavLink>
        <NavLink to="/contact-us" activeClassName="active">Contact Us</NavLink>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
        <NavLink exact to="/" onClick={toggleMenu} activeClassName="active">Home</NavLink>
        <NavLink to="/about" onClick={toggleMenu} activeClassName="active">About</NavLink>
        <NavLink to="/services" onClick={toggleMenu} activeClassName="active">Services</NavLink>
        <NavLink to="/portfolio" onClick={toggleMenu} activeClassName="active">Portfolio</NavLink>
        <NavLink to="/packages" onClick={toggleMenu} activeClassName="active">Packages</NavLink>
        <NavLink to="/contact-us" onClick={toggleMenu} activeClassName="active">Contact Us</NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
