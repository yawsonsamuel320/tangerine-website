import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // close menu after clicking
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/images/logo/tangerine-logo.png" alt="Logo" />
      </div>

      {/* Hamburger Icon (visible only on mobile) */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={menuOpen ? "bar bar1 open" : "bar bar1"}></div>
        <div className={menuOpen ? "bar bar2 open" : "bar bar2"}></div>
        <div className={menuOpen ? "bar bar3 open" : "bar bar3"}></div>
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li className="red-rose" onClick={() => scrollToSection("home")}>Home</li>
        <li className="red-rose" onClick={() => scrollToSection("testimonials")}>Testimonials</li>
        <li className="red-rose" onClick={() => scrollToSection("how-it-works")}>How it Works</li>
        <li className="red-rose" onClick={() => scrollToSection("contact")}>Contact Us</li>
      </ul>

      <button className="signup-btn">Sign Up</button>
    </nav>
  );
}
