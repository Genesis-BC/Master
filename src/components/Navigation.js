import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" className="logo-link" onClick={closeMobileMenu}>
            <h2>GENESIS</h2>
            <span className="nav-subtitle">First-Gen Literary Magazine</span>
          </Link>
        </div>
        
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-active' : ''}`}>
          <li>
            <Link 
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about"
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to="/contact"
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              to="/submit"
              className={`nav-link ${location.pathname === '/submit' ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Submit
            </Link>
          </li>
        </ul>
        
        <div 
          className={`nav-mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;


