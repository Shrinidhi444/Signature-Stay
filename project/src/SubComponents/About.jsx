import React from "react";

const About = () => {
  return (
    <section id="aboutUs_Mini">
      {/* Left Text */}
      <div className="first_container">
        <div className="content">
          <h1>About Us</h1>
          <p>
            We are dedicated to redefining luxury living by offering thoughtfully
            curated homes in prime locations. Every property in our collection
            is selected to deliver comfort, elegance, and a truly memorable stay.
          </p>
          <p>
            With a focus on quality, design, and hospitality, we bridge the gap
            between travelers and exceptional homes. Our platform ensures
            seamless booking, trusted hosts, and world-class service at every
            step.
          </p>
          <p>
            Whether you seek a serene mountain retreat or a vibrant coastal
            escape, our properties are crafted to meet the highest standards of
            modern living and relaxation.
          </p>
          <p>
            Driven by passion and excellence, we continue to create experiences
            where guests feel not just accommodated — but truly at home.
          </p>
          <button>
            We strive to offer you the best possible homes to stay!
          </button>
        </div>
      </div>

      {/* Right Images */}
      <div className="second_container">
        <div className="image_1">
          <img src="/people.jpg" alt="people" />
        </div>
        <div className="image_2">
          <img src="/people2.jpg" alt="people2" />
        </div>
      </div>
    </section>
  );
};

export default About;
