import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function Navbar() {
    return (
      <header className="navbar">
        <img src="/images/otcr-logo.png" alt="OTCR Logo" className="navbar-logo" />
  
        <nav className="navbar-links">
        <Link to="/">Home</Link> |{" "}
            <Link to="/whoWeAre">Who We Are</Link> |{" "}
            <Link to="/workWithUs">Work With Us</Link> |{" "}
            <Link to="/recruitment">Recruitment</Link> |{" "}
            <Link to="/members">Members Only</Link> |{" "}
          <div className="navbar-socials">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
          </div>
        </nav>
      </header>
    );
  }