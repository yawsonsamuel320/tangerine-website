import React from "react";
import "./Testimonial.css";

export default function Testimonial() {
  return (
    <div className="testimonials">
      <h2 className="red-rose">What Our <span className="orange">Customers Say</span></h2>

      <div className="testimonial-box">
        <p>
          “My order was processed promptly, correctly picked and packaged.
          Tangerine got me exactly what I wanted.”
        </p>

        <h4>Christabel</h4>
        <small>Volta Hall, Legon Campus</small>
      </div>
    </div>
  );
}
