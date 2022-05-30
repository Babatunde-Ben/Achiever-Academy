import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <section className="footer-section">
      <div>
        <h1 className="footer-logo">Achiever's Academy</h1>
      </div>
      <div>
        <h3 className="footer-title">stay connected</h3>
        <ul>
          <li className="footer-links">Instagram</li>
          <li className="footer-links">Facebook</li>
          <li className="footer-links">LinkedIn</li>
          <li className="footer-links">Twitter</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
