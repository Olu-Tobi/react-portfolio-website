import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import meAbout2 from "../../assets/meAbout2.jpg";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__meImg">
            <img src={meAbout2} alt="img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5> Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers classNameName="about__icon" />
              <h5> Clients</h5>
              <small>Individuals & Organizations</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5> Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            I’m a driven full stack web developer keen to learn new technologies
            as they advance and build innovation. Experienced with the drive to
            learn, grow and build. With a focus on building scalable and dynamic
            web applications using the MERN stack. With 2+ years of experience
            in the industry, I have a proven track record of delivering
            high-quality solutions for clients in various industries. I am
            proficient in the latest web technologies including MongoDB,
            ExpressJS, ReactJS, and NodeJS, and I have a strong understanding of
            both front-end and back-end development. My expertise in
            problem-solving and critical thinking, combined with my attention to
            detail, has allowed me to develop innovative solutions that meet the
            unique needs of each project. Let's connect and discuss how I can
            bring my expertise to your next development project. I am a team
            player and I love to help people improve their tech skills. If you
            are looking for the best, I am your guy!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
