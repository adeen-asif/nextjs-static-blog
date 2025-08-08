"use client";

import React from "react";
import "./contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    e.target.reset();
  };

  return (
    <div className="contact">
      <h1>Feel free to contact!</h1>
      <div>
        <div className="img">
          <img src="/contact.avif" alt="contactus" />
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
