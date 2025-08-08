import React from "react";
import "./footer.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-text">© 2025 ByAdeen. All rights reserved.</div>
      <div className="footer-icons">
        <span>
          <FaInstagramSquare size={20} color="#E1306C" />
        </span>
        <span>
          <FaFacebook size={20} color="#1877F2" />
        </span>
        <span>
          <FaSquareTwitter size={20} color="#1DA1F2" />
        </span>
        <span>
          <FaLinkedin size={20} color="#0A66C2" />
        </span>
      </div>
    </div>
  );
};

export default Footer;
