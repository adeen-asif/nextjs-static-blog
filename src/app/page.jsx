import React from 'react';

export default function Home() {
  return (
    <div className="home-container">
      <div className="text-section">
        <h1 className="gradient-text">Welcome to ByAdeen</h1>

        <p>
          Explore stories, design ideas, and tech insights curated with
          creativity and passion. Dive into blogs that blend aesthetics with
          purpose.
        </p>
        <button className="btn-see-work">See Our Work</button>
      </div>
      <img src="/homepage.webp" alt="Laptop workspace" className="home-image" />
    </div>
  );
}
