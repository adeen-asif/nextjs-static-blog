import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about-section">
      <img src="/about.avif" className="about-image" />
      <div className="about-content">
        <h1>About Us</h1>
        <p>
          ByAdeen is a personal space where creativity meets inspiration.
          Through reflections, visuals, and thoughtful expression, this blog
          captures moments of motivation, aesthetic beauty, and everyday stories
          that spark meaningful connection and personal growth.
        </p>
      </div>
    </div>
  );
};

export default About;
