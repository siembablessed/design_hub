import React from "react";
import "./footer.css";
import myLogo from "./images/logo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Lift Media</h3>
            <ul>
              <li><a href="#!">Our Story</a></li>
              <li><a href="#!">Careers</a></li>
              <li><a href="#!">Press</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Products</h3>
            <ul>
              <li><a href="#!">Product 1</a></li>
              <li><a href="#!">Product 2</a></li>
              <li><a href="#!">Product 3</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Learning</h3>
            <ul>
              <li><a href="#!">Blog</a></li>
              <li><a href="#!">Webinars</a></li>
              <li><a href="#!">Courses</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="#!">Documentation</a></li>
              <li><a href="#!">API Reference</a></li>
              <li><a href="#!">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-logo">
          <img src={myLogo} alt="Design Hub Logo" className="footerLogo"/>
        </div>

        <div className="footer-copyright">
          <p>© 2024 Design Hub. All rights reserved.</p>
        </div>

        <div className="footer-social">
          <a href="#!"><i className="fab fa-facebook-f"></i></a>
          <a href="#!"><i className="fab fa-twitter"></i></a>
          <a href="#!"><i className="fab fa-linkedin-in"></i></a>
          <a href="#!"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
