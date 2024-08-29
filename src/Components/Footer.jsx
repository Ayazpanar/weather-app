import React from 'react';
import './Footer.css'; // Assuming you saved the CSS as Footer.css

const Footer = () => (
  <footer className="footer">
    <p>
      Weather data provided by{" "}
      <a
        href="https://weatherapi.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        WeatherAPI.com
      </a>
    </p>
    <p>App created by [ Ayaz Panar ]</p>
    <p>Email : [ <span>ayazpanar0786@gmail.com</span> ]</p>
    <div className="social-media-icons">
      <a
        href="https://www.facebook.com/ayazpanar"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <i className="fab fa-facebook"></i>
      </a>
      <a
        href="https://www.github.com/ayazpanar"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://www.instagram.com/ayazpanar"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href="www.linkedin.com/in/ayazpanar"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
  </footer>
);

export default Footer;
