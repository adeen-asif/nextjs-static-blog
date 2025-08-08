import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <div>
      <h1>Our Work</h1>
      <div className="portfolio">
        <div>
          <img src="/port1.avif" alt="Project 1" />
          <p>Illustrations</p>
        </div>
        <div>
          <img src="/port2.avif" alt="Project 2" />
          <p>Websites</p>
        </div>
        <div>
          <img src="/port3.avif" alt="Project 3" />
          <p>Applications</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
