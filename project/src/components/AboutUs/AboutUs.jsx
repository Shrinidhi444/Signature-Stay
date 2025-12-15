import React from "react";
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>YOUR PEACE OF MIND, OUR PRIORITY!</h3>
          <p>At Signature Stays, we redefine luxury living by offering thoughtfully curated homes in prime locations. Every property is handpicked to ensure comfort, elegance, and a memorable experience.</p>
          <p>With a focus on quality, design, and hospitality, we bridge the gap between travelers and exceptional homes. Our platform guarantees seamless booking, trusted hosts, and world-class service at every step.</p>
          <p>Whether you seek a serene mountain retreat or a vibrant coastal escape, our properties are crafted to meet the highest standards of modern living, relaxation, and convenience.</p>
          <p>Driven by passion and excellence, we aim to create experiences where guests feel not just accommodated — but truly at home.</p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;