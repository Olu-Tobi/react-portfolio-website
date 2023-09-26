import React from "react";
import "./Portfolio.css";
import { Data } from "./Data";

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div class="container portfolio__container">
        {Data.map((item) => {
          return (
            <article key={item.id} class="portfolio__item">
              <div class="portfolio__item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h3>{item.title}</h3>
              <div class="portfolio__item-cta">
                <a href={item.github} target="_blank">
                  <button
                    className="btn btn-github"
                    disabled={item.github === item.demo ? true : false}
                  >
                    Github
                  </button>
                </a>
                <a href={item.demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
