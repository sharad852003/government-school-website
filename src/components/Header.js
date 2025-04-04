import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
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

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar container">
          <div className="navbar-brand">
            <GraduationCap className="logo-icon" size={32} />
            <NavLink to="/" className="brand-name">Government School Nandgur</NavLink>
          </div>
          
          <button 
            className="menu-toggle" 
            onClick={toggleMenu} 
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="icon" size={28} /> : <Menu className="icon" size={28} />}
          </button>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <NavLink 
              to="/" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMobileMenu}
              end
            >
              Home
            </NavLink>
           
            <NavLink 
              to="/achievements" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Achievements
            </NavLink>
            <NavLink 
              to="/teachers" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Teachers
            </NavLink>
            <NavLink 
              to="/clubs" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Clubs
            </NavLink>
            <NavLink 
              to="/success-stories" 
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={closeMobileMenu}
            >
              Alumni
            </NavLink>
            
          </div>
        </nav>
      </header>
      {/* Spacer to prevent content from being hidden behind fixed header */}
      <div className="header-spacer"></div>
    </>
  );
};

export default Header;