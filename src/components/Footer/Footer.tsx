import React from 'react';
import logoImg from '../../assets/images/logo.png';
import './Footer.css';

interface FooterProps {
  currentPage: 'home' | 'faq' | 'contact';
  setCurrentPage: (page: 'home' | 'faq' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ currentPage, setCurrentPage }) => {
  const currentYear = new Date().getFullYear();

  const navigateToSection = (id: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
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

  const navigateToPage = (page: 'faq' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Logo & Description */}
          <div className="footer-col-brand">
            <img src={logoImg} alt="Akaribo Logo" className="footer-logo-img" />
            <p className="footer-brand-text">
              Providing modern corporate transport solutions and high-yield commercial vehicle investment opportunities across Ghana.
            </p>
            <div className="footer-socials">
              <a 
                href="https://www.linkedin.com/company/akaribo-transport-and-logistics-ltd/about/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Visit Akaribo LinkedIn Page"
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col-links">
            <h3 className="footer-col-title">Quick Links</h3>
            <ul className="footer-links-list">
              <li>
                <button onClick={() => navigateToSection('home')}>Home</button>
              </li>
              <li>
                <button onClick={() => navigateToSection('about')}>About Us</button>
              </li>
              <li>
                <button onClick={() => navigateToSection('investment')}>Investment Programme</button>
              </li>
              <li>
                <button onClick={() => navigateToPage('faq')}>FAQs</button>
              </li>
              <li>
                <button onClick={() => navigateToPage('contact')}>Contact Us</button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col-contact">
            <h3 className="footer-col-title">Contact Office</h3>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-label">Location:</span> Spintex Road, Accra, Ghana
              </li>
              <li>
                <span className="contact-label">Hotlines:</span>
                <div className="footer-phones">
                  <a href="tel:+233249499518">+233 24 949 9518</a>
                  <a href="tel:+233534819667">+233 53 481 9667</a>
                </div>
              </li>
              <li>
                <span className="contact-label">Email:</span>{' '}
                <a href="mailto:akaribo.tl@gmail.com">akaribo.tl@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} Akaribo Transport & Logistics. All rights reserved.
          </p>
          <div className="footer-policies">
            <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
            <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
