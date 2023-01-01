import React from 'react'
import "./About.css";
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
import meAbout2 from '../../assets/meAbout2.jpg'

const About = () => {
  return (
    <section id='about'>
    <h5>
      Get To Know
    </h5>
    <h2>
      About Me
    </h2>
    <div class="container about__container">
      <div class="about__me">
      <div class="about__meImg"><img src={meAbout2} alt='img'/></div>
      </div>
      <div class="about__content">
      <div class="about__cards">
        <article className='about__card'>
        <FaAward className='about__icon'/>
        <h5> Experience</h5>
        <small>2+ Years Working</small>
        </article>

        <article className='about__card'>
        <FiUsers className='about__icon'/>
        <h5> Clients</h5>
        <small>Individuals & Organizations</small>
        </article>

        <article className='about__card'>
        <VscFolderLibrary className='about__icon'/>
        <h5> Projects</h5>
        <small>10+ Completed</small>
        </article>
      </div>

      <p>
      I’m a driven full stack web developer keen to learn new technologies as they advance and build inovation.
      I am a team player and I love to help people improve their tech skills.
      If you are looking for the best, I am your guy!
      </p>

      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
    </section>
  )
}

export default About