// src/components/Navbar/Navbar.jsx
import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import "./navbar.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="top" className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a className="logo" href="#top">
          <img src={logo} alt="Powerfull logo" />
        </a>
        <button
          className="nav-toggle"
          aria-label="Menüyü Aç/Kapat"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#home">Home</a>
          <a href="#classes">Classes</a>
          <a href="#trainers">Trainers</a>
          <a href="#review">Review</a>
          <a href="#contact">Contact</a>
          <a href="#contact" className="btn-join">
            JOIN US
          </a>
        </nav>
      </div>
    </header>
  );
}
