import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, School } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar container">
          <div className="navbar-brand">
            <School className="logo-icon" size={32} />
            <NavLink to="/" className="brand-name">
              <span className="brand-name-main">Government School</span>
              <span className="brand-name-sub"> Nandgur, Karnataka</span>
            </NavLink>
          </div>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <div className="nav-links-container">
              <NavLink 
                to="/" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
                end
              >
                <span className="link-text">Home</span>
                <span className="link-underline"></span>
              </NavLink>
              
              <NavLink 
                to="/about" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <span className="link-text">About Us</span>
                <span className="link-underline"></span>
              </NavLink>
              
              <NavLink 
                to="/achievements" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <span className="link-text">Achievements</span>
                <span className="link-underline"></span>
              </NavLink>
              
              <NavLink 
                to="/teachers" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <span className="link-text">Teachers</span>
                <span className="link-underline"></span>
              </NavLink>
              
              <NavLink 
                to="/clubs" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <span className="link-text">Clubs</span>
                <span className="link-underline"></span>
              </NavLink>
              
              <NavLink 
                to="/success-stories" 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <span className="link-text">Alumni</span>
                <span className="link-underline"></span>
              </NavLink>
            </div>
          </div>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu} 
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="icon" size={28} /> : <Menu className="icon" size={28} />}
          </button>
        </nav>
      </header>
      <div className="header-spacer"></div>
    </>
  );
};

export default Header;