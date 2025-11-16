import React from "react";
import "./Hero.css";
import HeroBg from "../assets/hero-bg.png";

export default function Hero() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">

      {/* BACKGROUND IMAGE */}
      <div className="hero-bg-image" style={{backgroundImage: `url(${HeroBg})`}}></div>

      {/* BACKGROUND ACCENT */}
      <div className="hero-bg-accent"></div>

      {/* CENTERED CONTENT */}
      <div className="hero-content">
        <div className="hero-badge">Fresh & Fast Delivery</div>

        <h1 className="headline red-rose">
          <span className="orange red-rose">Groceries</span> to Your Door
        </h1>

        <p className="subtext">
          No market queues. No long trips. Tangerine gets your shopping done—fast, stress-free, and affordable.
        </p>

        <div className="hero-cta">
          <button className="shop-btn" onClick={() => scrollToSection("how-it-works")}>
            Shop Now
          </button>
        </div>
      </div>

    </div>
  );
}
