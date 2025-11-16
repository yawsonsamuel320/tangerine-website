import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import HowItWorks from "../components/HowItWorks";
import Socials from "../components/Socials";

export default function Home() {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="testimonials">
        <Testimonial />
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>

      <section id="contact">
        <Socials />
      </section>
    </>
  );
}
