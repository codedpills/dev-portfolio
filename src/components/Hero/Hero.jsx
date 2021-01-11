import React from "react";
import "./Hero.css";

import me from "../../assets/images/me.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="row">
              <div className="col-md-3">
                <img src={me} alt="Zak" className="img-fluid rounded-circle" />
              </div>
              <div className="col">
                <h3 className="text-uppercase">
                  Hello, I'm mohammed Zakari, a fullstack developer.
                </h3>
                <br />
                <p>
                  I specialize in custom application development. If you're a
                  business looking to have an online presence or looking to
                  hire, hit me up.
                </p>
                <p>
                  <a
                    href="#contact"
                    className="btn btn-warning btn-lg rounded-pill"
                  >
                    Contact me
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
