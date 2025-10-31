import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png"; // Navbar'daki logo

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src={logo} alt="Powerfull Logo" className="footer-logo" />
        <p className="footer-desc">
          We provide the best fitness training programs to help you stay
          healthy, motivated, and strong.
        </p>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h3>Information</h3>
          <ul>
            <li>About Us</li>
            <li>Classes</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Helpful Links</h3>
          <ul>
            <li>Services</li>
            <li>Support</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
