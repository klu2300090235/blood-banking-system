import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1>About Us</h1>
        <p>
          Welcome to <span className="highlight">LifeLine Connect</span>, a digital platform
          dedicated to bridging the gap between hospitals and selfless blood donors.
          We believe in the power of community, compassion, and timely action.
        </p>
        <p>
          Our mission is simple — to save lives by making blood donation more accessible,
          transparent, and efficient. Through our platform, hospitals can manage
          blood stock, track donations, and handle urgent requests in real-time.
        </p>
        <p>
          Every drop counts. With a growing network of verified donors and modern tools for
          hospitals, we aim to build a safer, healthier tomorrow — together.
        </p>
        <p className="quote">
          "The gift of blood is the gift of life. There is no substitute for human blood."
        </p>
      </div>
    </div>
  );
};

export default AboutUs;