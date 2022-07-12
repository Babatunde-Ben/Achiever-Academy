import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

// style sheets
import "../css/Footer.css";

const Footer = () => {
  return (
    <section className="footer-section">
      <div>
        {" "}
        <Link to="/">
          <h1 className="footer-logo">Achiever's Academy</h1>
        </Link>
      </div>
      <div>
        <h3 className="footer-title">Connect with me </h3>
        <ul>
          {" "}
          <li className="footer-links">
            <a
              href="https://linkedin.com/in/babatundeadeniyi"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="footer-links">
            <a
              href="mailto:babatundeben110@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineMail />
            </a>
          </li>
          <li className="footer-links">
            <a
              href="https://github.com/Babatunde-Ben/"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </li>
          <li className="footer-links">
            <a href="/">
              <FaTwitter />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
