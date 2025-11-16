import React from "react";
import "./Hero.css";
import Shopper from "../assets/girl-in-cart.png";
import DeliveryMan from "../assets/guy-holding-basket.png";

export default function Hero() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">

      {/* LEFT — DELIVERY MAN */}
      <div className="hero-left">
        <div className="shop-now-info">
          <p className="top-text">
            No market queues. No long trips. Tangerine gets your shopping
            done—fast, stress-free, and affordable.
          </p>
          <button className="shop-btn" onClick={() => scrollToSection("how-it-works")}>
            Shop Now
          </button>
        </div>
        <img src={DeliveryMan} alt="Delivery Man" className="delivery-img" />
      </div>

      {/* MIDDLE — TEXT + BUTTON */}
      <div className="hero-center">
        <h1 className="headline red-rose">
          <span className="orange red-rose">Groceries</span> to Your Door
        </h1>

        <p className="subtext red-rose">
          Delivering your groceries to your doorstep in no time.
        </p>



      </div>

      {/* RIGHT — HEADLINE + SUBTEXT + CART WOMAN */}
      <div className="hero-right">
        <img src={Shopper} alt="Woman in cart" className="hero-img" />
      </div>

    </div>
  );
}
