import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, Trophy, Users, BookOpen, Star } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="navbar-brand">
            <div className="school-logo">
              <div className="logo-icon">GHS</div>
              <div className="logo-text">
                <span>Government Higher Primary School</span>
                <span className="kannada-text">ಸರ್ಕಾರಿ ಹಿರಿಯ ಪ್ರಾಥಮಿಕ ಶಾಲೆ</span>
              </div>
            </div>
          </div>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <NavLink to="/" className="nav-link" onClick={closeMobileMenu} end>
              <Home size={18} className="nav-icon" />
              <span>Home</span>
            </NavLink>
            <NavLink to="/achievements" className="nav-link" onClick={closeMobileMenu}>
              <Trophy size={18} className="nav-icon" />
              <span>Achievements</span>
            </NavLink>
            <NavLink to="/teachers" className="nav-link" onClick={closeMobileMenu}>
              <Users size={18} className="nav-icon" />
              <span>Teachers</span>
            </NavLink>
            <NavLink to="/clubs" className="nav-link" onClick={closeMobileMenu}>
              <BookOpen size={18} className="nav-icon" />
              <span>Clubs</span>
            </NavLink>
            <NavLink to="/success-stories" className="nav-link" onClick={closeMobileMenu}>
              <Star size={18} className="nav-icon" />
              <span>Alumni</span>
            </NavLink>
          </nav>
        </div>
      </header>
      <div className="header-spacer"></div>
    </>
  );
};

export default Header;
