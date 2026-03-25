import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logo from '../assets/advikon-logo.jpeg';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top bar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Advikon" className="logo-img" />
            <span className="logo-text">ADVIKON</span>
          </Link>

          {/* Desktop links */}
          <ul className="navbar-links-desktop">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/contact" className="btn btn-primary nav-cta-desktop">
            Get a Quote
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <HiMenuAlt3 size={28} color="#000000" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer — outside navbar so it's not clipped */}
      <div
        className={`drawer-backdrop ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />
      <div className={`drawer ${menuOpen ? 'open' : ''}`}>
        <button
          className="drawer-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <HiX size={24} />
        </button>

        <ul className="drawer-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`drawer-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="btn btn-primary drawer-cta" onClick={() => setMenuOpen(false)}>
          Get a Quote
        </Link>
      </div>
    </>
  );
}
