import React from "react";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="how">
      <h2 className="red-rose">How it <span className="orange">Works</span></h2>

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
    </section>
  );
}
