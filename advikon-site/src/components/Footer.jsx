import { Link } from 'react-router-dom';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../assets/advikon-logo.jpeg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top — logo + nav + socials */}
        <div className="ft-top">
          <Link to="/" className="ft-logo">
            <img src={logo} alt="Advikon" className="ft-logo-img" />
            <span className="ft-logo-text">ADVIKON</span>
          </Link>
          <nav className="ft-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <div className="ft-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        <div className="ft-divider" />

        {/* Info columns */}
        <div className="ft-info">
          <div className="ft-info-col">
            <h4>Products</h4>
            <Link to="/products">Combo Vending Machines</Link>
            <Link to="/products">Beverage Vending Machines</Link>
            <Link to="/products">Snack Vending Machines</Link>
          </div>
          <div className="ft-info-col">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/products">Our Technology</Link>
            <Link to="/contact">Get a Quote</Link>
          </div>
          <div className="ft-info-col">
            <h4>Get in Touch</h4>
            <a href="tel:+919717690156" className="ft-contact-item">
              <HiPhone /> +91 97176 90156
            </a>
            <a href="mailto:pankaj.kumar@advikon.in" className="ft-contact-item">
              <HiMail /> pankaj.kumar@advikon.in
            </a>
            <span className="ft-contact-item">
              <HiLocationMarker /> Sector 11, Gurugram 122001
            </span>
          </div>
        </div>

        <div className="ft-divider" />

        {/* Bottom */}
        <div className="ft-bottom">
          <span>&copy; {new Date().getFullYear()} Advikon Technologies Pvt. Ltd.</span>
          <a href="https://www.advikon.in" target="_blank" rel="noopener noreferrer">www.advikon.in</a>
        </div>
      </div>
    </footer>
  );
}
