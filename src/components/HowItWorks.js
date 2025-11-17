import React from "react";
import "./HowItWorks.css";

// Import your images from assets
import phoneMockup from "../assets/mobile-app.png";
import appStore from "../assets/appstore.png";
import googlePlay from "../assets/googleplay.png";

export default function HowItWorks() {
  return (
    <section className="how">
      <h2 className="red-rose">

        How it <span className="orange">Works</span>
      </h2>
      <p className="subtitle">Get your shopping in three easy steps</p>

      <div className="how-container">
        {/* LEFT — STEPS */}
        <div className="steps">
          <div className="step">
            <span className="number">1</span>
            <h3>Download the App</h3>
            <p>Get our app for iPhone or Android</p>
          </div>

          <div className="step">
            <span className="number">2</span>
            <h3>Pick Your Items</h3>
            <p>Search for and select the items you need</p>
          </div>

          <div className="step">
            <span className="number">3</span>
            <h3>Delivered at Your Door</h3>
            <p>Your groceries delivered quickly</p>
          </div>
        </div>

        {/* RIGHT — PHONE & STORE BUTTONS */}
        <div className="phone-area">
          <img
            src={phoneMockup}
            alt="Tangerine app preview"
            className="phone-image"
          />
          <div className="store-buttons">

            {/* APP STORE */}
            <a
              href="https://apps.apple.com/us/app/tangerine-shopper/id6753591027"
              target="_blank"
              rel="noopener noreferrer"
              className="badge app-store-badge"
            >
              <img src={appStore} alt="Apple logo" className="badge-icon" />
              <div className="badge-text">
                <span className="small">Available on the</span>
                <span className="big">App Store</span>
              </div>
            </a>

            {/* GOOGLE PLAY */}
            <a
              href="https://play.google.com/store/apps/details?id=com.intelegance.tangerine"
              target="_blank"
              rel="noopener noreferrer"
              className="badge google-play-badge"
            >
              <img src={googlePlay} alt="Google Play icon" className="badge-icon" />
              <div className="badge-text">
                <span className="small">GET IT ON</span>
                <span className="big">Google Play</span>
              </div>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
