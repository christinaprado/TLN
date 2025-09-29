import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="TLN PH Logo" />
          <h1>TLN PH</h1>
        </div>
        <nav className="nav-menu">
          <Link to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/apply">APPLY NOW</Link>
          <Link to="/reviews">REVIEWS</Link>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1 className="coming-soon">COMING SOON</h1>
        </section>

        <section className="loan-types">
          <div className="loan-card">
            <div className="loan-icon">
              <img src="/wallet-icon.png" alt="Personal Loan" />
            </div>
            <h3>Personal Loan</h3>
          </div>

          <div className="loan-card">
            <div className="loan-icon">
              <img src="/briefcase-icon.png" alt="Business Loan" />
            </div>
            <h3>Business Loan</h3>
          </div>

          <div className="loan-card">
            <div className="loan-icon">
              <img src="/doctor-icon.png" alt="Doctors Loan" />
            </div>
            <h3>Doctors Loan</h3>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-logo">
          <img src="/footer-logo.png" alt="Trusted Loan Network PH" />
        </div>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/support">Customer Support</a>
          <a href="/terms">Terms And Conditions</a>
        </div>
        <div className="footer-contact">
          <p><i className="location-icon"></i>Paseo De Roxas, Makati, Philippines</p>
          <p><i className="phone-icon"></i>0964 253 6085</p>
          <p><i className="email-icon"></i>Email</p>
        </div>
        <div className="footer-social">
          <a href="#" className="facebook">Facebook</a>
          <a href="#" className="linkedin">LinkedIn</a>
        </div>
        <div className="footer-copyright">
          <p>Trusted Loan Network © Copyright 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;