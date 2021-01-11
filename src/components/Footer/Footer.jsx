import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <p>&copy; 2020 Zak.dev</p>
          </div>
          <div className="col">
            <ul className="footer-links">
              <li>
                <a href="">
                  <span className="bi-linkedin"></span> LinkedIn
                </a>
              </li>
              <li>
                <a href="">
                  <span className="bi-twitter"></span> Twitter
                </a>
              </li>
              <li>
                <a href="">
                  <span className="bi-github"></span> Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
