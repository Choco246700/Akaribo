import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../../assets/images/logo.png';
import './Navbar.css';

interface NavbarProps {
  currentPage: 'home' | 'faq' | 'contact' | 'terms' | 'privacy';
  setCurrentPage: (page: 'home' | 'faq' | 'contact' | 'terms' | 'privacy') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentPage !== 'home') {
        setActiveSection(currentPage);
        return;
      }

      // Track active section based on scroll position
      const sections = ['home', 'about', 'investment'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navigateToSection = (id: string) => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setActiveSection(id);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navigateToFaq = () => {
    setMobileMenuOpen(false);
    setCurrentPage('faq');
    setActiveSection('faq');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToContact = () => {
    setMobileMenuOpen(false);
    setCurrentPage('contact');
    setActiveSection('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setActiveSection('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigateToSection('home');
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={handleLogoClick}>
          <img src={logoImg} alt="Akaribo Logo" className="navbar-logo-img" />
        </div>
 
        {/* Desktop Links */}
        <div className="navbar-links">
          <button
            onClick={() => navigateToSection('home')}
            className={`nav-link ${currentPage === 'home' && activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </button>
          <button
            onClick={() => navigateToSection('about')}
            className={`nav-link ${currentPage === 'home' && activeSection === 'about' ? 'active' : ''}`}
          >
            About Us
          </button>
          <button
            onClick={() => navigateToSection('investment')}
            className={`nav-link ${currentPage === 'home' && activeSection === 'investment' ? 'active' : ''}`}
          >
            Investment Programme
          </button>
          <button
            onClick={navigateToContact}
            className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
          >
            Contact
          </button>
          <button
            onClick={navigateToFaq}
            className={`nav-link ${currentPage === 'faq' ? 'active' : ''}`}
          >
            FAQs
          </button>
        </div>
 
        {/* Mobile Menu Button */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
 
      {/* Mobile Drawer Backdrop Overlay */}
      <div 
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-links">
          <button
            onClick={() => navigateToSection('home')}
            className={`mobile-nav-link ${currentPage === 'home' && activeSection === 'home' ? 'active' : ''}`}
          >
            Home
          </button>
          <button
            onClick={() => navigateToSection('about')}
            className={`mobile-nav-link ${currentPage === 'home' && activeSection === 'about' ? 'active' : ''}`}
          >
            About Us
          </button>
          <button
            onClick={() => navigateToSection('investment')}
            className={`mobile-nav-link ${currentPage === 'home' && activeSection === 'investment' ? 'active' : ''}`}
          >
            Investment Programme
          </button>
          <button
            onClick={navigateToContact}
            className={`mobile-nav-link ${currentPage === 'contact' ? 'active' : ''}`}
          >
            Contact
          </button>
          <button
            onClick={navigateToFaq}
            className={`mobile-nav-link ${currentPage === 'faq' ? 'active' : ''}`}
          >
            FAQs
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
