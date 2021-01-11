import React from "react";
import "./Portfolio.css";

import photosnap from "../../assets/images/projects/photosnap.png";
import pig_game from "../../assets/images/projects/pig-game.png";
import todo from "../../assets/images/projects/todo.png";
import casibus from "../../assets/images/projects/casibus.png";
import flydoctor from "../../assets/images/projects/flydoctor.png";

const projects = [
  {
    title: "PhotoSnap",
    description: `PhotoSnap is a platform for photographers and visual
                  storytellers. We make it easy to share photos, tell stories
                  and connect with others.`,
    image: photosnap,
    link: "https://condescending-payne-d65bab.netlify.app/",
  },
  {
    title: "Pig Game",
    description: `Battle it out with another player to see who can roll the dice of luck.`,
    image: pig_game,
    link: " https://silly-fermat-9bb3c7.netlify.app/",
  },
  {
    title: "Multi-theme Todo",
    description: `Plan your whole day activities using this multi-theme todo app.`,
    image: todo,
    link: "https://tender-booth-d9ba25.netlify.app/",
  },
  {
    title: "Casibus",
    image: casibus,
    description: `Discover and share critical information with other health professionals in real time.`,
    link: "https://epic-bhabha-093c92.netlify.app/",
  },
  {
    title: "FlyDoctor",
    image: flydoctor,
    description: `Doctors - Fight COVID-19 with FlyDoctor. Consult with patients from the comfort of your bed.`,
    link: "https://eloquent-goldberg-087eb4.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-content">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h4 className="text-uppercase text-center">Portfolio</h4>
            <br />
            {projects.map((item, index) => (
              <div className="row portfolio-item" key={index}>
                <div className="col">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                  />
                </div>
                <div className="col">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>
                    <a
                      href={item.link}
                      className="btn btn-warning rounded-pill"
                      target="_blank"
                    >
                      Visit site
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
